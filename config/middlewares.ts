export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://www.lahcenway.com",
            "https://timely-wealth-923d9aeb3d.media.strapiapp.com",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://timely-wealth-923d9aeb3d.media.strapiapp.com",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  {
    name: "strapi::public",
    config: {
      defer: false,
      maxAge: 31536000000, // 1 an en millisecondes (365 jours)
    },
  },
  // ✅ Ajouter le middleware personnalisé APRÈS strapi::public
  {
    resolve: "./src/middlewares/cache-control",
  },
];
