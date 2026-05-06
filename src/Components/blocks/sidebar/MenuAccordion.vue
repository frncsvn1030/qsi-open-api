<template>
    <ul class="s-section">
        <!-- accordions are grouped/shared the same parent -->
        <li>
            <ul class="uk-accordion" uk-accordion="multiple: false">

                <!-- Documentation -->
                <li>
                    <!-- Main Accordion -->
                    <a class="uk-accordion-title s-item">
                        <span class="left">
                            <DocumentTextIcon class="icon-sm" />
                            Documentation
                        </span>
                        <ChevronDownIcon class="icon-sm chevron-down" />
                    </a>
                    <div class="uk-accordion-content">
                        <ul class="nested" uk-accordion="multiple: false">
                            <!-- Sub Accordion 1 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Colors</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Colors By Brand; delay: 800">
                                            Get Colors By Brand
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <!-- Sub Accordion 2 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Fabrics</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Fabrics By Brand; delay: 800">
                                            Get Fabrics By Brand
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <!-- Sub Accordion 3 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Patterns</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get All; delay: 800">
                                            Get All
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <!-- Sub Accordion 4 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Styles</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get All Brand Styles; delay: 800">
                                            Get All Brand Styles
                                        </span>
                                    </a>
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Brand Style By ID; delay: 800">
                                            Get Brand Style By ID
                                        </span>
                                    </a>
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Brand Style By Vendor Style ID; delay: 800">
                                            Get Brand Style By Vendor Style ID
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- API Endpoint -->
                <li>
                    <!-- Main Accordion -->
                    <a class="uk-accordion-title s-item active" href="#api-endpoint">
                        <span class="left">
                            <BoltIcon class="icon-sm" />
                            API Endpoint
                        </span>
                        <ChevronDownIcon class="icon-sm chevron-down" />
                    </a>
                    <div class="uk-accordion-content">
                        <ul class="nested" uk-accordion="multiple: false">
                            <!-- Sub Accordion 1 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Colors</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Colors By Brand; delay: 800">
                                            Get Colors By Brand
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <!-- Sub Accordion 2 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Fabrics</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Fabrics By Brand; delay: 800">
                                            Get Fabrics By Brand
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <!-- Sub Accordion 3 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Patterns</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get All; delay: 800">
                                            Get All
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <!-- Sub Accordion 4 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Styles</span>
                                    <ChevronDownIcon class="icon-sm chevron-down" />
                                </a>
                                <div class="uk-accordion-content">
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get All Brand Styles; delay: 800">
                                            Get All Brand Styles
                                        </span>
                                    </a>
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Brand Style By ID; delay: 800">
                                            Get Brand Style By ID
                                        </span>
                                    </a>
                                    <a class="s-item" href="#">
                                        <span class="method get">GET</span>
                                        <span class="label" uk-tooltip="title: Get Brand Style By Vendor Style ID; delay: 800">
                                            Get Brand Style By Vendor Style ID
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>
        </li>

        <!-- API Keys -->
        <!-- NOTE: If the user hasn't generate his API keys, clicking 'API Keys' in the sidebar will direct them back to the 'Generate API Key Page' -->
        <li>
            <router-link to="/api-keys" class="s-item">
                <span class="left">
                    <KeyIcon class="icon-sm" />
                    API Keys
                </span>
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { DocumentTextIcon, BoltIcon, KeyIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
</style>