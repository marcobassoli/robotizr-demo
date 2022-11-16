// FILES TO CACHE
const cName = "Robotizr Cloud",
    cFiles = ["index.js", "index.html", "toolbox_style.css", "robzr-category.js",
        "conditions_blocks.js", "emergency_blocks.js",
        "motion_blocks.js", "signalling_blocks.js", "img/logo.png", "img/favicon.png"
    ];

// CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
    evt.waitUntil(
        caches.open(cName)
        .then((cache) => { return cache.addAll(cFiles); })
        .catch((err) => { console.error(err) })
    );
});

// LOAD FROM CACHE, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
    evt.respondWith(
        caches.match(evt.request)
        .then((res) => { return res || fetch(evt.request); })
    );
});