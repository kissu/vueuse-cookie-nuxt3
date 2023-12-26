import { useCookies as VueUseCookies } from '@vueuse/integrations/useCookies'

export function useCookies() {
  function get(name: string) {
    const { get } = VueUseCookies([], { autoUpdateDependencies: true });
    return get(name)
  }

  function set(name: string, value: string) {
    const { set } = VueUseCookies([], { autoUpdateDependencies: true })
    return set(name, value)
  }

  function remove(name: string) {
    const { remove } = VueUseCookies([], { autoUpdateDependencies: true })
    return remove(name)
  }

  return { get, set, remove }
}
