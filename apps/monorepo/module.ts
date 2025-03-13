import { defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: 'monorepo-abbelee',
      configKey: 'monorepo-abbelee'
    },
    async setup(options, nuxt) {
      console.log('Monorepo caricato!')

      if (!nuxt.options.modules.includes('@monorepo-abbelee/core')) {
        nuxt.options.modules.push('@monorepo-abbelee/core')
      }
      
      if (!nuxt.options.modules.includes('@monorepo-abbelee/uikit')) {
        nuxt.options.modules.push('@monorepo-abbelee/uikit')
      }
    },
  })