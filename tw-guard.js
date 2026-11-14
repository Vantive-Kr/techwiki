/* Techwiki 1차 접근 보호 (2026-11-14 후속108)
 * 메인 비밀번호 화면을 거치지 않고 하위 페이지 주소를 직접 연 경우 로그인 화면으로 돌려보낸다.
 *   data-scope="staff"  : 직원용 로그인(Vantive_Techwiki_index_pw.html)만 인정
 *   data-scope="shared" : 직원용 또는 ASP 로그인(Vantive_Techwiki_ASP.html) 인정, 미로그인 시 ASP 로그인으로
 * 브라우저에서 하는 확인이라 소스·GitHub 저장소를 직접 보면 우회 가능 — 완전한 보호는 서버 로그인(Cloudflare Access 등) 필요.
 */
(function () {
  var me = document.currentScript;
  var scope = (me && me.getAttribute('data-scope')) || 'staff';
  var now = Date.now();

  function signedIn(k) {
    try {
      if (sessionStorage.getItem('vantive_' + k + '_auth') === '1' &&
          parseInt(sessionStorage.getItem('vantive_' + k + '_exp') || '0', 10) > now) return true;
    } catch (e) {}
    try {
      if (parseInt(localStorage.getItem('vantive_' + k + '_pass') || '0', 10) > now) return true;
    } catch (e) {}
    return false;
  }

  if (signedIn('tw') || (scope === 'shared' && signedIn('asp'))) return;

  document.documentElement.style.visibility = 'hidden';
  var base = (me && me.src) ? me.src.replace(/[^\/]*$/, '') : '';
  var home = base + (scope === 'shared' ? 'Vantive_Techwiki_ASP.html' : 'Vantive_Techwiki_index_pw.html');
  try {
    if (window.top !== window && window.top.location.origin === location.origin) { window.top.location.replace(home); return; }
  } catch (e) {}
  location.replace(home);
})();
