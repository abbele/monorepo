import { addComponentsDir, defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@monorepo-abbele/uikit',
      configKey: 'ui-kit'
    },
    async setup(options, nuxt) {
      console.log('UI Kit layer caricato!')

      if (!nuxt.options.modules.includes('@monorepo-abbele/core')) {
        nuxt.options.modules.push('@monorepo-abbele/core')
      }
  
      await addComponentsDir({ 
        path: './components', 
        pathPrefix: false
      })
    }
  })