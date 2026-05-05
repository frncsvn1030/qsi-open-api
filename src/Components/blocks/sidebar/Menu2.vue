<template>
    <ul class="s-section">
        <!-- accordions are grouped/shared the same parent -->
        <li hidden>
            <ul class="uk-accordion" uk-accordion="multiple: false">

                <!-- Documentation -->
                <li>
                    <!-- Main Accordion -->
                    <a class="uk-accordion-title s-item">
                        <span class="left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 2 L14 2 L20 8 L20 22 Q20 22 19 22 L5 22 Q4 22 4 21 L4 3 Q4 2 6 2 Z"/>
                                <path d="M14 2 L14 8 L20 8"/>
                                <line x1="8" y1="13" x2="16" y2="13"/>
                                <line x1="8" y1="17" x2="16" y2="17"/>
                                <line x1="8" y1="9"  x2="11" y2="9"/>
                            </svg>
                            Documentation
                        </span>
                        <ChevronDownIcon class="icon-sm" />
                    </a>
                    <div class="uk-accordion-content">
                        <ul class="nested" uk-accordion="multiple: false">
                            <!-- Sub Accordion 1 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Colors</span>
                                    <ChevronDownIcon class="icon-sm" />
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
                                    <ChevronDownIcon class="icon-sm" />
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
                                    <ChevronDownIcon class="icon-sm" />
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
                                    <ChevronDownIcon class="icon-sm" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 2 6 13 12 13 9 22 18 11 12 11 15 2"/>
                            </svg>
                            API Endpoint
                        </span>
                        <ChevronDownIcon class="icon-sm" />
                    </a>
                    <div class="uk-accordion-content">
                        <ul class="nested" uk-accordion="multiple: false">
                            <!-- Sub Accordion 1 -->
                            <li>
                                <a class="uk-accordion-title s-item">
                                    <span>Brand Colors</span>
                                    <ChevronDownIcon class="icon-sm" />
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
                                    <ChevronDownIcon class="icon-sm" />
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
                                    <ChevronDownIcon class="icon-sm" />
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
                                    <ChevronDownIcon class="icon-sm" />
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

        <!-- My Profile -->
        <li>
            <router-link to="" class="s-item active">
                <span class="left">
                    <UserIcon class="icon-sm" />
                    My Profile
                </span>
            </router-link>
        </li>

        <!-- Application Token Manager -->
        <li>
            <router-link to="" class="s-item">
                <span class="left">
                    <KeyIcon class="icon-sm" />
                    Application Token Manager 
                </span>
            </router-link>
        </li>

        <!-- Orders -->
        <li>
            <router-link to="" class="s-item">
                <span class="left">
                    <ClipboardDocumentListIcon class="icon-sm" />
                    Orders
                </span>
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { UserIcon, KeyIcon, ClipboardDocumentListIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
</style>