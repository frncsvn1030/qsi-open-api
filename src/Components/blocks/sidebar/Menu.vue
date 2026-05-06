<template>
    <ul class="s-section">
        <!-- My Profile -->
        <li>
            <router-link to="/my-profile" class="s-item active">
                <span class="left">
                    <UserIcon class="icon-sm" />
                    My Profile
                </span>
            </router-link>
        </li>

        <!-- Application Token Manager -->
        <li>
            <router-link to="/application-token-manager" class="s-item">
                <span class="left">
                    <KeyIcon class="icon-sm" />
                    Application Token Manager 
                </span>
            </router-link>
        </li>

        <!-- Orders -->
        <li>
            <router-link to="/orders" class="s-item">
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