'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "33144ba5fe77e8ed9294a7cd3f16c238",
"assets/AssetManifest.bin.json": "334cf5eb940e6f7c2f64224d3164c680",
"assets/AssetManifest.json": "ae7e5a41f371d99bc67ad80e5125aa89",
"assets/assets/en.json": "c5ad2ab45b7cf7b228ac6e0cc9f90595",
"assets/assets/hi.json": "8641756fd8c70a742f8ae8a2f35875d9",
"assets/assets/images/acc.jpeg": "144da27563a63674609da0f17a7b2284",
"assets/assets/images/ASIDE.gif": "ace30db8797a876fa29f3cdf5deac29c",
"assets/assets/images/awadhlogo.png": "6d6b64421d1b4a04c1d5c30a14e66161",
"assets/assets/images/awadh_banner.jpeg": "3f415f6af78bac905ae82a84f13b600d",
"assets/assets/images/awadh_fam.jpeg": "01837cbf9851dd808c98e223897de70f",
"assets/assets/images/awadh_logo.jpeg": "b7f6b0ac4dbc70106a236c57cccd04c5",
"assets/assets/images/awadh_logo.png": "67ea7f38306dfcf844f3075e10578a43",
"assets/assets/images/awadh_logo2.jpeg": "8c36cb4a40dc386dd0fd91291e22edc7",
"assets/assets/images/awadh_logo_only.jpeg": "e0398ebc6696db87de1cd3cf06e278dc",
"assets/assets/images/background.jpeg": "bd6c32e97b2cbcd553ec611b45df8b05",
"assets/assets/images/cow.png": "224a6b5ac89bf20c85afedafd4fb5cdf",
"assets/assets/images/cow1.png": "07442abc226208245420c61345178613",
"assets/assets/images/cow_banner1.jpeg": "57803bd7699b9c2fa5570ca5c0c47ac5",
"assets/assets/images/gateway_img.png": "a386ecc8e2800cd30a514777fb88d97d",
"assets/assets/images/gps.jpeg": "b7defc003367d18be72b85143161f72d",
"assets/assets/images/iitropar_logo.png": "5a6eb829762e36a3f3daddc2e0255ad6",
"assets/assets/images/img1.jpeg": "4f23bc60249afa8b3076f2d15c6d279c",
"assets/assets/images/imgr1.png": "c180461063bf1ee165c15cdde7dd22ca",
"assets/assets/images/information-systems.jpeg": "b3bae996a0cf5c2d839821cadcaf1ca1",
"assets/assets/images/iot-systems.jpeg": "626eea450e99cbcb9ac76ea6e0cc4361",
"assets/assets/images/login.png": "b56ef485cbc7f4f4f5269dd2abff6124",
"assets/assets/images/logo1.jpeg": "dbf3b369aae67ee9d76dd8e77dcbcf72",
"assets/assets/images/logo2.jpeg": "dc596b4f8728af0929d7708b0d720e56",
"assets/assets/images/mission.jpeg": "dd3abcff7d1bc1f2b9e85527c0382239",
"assets/assets/images/mooofarmlogo.png": "7ac4a67caf59d13ad901313d78d86e7d",
"assets/assets/images/mooofarm_banner-removebg-preview.png": "1adaca256b7a58993b4b24d06931cc96",
"assets/assets/images/mooofarm_banner.jpeg": "8d328885cfd6bc694152e5d71473c727",
"assets/assets/images/nuclear-applications.jpeg": "d1069d66d12674267b8b351a32fafb5f",
"assets/assets/images/science_tech_logo.png": "296486d162cc230c3c84832635fc11b0",
"assets/assets/images/Screenshot%2525202023-07-17%252520at%2525203.58.22%252520PM.png": "3e1f0f88b6a33e9cc7828ebd868c5ef5",
"assets/assets/images/Screenshot%252525202023-07-17%25252520at%252525203.58.22%25252520PM.png": "3e1f0f88b6a33e9cc7828ebd868c5ef5",
"assets/assets/images/sct_logo.jpeg": "057c783fe9caf58410247563e7ef82c0",
"assets/assets/images/stubble-management-system.jpeg": "f0947c02f03a9d3683373f4487002ad4",
"assets/assets/images/tarantarancow.jpeg": "641d237ae8c286c08baeb31b0dc21591",
"assets/assets/images/tarantarancow1.jpeg": "66d5cf06f4a8d8c41ddd674995209e4e",
"assets/assets/images/three_dots.png": "40861100cf303811daa7e58e9edb924a",
"assets/assets/images/water-treatment.jpeg": "a1674966e0db77f8bd1e313b46a9b97b",
"assets/assets/pa.json": "561f2a7d995a60a820b6b67e8b4901b4",
"assets/assets/terms_and_condition.html": "07790d1f14d251ebe35f9dff5f744f31",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "5e5317ec0b9be408fca384464b55dd42",
"assets/NOTICES": "5522db3941fbb4a097efa1b012039287",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6d6b64421d1b4a04c1d5c30a14e66161",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9cbdd44fd2d10861ad2b1b790ec78eb2",
"icons/Icon-192.png": "7ac4a67caf59d13ad901313d78d86e7d",
"icons/Icon-512.png": "7ac4a67caf59d13ad901313d78d86e7d",
"icons/Icon-maskable-192.png": "7ac4a67caf59d13ad901313d78d86e7d",
"icons/Icon-maskable-512.png": "7ac4a67caf59d13ad901313d78d86e7d",
"index.html": "202c603d68a861ab5e2c842502714324",
"/": "202c603d68a861ab5e2c842502714324",
"main.dart.js": "033e8e6676d01c0cdd9c3bc945adb699",
"manifest.json": "9ff5af7aeb30da31f06fd643ca324344",
"version.json": "80b8084792063c2ae8c4220a3dd782dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
