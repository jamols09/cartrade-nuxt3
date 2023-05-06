// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image-edge",
        '@nuxt/devtools',
        '@vueuse/nuxt',
        '@nuxtjs/supabase'
    ],
    devtools: {
        // Enable devtools (default: true)
        enabled: true,
    }
});
