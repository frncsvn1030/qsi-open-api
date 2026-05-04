<template>
   <div class="layout-wrap">
        <!------------------------- Sidebar ---------------------------->
         <Sidebar :open="sidebarOpen" @close-sidebar="closeSidebar" />

         <!------------------------- Header + Main Content (Wrapped inside .body-wrap class) ---------------------------->
         <div class="body-wrap">

            <Header has-sidebar="true" @toggle-sidebar="toggleSidebar" />

            <main class="main-content" uk-height-viewport="offset-top: true;">
                <slot />
            </main>

        </div> 
        
        <!------------------------- Modals ---------------------------->
        <SignInModal/>
        <InviteModal/>
        <ForgotPasswordModal/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import Header from '@/layouts/Header.vue'
import Sidebar from '@/layouts/Sidebar.vue'

import SignInModal from '@/components/modals/SignInModal.vue';
import InviteModal from '@/components/modals/InviteModal.vue';
import ForgotPasswordModal from '@/components/modals/ForgotPasswordModal.vue';


// Sidebar script
const sidebarOpen = ref(true)

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
    sidebarOpen.value = false
}

onMounted(() => {
    // Desktop sidebar default open, mobile closed
    if (window.innerWidth < 768) {
        sidebarOpen.value = false
    }
})
</script>