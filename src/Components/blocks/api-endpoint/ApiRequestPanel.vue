<template>
  <div class="uk-width-1-2@l">
    <div class="card">
      <!-- request url -->
      <div class="section">
        <h4 class="title">Request URL</h4>

        <form class="form">
          <div class="uk-flex uk-flex-middle">
            <div 
              class="uk-width-auto uk-margin-small-right" 
              style="position: relative; display: inline-flex; align-items: center;"
            >
              <select
                class="uk-button button button--soft"
                style="appearance: none; -webkit-appearance: none; padding: 0 34px 0 9px; text-transform: uppercase;"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
              </select>

              <!-- Chevron icon -->
              <svg style="position: absolute; right: 12px; pointer-events: none;"
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.2"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>

            <div class="uk-width-expand">
              <input
                class="uk-input input"
                type="text"
                value="https://api.example.com/api/v1/auth/login"
                readonly
              />
            </div>
          </div>

          <div>
            <button class="uk-button button button--primary uk-width-1-1">
              <ArrowRightIcon class="icon-sm" />
              Send
            </button>
          </div>
        </form>
      </div>

      <!-- switcher tab -->
      <div class="uk-grid-small uk-child-width-1-1 uk-margin" uk-grid>
        <div>
          <ul class="custom-tab uk-tab" uk-tab="connect: #tab-content">
            <li class="uk-active"><a href="#">Body</a></li>
            <li><a href="#">Query Params</a></li>
            <li><a href="#">Headers</a></li>
          </ul>
        </div>
        <div>
          <ul id="tab-content" class="uk-switcher">
            <li>
              <!-- order item scenario -->
              <div class="section section--has-bg">
                <h4 class="title">Order Item Scenario</h4>

                <form class="uk-flex uk-flex-middle">
                  <div class="uk-width-expand@m uk-margin-small-right">
                    <select class="uk-select select">
                      <option value="" disabled selected>Select an option</option>
                      <option value="Basic Sublimated">Basic Sublimated</option>
                      <option value="Basic Twill">Basic Twill</option>
                      <option value="Basic Logos">Basic Logos</option>
                      <option value="Style with Add-ons">Style with Add-ons</option>
                    </select>
                  </div>
                  <div class="uk-width-auto@m">
                    <button class="uk-button button button--primary uk-width-1-1">Add Item</button>
                  </div>
                </form>
              </div>

              <!-- will be shown when the user added an order item scenario -->
              <div class="uk-margin">
                <!-- order information -->
                <div class="form-section is-row">
                  <div class="form-section__header">
                    <h4 class="title uk-margin-remove">Order Information</h4>
                    <hr>
                  </div>

                  <ul class="uk-list uk-margin-remove">
                    <li>
                      <div class="form-input">
                        <label>Client</label>
                        <div class="form-control">
                          <input class="uk-input input" type="text" placeholder="Enter Client" />
                          <span class="form-validation">Validation text here.</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="form-input">
                        <label>Rep ID</label>
                        <div class="form-control">
                          <input class="uk-input input" type="text" placeholder="Enter Rep ID" />
                          <span class="form-validation">Validation text here.</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="form-input">
                        <label>PO Number</label>
                        <div class="form-control">
                          <input class="uk-input input" type="text" placeholder="Enter PO Number" />
                          <span class="form-validation">Validation text here.</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="form-input">
                        <label>ID Number</label>
                        <div class="form-control">
                          <input class="uk-input input" type="text" placeholder="Enter ID Number" />
                          <span class="form-validation">Validation text here.</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <!-- order items/ part -->
                <div class="uk-margin">
                  <div class="form-section__header">
                    <h4 class="title uk-margin-remove">Order Items/ Part</h4>
                    <hr>
                  </div>

                  <div class="section section--has-bg">

                    <!-- item card #1 (duplicate for multiple) -->
                    <div class="card">
                      <div class="form-section is-row">
                        <div class="form-section__header">
                          <div class="header-top">
                            <div>
                              <h5 class="title">Basic Sublimated</h5>
                              <span class="meta">Item #1</span>
                            </div>
                            <button class="uk-button button button--remove button--xs">
                              <TrashIcon class="icon-xs" />
                              Remove
                            </button>
                          </div>
                          <hr>
                        </div>

                        <ul class="uk-list uk-margin-remove">
                          <li>
                            <div class="form-input">
                              <label>Item ID</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Item ID"/>
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Line Item ID</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Line Item ID" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Brand Style ID</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Brand Style ID" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Description</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Description" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Enter Type</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Type" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Design Sheet</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Design Sheet" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Application Type</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter Application Type" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>SKU</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter SKU" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>ID</label>
                              <div class="form-control">
                                <input class="uk-input input is-sm" type="text" placeholder="Enter ID" />
                                <span class="form-validation">Validation text here.</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="form-input">
                              <label>Rosters</label>
                              <div class="roster-trigger" uk-toggle="target: #roster-modal">
                                <span id="rosterDisplay" class="roster-placeholder">Select Rosters</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- clear/ generate payload buttons -->
                <div class="uk-grid uk-grid-small" uk-grid>
                  <div class="uk-width-1-2@l">
                    <button class="uk-button button button--default uk-width-1-1" type="button">
                      Clear
                    </button>
                  </div>

                  <div class="uk-width-1-2@l">
                    <button class="uk-button button button--primary uk-width-1-1" type="submit">
                      Generate Payload
                    </button>
                  </div>
                </div>

                <hr>

                <!-- trigger webhook -->
                <div class="trigger-webhook">
                  <label>Trigger Webhook: </label>
                  <div class="group-buttons uk-child-width-expand">
                    <button class="uk-button button button--soft button--md" type="submit">Approve</button>
                    <button class="uk-button button button--soft button--md" type="submit">Artwork</button>
                    <button class="uk-button button button--soft button--md" type="submit">Factory</button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="form-section__header">
                <h4 class="title">Query Params</h4>
                <hr>
              </div>
            </li>
            <li>
              <div class="form-section__header">
                <h4 class="title">Order Information</h4>
                <hr>
              </div>

              <div class="card uk-padding-remove uk-margin">
                <div class="table-wrapper">
                  <table class="table">
                    <thead>
                      <tr class="table-header">
                        <th class="col-label">Col #1</th>
                        <th class="col-label">Col #2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-row">
                        <td class="cell">Sample</td>
                        <td class="cell">Sample</td>
                      </tr>
                      <tr class="table-row">
                        <td class="cell">Sample</td>
                        <td class="cell">Sample</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Roster Modal -->
    <RosterModal />
  </div>
</template>

<script setup>
import { ArrowRightIcon, TrashIcon } from '@heroicons/vue/24/outline'

import RosterModal from '@/components/modals/RosterModal.vue'
</script>