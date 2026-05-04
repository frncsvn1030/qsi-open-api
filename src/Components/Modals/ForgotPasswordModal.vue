<template>
  <PlainModal id="forgot-password-modal" title="Forgot Password">
    <div class="uk-text-center description uk-margin">
      We can send you details on how to reset it. Please enter your email address
    </div>

    <form class="form">
      <div class="form-section">
        <div class="form-input">
          <label>Email</label>
          <div class="form-control">
            <input class="uk-input input" type="email" placeholder="Email" required />
            <span class="form-validation">Validation text here.</span>
          </div>
        </div>
      </div>

      <div class="form-actions uk-child-width-expand">
        <button class="uk-button button button--primary" type="submit">Send reset link</button>
      </div>
    </form>
  </PlainModal>
</template>

<script setup>
import PlainModal from '@/components/common/PlainModal.vue';
</script>

<style scoped>
</style>