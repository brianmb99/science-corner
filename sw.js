/* Offline copy of Science Corner. Scope is this site only (/science-corner/ on GitHub Pages). */
"use strict";

const VERSION = "science-corner-v4";
const CACHE = VERSION;
const PRECACHE = [
  "./",
  "index.html",
  "styles.css",
  "catalog.js",
  "app.js",
  "courses/atoms-molecules.js",
  "courses/evolution.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE.map((path) => new Request(path, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((name) => name.startsWith("science-corner-") && name !== CACHE)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.ok && response.type === "basic" && !response.redirected) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: true }).then((cached) => {
          if (cached) return cached;
          if (request.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        })
      )
  );
});
