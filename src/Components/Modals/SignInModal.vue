<template>
  <div id="signin-modal" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical modal">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <h3 class="uk-modal-title title">Sign In</h3>

      <form class="form">
        <div class="form-section">
          <div class="form-input">
            <label>
              Email <!-- <span class="required">*</span> -->
            </label>
            <div class="form-control">
              <input class="uk-input input" type="email" placeholder="Email" />
              <span class="form-validation">Validation text here.</span>
            </div>
          </div>
          <div class="form-input">
            <label>
              Password <!-- <span class="required">*</span> -->
            </label>
            <div class="form-control">
              <div class="password-wrapper">
                <input type="password" class="uk-input input" placeholder="Password" />
                <button type="button" class="password-toggle" uk-icon="icon: eye-slash; ratio: 0.8"></button>
              </div>
              <span class="form-validation">Validation text here.</span>
            </div>

            <!-- Forgot Password -->
            <div class="uk-text-right">
              <button type="button" class="uk-button button button--link"
                uk-toggle="target: #forgot-password-modal">Forgot Password?</button>
            </div>
          </div>
        </div>

        <div class="form-actions uk-child-width-expand">
          <button class="uk-button button button--primary" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>