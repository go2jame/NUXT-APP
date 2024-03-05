// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'Alisa - ทดสอบ Nuxt',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'รายละเอียดเว็บไซต์' }
      ]
    }
  },

  modules: ["@nuxtjs/color-mode", "@nuxtjs/google-fonts","@nuxt/ui"]
})