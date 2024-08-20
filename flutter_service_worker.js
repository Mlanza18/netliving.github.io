'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b84324f09bae72919ca8f2445a61274d",
"assets/AssetManifest.bin.json": "cce6f92f2892ee01205bf63fd45e7345",
"assets/AssetManifest.json": "cc05e6ada86d6c9d3ee42d7e88c075c7",
"assets/assets/Atlas/2%2520Hab.png": "79353c0b38a61ec27172f147416fcbab",
"assets/assets/Atlas/3%2520hab.png": "e6ccd4107c2744f36baae6729b4745fe",
"assets/assets/Atlas/atl+img+1.jpg": "0382df8b120e29827cb27e0faf29c67c",
"assets/assets/Atlas/ATL+logo+web.png": "232286509287fbfeba483a8787a0ebf5",
"assets/assets/Atlas/ATL+sitioweb.jpg": "6cd0fcf067e116c759f0ae05fc699302",
"assets/assets/Atlas/atl+sitioweb2.jpg": "dec1d1422ca42a2425ea96e69c98b8fd",
"assets/assets/Atlas/Atlas.jpg": "3536cd417ab19049127af86fd24d044c",
"assets/assets/Atlas/CARATULA%2520-%2520REAL%2520DE%2520MINAS.png": "d29c603aa12d48036ddae03ac6b0d1e8",
"assets/assets/Atlas/DORM+009+16+2.jpg": "64978d6704f1f29c396e0648f1e56b83",
"assets/assets/Atlas/Monoambiente.png": "6841ec0aa9bd026ba56a2c4635193d85",
"assets/assets/Atlas/ofi+atl+fondo.jpg": "9c7a14ab381a882f987fc1f4374f33c9",
"assets/assets/Atlas/Oficina%25201.jpg": "393c82a81c424c8e069c468894f035d1",
"assets/assets/Atlas/Oficina%25202.jpg": "5da97939ac1e32b4880fe6f7320d4f8f",
"assets/assets/Atlas/Oficina%25203.jpg": "4eb76628420c6c0dae5543f0a59b7764",
"assets/assets/Atlas/RENDER+02.jpg": "8dbdfd1228f0dc5beced1e0fbed30292",
"assets/assets/Atlas/TORRE%2520ATLAS_DISTRIBUCION%2520POR%2520FACHADA.jpeg": "b1704afa3d2b0016693d69695e600a51",
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
"assets/assets/realdeminas/1.jpg": "4815c3026f153a0abe246c3f53c224b5",
"assets/assets/realdeminas/12.jpg": "898b194b1f2548c4c34dc685cbb7b4e8",
"assets/assets/realdeminas/17.png": "a05a0a181dadd93b2be1da69eba7e4a2",
"assets/assets/realdeminas/18.png": "aaeb98fde26ba89c17888b74a0d8e519",
"assets/assets/realdeminas/19.jpg": "3fe1c7d95653ca7b0dea6fea178e6e69",
"assets/assets/realdeminas/2.jpg": "b23486a97d096f262c1dece6d67fdd73",
"assets/assets/realdeminas/2024_04_FACHADAS_02.jpg": "16214d5ca99a9f3b488b897c72c34041",
"assets/assets/realdeminas/2024_04_FACHADAS_03.jpg": "5c62f4bdd8d4c9b0fe1458fce5793a4b",
"assets/assets/realdeminas/2024_04_RAMBLA_04%2520(1).jpg": "e77a708e114fdc2c6c2c235862c15a71",
"assets/assets/realdeminas/2024_04_RAMBLA_04.jpg": "54da1080ebdca9bc5e2caee61f02c34e",
"assets/assets/realdeminas/2024_04_RAMBLA_06.jpg": "ba7efa9aa16c2602c566dcba9d6a5d12",
"assets/assets/realdeminas/22.jpg": "fdfd3cfdddc3e18ceb4cdaa64a6ee931",
"assets/assets/realdeminas/26.jpg": "9a40449822f9f8cab1c795fbddaa2994",
"assets/assets/realdeminas/27.jpg": "8e9f98c733f2eea3c6bd1986fcffdb7d",
"assets/assets/realdeminas/28.jpg": "556401104cab49e99e7577d2226946d6",
"assets/assets/realdeminas/3.jpg": "19052e7270c39e96082ccee53139870f",
"assets/assets/realdeminas/6.jpg": "3c7b7bb90d9c15c3d1c5beec5ad818a5",
"assets/assets/realdeminas/Cuarto%2520principal%2520norte.jpg": "1168af5de773918fb0aef39a73793d89",
"assets/assets/realdeminas/Cuarto%2520secundario.jpg": "ce305501746f69d3e17f3c81b8ac6b48",
"assets/assets/realdeminas/Gradas%2520Sur.jpg": "1306d9d18da0a11c5e38c592fd82e143",
"assets/assets/realdeminas/img1-2.jpg": "0006d246536d6137a3d21156258579c2",
"assets/assets/realdeminas/img3-2-2.jpg": "24543a32c2c54e391bda0ccb3f1eacae",
"assets/assets/realdeminas/img5-2.jpg": "6740855a783fd7801569649972b66a3d",
"assets/assets/realdeminas/img7.png": "dcd118745c7a410d52d551c2fea756e9",
"assets/assets/realdeminas/Lobby.jpg": "4b2edcde92d1e753ae4992c6fb37dbbf",
"assets/assets/realdeminas/RM+isometrico+2.png": "8b9b0bf751df61e627294b380843abf9",
"assets/assets/realdeminas/RM+isometrico.png": "e3ad2dfe5e7ae48935d1bb3d0b6f8f54",
"assets/assets/realdeminas/RM+logo+web.png": "c3d94501f19e3bf8d7f993dd6dbd3342",
"assets/assets/realdeminas/RM+p%25C3%25A1gina+web.jpg": "9cf392b6bfeb35375ae5c6ea37a40c43",
"assets/assets/realdeminas/RM+planos+web-01.jpg": "9d9b863c1bf9ff0fa01bf5ceffd36541",
"assets/assets/realdeminas/RM+planos+web-02.jpg": "b763bd205adb8ecfdab642e6e2b0417f",
"assets/assets/realdeminas/Sala%25202%2520.jpg": "b7a1bfb4546b152e95031e9107b98952",
"assets/assets/realdeminas/Sala%2520Norte.jpg": "18e4da37bfab38ad0fa9bca73dc3d7ad",
"assets/assets/realdeminas/Sala%2520sur.jpg": "6af50d1122489f4370897dd77f55081b",
"assets/assets/Redes/social.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/Torre%2520Agalta/29963410597091871820119572758263419776808093736031141681118447042771157670677.jpg": "56d11d3518d6b34d553f9a9234fbf28d",
"assets/assets/Torre%2520Agalta/41091625888289918073494759434312664495104719075205107424076645805619439348336.jpg": "71aa27d8757ccfe36a40eb6d6d9fd86e",
"assets/assets/Torre%2520Agalta/agalta.jpg": "7d039422a4957771554505900dd16948",
"assets/assets/Torre%2520Agalta/DJI_0294%2520(1).jfif": "cdd2140a84dad21b8bb69f73b9aa911f",
"assets/assets/Torre%2520Agalta/DJI_0294.jfif": "cdd2140a84dad21b8bb69f73b9aa911f",
"assets/assets/Torre%2520Agalta/FACHADA-agalta-1500px.jpg": "26944c49100362c7063f2b04f05b5020",
"assets/assets/Torre%2520Agalta/image-asset.jpeg": "57dcccd3fc1b6e2f58bd56863284f729",
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
"flutter_bootstrap.js": "7d8ac8d11b2e29d7601d423b2569a456",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0726d23e5e735a0e72131f0611714840",
"/": "0726d23e5e735a0e72131f0611714840",
"main.dart.js": "06f827d4f07b8b5ae201d560a426792a",
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
