'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8bd6efdb57068d0c900d1589728164a8",
"assets/AssetManifest.bin.json": "7ddf0281d16ce9bd46432c0b30c2b015",
"assets/AssetManifest.json": "a6aa87b3209e87e92335d12c715ce0ef",
"assets/assets/cipreses/01.png": "4a023e6675d9732b3f876af94bd1aae7",
"assets/assets/cipreses/1(1).jpg": "525f25f81e0d35f4518ea4abd2d5950d",
"assets/assets/cipreses/2(1).jpg": "e779dacfdcb9d258a257b9b9f57a629a",
"assets/assets/cipreses/3.jpg": "95cd821a831617eeadbbde55997ddf9c",
"assets/assets/cipreses/CIP+logo+web.png": "7d3669eaf4ed4ee25d0278dc70b7d89d",
"assets/assets/cipreses/lir+render.jpg": "9ca94aea2bf375d5fec737d2ef1dc1af",
"assets/assets/cipreses/LOBBY-SOTANO.jpg": "106e07e1585d2fc1c20fdb60ebe30827",
"assets/assets/cipreses/R.01-2.jpg": "e16e64edc17babfead41e81f79890a26",
"assets/assets/cipreses/R.04-2.jpg": "9308a16241eb0c7a5d24ba3839a9defa",
"assets/assets/cipreses/R.08-2.jpg": "d68ff06399345dc59d3053f9594f9a4c",
"assets/assets/cipreses/R.MULTIUSOS-JUEGO-ADULTOS.jpg": "74c4bff3b1376d2196d26d4cfb88a45b",
"assets/assets/cipreses/R.MULTIUSOS.jpg": "64535512d42d653d7e2dc766cb7ad005",
"assets/assets/distritoartemisa/0.jpg": "879b1b5e75193404f33d0866aa580761",
"assets/assets/distritoartemisa/1.jpg": "393c82a81c424c8e069c468894f035d1",
"assets/assets/distritoartemisa/1.png": "b2e310273cd3a761cf1e362e4f1595bb",
"assets/assets/distritoartemisa/2(1).jpg": "5da97939ac1e32b4880fe6f7320d4f8f",
"assets/assets/distritoartemisa/2.png": "487d1f3ef693b27673011a9b47681301",
"assets/assets/distritoartemisa/3(1).jpg": "4eb76628420c6c0dae5543f0a59b7764",
"assets/assets/distritoartemisa/3.png": "9bda10824afae327cd8bccb918d7ba35",
"assets/assets/distritoartemisa/APA+001+2+16-2.jpg": "77b0cd8e2bd878307af8e78690905012",
"assets/assets/distritoartemisa/APA+009+1b+16.jpg": "7e9959ce84872611872599a67ff4de62",
"assets/assets/distritoartemisa/astria.png": "36548a3b5b7a9979275506085db9fffa",
"assets/assets/distritoartemisa/ba270a8e39016b960fa214f5544b820279bad279%2520(1).jpg": "c7df76204d6f36f9e0aa3ab9ff762050",
"assets/assets/distritoartemisa/ba270a8e39016b960fa214f5544b820279bad279.jpg": "c7df76204d6f36f9e0aa3ab9ff762050",
"assets/assets/distritoartemisa/da+home.jpg": "56dd7b45781dc02b80a3ee559294d487",
"assets/assets/distritoartemisa/DA+logo+web.png": "7092f8d68d8db8c135be0f23e1223448",
"assets/assets/distritoartemisa/DA+precios+web-05.png": "c03c4eb272a526c3fb0567850bd7d767",
"assets/assets/distritoartemisa/DA+precios+web-06.png": "6aa835bfca7ab425706b2c25bc0057cf",
"assets/assets/distritoartemisa/DA+precios+web-07.png": "8b62c3e5f35b1839a955db9baff4d05e",
"assets/assets/distritoartemisa/iconos+sitio+web.jpg": "ca2aeb4f2dc99b331a61a847904b1e52",
"assets/assets/distritoartemisa/img49.jpg": "119eeba32988f9d294fec02b004d09b7",
"assets/assets/distritoartemisa/img49893.jpg": "54cfc7bf9f58d2bccec725098fb12a44",
"assets/assets/distritoartemisa/OFICINA+2+1+16-2.jpg": "a63cab676b851296613ba7cc778e3567",
"assets/assets/distritoartemisa/P+1+16+3.jpg": "88d77bffd5733c3b981ea6f4d73d170e",
"assets/assets/distritoartemisa/vt(56).jpg": "3898b3fec34c26425360d26929b11a6e",
"assets/assets/distritoartemisa/WhatsApp%2520Image%25202024-05-22%2520at%25209.17.26%2520AM%2520(3).jpeg": "c7412774e500ff54ad1049fccff6e4e6",
"assets/assets/distritoartemisa/WhatsApp%2520Image%25202024-05-22%2520at%25209.17.28%2520AM%2520(1).jpeg": "3da6853111cb1807abb3feff7bf25b5e",
"assets/assets/distritoartemisa/WhatsApp%2520Image%25202024-05-22%2520at%25209.17.28%2520AM%2520(2).jpeg": "29db3557055ba7b67e4dd878af354c12",
"assets/assets/distritoartemisa/WhatsApp%2520Image%25202024-05-22%2520at%25209.17.28%2520AM%2520(3).jpeg": "dd45b4945bc39a4a77a5f49aa20ee429",
"assets/assets/distritoartemisa/WhatsApp%2520Image%25202024-05-22%2520at%25209.17.28%2520AM%2520(7).jpeg": "0824742ba2df779df82b5b108b55b50f",
"assets/assets/liriosmiraflores/1(1).jpg": "525f25f81e0d35f4518ea4abd2d5950d",
"assets/assets/liriosmiraflores/1.jpg": "299a0d34efd690f80b4edf000f7bc4ca",
"assets/assets/liriosmiraflores/2(1).jpg": "e779dacfdcb9d258a257b9b9f57a629a",
"assets/assets/liriosmiraflores/2.jpg": "d69574c4919448da2d33fde317b688d9",
"assets/assets/liriosmiraflores/3.jpg": "95cd821a831617eeadbbde55997ddf9c",
"assets/assets/liriosmiraflores/424614377_864107205747782_3473739377924637059_n.jpg": "7885055679a85599c650995e908daafa",
"assets/assets/liriosmiraflores/440859794_864107159081120_1242674731287216906_n.jpg": "741da0dcb396df24f59fb048198580f3",
"assets/assets/liriosmiraflores/440878781_864106885747814_1527086838857242023_n.jpg": "e31ae46085494435f29fdd8273e01de6",
"assets/assets/liriosmiraflores/441147081_864107249081111_5180715522674169976_n.jpg": "da74d16a8d7322f9d2d434e7d809f748",
"assets/assets/liriosmiraflores/441177170_864106925747810_7912848607298340777_n.jpg": "09753052fd8b7c99205b5324e4c1eb3e",
"assets/assets/liriosmiraflores/441179703_864107009081135_8381189395922647974_n.jpg": "34ea9d10155b1a1b6137c049fc35bf54",
"assets/assets/liriosmiraflores/441181443_864106952414474_1031631349504972108_n.jpg": "054fcfa3d883b55a589eaf2ed3587e39",
"assets/assets/liriosmiraflores/CELAQUE-38.png": "bfe998df2f0f6118669db4f4e9233087",
"assets/assets/liriosmiraflores/celaquelogo.png": "8171b36ea9b39fe343b9664521c8a003",
"assets/assets/liriosmiraflores/CIP+EXTERIOR-01.jpg": "4ade656480f7aa0573acb7f6723360a5",
"assets/assets/liriosmiraflores/CIP+EXTERIOR-04.jpg": "473e277ea4aafe6ac7f773be7bf9460d",
"assets/assets/liriosmiraflores/CIP+EXTERIOR-07.jpg": "0621ddfc673f64bfbef6d5693d74a079",
"assets/assets/liriosmiraflores/CIP+EXTERIOR-08.jpg": "33d5cf53411103541c4e005d97626d3c",
"assets/assets/liriosmiraflores/cover-pages-map-marker-pin-dark-2x.png": "86b2fe5dacba086b04773f6409783e88",
"assets/assets/liriosmiraflores/iconos+sitio+web.jpg": "ca2aeb4f2dc99b331a61a847904b1e52",
"assets/assets/liriosmiraflores/INTERIOR.jpg": "1b822f411a4602f9e24fb92f117ebdf6",
"assets/assets/liriosmiraflores/LIR+logo+web.png": "751a35165cc87eb8a14ea59fde3ca540",
"assets/assets/liriosmiraflores/LIR+PRECIOS.jpg": "2f56b6f9beee55e930c638ed43d6cac9",
"assets/assets/liriosmiraflores/mirafloresrender.jpg": "2da5e57b2587990f2c5c4fd1c9a368bc",
"assets/assets/liriosmiraflores/R.Miraflores.2-2.jpg": "33ac563e93f0f914e03f5f4692f82975",
"assets/assets/liriosmiraflores/transparent.png": "8327a6037ae00a5be9f75e63ee1b9fbe",
"assets/assets/Netliving/netliving.png": "33bb81e88816d25eb54be3fe7c46df05",
"assets/assets/Redes/social.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/torreastria/port1.jpg": "95bcf8907de6614fa7690241c73925f3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "4e85fb3c46ea5619a26fcde2b4767891",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "229fda0c953529987231177a94437397",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0726d23e5e735a0e72131f0611714840",
"/": "0726d23e5e735a0e72131f0611714840",
"main.dart.js": "3643b3e59826617a4dd234f019d1ef3f",
"manifest.json": "777ba6aa349440eac00d815102bef08b",
"version.json": "13436cc0fd84f301a319a8a64ad76919"};
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
