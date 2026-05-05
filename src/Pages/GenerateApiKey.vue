<template>
  <DefaultLayout>
    <section class="uk-flex uk-flex-middle uk-padding" uk-height-viewport="offset-top: true;">
        <div class="container-custom uk-flex uk-flex-center">
            <div class="uk-width-large@m">

                <!-- 1 (Landing Page) -->
                <div class="card card--md uk-width-medium uk-margin-auto" v-show="showLanding">
                    <div class="card-logo"><img src="/images/logos/qx-logo.png" alt="Logo"/></div>
                    <h3 class="card-title">QSI Open API</h3>

                    <div class="form-actions uk-child-width-expand">
                        <button class="uk-button button button--primary" type="submit" @click="showLanding = false">Generate API Keys</button>
                    </div>
                </div>

                <!-- 2 -->
                <div class="card card--md" v-show="!showLanding">
                    <div class="card-logo"><img src="/images/logos/qx-logo.png" alt="Logo"/></div>
                    <h3 class="card-title">Generate API Key</h3>

                    <form class="form">
                        <div class="form-section">
                            <div class="form-input">
                                <label>
                                    Application/ API Key Name <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <input class="uk-input input" type="email" placeholder="Application/ API Key Name"/>
                                    <span class="form-validation">Validation text here.</span>
                                </div>
                            </div>
                            <div class="form-input">
                                <label>
                                    Environment <!-- <span class="required">*</span> -->
                                </label>
                                <div class="form-control">
                                    <select class="uk-select select">
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="Staging">Staging</option>
                                        <option value="Production">Production</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-actions uk-child-width-expand">
                            <button class="uk-button button button--primary" type="submit">Create Key</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const showLanding = ref(true)
</script>