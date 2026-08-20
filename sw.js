/* Vantive Techwiki Service Worker
 * 전략: 같은 출처(same-origin) 정적 자산만 stale-while-revalidate.
 * 교차 출처(Firestore firestore.googleapis.com / Firebase·gstatic CDN /
 * Google Fonts / vantive-annual-leave.web.app 등)는 fetch 핸들러가
 * 가로채지 않으므로 절대 캐시되지 않는다.
 * GitHub Pages 프로젝트 페이지(/techwiki/ 하위 scope) 대응: 전부 상대경로.
 */
'use strict';

const CACHE_NAME = 'vantive-techwiki-v2';

/* 설치 시 미리 캐시할 핵심 자산 (모두 상대경로 → scope 기준으로 해석됨) */
const PRECACHE_URLS = [
  './Vantive_Techwiki_index_pw.html',
  './annual_leave_calendar.html',
  './manifest.webmanifest',
  './vantive logo.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  /* GET 이외(Firestore 쓰기 POST 등)는 관여하지 않음 */
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  /* 교차 출처는 관여하지 않음 → Firestore·gstatic CDN·폰트는 항상 네트워크 직행 */
  if (url.origin !== self.location.origin) return;

  /* PDF와 Range 요청은 관여하지 않음.
   * PDF 뷰어(브라우저 내장·iOS 네이티브)는 'Range: bytes=' 부분 요청으로 문서를
   * 나눠 받는다. 여기서 가로채 캐시본(200 전체 응답)을 돌려주면 뷰어가 기대하는
   * 206 Partial Content가 아니어서 렌더링이 깨지고, 206 응답은 cache.put()이
   * 스펙상 거부해 조용한 rejection까지 남긴다. 네트워크로 직행시킨다. */
  if (req.headers.has('range')) return;
  if (/\.pdf$/i.test(url.pathname)) return;

  /* 캐시 키는 쿼리 제거로 정규화 — index 로더가 ?v=타임스탬프, ?r=지역을
   * 붙여도 같은 파일 하나로 캐시된다 (지역 파싱은 문서 내 클라이언트 코드 몫). */
  const cacheKey = url.origin + url.pathname;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(cacheKey).then((cached) => {
        const network = fetch(req)
          .then((resp) => {
            if (resp && resp.ok && (resp.type === 'basic' || resp.type === 'default')) {
              cache.put(cacheKey, resp.clone());
            }
            return resp;
          })
          .catch(() => {
            /* 오프라인: 캐시본, 내비게이션이면 index 폴백 */
            if (cached) return cached;
            if (req.mode === 'navigate') {
              return cache.match(new URL('./Vantive_Techwiki_index_pw.html', self.location.href).href);
            }
            return Response.error();
          });
        /* stale-while-revalidate: 캐시본 즉시 응답 + 백그라운드 갱신 */
        return cached || network;
      })
    )
  );
});
