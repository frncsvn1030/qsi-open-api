<template>
  <PlainModal id="invite-modal" title="API Playground Admin">
    <div class="section section--has-bg">
      <h6 class="title uk-margin-remove" style="font-size: 18px;">Invite</h6>
      <form class="form">
        <div class="form-section">
          <div class="form-input">
            <label>
              Brand <!-- <span class="required">*</span> -->
            </label>
            <select class="uk-select select">
              <option value="" disabled selected>Select an option</option>
              <option value="Basic Sublimated">PROLOOK</option>
            </select>
          </div>
          <div class="form-input">
            <label>
              Email <!-- <span class="required">*</span> -->
            </label>
            <div class="form-control">
              <input class="uk-input input" type="email" placeholder="Email" />
              <span class="form-validation">Validation text here.</span>
            </div>
          </div>
        </div>

        <div class="form-actions uk-child-width-expand">
          <button class="uk-button button button--primary" type="submit" disabled>Send Invite</button>
        </div>
      </form>
    </div>
  </PlainModal>
</template>

<script setup>
import PlainModal from './PlainModal.vue';
</script>

<style scoped>
</style>