<template>
  <div>not working 🔴</div>
  <nuxt-link to="/works">go to the working example</nuxt-link>
  <br />
  <br />

  <div>
    <button @click="set('capuccino', 'works 🍪')">set cookie</button>
    <div>cookie? {{ get('capuccino') }}</div>
    <button @click="remove('capuccino')">remove cookie</button>

    <br />
    <br />
    <button @click="number++">big one {{ number }}</button>
  </div>
</template>

<script setup lang="ts">
const number = ref(0)

const { get, set, remove } = useCookies()
</script>
