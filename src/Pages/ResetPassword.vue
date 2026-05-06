<template>
    <section class="uk-flex uk-flex-middle uk-padding" uk-height-viewport="offset-top: true;">
        <div class="container-custom uk-flex uk-flex-center">
            <div class="uk-width-large@m">

                <div class="card card--md">
                    <div class="card-logo"><img src="/images/logos/qx-logo.png" alt="Logo"/></div>
                    <h3 class="card-title">Reset Password</h3>

                    <form class="form">
                        <div class="form-section">
                            <div class="form-input">
                                <label>
                                    New Password <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <div class="password-wrapper">
                                        <input
                                          :type="showNewPassword ? 'text' : 'password'"
                                          class="uk-input input"
                                          placeholder="Enter new password"
                                        />
                                        <button type="button" class="password-toggle" @click="toggleNewPassword">
                                          <EyeSlashIcon v-if="showNewPassword" class="icon" />
                                          <EyeIcon v-else class="icon" />
                                        </button>
                                    </div>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Confirm New Password <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <div class="password-wrapper">
                                        <input
                                          :type="showConfirmPassword ? 'text' : 'password'"
                                          class="uk-input input"
                                          placeholder="Confirm new password"
                                        />
                                        <button type="button" class="password-toggle" @click="toggleConfirmPassword">
                                          <EyeSlashIcon v-if="showConfirmPassword" class="icon" />
                                          <EyeIcon v-else class="icon" />
                                        </button>
                                    </div>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <span class="form-helper-text">
                                At least 15 characters, or 8 with a number and lowercase letter.
                            </span>
                        </div>

                        <div class="form-actions uk-child-width-expand">
                            <button class="uk-button button button--primary" type="submit">Reset Password</button>
                        </div>
                    </form>

                    <!-- Success Message -->
                    <Notification body="Your password has been changed successfully." />
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import Notification from '@/components/common/Notification.vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

// Password visibility toggles
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

const toggleNewPassword = () => {
  showNewPassword.value = !showNewPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
</script>