<template>
    <DefaultLayout>
        <div class="container-custom">
            <div class="api-keys uk-flex uk-flex-center">
                <div class="card uk-width-4-5 uk-width-3-4@xl">
                    <div class="uk-padding-small">
                        <h4 class="uk-text-center">API Keys</h4>

                        <!-- Staging -->
                        <div class="form-section is-row">
                            <div class="form-section__header">
                                <h4 class="title uk-margin-remove">Staging</h4>
                                <hr>
                            </div>

                            <ApiKeyList
                                v-for="(key, index) in stagingKeys"
                                :key="`staging-${index}`"
                                :api-keys="key"
                                toggle-name="staging-toggle"
                                :is-hidden="false"
                            />

                            <!-- Generate key button -->
                            <div class="uk-margin-auto" hidden>
                                <button class="uk-button button button--default button--sm">
                                    <PlusIcon class="icon-xs" />
                                    Generate Key
                                </button>
                            </div>
                        </div>

                        <!-- Production -->
                        <div class="form-section is-row uk-margin-medium">
                            <div class="form-section__header">
                                <h4 class="title uk-margin-remove">Production</h4>
                                <hr>
                            </div>

                            <ApiKeyList
                                v-for="(key, index) in productionKeys"
                                :key="`production-${index}`"
                                :api-keys="key"
                                toggle-name="production-toggle"
                                :is-hidden="index > 0"
                            />

                            <!-- Generate key button -->
                            <div class="uk-margin-auto">
                                <button class="uk-button button button--default button--sm" uk-toggle="target: #generate-api-key-modal">
                                    <PlusIcon class="icon-xs" />
                                    Generate Key
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GenerateApiKeyModal />
        </div>
    </DefaultLayout>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline';
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import ApiKeyList from './ApiKeyList.vue';
import GenerateApiKeyModal from '@/Components/Modals/GenerateApiKeyModal.vue';

const stagingKeys = [
    [
        { label: 'Client', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'View' },
        { label: 'Secret', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'Regenerate' }
    ],
    [
        { label: 'Client', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'View' },
        { label: 'Secret', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'Regenerate' }
    ]
];

const productionKeys = [
    [
        { label: 'Client', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'View' },
        { label: 'Secret', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'Regenerate' }
    ],
    [
        { label: 'Client', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'View' },
        { label: 'Secret', value: 'pk_live_7f3a9c2d8e41b6f0a91c4d72', validation: 'Validation text here.', buttonText: 'Regenerate' }
    ]
];

</script>