<template>
  <PlainModal id="signin-modal" title="Sign In">
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
              <input
                :type="showPassword ? 'text' : 'password'"
                class="uk-input input"
                placeholder="Password"
              />
              <button type="button" class="password-toggle" @click="togglePassword">
                <EyeSlashIcon v-if="showPassword" class="icon" />
                <EyeIcon v-else class="icon" />
              </button>
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
  </PlainModal>
</template>

<script setup>
import { ref } from 'vue'
import PlainModal from '@/components/common/PlainModal.vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

// Password visibility
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
</style>