<template>
  <div>working 🟢</div>
  <nuxt-link to="/">go to the broken example</nuxt-link>
  <br />
  <br />

  <div>
    <button @click="cookies.set('capuccino', 'works 🍪')">set cookie</button>
    <div>cookie? {{ cookies.get('capuccino') }}</div>
    <button @click="cookies.remove('capuccino')">remove cookie</button>
  </div>
</template>

<script setup lang="ts">
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies([], { autoUpdateDependencies: true })
</script>
