<template>
  <div>
    <button @click="set('capuccino', 'works')">set cookie</button>
    <div>cookie? {{ get('capuccino') }}</div>
    <!-- <div v-if="get('capuccino') === 'works'">hydration 👌🏻</div> -->
    <button @click="remove('capuccino')">remove cookie</button>
  </div>
</template>

<script setup lang="ts">
const { get, set, remove } = useCookies()
</script>
