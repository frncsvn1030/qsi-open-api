<template>
    <PlainModal id="change-password-modal" title="Change Password">
        <form class="form">
            <div class="form-section">
                <div class="form-input">
                    <label>
                        Old Password <!-- <span class="required">*</span> -->
                    </label>
                    <div class="form-control">
                        <div class="password-wrapper">
                            <input
                                :type="showOldPassword ? 'text' : 'password'"
                                class="uk-input input"
                                placeholder="Password"
                            />
                            <button type="button" class="password-toggle" @click="toggleOldPassword">
                                <EyeSlashIcon v-if="showOldPassword" class="icon" />
                                <EyeIcon v-else class="icon" />
                            </button>
                        </div>
                        <span class="form-validation">Validation text here.</span>
                    </div>
                </div>
                <div class="form-input">
                    <label>
                        New Password <!-- <span class="required">*</span> -->
                    </label>
                    <div class="form-control">
                        <div class="password-wrapper">
                            <input
                                :type="showNewPassword ? 'text' : 'password'"
                                class="uk-input input"
                                placeholder="Password"
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
                                placeholder="Password"
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

            <div class="uk-grid uk-grid-small uk-child-width-1-2@m" uk-grid>
                <div>
                    <button class="uk-button button button--default uk-width-1-1 uk-modal-close">Cancel</button>
                </div>
                <div>
                    <button class="uk-button button button--primary uk-width-1-1">Save</button>
                </div>
            </div>
        </form>
    </PlainModal>
</template>

<script setup>
import { ref } from 'vue'
import PlainModal from '@/components/common/PlainModal.vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

// Password visibility states
const showOldPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

// Toggle functions
const toggleOldPassword = () => {
    showOldPassword.value = !showOldPassword.value
}

const toggleNewPassword = () => {
    showNewPassword.value = !showNewPassword.value
}

const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}
</script>

<style scoped>
</style>