<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <!------------------------- Modals ---------------------------->
    <SignInModal />
    <InviteModal />
    <ForgotPasswordModal />
  </div>
</template>

<script setup>
import Header from '@/layouts/Header.vue'

import SignInModal from '@/components/modals/SignInModal.vue'
import InviteModal from '@/components/modals/InviteModal.vue'
import ForgotPasswordModal from '@/components/modals/ForgotPasswordModal.vue'
</script>