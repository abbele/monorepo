import { defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: 'monorepo-abbele',
      configKey: 'monorepo-abbele'
    },
    async setup(options, nuxt) {
      console.log('Monorepo caricato!')

      if (!nuxt.options.modules.includes('@monorepo-abbele/core')) {
        nuxt.options.modules.push('@monorepo-abbele/core')
      }
      
      if (!nuxt.options.modules.includes('@monorepo-abbele/uikit')) {
        nuxt.options.modules.push('@monorepo-abbele/uikit')
      }
    },
  })