<template>
    <section class="uk-flex uk-flex-middle uk-padding" uk-height-viewport="offset-top: true;">
        <div class="container-custom uk-flex uk-flex-center">
            <div class="uk-width-large@m">

                <div class="card card--md">
                    <div class="card-logo"><img src="/images/logos/qx-logo.png" alt="Logo"/></div>
                    <h3 class="card-title">Sign up</h3>

                    <form class="form">
                        <fieldset class="form-section">
                            <div class="form-input">
                                <label>
                                    First Name <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="text" placeholder="First Name"/>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Last Name <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="text" placeholder="Last Name"/>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Organization <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="text" placeholder="Organization"/>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="form-section">
                            <legend>Login Credentials</legend>

                            <div class="form-input">
                                <label>
                                    Email <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="email" placeholder="Email"/>
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
                            </div>
                            <div class="form-input">
                                <label>
                                    Re-enter Password <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <div class="password-wrapper">
                                        <input
                                          :type="showConfirmPassword ? 'text' : 'password'"
                                          class="uk-input input"
                                          placeholder="Re-enter Password"
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
                        </fieldset>

                        <div class="form-actions uk-child-width-expand">
                            <button class="uk-button button button--primary" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

// Password visibility toggles
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
</script>