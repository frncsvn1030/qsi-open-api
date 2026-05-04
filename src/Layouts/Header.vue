<template>
  <header class="uk-flex uk-flex-middle">
    <nav :class="hasSidebar ? 'uk-width-expand uk-padding-small' : 'container-custom'">
      <div class="uk-flex uk-flex-middle">

        <!-- Hamburger — only shown when sidebar is present -->
        <button
          v-if="hasSidebar"
          class="hamburger uk-margin-right"
          id="sidebar-toggle"
          aria-label="Toggle sidebar"
          @click="emit('toggle-sidebar')"
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="90" height="90" rx="14" fill="none" stroke="black" stroke-width="7" />
            <line x1="72" y1="5" x2="72" y2="95" stroke="black" stroke-width="6" />
          </svg>
        </button>

        <a href="#">
          <div class="nav-logo">
            <img src="/images/logos/qx-logo.png" alt="QSI Logo" />
          </div>
        </a>
      </div>

      <div class="nav-links">
        <!-- Home -->
        <router-link class="nav-link" to="/">
          <HomeIcon class="icon-xs" />
          <span>Home</span>
        </router-link>

        <!-- Send Invite (Only admin has this) -->
        <a class="nav-link" uk-toggle="target: #invite-modal">
          <UserPlusIcon class="icon-xs" />
          <span>Send Invite</span>
        </a>

        <!-- API -->
        <router-link class="nav-link" to="/api-endpoint">
          <CodeBracketIcon class="icon-xs" />
          <span>API</span>
        </router-link>

        <!-- Sign In -->
        <a class="nav-link sign-in" uk-toggle="target: #signin-modal">
          <UserIcon class="icon-xs" />
          <span>Sign in</span>
        </a>

        <!-- Signed In -->
        <!-- <a class="nav-link" uk-toggle="target: #signin-modal">
          <UserIcon class="icon-xs" />
          <span>Test User</span>
        </a> -->
      </div>
    </nav>
  </header>


  <!------------------------- Modals ---------------------------->
  <SignInModal />
  <InviteModal />
  <ForgotPasswordModal />
</template>

<script setup>
import { HomeIcon, UserPlusIcon, CodeBracketIcon, UserIcon } from '@heroicons/vue/24/outline'

import SignInModal from '@/components/modals/SignInModal.vue'
import InviteModal from '@/components/modals/InviteModal.vue'
import ForgotPasswordModal from '@/components/modals/ForgotPasswordModal.vue'

defineProps({
  hasSidebar: Boolean
})

const emit = defineEmits(['toggle-sidebar'])
</script>

<style scoped>
</style>