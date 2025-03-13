import { defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@monorepo',
      configKey: 'monorepo'
    },
    async setup(options, nuxt) {
      console.log('Mapomodule caricato!')

      if (!nuxt.options.modules.includes('@mapomodule/core')) {
        nuxt.options.modules.push('@mapomodule/core')
      }
      
      if (!nuxt.options.modules.includes('@mapomodule/uikit')) {
        nuxt.options.modules.push('@mapomodule/uikit')
      }
    },
  })