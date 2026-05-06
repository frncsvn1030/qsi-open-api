<template>
    <div class="section section--has-border" :hidden="isHidden">
        <div class="uk-grid-small uk-child-width-1-2" uk-grid>
            <div class="uk-width-expand">
                <ul class="uk-list uk-margin-remove">
                    <li v-for="apiKey in apiKeys" :key="apiKey.label">
                        <div class="form-input">
                            <label>{{ apiKey.label }}</label>
                            <div class="form-input-action">
                                <div class="form-control">
                                    <input
                                        class="uk-input input"
                                        :class="{ 'is-md': apiKey.label === 'Secret' }"
                                        :type="showKeys ? 'text' : 'password'"
                                        :value="apiKey.value"
                                        readonly
                                    />
                                    <span class="form-validation">{{ apiKey.validation }}</span>
                                </div>
                                <div>
                                    <button
                                        class="uk-button button button--default"
                                        @click="apiKey.buttonText === 'View' ? toggleVisibility() : null"
                                    >
                                        {{ apiKey.buttonText }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="uk-width-auto">
                <label class="toggle toggle-lg">
                    <input type="radio" :name="toggleName">
                    <span></span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    apiKeys: {
        type: Array,
        required: true
    },
    toggleName: {
        type: String,
        required: true
    },
    isHidden: {
        type: Boolean,
        default: false
    }
});

const showKeys = ref(false);

const toggleVisibility = () => {
    showKeys.value = !showKeys.value;
};
</script>