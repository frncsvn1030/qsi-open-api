<template>
    <AppLayout>
        <div class="container-custom">
            <div class="app-token-manager-page">
                <div class="page-header">
                    <h4 class="page-title">Application Token Manager</h4>
                    <p class="page-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nihil
                        dolor impedit.</p>
                </div>

                <!-- Table -->
                <div class="card uk-padding-remove">
                    <div class="toolbar">
                        <!-- Search -->
                        <div class="left">
                            <input class="uk-input input is-sm" type="text" placeholder="Search..." />
                        </div>

                        <!-- Filters -->
                        <div class="right filters">
                            <div class="uk-flex uk-flex-middle">
                                <label class="uk-margin-small-right">Dealer:</label>
                                <select class="uk-select select is-sm">
                                    <option value="">All Dealers</option>
                                </select>
                            </div>
                            <div class="uk-flex uk-flex-middle">
                                <label class="uk-margin-small-right">Brand:</label>
                                <select class="uk-select select is-sm">
                                    <option value="">All Brands</option>
                                    <option value="active">PROLOOK</option>
                                </select>
                            </div>
                            <div class="uk-flex uk-flex-middle">
                                <label class="uk-margin-small-right">Status:</label>
                                <select class="uk-select select is-sm">
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="table-wrapper">
                        <table class="table" style="min-width: 800px;">
                            <thead>
                                <tr class="table-header">
                                    <!-- <th class="ui-col-label">Select</th> -->
                                    <th class="col-label">Dealer</th>
                                    <th class="col-label">Brand</th>
                                    <th class="col-label">App Name</th>
                                    <th class="col-label">App Domain</th>
                                    <th class="col-label">Email</th>
                                    <th class="col-label">Last Used</th>
                                    <th class="col-label">Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in paginatedData" :key="row.appName + row.lastUsed" class="table-row">
                                    <!-- <td class="ui-cell">
                                                <input type="radio" name="row-select" class="ui-radio">
                                            </td> -->
                                    <td class="cell">{{ row.dealer }}</td>
                                    <td class="cell">{{ row.brand }}</td>
                                    <td class="cell">{{ row.appName }}</td>
                                    <td class="cell">{{ row.appDomain }}</td>
                                    <td class="cell">{{ row.email }}</td>
                                    <td class="cell">{{ row.lastUsed }}</td>
                                    <td class="cell">
                                        <label class="toggle toggle-md">
                                            <input type="checkbox" v-model="row.active" name="production-toggle">
                                            <span></span>
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="pagination">
                        <button class="pag-btn" @click="prevPage" :disabled="currentPage === 1">&lt; Prev</button>
                        <span class="pag-info">{{ currentPage }} / {{ totalPages }}</span>
                        <button class="pag-btn" @click="nextPage" :disabled="currentPage === totalPages">Next &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';


// inital script (pagination + table values)
const rowsPerPage = ref(10); // 10 rows per page
const currentPage = ref(1);

const tableData = ref([
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: false },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: true },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: false },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: true },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: false },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: false },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: true },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: true },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: false },
    { dealer: '', brand: 'PROLOOKs', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: false },
    { dealer: '', brand: 'PROLOOK', appName: 'QStrike', appDomain: 'www.example.com', email: 'josh@prolook.com', lastUsed: '2023-10-18 04:19:00', active: true },
]);

const totalPages = computed(() => Math.ceil(tableData.value.length / rowsPerPage.value));

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return tableData.value.slice(start, end);
});

function showPage(page) {
    currentPage.value = page;
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}
</script>