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
  'sat.jpg',
  // images/fortunes/ folder ထဲက ပုံ ၁၄ ပုံ
  'images/fortunes/my_ti.png',
  'images/fortunes/my_htwet.png',
  'images/fortunes/my_pyet.png',
  'images/fortunes/my_kyauk.png',
  'images/fortunes/my_htee.png',
  'images/fortunes/my_nan.png',
  'images/fortunes/my_san.png',
  'images/fortunes/pa_ti.png',
  'images/fortunes/pa_htwet.png',
  'images/fortunes/pa_pyet.png',
  'images/fortunes/pa_kyauk.png',
  'images/fortunes/pa_htee.png',
  'images/fortunes/pa_nan.png',
  'images/fortunes/pa_san.png'
];

// Service Worker ကို Install လုပ်ပြီး Assets တွေကို Cache ထဲသိမ်းခြင်း
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets...');
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
