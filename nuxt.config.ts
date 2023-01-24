// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      meta: [],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://picsum.photos/200/300",
        },
      ],
    },
  },
});
