// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @use "@/assets/scss/_mixins.scss" as *;
                @use "@/assets/scss/_breakpoints.scss" as *;
                @use "@/assets/scss/_variables.scss" as *;
              `,
        },
      },
    },
  },
  loadingIndicator: {
    name: "chasing-dots",
    color: "purple",
    background: "green",
  },
});
