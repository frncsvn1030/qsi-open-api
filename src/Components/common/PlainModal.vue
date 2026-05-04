<template>
  <div :id="id" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical modal">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <h3 class="uk-modal-title title">{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
</style>