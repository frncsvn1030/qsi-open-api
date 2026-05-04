<!-- Home Page -->
 
<template>
  <div class="homepage">

    <Header/>
    <Banner/>

    <!-- Modals -->
    <SignInModal/>
    <InviteModal/>
    <ForgotPasswordModal/>

  </div>
</template>

<script setup>
// Components
import Header from '@/layouts/Header.vue';
import Banner from '@/components/blocks/banners/Banner.vue';

// Modals
import SignInModal from '@/components/modals/SignInModal.vue';
import InviteModal from '@/components/modals/InviteModal.vue';
import ForgotPasswordModal from '@/components/modals/ForgotPasswordModal.vue';
</script>

<style scoped>
</style>