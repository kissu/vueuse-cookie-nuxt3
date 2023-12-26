import { useCookies as VueUseCookies } from '@vueuse/integrations/useCookies'

export function useCookies() {
  function get(name: string) {
    console.log('before')
    const { get } = VueUseCookies([name])
    console.log('after')
    return 3
  }

  function set(name: string, value: string) {
    const { set } = VueUseCookies([name])
    set(name, value)
  }

  function remove(name: string) {
    const { remove } = VueUseCookies([name])
    remove(name)
  }

  return { get, set, remove }
}
