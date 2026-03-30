zimport tailwindcss from "@tailwindcss/vite";;
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  

  modules: [
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/axios',
  
  ],
    
  // axios: {
  //   baseURL: process.env.API_BASE_URL || 'http://127.0.0.1', 
  // },
  

  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  

  
  
});