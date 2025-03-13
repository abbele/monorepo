import { addComponentsDir, defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@monorepo-abbelee/uikit',
      configKey: 'ui-kit'
    },
    async setup(options, nuxt) {
      console.log('UI Kit layer caricato!')

      if (!nuxt.options.modules.includes('@monorepo-abbelee/core')) {
        nuxt.options.modules.push('@monorepo-abbelee/core')
      }
  
      await addComponentsDir({ 
        path: './components', 
        pathPrefix: false
      })
    }
  })