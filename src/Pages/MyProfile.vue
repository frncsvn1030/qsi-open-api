<template>
    <AppLayout>
        <div class="container-custom">

            <!-- Profile page content starts here -->
            <div class="profile-page">
                <div class="page-header">
                    <h4 class="page-title">My Profile</h4>
                    <p class="page-subtitle">Manage your personal information and account settings</p>
                </div>

                <div class="card">
                    <h4 class="title">Profile Information</h4>

                    <div class="uk-grid-medium uk-child-width-1-1@m uk-margin" uk-grid>
                        <div class="uk-grid-small uk-child-width-1-2@m" uk-grid>
                            <div class="form-input">
                                <label>
                                    First Name <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="text" value="John" readonly />
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Last Name <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="text" value="Doe" readonly/>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Organization <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="text" value="Qstrike" readonly />
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Email <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="email" value="j.doe@example.com" readonly/>
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
                                          value="JohnDoe321"
                                          readonly
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
                                    <button type="button" class="uk-button button button--link" uk-toggle="target: #change-password-modal">Change Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Change Password Modal -->
            <ChangePasswordModal />
        </div>
    </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue';
import ChangePasswordModal from '@/components/modals/ChangePasswordModal.vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

// Password visibility
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>