<template>
    <DefaultLayout>
        <div class="container-custom">

            <div class="api-endpoint">

                <div class="topbar">
                    <!-- Breadcrumb -->
                    <nav aria-label="Breadcrumb">
                        <ul class="uk-breadcrumb breadcrumb">
                            <li class="uk-disabled">
                                <a href="#">
                                    <img src="/images/icons/bolt.svg">
                                    API Orders
                                </a>
                            </li>
                            <li><a href="#">Test API Post Orders</a></li>
                        </ul>
                    </nav>

                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-expand@m">
                            <span class="badge badge--get badge--md uk-margin-xsmall-right">Get</span>
                            <span class="badge badge--default badge--md">/api/v1/auth/login</span>
                        </div>

                        <div class="uk-width-auto@m">
                            <button class="uk-button button button--default button--md uk-margin-xsmall-right">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                                    <polyline points="17 21 17 13 7 13 7 21" />
                                    <polyline points="7 3 7 8 15 8" />
                                </svg>
                                Save Test
                            </button>
                            <button class="uk-button button button--default button--md">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 8v4l3 3" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                History
                            </button>
                        </div>
                    </div>
                </div>

                <div class="uk-grid-small" uk-grid>
                    <EndpointRequest />
                    <EndpointResponse />
                </div>
            </div>

        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import EndpointRequest from '@/components/blocks/api-endpoint/ApiRequestPanel.vue';    
import EndpointResponse from '@/components/blocks/api-endpoint/ApiResponsePanel.vue';
</script>