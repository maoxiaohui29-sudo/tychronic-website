/* network-first + offline fallback; cache:'reload' bypasses stale HTTP cache */
const CACHE='tychronic-prod-v29-2611221610';
const ASSETS=["./", "./index.html", "./styles.css?v=29", "./app.js?v=29", "./langs.js?v=29", "./manifest.webmanifest", "./assets/switchgear.png", "./assets/switchgear-lights-a.png", "./assets/switchgear-lights-b.png", "./assets/switchgear-lights-c.png", "./assets/brand.png", "./assets/qr-app.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png", "./app.ico"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(ASSETS.map(u=>c.add(u)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;e.respondWith(fetch(req,{cache:'reload'}).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;}).catch(()=>caches.match(req,{ignoreSearch:true}).then(h=>h||caches.match('./index.html'))))});
