'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "002cfb9ff891307c0863169be91657bb",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/about.png": "9573c676f654e9fc92e404de8afe4603",
"assets/assets/avatar.jpg": "ab3c3153fd918ed579e426662d6a1f34",
"assets/assets/blog.png": "f127587e3cb1aef1a5078aa740efab48",
"assets/assets/education/amtLogo.png": "02dec58fff1e149397efff5b9d3e30f7",
"assets/assets/education/fisaLogo.png": "d478ea66880fe33544ce96b18f0bc4b0",
"assets/assets/education/unisaLogo.png": "78d341336f7b9610db31d132080ccff1",
"assets/assets/education/vcLogo.png": "ca39fac1374404b3b74f1f6f726fa111",
"assets/assets/email.png": "11f1bc399cf00bf9d989ba6133cbd03c",
"assets/assets/emailLight.png": "828e4779415a6ad47ff7fa9d3c4a5772",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/home.png": "4e90f979eba9e7be68d260a915b3adf9",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/stack/androidLogo.png": "82252fb8be79fcd58c739eab385774b9",
"assets/assets/stack/angularLogo.png": "ff3895311bbc961dec2bac17ea8eeb42",
"assets/assets/stack/csharpLogo.png": "cf5d9d53cfc5eebee0930b57556b13d2",
"assets/assets/stack/flutterLogo.png": "c76d47ccd6031bf0b79a8de7bdcc2410",
"assets/assets/stack/gitLogo.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/stack/javaLogo.png": "503a007758abbb3526036820455237b6",
"assets/assets/stack/jsLogo.png": "50a67f1cbe0f46b4cd999a8d083155bc",
"assets/assets/stack/nodejsLogo.png": "521444a28d1ac7003ece0c1f030dcd21",
"assets/assets/stack/nosqlLogo.png": "37401f616c3dbd19309829b4130d2c36",
"assets/assets/stack/sqlLogo.png": "c0d13c5cc163e4392003579cbeed8e43",
"assets/assets/stack/tpLogo.png": "4e96f1110cb872407e837d4fc1440f96",
"assets/assets/stack.png": "e42d834517d329c292d668ea3be3a1b2",
"assets/assets/sun.png": "6f91bc8f92f34fe50d84f23442265d64",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/work/parktownLogo.png": "4e55075fb33a7ce2afaf087a1da044af",
"assets/assets/work/saintsLogo.png": "4ad8c5028afc1887434358956719a0c3",
"assets/assets/work/sjcLogo.jpg": "d6f4993418e1bb8908bd4c9acfafeaa1",
"assets/assets/work.png": "572dbd51b6dddaa63ef6145be82328e1",
"assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"assets/assets/works/macarbiLogo.jpg": "b898162580cc371c19a42fb35b182273",
"assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"assets/assets/works/neighbizLogo.png": "10b8dcc98747abbb4852c2bea28f4ef6",
"assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"assets/assets/works/runninghillLogo.png": "ca1f6f8310683a6d4ed1160cf850ffeb",
"assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"assets/FontManifest.json": "ab310715c29abd30b1eb1b6c626d8ec7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "558598be809ee78a6cfc4094cc37aaf8",
"index.html": "b7d8c930ba264e25838040d703e26d31",
"/": "b7d8c930ba264e25838040d703e26d31",
"main.dart.js": "25f38036796059afccdfaba7a3b60301",
"version.json": "0d79d3ea155d7994b580fd9e7a266d11"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
