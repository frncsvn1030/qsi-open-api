<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from '@/layouts/Header.vue'

</script>