'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "454d16aeebb3a98a74e04afa32f3db57",
"version.json": "5a723fc2dbdf9172cb5fcd97559926a8",
"index.html": "3cf13ba511292245b48d4a581652a42b",
"/": "3cf13ba511292245b48d4a581652a42b",
"main.dart.js": "4a00879b876fb06716a2e90a2dd759ec",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "636986d7d78cd29acf2ff2d728d20ddc",
"assets/AssetManifest.json": "79ff6a2faa01dfdae5338ed696a7134a",
"assets/NOTICES": "9a5185de8f311b12e453fb6203232357",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b6b8e9d21e7b42aba56ac83f50a940e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/web3modal_flutter/assets/account_disconnect.svg": "1e962e3b5c49f1066d059ee7607ca0fe",
"assets/packages/web3modal_flutter/assets/token_placeholder.svg": "3a5862d4c9d5079be33d55691e730ae2",
"assets/packages/web3modal_flutter/assets/account_copy.svg": "3dfb381b033f975d32608f523561479a",
"assets/packages/web3modal_flutter/assets/png/logo_wc.png": "e73ddf9aae5dc9f2a6668e45ad4bde69",
"assets/packages/web3modal_flutter/assets/png/2.0x/logo_wc.png": "e73ddf9aae5dc9f2a6668e45ad4bde69",
"assets/packages/web3modal_flutter/assets/png/2.0x/google_play.png": "6d9be20a67d8b99d04bbf688973b6c6e",
"assets/packages/web3modal_flutter/assets/png/2.0x/app_store.png": "9a63bdbc92a38638edeaedc32fe093d8",
"assets/packages/web3modal_flutter/assets/png/3.0x/logo_wc.png": "2a597146116d0d5181e904b0c9264fdc",
"assets/packages/web3modal_flutter/assets/png/3.0x/google_play.png": "6d8da1b598c096f5a81e3d911c8ca4dd",
"assets/packages/web3modal_flutter/assets/png/3.0x/app_store.png": "aed9e5fcb620e705831ccda22a853031",
"assets/packages/web3modal_flutter/assets/png/google_play.png": "cdbe574f3e9b36cf8ee5be25a630ecf0",
"assets/packages/web3modal_flutter/assets/png/app_store.png": "dd9fdf8975a6f9cf988d0871d5411f60",
"assets/packages/web3modal_flutter/assets/icons/search.svg": "bbdea538979fc2e7a8a8538f67b0541a",
"assets/packages/web3modal_flutter/assets/icons/checkmark.svg": "7c4ee5c9050caf592728a3fd650872ba",
"assets/packages/web3modal_flutter/assets/icons/arrow_top_right.svg": "f6ae3a7fcb83aa44bac69608b18cf500",
"assets/packages/web3modal_flutter/assets/icons/dots.svg": "4d9fa6466b92e51c7a53b37a451076eb",
"assets/packages/web3modal_flutter/assets/icons/disconnect.svg": "fe22360a30e0f2dfcc0166af27093bb0",
"assets/packages/web3modal_flutter/assets/icons/copy_14.svg": "09ce7e33c714abc2bea05eef458d19a8",
"assets/packages/web3modal_flutter/assets/icons/mail.svg": "f3f5a34474ce2f5a91b4d46ae754fded",
"assets/packages/web3modal_flutter/assets/icons/wallet.svg": "bac0bd06bc142c95b1b68ed306b1187c",
"assets/packages/web3modal_flutter/assets/icons/chevron_right.svg": "6d73c4dc08c1b29868670f285f90dc47",
"assets/packages/web3modal_flutter/assets/icons/code.svg": "0e2acde8a0260f0b4597c69ba1d2976d",
"assets/packages/web3modal_flutter/assets/icons/chevron_left.svg": "e258aa34911cfae14743343f7fa9f58b",
"assets/packages/web3modal_flutter/assets/icons/warning.svg": "2a11047bfb7f2ef43cd4535aa8511461",
"assets/packages/web3modal_flutter/assets/icons/info.svg": "8327eb5fda28136ea6bb96e2f9c28ca1",
"assets/packages/web3modal_flutter/assets/icons/close.svg": "54241b625497b2a264df8fccb7a8a649",
"assets/packages/web3modal_flutter/assets/icons/copy.svg": "0b2aef8f77993bf3ef6ff979ec1dedf5",
"assets/packages/web3modal_flutter/assets/icons/refresh.svg": "65e23c2043fc03c67660d4b846236624",
"assets/packages/web3modal_flutter/assets/icons/coin.svg": "75eb1709228de3ba415b11b7d31c3c1f",
"assets/packages/web3modal_flutter/assets/icons/network.svg": "26be13d1280d5b1f9a11324a78ca8afa",
"assets/packages/web3modal_flutter/assets/icons/verif.svg": "d757b559a33476394f77c593527a1b34",
"assets/packages/web3modal_flutter/assets/icons/extension.svg": "0f4fcd6cbe352c09eb9e151a2e0f6b06",
"assets/packages/web3modal_flutter/assets/icons/wc.svg": "5d82c10b49486cdb55a67bacb36633e0",
"assets/packages/web3modal_flutter/assets/icons/compass.svg": "96a71c0b2e8136482957120cc16f28fe",
"assets/packages/web3modal_flutter/assets/icons/mobile.svg": "52e74ac4af896a985dfda155f7bb14f3",
"assets/packages/web3modal_flutter/assets/icons/refresh_back.svg": "c856132e8c52d9c6dd35eb9d43cbd389",
"assets/packages/web3modal_flutter/assets/icons/regular/wallet.svg": "933136188af50bf74e5b7ee0786c336e",
"assets/packages/web3modal_flutter/assets/icons/swap_horizontal.svg": "2becbdedd89ffaaa2111daa290956d5b",
"assets/packages/web3modal_flutter/assets/icons/help.svg": "3c03bdbbd073a7556a837abf21c52fab",
"assets/packages/web3modal_flutter/assets/network_placeholder.svg": "68f2b0a1756952f2f1dd75558b98a1de",
"assets/packages/web3modal_flutter/assets/AppIcon.png": "b75e7478d25cba779922dd8ba50933f1",
"assets/packages/web3modal_flutter/assets/light/all_wallets.svg": "c1df4d56d2564aa3ccf28931ac51e916",
"assets/packages/web3modal_flutter/assets/light/extension_button.svg": "c9d917766350916bd48e7dac6ea255dc",
"assets/packages/web3modal_flutter/assets/light/mobile_button.svg": "1a6d5978f470e5e56c93cd2602e86a2c",
"assets/packages/web3modal_flutter/assets/light/logo_walletconnect.svg": "b7f6821ccd5d4b805b5dc6cc98a802f1",
"assets/packages/web3modal_flutter/assets/light/desktop_button.svg": "6cb02d5b2d4fe40c173337d8183dd5ea",
"assets/packages/web3modal_flutter/assets/light/web_button.svg": "063a5bb2f31eba3e1291a5dbbb4b4e88",
"assets/packages/web3modal_flutter/assets/light/all_wallets_button.svg": "34bd234b88d68986952d7f4e0cf65444",
"assets/packages/web3modal_flutter/assets/light/qr_code_button.svg": "3f46784373248b623cbb9d569044f291",
"assets/packages/web3modal_flutter/assets/light/input_cancel.svg": "f0a69929f42f8bce6b80ca38f0c723b8",
"assets/packages/web3modal_flutter/assets/light/qr_code.svg": "86e507bc2c166ffaa096de2a0f3dbe67",
"assets/packages/web3modal_flutter/assets/light/code_button.svg": "c39b1088176e162b5879bb9bcb3a49f1",
"assets/packages/web3modal_flutter/assets/dark/all_wallets.svg": "4ece03ffb6d614fd85a4d6df5b108d44",
"assets/packages/web3modal_flutter/assets/dark/extension_button.svg": "a1ebc16d3f6760e119bd0c436e724288",
"assets/packages/web3modal_flutter/assets/dark/mobile_button.svg": "3062507bbc0b5d2a29c104f6dbd61629",
"assets/packages/web3modal_flutter/assets/dark/logo_walletconnect.svg": "1062455cf06aba4ef160f906514a28ef",
"assets/packages/web3modal_flutter/assets/dark/desktop_button.svg": "2b42d2f08591c8176ee81299c2010009",
"assets/packages/web3modal_flutter/assets/dark/web_button.svg": "61af2a36faadee5f62018fc59201cb11",
"assets/packages/web3modal_flutter/assets/dark/all_wallets_button.svg": "ade430bbada2c25a67ada7ad3fcc9443",
"assets/packages/web3modal_flutter/assets/dark/qr_code_button.svg": "87923d03176199d48b9cd2f46568844a",
"assets/packages/web3modal_flutter/assets/dark/input_cancel.svg": "66ea9f88351527973b7d22f22bcb86f7",
"assets/packages/web3modal_flutter/assets/dark/qr_code.svg": "851d45bb010e5dfaa2f34f9cb62c5e7f",
"assets/packages/web3modal_flutter/assets/dark/code_button.svg": "50639a4921acf72c11feb41c0dadb773",
"assets/packages/web3modal_flutter/assets/wallet_placeholder.svg": "1a9b45ad3b851a6cc7193ee61808aa7e",
"assets/packages/web3modal_flutter/assets/help/painting.svg": "bc1f3af0e6e5c57f2e82ac74468fa31f",
"assets/packages/web3modal_flutter/assets/help/system.svg": "5653685e83efb0b3d45a38db575de9c8",
"assets/packages/web3modal_flutter/assets/help/chart.svg": "7ac5fd4b1fa05e6853229070fd380c89",
"assets/packages/web3modal_flutter/assets/help/user.svg": "ecb763fd28aa204a17594803b9313bf1",
"assets/packages/web3modal_flutter/assets/help/eth.svg": "baf5ae21f167b4512c2f12be3dc032b0",
"assets/packages/web3modal_flutter/assets/help/lock.svg": "3084e9137bc93199a6a9010f63757442",
"assets/packages/web3modal_flutter/assets/help/key.svg": "3a19cb388cfc0747b9517c424aaecfe9",
"assets/packages/web3modal_flutter/assets/help/defi.svg": "82f1e28b6c5abe77773fef9aaf21e55a",
"assets/packages/web3modal_flutter/assets/help/layers.svg": "e29d83814272f8b17db2e84eb62938a7",
"assets/packages/web3modal_flutter/assets/help/dao.svg": "37bc884bb4c25c668e857a7b7c5b6adc",
"assets/packages/web3modal_flutter/assets/help/network.svg": "3f8bd92c1e4b1d766c361c113273faaa",
"assets/packages/web3modal_flutter/assets/help/noun.svg": "45ac2041d4e172746cefcb304c577bfc",
"assets/packages/web3modal_flutter/assets/help/compass.svg": "73f5b5773495c7b38034917e1108e310",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d05154e54c8f4f3105693c463e3496ed",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
