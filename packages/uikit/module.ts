import { addComponentsDir, defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@abbele/uikit',
      configKey: 'ui-kit'
    },
    async setup(options, nuxt) {
      console.log('UI Kit layer caricato!')

      if (!nuxt.options.modules.includes('@abbele/core')) {
        nuxt.options.modules.push('@abbele/core')
      }
  
      await addComponentsDir({ 
        path: './components', 
        pathPrefix: false
      })
    }
  })