export default ({ env }) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // Cache Configuration
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          maxSize: 32767,
          ttl: 3600000, // 1 hour in milliseconds
        },
      },
      strategy: {
        keysPrefix: "idech",
        enableEtag: true,
        enableXCacheHeaders: true,
        debug: true,
        maxAge: 3600000,
        updateAgeOnGet: false,
        contentTypes: [
          // Content Types
          "api::about-page.about-page",
          "api::announcement-bar.announcement-bar",
          "api::blog.blog",
          "api::book.book",
          "api::footer.footer",
          "api::hadith-image.hadith-image",
          "api::header.header",
          "api::homepage.homepage",
          "api::quran-image.quran-image",
          "api::site-config.site-config",
        ],
      },
    },
  },
});
