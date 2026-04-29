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
import Header from '@/Components/Header.vue';
import Banner from '@/Pages/HomePage/Banner.vue';

// Modals
import SignInModal from '@/Components/Modals/SignInModal.vue';
import InviteModal from '@/Components/Modals/InviteModal.vue';
import ForgotPasswordModal from '@/Components/Modals/ForgotPasswordModal.vue';
</script>

<style scoped>
</style>