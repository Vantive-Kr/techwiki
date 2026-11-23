/* Techwiki 업데이트 알림 (헤더 종 아이콘 + 알림 스택)  — 2026-11-17
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  📢 관리자: 업데이트 공지는 아래 TW_UPDATES 목록만 수정하세요 (최신 글이 맨 위)
 *
 *   id       : 겹치지 않는 고유 값 (바꾸면 모든 직원에게 다시 '새 알림'으로 표시됨)
 *   date     : 'YYYY-MM-DD'
 *   kind     : 'new'(새 메뉴·기능) | 'improve'(개선) | 'notice'(안내·보안) | 'fix'(수정)
 *   title    : 제목 한 줄
 *   body     : 내용 1~2줄 (길면 두 줄에서 잘림)
 *   menu     : (선택) 사이드바 메뉴 이름 그대로 — 카드에 '바로가기' 버튼이 생김
 *   audience : (선택) 'staff' = 직원용 Techwiki에만, 생략 = 직원용·ASP 모두
 *
 *  직원이 X를 누르거나 옆으로 밀어 지운 알림은 그 브라우저에만 숨겨집니다.
 *  종 아이콘의 숫자 = 아직 열어 보지 않은 알림 수.
 *  GitHub에 올린 뒤 오프라인 캐시 때문에 한 번 더 새로고침해야 보일 수 있습니다.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
var TW_UPDATES = [
  {
    id: 'u-2026-11-23-backlog-xlsx',
    date: '2026-11-23',
    kind: 'new',
    title: 'Billing Backlog: 엑셀 저장',
    body: '검색창 옆 \'엑셀 저장\'으로 지금 보는 조건 그대로 내려받습니다. 상태 칸은 Red·Green 색으로, 부품은 파트넘버·부품명이 따로 나옵니다.',
    menu: 'Billing Backlog Check',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-23-price-xlsx',
    date: '2026-11-23',
    kind: 'new',
    title: 'Price List: 엑셀 저장',
    body: 'Search 탭은 지금 목록, By Code 탭은 전체(기기별 시트), Favorites 탭은 견적 내역을 엑셀로 저장할 수 있습니다.',
    menu: '2026년 Spare Parts Price List',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-23-ibv-xlsx',
    date: '2026-11-23',
    kind: 'new',
    title: 'Install Base Viewer: 엑셀 저장',
    body: 'PDF 저장 옆 \'엑셀 저장\'으로 지금 검색·필터 결과를 장비 목록과 거래처 요약 시트로 내려받습니다.',
    menu: 'Install Base Viewer',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-18-dynmenu',
    date: '2026-11-18',
    kind: 'improve',
    title: '접힌 사이드바에서 바로 메뉴 열기',
    body: '사이드바를 접은 상태에서 아이콘을 누르면 옆에 그 메뉴의 페이지 목록이 펼쳐집니다. 페이지를 고르면 바로 열립니다.',
  },
  {
    id: 'u-2026-11-18-backlog-trend',
    date: '2026-11-18',
    kind: 'new',
    title: 'Billing Backlog: 미청구 금액 추이·카드 펼치기',
    body: '요약 카드 아래에서 미청구 금액이 어떻게 바뀌었는지(30·60·120일·12개월) 볼 수 있습니다. 직원 카드를 누르면 그 직원 건만 펼쳐집니다.',
    menu: 'Billing Backlog Check',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-17-fse-buttons',
    date: '2026-11-17',
    kind: 'improve',
    title: 'FSE To-Do: PDF·메일 버튼 진행 표시',
    body: '현장 체크리스트에서 PDF 저장·메일 보내기를 누르면 만드는 동안 진행 표시가 돌고, 끝나면 완료 표시가 나옵니다.',
    menu: 'FSE To-Do · 유상수리·부품판매 처리',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-17-ibv-year',
    date: '2026-11-17',
    kind: 'new',
    title: 'Install Base Viewer: 설치 연도 필터',
    body: '설치 연도 슬라이더로 기간을 정하면 그 기간에 처음 설치된 장비만 보입니다. 노후 장비 확인에 활용하세요.',
    menu: 'Install Base Viewer',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-17-price-range',
    date: '2026-11-17',
    kind: 'new',
    title: 'Price List: 금액 범위 필터',
    body: '금액 슬라이더로 원하는 가격대(부가세 별도)를 정하면 그 범위의 부품만 보입니다. Device Group·검색과 함께 쓸 수 있습니다.',
    menu: '2026년 Spare Parts Price List',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-17-sidebar',
    date: '2026-11-17',
    kind: 'improve',
    title: '사이드바 새 디자인',
    body: 'Navigation 옆 버튼으로 접으면 아이콘만 남습니다. 아이콘을 누르면 그 메뉴가 바로 열립니다.',
  },
  {
    id: 'u-2026-11-17-bbox',
    date: '2026-11-17',
    kind: 'improve',
    title: 'BBOX Analysis Helper 파일 올리기 개선',
    body: '.dat 파일을 끌어다 놓으면 분석 진행률이 원형으로 표시되고, 끝나면 바로 결과가 열립니다.',
    menu: 'Mediartis Tech & Analysis Helper (Web Edition)',
  },
  {
    id: 'u-2026-11-17-fsetodo',
    date: '2026-11-17',
    kind: 'new',
    title: 'FSE To-Do: 유상 서비스 문서 반영',
    body: '고객 확인서 Rev.D·할인 승인 기준(20%·30%)·완료 내역 전달이 체크리스트 7항목에 추가되었습니다.',
    menu: 'FSE To-Do · 유상수리·부품판매 처리',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-15-backlog',
    date: '2026-11-15',
    kind: 'improve',
    title: 'Billing Backlog Check 화면 정리',
    body: '숫자·금액을 더 읽기 쉬운 글꼴로 바꾸고, 휴대폰에서 카드가 넘치지 않게 고쳤습니다.',
    menu: 'Billing Backlog Check',
    audience: 'staff',
  },
  {
    id: 'u-2026-11-14-guard',
    date: '2026-11-14',
    kind: 'notice',
    title: '하위 페이지 접근 보호',
    body: '로그인하지 않고 페이지 주소로 직접 열면 로그인 화면으로 이동합니다. 링크 공유 시 참고하세요.',
  },
];

(function () {
  var me = document.currentScript;
  var AUDIENCE = (me && me.getAttribute('data-audience')) || 'staff';
  var KEY_DISMISSED = 'tw_updates_dismissed_v1';
  var KEY_SEEN = 'tw_updates_seen_v1';

  // ── Kokonut UI Notification Stack 값 그대로 ───────────────────────────────
  var PEEK = 10, VISIBLE_BEHIND = 2, GAP = 8, FALLBACK_HEIGHT = 76;
  var DISMISS_DISTANCE = 100, DISMISS_VELOCITY = 0.11, AXIS_LOCK = 6;
  var SPRING_STIFFNESS = 520, SPRING_DAMPING = 2 * Math.sqrt(SPRING_STIFFNESS);
  var FLIGHT_MIN_SPEED = 1400, FLIGHT_ACCEL = 4200, VELOCITY_WINDOW_MS = 80, EXIT_MS = 200;
  var EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
  var reduce = function () { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; };
  var opacityFor = function (x) { return Math.max(1 - Math.abs(x) / 240, 0.3); };

  function load(k) { try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // 직원용은 전부, ASP는 audience 없는 글만
  var all = TW_UPDATES.filter(function (u) { return AUDIENCE === 'staff' || !u.audience; });

  // ── 스타일 ───────────────────────────────────────────────────────────────
  var css = [
    '.twu-bell{position:relative;flex-shrink:0;width:36px;height:36px;margin-left:10px;border-radius:50%;border:1px solid rgba(255,250,235,.16);background:rgba(255,250,235,.09);color:rgba(255,250,235,.9);display:grid;place-items:center;cursor:pointer;padding:0;transition:background .15s,border-color .15s}',
    '.twu-bell:hover{background:rgba(255,250,235,.18);border-color:rgba(255,250,235,.3)}',
    '.twu-bell[aria-expanded="true"]{background:rgba(255,250,235,.22)}',
    '.twu-bell:focus-visible{outline:2px solid #FFFAEB;outline-offset:2px}',
    '.twu-bell svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}',
    '.twu-badge{position:absolute;top:-4px;right:-5px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:#FFFAEB;color:#72256B;font:700 11px/18px -apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;text-align:center;box-shadow:0 0 0 2px #7D2977;font-variant-numeric:tabular-nums;transform-origin:center;transition:transform .3s ' + EASE_OUT + ',opacity .2s}',
    '.twu-badge.off{transform:scale(0);opacity:0}',
    '.twu-panel{position:fixed;z-index:400;top:calc(var(--header-h,78px) - 6px);right:16px;width:min(372px,calc(100vw - 24px));padding:14px 14px 16px;border-radius:16px;background:#FFFAEB;border:1px solid rgba(114,37,107,.14);box-shadow:0 18px 48px rgba(43,10,40,.22),0 2px 8px rgba(43,10,40,.08);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Apple SD Gothic Neo",sans-serif;color:#1B1219;transform-origin:calc(100% - 22px) -6px;transition:transform .3s ' + EASE_OUT + ',opacity .2s ' + EASE_OUT + ';max-height:calc(100dvh - var(--header-h,78px) - 16px);overflow:auto;overscroll-behavior:contain}',
    '.twu-panel[hidden]{display:block!important;visibility:hidden;opacity:0;transform:translateY(-6px) scale(.96);pointer-events:none}',
    '.twu-head{display:flex;align-items:center;justify-content:space-between;height:28px;padding:0 4px;margin-bottom:12px}',
    '.twu-head p{margin:0;font-size:14px;font-weight:600}',
    '.twu-head p span{margin-left:8px;color:#9B879A;font-variant-numeric:tabular-nums}',
    '.twu-more{border:0;background:none;border-radius:8px;padding:4px 8px;font:inherit;font-size:13px;color:#6B5468;cursor:pointer;transition:background .15s,color .15s}',
    '.twu-more:hover{background:rgba(114,37,107,.08);color:#72256B}',
    '.twu-more:focus-visible,.twu-card:focus-visible,.twu-x:focus-visible,.twu-go:focus-visible{outline:none;box-shadow:0 0 0 2px rgba(114,37,107,.45)}',
    '.twu-list{position:relative;margin:0;padding:0;list-style:none;outline:none;transition:height .3s ' + EASE_OUT + '}',
    '.twu-li{position:absolute;left:0;right:0;top:0;transform-origin:top center;transition:transform .3s ' + EASE_OUT + ',opacity .3s ' + EASE_OUT + '}',
    '.twu-swipe{touch-action:pan-y}',
    '.twu-card{position:relative;display:flex;gap:12px;padding:12px 13px;border-radius:14px;background:#fff;border:1px solid rgba(114,37,107,.12);box-shadow:0 1px 3px rgba(43,10,40,.06);user-select:none;-webkit-user-select:none;outline:none}',
    '.twu-card.tap{cursor:pointer}',
    '.twu-in{display:flex;gap:12px;flex:1;min-width:0;transition:opacity .2s}',
    '.twu-in.muted{opacity:0}',
    '.twu-ic{flex:none;width:32px;height:32px;border-radius:10px;display:grid;place-items:center;color:#fff}',
    '.twu-ic svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '.twu-txt{flex:1;min-width:0}',
    '.twu-row{display:flex;align-items:baseline;justify-content:space-between;gap:8px}',
    '.twu-t{margin:0;font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.twu-d{flex:none;font-size:12px;color:#9B879A;font-variant-numeric:tabular-nums}',
    '.twu-b{margin:2px 0 0;font-size:13px;line-height:1.45;color:#6B5468;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:keep-all}',
    '.twu-go{margin-top:6px;border:0;background:rgba(114,37,107,.08);color:#72256B;border-radius:8px;padding:3px 9px;font:inherit;font-size:12px;font-weight:600;cursor:pointer}',
    '.twu-go:hover{background:rgba(114,37,107,.15)}',
    '.twu-x{position:absolute;top:-8px;left:-8px;width:24px;height:24px;border-radius:50%;border:1px solid rgba(114,37,107,.18);background:#fff;color:#6B5468;display:grid;place-items:center;padding:0;cursor:pointer;opacity:0;transition:opacity .15s}',
    '.twu-x svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}',
    '.twu-card:hover .twu-x,.twu-x:focus-visible{opacity:1}',
    '.twu-x:hover{color:#1B1219}',
    '.twu-x.hide{display:none}',
    '@media (hover:none){.twu-x{opacity:1}}',
    '.twu-empty{padding:22px 0 6px;text-align:center;font-size:13px;color:#9B879A}',
    '.twu-empty button{display:block;margin:8px auto 0;border:0;background:none;color:#72256B;font:inherit;font-size:12.5px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}',
    '@media (max-width:700px){.twu-bell{width:32px;height:32px;margin-left:8px}.twu-panel{right:12px}}',
    '@media (prefers-reduced-motion:reduce){.twu-list,.twu-li,.twu-panel,.twu-badge{transition:opacity .2s!important}}',
  ].join('\n');
  var st = document.createElement('style');
  st.id = 'tw-updates-style';
  st.textContent = css;
  document.head.appendChild(st);

  var ICON = {
    new:     { bg: '#105742', svg: '<path d="M12 5v14M5 12h14"/>' },
    improve: { bg: '#72256B', svg: '<path d="M12 3l2.4 5.6L20 9.3l-4.3 3.9 1.3 5.8L12 16l-5 3 1.3-5.8L4 9.3l5.6-.7z"/>' },
    notice:  { bg: '#6CA07A', svg: '<path d="M12 3l7 3v5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V6z"/>' },
    fix:     { bg: '#B07D2E', svg: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>' },
  };
  var KIND_LABEL = { new: '새 기능', improve: '개선', notice: '안내', fix: '수정' };
  var fmtDate = function (d) { var p = d.split('-'); return +p[1] + '/' + +p[2]; };

  function init() {
    var header = document.querySelector('header');
    if (!header) return;

    // ── 헤더 종 버튼 ──────────────────────────────────────────────────────
    var bell = document.createElement('button');
    bell.type = 'button';
    bell.className = 'twu-bell';
    bell.setAttribute('aria-haspopup', 'dialog');
    bell.setAttribute('aria-expanded', 'false');
    bell.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8.5a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 14.5 6 8.5"/><path d="M10.2 19.5a2 2 0 0 0 3.6 0"/></svg><span class="twu-badge off" aria-hidden="true">0</span>';
    header.appendChild(bell);
    var badge = bell.querySelector('.twu-badge');

    // ── 패널 ──────────────────────────────────────────────────────────────
    var panel = document.createElement('section');
    panel.className = 'twu-panel';
    panel.hidden = true;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Techwiki 업데이트 알림');
    panel.innerHTML = '<div class="twu-head"><p>업데이트 알림<span class="twu-n">0</span></p><button type="button" class="twu-more" aria-expanded="false">모두 보기</button></div><ol class="twu-list" aria-label="업데이트 알림" tabindex="-1"></ol><div class="twu-empty" hidden>새 업데이트를 모두 확인했습니다.<button type="button">지운 알림 다시 보기</button></div>';
    document.body.appendChild(panel);
    var list = panel.querySelector('.twu-list'), nEl = panel.querySelector('.twu-n'), more = panel.querySelector('.twu-more'), empty = panel.querySelector('.twu-empty');

    var dismissedIds = load(KEY_DISMISSED);
    var items = [];          // {u, li, swipe, card, inner, x, h}
    var hovered = false, focused = false, pinned = false;
    var leaving = {};
    var swipeX = {}, frames = {}, gone = {};
    var dragS = null, suppressClick = false;

    function updateBadge() {
      var seen = load(KEY_SEEN);
      var n = all.filter(function (u) { return dismissedIds.indexOf(u.id) < 0 && seen.indexOf(u.id) < 0; }).length;
      badge.textContent = n > 9 ? '9+' : String(n);
      badge.classList.toggle('off', n === 0);
      bell.setAttribute('aria-label', n ? '업데이트 알림, 새 알림 ' + n + '개' : '업데이트 알림');
      bell.title = n ? '새 업데이트 ' + n + '개' : '업데이트 알림';
    }

    function build() {
      list.innerHTML = '';
      items = []; leaving = {}; swipeX = {}; gone = {};
      all.filter(function (u) { return dismissedIds.indexOf(u.id) < 0; }).forEach(function (u) {
        var ic = ICON[u.kind] || ICON.improve;
        var li = document.createElement('li');
        li.className = 'twu-li';
        li.innerHTML = '<div class="twu-swipe"><article class="twu-card" tabindex="0" aria-label="' + esc((KIND_LABEL[u.kind] || '') + ': ' + u.title + '. ' + u.body) + '">' +
          '<div class="twu-in"><span class="twu-ic" style="background:' + ic.bg + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + ic.svg + '</svg></span>' +
          '<div class="twu-txt"><div class="twu-row"><p class="twu-t">' + esc(u.title) + '</p><span class="twu-d">' + fmtDate(u.date) + '</span></div>' +
          '<p class="twu-b">' + esc(u.body) + '</p>' + (u.menu ? '<button type="button" class="twu-go">바로가기 ›</button>' : '') + '</div></div>' +
          '<button type="button" class="twu-x" aria-label="' + esc(u.title) + ' 알림 지우기"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button></article></div>';
        list.appendChild(li);
        var it = { u: u, li: li, swipe: li.firstChild, card: li.querySelector('.twu-card'), inner: li.querySelector('.twu-in'), xBtn: li.querySelector('.twu-x'), h: 0 };
        wire(it);
        items.push(it);
      });
      measure();
      layout();
    }

    function measure() { items.forEach(function (it) { it.h = it.li.offsetHeight || FALLBACK_HEIGHT; }); }
    var ro = window.ResizeObserver ? new ResizeObserver(function () { measure(); layout(); }) : null;

    function laidOut() { return items.filter(function (it) { return !leaving[it.u.id]; }); }
    function isExpanded() { return (hovered || focused || pinned) && laidOut().length > 1; }

    function layout() {
      var lo = laidOut(), exp = isExpanded();
      var frontH = lo[0] ? lo[0].h : 0;
      var stackH = exp ? lo.reduce(function (s, it) { return s + it.h; }, 0) + Math.max(lo.length - 1, 0) * GAP
                       : frontH + Math.min(lo.length - 1, VISIBLE_BEHIND) * PEEK;
      list.style.height = stackH + 'px';
      var offsets = [], run = 0;
      lo.forEach(function (it) { offsets.push(run); run += it.h + GAP; });
      items.forEach(function (it) {
        var idx = lo.indexOf(it), isLeaving = idx === -1, depth = Math.max(idx, 0);
        var hidden = !(exp || depth <= VISIBLE_BEHIND);
        var scale = exp || isLeaving ? 1 : 1 - depth * 0.05;
        var restY = exp ? offsets[depth] : frontH + depth * PEEK - it.h * scale;
        var y = isLeaving ? (it.lastY || 0) : restY;
        if (!isLeaving) it.lastY = restY;
        it.li.style.transform = 'translateY(' + y + 'px) scale(' + scale + ')';
        it.li.style.opacity = hidden ? 0 : 1;
        it.li.style.zIndex = items.length - depth;
        it.li.style.pointerEvents = hidden ? 'none' : '';
        var muted = !exp && depth > 0;
        it.inner.classList.toggle('muted', muted);
        it.xBtn.classList.toggle('hide', muted);
        it.card.tabIndex = hidden ? -1 : 0;
        it.xBtn.tabIndex = hidden ? -1 : 0;
        var go = it.li.querySelector('.twu-go'); if (go) go.tabIndex = hidden || muted ? -1 : 0;
        it.card.classList.toggle('tap', !exp && depth === 0 && lo.length > 1);
        it.depth = depth;
      });
      nEl.textContent = lo.length;
      more.hidden = lo.length <= 1;
      more.textContent = exp ? '접기' : '모두 보기';
      more.setAttribute('aria-expanded', exp);
      empty.hidden = lo.length > 0;
      empty.querySelector('button').hidden = dismissedIds.length === 0;
    }

    // ── 스와이프·지우기 (Kokonut 동작 그대로) ─────────────────────────────
    function stopFrame(id) { if (frames[id] !== undefined) { cancelAnimationFrame(frames[id]); delete frames[id]; } }
    function paint(it, x) {
      swipeX[it.u.id] = x;
      it.swipe.style.transition = 'none';
      it.swipe.style.transform = x === 0 ? '' : 'translateX(' + x + 'px)';
      it.swipe.style.opacity = x === 0 ? '' : String(opacityFor(x));
    }
    function run(id, step, done) {
      stopFrame(id);
      var last = performance.now();
      var tick = function (now) {
        var dt = Math.min((now - last) / 1000, 1 / 30); last = now;
        if (step(dt)) { delete frames[id]; if (done) done(); return; }
        frames[id] = requestAnimationFrame(tick);
      };
      frames[id] = requestAnimationFrame(tick);
    }
    function snapBack(it, velocity) {
      var x = swipeX[it.u.id] || 0, v = velocity * 1000;
      if (reduce()) { paint(it, 0); return; }
      run(it.u.id, function (dt) {
        var f = -SPRING_STIFFNESS * x - SPRING_DAMPING * v;
        v += f * dt; x += v * dt;
        if (Math.abs(x) < 0.5 && Math.abs(v) < 10) { paint(it, 0); return true; }
        paint(it, x); return false;
      });
    }
    function finishDismiss(it) {
      items = items.filter(function (o) { return o !== it; });
      delete leaving[it.u.id]; delete swipeX[it.u.id];
      if (ro) ro.unobserve(it.li);
      it.li.remove();
      if (dismissedIds.indexOf(it.u.id) < 0) { dismissedIds.push(it.u.id); save(KEY_DISMISSED, dismissedIds); }
      updateBadge();
      layout();
    }
    function dismiss(it, dir, velocity) {
      var id = it.u.id;
      if (gone[id]) return;
      gone[id] = true;
      var lo = laidOut();
      leaving[id] = true;
      if (it.li.contains(document.activeElement)) {
        var at = lo.indexOf(it), next = lo[at + 1] || lo[at - 1];
        (next ? next.card : list).focus();
      }
      layout();
      var node = it.swipe;
      if (reduce()) {
        stopFrame(id);
        node.style.transition = 'opacity ' + EXIT_MS + 'ms ' + EASE_OUT;
        node.style.opacity = '0';
        setTimeout(function () { finishDismiss(it); }, EXIT_MS);
        return;
      }
      var distance = node.offsetWidth * 1.1, x = swipeX[id] || 0;
      var speed = Math.max(Math.abs(velocity || 0) * 1000, FLIGHT_MIN_SPEED);
      run(id, function (dt) {
        speed += FLIGHT_ACCEL * dt;
        x += dir * speed * dt;
        var done = Math.abs(x) >= distance;
        paint(it, done ? dir * distance : x);
        node.style.opacity = String(Math.max(1 - Math.abs(x) / distance, 0));
        return done;
      }, function () { finishDismiss(it); });
    }
    function releaseVelocity(samples) {
      var last = samples[samples.length - 1];
      if (!last) return 0;
      var first = last;
      for (var i = samples.length - 1; i >= 0; i--) { if (last.t - samples[i].t > VELOCITY_WINDOW_MS) break; first = samples[i]; }
      var dt = last.t - first.t;
      return dt > 0 ? (last.x - first.x) / dt : 0;
    }
    function dismissDirection(dx, v) {
      var flick = Math.abs(v) > DISMISS_VELOCITY && Math.sign(v) === Math.sign(dx);
      if (Math.abs(dx) < DISMISS_DISTANCE && !flick) return 0;
      return (dx === 0 ? v : dx) > 0 ? 1 : -1;
    }

    function wire(it) {
      var id = it.u.id, sw = it.swipe;
      if (ro) ro.observe(it.li);
      sw.addEventListener('pointerdown', function (e) {
        if (dragS || leaving[id] || (!isExpanded() && it.depth > 0)) return;
        suppressClick = false;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        if (e.target.closest('button')) return;
        stopFrame(id);
        dragS = { pid: e.pointerId, sx: e.clientX, sy: e.clientY, ox: swipeX[id] || 0, dx: 0, axis: null, samples: [] };
        var release = function (up) {
          if (up.pointerId !== e.pointerId) return;
          window.removeEventListener('pointerup', release); window.removeEventListener('pointercancel', release);
          if (dragS && dragS.pid === e.pointerId) { dragS = null; if (swipeX[id]) snapBack(it, 0); }
        };
        window.addEventListener('pointerup', release); window.addEventListener('pointercancel', release);
      });
      sw.addEventListener('pointermove', function (e) {
        var c = dragS;
        if (!c || c.pid !== e.pointerId) return;
        var dx = e.clientX - c.sx, dy = e.clientY - c.sy;
        if (c.axis === null) {
          if (Math.abs(dx) < AXIS_LOCK && Math.abs(dy) < AXIS_LOCK) return;
          c.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
          if (c.axis === 'x') sw.setPointerCapture(e.pointerId);
        }
        if (c.axis !== 'x') return;
        c.dx = c.ox + dx;
        c.samples.push({ t: e.timeStamp, x: c.dx });
        if (c.samples.length > 12) c.samples.shift();
        paint(it, c.dx);
      });
      var up = function (e) {
        var c = dragS;
        if (!c || c.pid !== e.pointerId) return;
        dragS = null;
        if (c.axis !== 'x') { if (swipeX[id]) snapBack(it, 0); return; }
        suppressClick = true;
        var v = releaseVelocity(c.samples), dir = dismissDirection(c.dx, v);
        if (dir === 0) { snapBack(it, v); return; }
        dismiss(it, dir, Math.sign(v) === dir ? v : 0);
      };
      sw.addEventListener('pointerup', up);
      sw.addEventListener('pointercancel', up);
      sw.addEventListener('lostpointercapture', function (e) { if (e.target === sw) up(e); });

      it.card.addEventListener('click', function () {
        if (suppressClick) { suppressClick = false; return; }
        if (!isExpanded()) { pinned = true; layout(); }
      });
      it.card.addEventListener('keydown', function (e) {
        if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); if (!e.repeat) dismiss(it, 1, 0); }
      });
      it.xBtn.addEventListener('click', function (e) { e.stopPropagation(); dismiss(it, 1, 0); });
      var go = it.li.querySelector('.twu-go');
      if (go) go.addEventListener('click', function (e) {
        e.stopPropagation();
        var target = [].slice.call(document.querySelectorAll('.nav-item')).filter(function (b) { return b.textContent.trim() === it.u.menu; })[0];
        if (target) { close(); target.click(); }
      });
    }

    // 펼침: 마우스를 올리거나, 키보드 포커스, 또는 '모두 보기'
    list.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { hovered = true; layout(); } });
    list.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { hovered = false; layout(); } });
    panel.addEventListener('focusin', function () { if (!focused) { focused = true; layout(); } });
    panel.addEventListener('focusout', function (e) { if (!panel.contains(e.relatedTarget)) { focused = false; layout(); } });
    more.addEventListener('click', function () { pinned = !isExpanded(); hovered = false; layout(); });
    empty.querySelector('button').addEventListener('click', function () { dismissedIds = []; save(KEY_DISMISSED, []); updateBadge(); build(); });

    // ── 열기·닫기 ──────────────────────────────────────────────────────────
    function open() {
      panel.hidden = false;
      bell.setAttribute('aria-expanded', 'true');
      pinned = false; hovered = false; focused = false;
      measure(); layout();
      // 열어 본 알림은 '읽음'
      var seen = load(KEY_SEEN);
      all.forEach(function (u) { if (seen.indexOf(u.id) < 0) seen.push(u.id); });
      save(KEY_SEEN, seen);
      updateBadge();
    }
    function close() {
      panel.hidden = true;
      bell.setAttribute('aria-expanded', 'false');
    }
    bell.addEventListener('click', function (e) { e.stopPropagation(); panel.hidden ? open() : close(); });
    document.addEventListener('pointerdown', function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !bell.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { close(); bell.focus(); }
    });

    build();
    updateBadge();
    window.TWUpdates = { open: open, close: close };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
