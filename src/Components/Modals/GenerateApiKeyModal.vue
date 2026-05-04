<template>
    <PlainModal id="generate-api-key-modal" title="Generate API Key">
        <form class="form">
            <div class="form-section">
                <div class="form-input">
                    <label>
                        Application/ API Key Name <!-- <span class="required">*</span> -->
                    </label>
                    <div class="form-control">
                        <input class="uk-input input" type="text" placeholder="Application/ API Key Name" />
                        <span class="form-validation">Validation text here.</span>
                    </div>
                </div>
                <div class="form-input">
                    <label>
                        Environment <!-- <span class="required">*</span> -->
                    </label>
                    <div class="form-control">
                        <select class="uk-select select">
                            <option value="" disabled selected>Select an option</option>
                            <option value="Staging">Staging</option>
                            <option value="Production">Production</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-actions uk-child-width-expand">
                <button class="uk-button button button--primary" type="submit">Create Key</button>
            </div>
        </form>
    </PlainModal>
</template>

<script setup>
import PlainModal from './PlainModal.vue';
</script>