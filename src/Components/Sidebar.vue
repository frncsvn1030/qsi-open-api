<template>
    <aside class="sidebar open" id="sidebar">
        <nav class="sidebar-nav">
            <!-- logo -->
            <div class="sidebar-brand">
                <a href="#">
                    <div class="nav-logo"><img src="/images/logos/qx-logo.png" width="40"></div>
                </a>
                <h4>QSI Open API <span>Playground</span></h4>

                <!-- keep but ignore for now -->
                <button class="sidebar-close" id="sidebarClose" uk-icon="icon: close; ratio: 1.2"></button>
            </div>

            <!-- menu -->
            <ul class="s-section">
                <li>
                    <a class="s-item active" href="#">
                        <span class="left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21a8 8 0 0 0-16 0"/>
                                <circle cx="12" cy="8" r="4"/>
                            </svg>
                            My Profile
                        </span>
                    </a>
                </li>
                <li>
                    <a class="s-item" href="#">
                        <span class="left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="8" cy="8" r="5"/>
                                <path d="M13 8 L21 8"/>
                                <path d="M17 8 L17 11"/>
                                <path d="M20 8 L20 10"/>
                            </svg>
                            Application Token Manager
                        </span>
                    </a>
                </li>
                <li>
                    <a class="s-item" href="#">
                        <span class="left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            Orders
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>

</script>

<style scoped>

</style>