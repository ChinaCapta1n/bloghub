// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [400, 700],
      NotoSerifSimplifiedChinese: [200, 300, 400, 500, 600]
    }
  },
  content: {
    highlight: {
      theme: "github-light"
    },
  },
  css: ['~/assets/css/variables.css', '~/assets/css/reset.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
