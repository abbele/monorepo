import { addComponentsDir, defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@monorepo/uikit',
      configKey: 'ui-kit'
    },
    async setup(options, nuxt) {
      console.log('UI Kit layer caricato!')
  
      await addComponentsDir({ 
        path: './components', 
        pathPrefix: false
      })
    }
  })