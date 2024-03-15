// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
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
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1.0, user-scalable=no' },
        { "http-equiv": "X-UA-Compatible",  content: "IE=edge" },
        { name: 'description', content: 'frontend 前端 博客' },
        { name: 'apple-mobile-web-app-title', content: 'Luffy "s blog' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        { name: "keywords", "content": "Luffy, 博客, vue, react, js, css, html" }
      ],
      link: [{ "rel": "icon", "href": "/command.svg" }]
    }
  },
})
