<template>
  <div class="field">
    <label class="label">Share the URL!</label>
    <div class="control">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input ref="url" class="input is-small has-text-grey is-family-monospace" type="text" :value='absolute_url' readonly>
        </div>
        <div class="control">
          <button class="button is-small" @click.prevent='on_copy_click'>
            COPY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import copy from 'copy-to-clipboard'

export default {
  props: ['url'],
  methods: {
    on_copy_click: function() {
      copy(this.absolute_url);
    },
  },
  computed: {
    absolute_url: function() {
      const url = document.createElement('a')
      url.setAttribute('href', '/')
      if (this.url) {
        return url.href.slice(0, -1) + this.url
      }
      return url.href
    },
  },
}
</script>
