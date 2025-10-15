export default (config: any, { strapi }: { strapi: any }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    await next();

    // Appliquer le cache uniquement aux fichiers uploads (images, vidéos, etc.)
    if (ctx.url.startsWith("/uploads/")) {
      // Cache de 1 an pour les assets statiques
      ctx.set("Cache-Control", "public, max-age=31536000, immutable");
      ctx.set("Expires", new Date(Date.now() + 31536000000).toUTCString());

      // Headers supplémentaires pour la performance
      ctx.set("X-Content-Type-Options", "nosniff");
      ctx.set("Vary", "Accept-Encoding");
    }
  };
};
