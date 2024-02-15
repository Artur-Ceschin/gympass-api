import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  async setup() {
    console.log('Executed')

    return {
      teardown() {
        console.log('Teardown')
      },
    }
  },
}
