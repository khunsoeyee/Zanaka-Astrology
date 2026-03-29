const cacheName = 'v1-fortune-app';
const assets = [
  'index.html',
  'manifest.json',
  'icon.png',
  'mm-flag.png',
  'pao-flag.png',
  'sun.jpg',
  'mon.jpg',
  'tue.jpg',
  'wed.jpg',
  'thu.jpg',
  'fri.jpg',
  'sat.jpg'
];

// Service Worker ကို Install လုပ်ပြီး Assets တွေကို Cache ထဲသိမ်းခြင်း
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// အင်တာနက်မရှိချိန်မှာ Cache ထဲကဖိုင်ကို ပြန်ထုတ်ပေးခြင်း
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
