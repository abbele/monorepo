import { addComponentsDir, defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@monorepo/uikit',
      configKey: 'ui-kit'
    },
    async setup(options, nuxt) {
      console.log('UI Kit layer caricato!')

      if (!nuxt.options.modules.includes('@mapomodule/core')) {
        nuxt.options.modules.push('@mapomodule/core')
      }
  
      await addComponentsDir({ 
        path: './components', 
        pathPrefix: false
      })
    }
  })