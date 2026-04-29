<template>
  <PlainModal id="roster-modal" title="Select Rosters">
    <!-- Adult Sizes -->
    <div class="size-section">
      <p class="size-section__heading">Adult Sizes</p>
      <div class="pill-group">
        <button
          v-for="size in adultSizes"
          :key="size"
          class="pill"
          :class="{ active: selectedSizes.includes(size) }"
          @click="toggleSize(size)"
        >
          {{ size }}
        </button>
      </div>

      <div class="form-input">
        <label>Custom size (optional)</label>
        <input
          v-model="customAdultSize"
          type="text"
          class="uk-input input is-sm"
          placeholder="e.g., 6XL, Custom"
        />
        <span class="form-validation">Text Validation.</span>
      </div>
    </div>

    <!-- Youth Sizes -->
    <div class="size-section">
      <p class="size-section__heading">Youth Sizes</p>
      <div class="pill-group">
        <button
          v-for="size in youthSizes"
          :key="size"
          class="pill"
          :class="{ active: selectedSizes.includes(size) }"
          @click="toggleSize(size)"
        >
          {{ size }}
        </button>
      </div>

      <div class="form-input is-error">
        <label>Custom size (optional)</label>
        <input
          v-model="customYouthSize"
          type="text"
          class="uk-input input is-sm"
          placeholder="e.g., Y2XL, Custom"
        />
        <span class="form-validation">Please enter a valid adult size.</span>
      </div>
    </div>

    <div class="uk-grid uk-grid-small uk-child-width-1-2@m" uk-grid>
      <div>
        <button class="uk-button button button--default uk-width-1-1 uk-modal-close">Cancel</button>
      </div>
      <div>
        <button class="uk-button button button--primary uk-width-1-1 uk-modal-close" @click="updateAndClose">Add</button>
      </div>
    </div>
  </PlainModal>
</template>

<script setup>
import { ref } from 'vue'
import PlainModal from './PlainModal.vue'

// Adult and youth sizes data
const adultSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']
const youthSizes = ['YS', 'YM', 'YL', 'YXL']

// Reactive data
const selectedSizes = ref([])
const customAdultSize = ref('')
const customYouthSize = ref('')

// Methods
const toggleSize = (size) => {
  const index = selectedSizes.value.indexOf(size)
  if (index > -1) {
    selectedSizes.value.splice(index, 1)
  } else {
    selectedSizes.value.push(size)
  }
}

const updateRosterDisplay = (sizes) => {
  const display = document.getElementById('rosterDisplay')
  const trigger = display?.parentElement

  if (display && trigger) {
    if (sizes.length > 0) {
      display.textContent = sizes.join(', ')
      display.classList.remove('roster-placeholder')
      trigger.classList.add('has-value')
    } else {
      display.textContent = 'Select Rosters'
      display.classList.add('roster-placeholder')
      trigger.classList.remove('has-value')
    }
  }
}

const updateAndClose = () => {
  const allSelectedSizes = [...selectedSizes.value]

  // Add custom sizes
  if (customAdultSize.value.trim()) {
    allSelectedSizes.push(customAdultSize.value.trim())
  }
  if (customYouthSize.value.trim()) {
    allSelectedSizes.push(customYouthSize.value.trim())
  }

  // Update display with selected sizes
  updateRosterDisplay(allSelectedSizes)

  // Close modal using UIkit
  if (window.UIkit) {
    window.UIkit.modal('#roster-modal').hide()
  }
}
</script>

<style scoped>
</style>