<template>
    <AppLayout>
        <div class="container-custom">
            <div class="orders-page">

                <div class="page-header">
                    <h4 class="page-title">Orders</h4>
                    <p class="page-subtitle">Orders shown on this table are only available for 24 hours.</p>
                </div>

                <div class="uk-grid-small" uk-grid>

                    <!---------- Left Card ---------->
                    <div class="uk-width-1-2@l">
                        <!-- Table -->
                        <div class="card uk-padding-remove">
                            <div class="toolbar">
                                <!-- Search -->
                                <div class="left">
                                    <input class="uk-input input is-sm" type="text" placeholder="Search..." />
                                </div>

                                <div class="right uk-child-width-expand">
                                    <button class="uk-button button button--default">Approve</button>
                                    <button class="uk-button button button--default">Artwork</button>
                                    <button class="uk-button button button--default">Factory</button>
                                </div>
                            </div>

                            <div class="table-wrapper">
                                <table class="table">
                                    <thead>
                                        <tr class="table-header">
                                            <th class="col-label">Select</th>
                                            <th class="col-label">Order #</th>
                                            <th class="col-label">Part #</th>
                                            <th class="col-label">Status #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in paginatedData" :key="index" class="table-row" @click="selectedRow = index">
                                            <td class="cell">
                                                <input type="radio" name="row-select" class="ui-radio" v-model="selectedRow" :value="index">
                                            </td>
                                            <td class="cell">{{ row.orderNumber }}</td>
                                            <td class="cell">{{ row.partNumber }}</td>
                                            <td class="cell">{{ row.status }}</td>
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

                    <!---------- Right Card ---------->
                    <EndpointResponse />
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import EndpointResponse from '@/components/blocks/api-endpoint/ApiResponsePanel.vue';

const rowsPerPage = ref(10);
const currentPage = ref(1);
const selectedRow = ref(null);

const tableData = ref([
    { orderNumber: 'Sample 1', partNumber: 'Sample 1', status: 'Sample 1' },
    { orderNumber: 'Sample 2', partNumber: 'Sample 2', status: 'Sample 2' },
    { orderNumber: 'Sample 3', partNumber: 'Sample 3', status: 'Sample 3' },
    { orderNumber: 'Sample 4', partNumber: 'Sample 4', status: 'Sample 4' },
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