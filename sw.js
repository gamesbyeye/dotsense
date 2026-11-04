// Dot Sense 서비스 워커: 한 번 열면 인터넷 없이도 열림
// 게임 화면은 인터넷이 되면 새 버전, 안 되면 저장본. 글꼴 · 아이콘은 저장본 먼저.
const CACHE = 'dotsense-be85cc5123';
const CORE = ["./", "index.html", "manifest.webmanifest", "favicon.svg", "favicon-32.png", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "oswald-latin-400-normal.woff2", "public-sans-latin-400-normal.woff2", "ibm-plex-sans-kr-latin-400-normal.woff2", "ibm-plex-sans-kr-korean-400-normal.woff2", "oswald-latin-500-normal.woff2", "public-sans-latin-500-normal.woff2", "ibm-plex-sans-kr-latin-500-normal.woff2", "ibm-plex-sans-kr-korean-500-normal.woff2"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('dotsense-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const saved = await cache.match('./');
      const net = fetch(req).then(res => { if (res.ok) cache.put('./', res.clone()); return res; });
      if (!saved) return net;
      // 인터넷이 느리면 3.5초 뒤 저장본으로
      try { return await Promise.race([net, new Promise((_, no) => setTimeout(() => no(new Error('slow')), 3500))]); }
      catch (err) { return saved; }
    })());
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return res;
  })));
});
