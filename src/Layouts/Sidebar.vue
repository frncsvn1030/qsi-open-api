<template>
    <aside class="sidebar" :class="{ open: open }" id="sidebar">
        <nav class="sidebar-nav">
            <!-- logo -->
            <div class="sidebar-brand">
                <a href="#">
                    <div class="nav-logo"><img src="/images/logos/qx-logo.png" width="40"></div>
                </a>
                <h4>QSI Open API <span>Playground</span></h4>

                <!-- keep but ignore for now -->
                <button class="sidebar-close" id="sidebarClose" @click="emit('close-sidebar')">
                    <!-- X -->
                    <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <!-- menus -->

            <!-- api playground -->
            <MenuAccordion /> 

            <!-- account settings -->
            <Menu hidden />
            
        </nav>
    </aside>
</template>

<script setup>
import MenuAccordion from '@/components/blocks/sidebar/MenuAccordion.vue';
import Menu from '@/components/blocks/sidebar/Menu.vue';

defineProps({
  open: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close-sidebar'])
</script>

<style scoped>

</style>