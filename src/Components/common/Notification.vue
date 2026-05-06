<template>
  <div class="uk-position-top-right uk-position-small uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l">
    <!-- uk-alert-* / notification-* (success, warning, danger) -->
    <div :class="['uk-padding-small', alertClass]" uk-alert>
      <a class="uk-alert-close" uk-close></a>
      
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <component :is="iconComponent" class="icon-34" style="width: 34px; height: 34px;" />
        </div>
        <div class="uk-width-expand">
          <!--QX Add Class-->
          <div class="title uk-text-capitalize">{{ computedTitle }}</div>
          <!--QX Add Class-->
          <div class="body">
            {{ body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CheckBadgeIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  body: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'warning', 'danger'].includes(value)
  }
})

// Computed for dynamic classes
const alertClass = computed(() => {
  return `uk-alert-${props.type} notification notification-${props.type}`
})

// Icon component based on type
const iconComponent = computed(() => {
  switch (props.type) {
    case 'success':
      return CheckBadgeIcon
    case 'warning':
      return ExclamationTriangleIcon
    case 'danger':
      return XCircleIcon
    default:
      return CheckBadgeIcon
  }
})

// Computed title: use prop if provided, else map type to friendly name
const computedTitle = computed(() => {
  if (props.title) return props.title
  switch (props.type) {
    case 'success':
      return 'Success'
    case 'warning':
      return 'Warning'
    case 'danger':
      return 'Error'
    default:
      return 'Notification'
  }
})
</script>