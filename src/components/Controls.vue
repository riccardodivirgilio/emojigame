<template>
  <footer class="card-footer">
    <router-link @click.native='on_random_click' :to='random_url' class="card-footer-item">
      Play Random
    </router-link>
    <slot></slot>
  </footer>
</template>

<script>

import examples from '@/utils/examples'

import random_choice from 'rfuncs/functions/random_choice'
import keys          from 'rfuncs/functions/keys'

import {answer_url} from '@/utils/urls'

function new_random_url() {
    const choice = random_choice(keys(examples))
    return answer_url(choice, examples[choice])
}

export default {
  data: () => ({
    random_url: new_random_url()
  }),
  methods: {
    on_random_click: function() {
        this.random_url = new_random_url()
    }
  }
}
</script>
