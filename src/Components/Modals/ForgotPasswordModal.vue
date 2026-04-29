<template>
  <div id="forgot-password-modal" class="uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical modal">
      <button class="uk-modal-close-default" type="button" uk-close></button>

      <h3 class="uk-modal-title title">Forgot Password</h3>
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
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>