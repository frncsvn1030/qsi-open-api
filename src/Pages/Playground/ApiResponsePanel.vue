<template>
  <div class="uk-width-expand@l">
    <div class="card">

      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto uk-width-expand@m">
          <div class="response-bar">
            <!-- 200 OK badge -->
            <span class="status-badge status-badge--success">
              <span class="status-dot"></span>
              200 OK
            </span>

            <div class="divider"></div>

            <!-- Clock / Status -->
            <span class="status-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Status
            </span>

            <div class="divider"></div>

            <!-- File size -->
            <span class="size-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              2.3 KB
            </span>
          </div>
        </div>

        <div class="uk-width-auto@m">
          <button class="uk-button button button--default button--sm uk-margin-xsmall-right">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2"></rect>
              <path d="M5 15V5a2 2 0 0 1 2-2h10"></path>
            </svg>
            Copy
          </button>
          <button class="uk-button button button--default button--sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export
          </button>
        </div>
      </div>

      <!-- switcher tab -->
      <div class="uk-grid-small uk-child-width-1-1" uk-grid>
        <div>
          <ul class="custom-tab uk-tab" uk-tab="connect: #tab-content-2">
            <li class="uk-active"><a href="#">Generated Payload</a></li>
            <li class="uk-active"><a href="#">Response</a></li>
          </ul>
        </div>
        <div>
          <ul id="tab-content-2" class="uk-switcher">
            <li>
              <div class="section">
                <figure class="code-block">
<pre><code class="language-json">{
  "success": true,
  "status": 200,
  "data": {
    "id": 63,
    "brand_style_name": "PINSTRIPE",
    "product_name": "Sublimated Crew Neck Jersey",
    "master_brand": {
      "id": 63,
      "brand": "Perfect Brand",
      "brand_code": "PB"
    }
  }
}

{
  "success": true,
  "status": 200,
  "data": {
    "id": 63,
    "brand_style_name": "PINSTRIPE",
    "product_name": "Sublimated Crew Neck Jersey",
    "master_brand": {
      "id": 63,
      "brand": "Perfect Brand",
      "brand_code": "PB"
    }
  }
}

{
  "success": true,
  "status": 200,
  "data": {
    "id": 63,
    "brand_style_name": "PINSTRIPE",
    "product_name": "Sublimated Crew Neck Jersey",
    "master_brand": {
      "id": 63,
      "brand": "Perfect Brand",
      "brand_code": "PB"
    }
  }
}
</code></pre>
                </figure>
              </div>
            </li>
            <li>
              <div class="section">
                <figure class="code-block">
                  <pre><code class="language-json">Response</code></pre>
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>