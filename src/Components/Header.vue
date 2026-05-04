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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 10v10h14V10" />
            <path d="M9 21v-6h6v6" />
          </svg>
          <span>Home</span>
        </router-link>

        <!-- Send Invite (Only admin has this) -->
        <a class="nav-link" uk-toggle="target: #invite-modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          <span>Send Invite</span>
        </a>

        <!-- API -->
        <router-link class="nav-link" to="/api-endpoint">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="9" y="14" width="6" height="6" rx="1" />
            <path d="M10 7h4" />
            <path d="M12 10v4" />
          </svg>
          <span>API</span>
        </router-link>

        <!-- Sign In -->
        <a class="nav-link sign-in" uk-toggle="target: #signin-modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="8" r="4" />
          </svg>
          <span>Sign in</span>
        </a>

        <!-- Signed In -->
        <!-- <a class="nav-link" uk-toggle="target: #signin-modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="8" r="4" />
          </svg>
          <span>Test User</span>
        </a> -->
      </div>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  hasSidebar: Boolean
})

const emit = defineEmits(['toggle-sidebar'])
</script>

<style scoped>
</style>