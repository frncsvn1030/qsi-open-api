<script setup>
import SignInModal from '@/components/modals/SignInModal.vue'
import InviteModal from '@/components/modals/InviteModal.vue'
import ForgotPasswordModal from '@/components/modals/ForgotPasswordModal.vue'
</script>

<template>
  <router-view />

  <!------------------------- Modals ---------------------------->
  <SignInModal />
  <InviteModal />
  <ForgotPasswordModal />
</template>

<style scoped></style>
