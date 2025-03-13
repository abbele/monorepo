import { addComponentsDir, addImportsDir, defineNuxtModule, createResolver } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
      name: '@monorepo-abbelee/core',
      configKey: 'core'
    },
    async setup(options, nuxt) {
      console.log('Core layer caricato!')
      const resolver = createResolver(import.meta.url);
  
      addComponentsDir({ 
        path: './components', 
        pathPrefix: false
      })

      addImportsDir(resolver.resolve('runtime/composables'))
    },
  })