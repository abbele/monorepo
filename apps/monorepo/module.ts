import { defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: 'abbele',
      configKey: 'abbele'
    },
    async setup(options, nuxt) {
      console.log('Monorepo caricato!')

      if (!nuxt.options.modules.includes('@abbele/core')) {
        nuxt.options.modules.push('@abbele/core')
      }
      
      if (!nuxt.options.modules.includes('@abbele/uikit')) {
        nuxt.options.modules.push('@abbele/uikit')
      }
    },
  })