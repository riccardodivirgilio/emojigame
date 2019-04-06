<template>
  <form>
    <br/>
    <div class="field">

      <div class="columns is-gapless is-mobile" style="margin-bottom: 7px">
        <div class="column"><label class="label">Pick the word</label></div>
        <div class="column has-text-right"><label class="label">Pick the emoji</label></div>
      </div>

      
      
      <div class="control">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input ref="solution" class="input" type="text" placeholder="Insert solution" v-model='solution'>
          </div>
          <div class="control">
            <button class="button is-static">
              &rarr;
            </button>
          </div>
          <div class="control">
            <input ref="answer" class="input" :class="{'is-danger': invalid_input}" type="text" placeholder="Insert answer" v-model='answer' @keyup="on_answer_input">
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="field">
      <label class="label">Share the URL!</label>
      <div class="control">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input ref="url" class="input" type="text" :value='absolute_url' :disabled='invalid_url'>
          </div>
          <div class="control">
            <button class="button is-info" @click='on_copy_click' :disabled='invalid_url'>
              COPY
            </button>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="control has-text-centered">
      <button v-if='invalid_url' class="button is-fullwidth is-medium" :to="url" disabled>Go</button>
      <router-link v-else class="button is-primary is-fullwidth is-medium" :to="url">Go</router-link>
    </div>
    <br/>
    <ul class="proposals">
      <li v-for="answer, solution in proposals">
        <router-link :to="get_url(solution, answer)">
          {{ solution }} {{ answer }}
        </router-link>
      </li>
    </ul>
  </form>
</template>

<script>

import {dumps} from '../utils/encode'
import copy from 'copy-to-clipboard'

export default {
  name: 'HelloWorld',
  data () {
    return {
      stokazzo: 2,
      solution: 'Hotel California',
      answer: '😂😭',
      proposals: {
        'pompiere':   '😅🤩',
        'IT':    '🤡',
        'di maio':    '🤟🏼',
        'cicciolina': '😂😭',
      }
    }
  },
  methods: {
    get_url: function(solution, answer) {
      return '/' + dumps({'a': answer, 's': solution})
    },
    on_answer_input: function() {
      this.answer = this.filtered
    },
    on_copy_click: function() {
      copy(this.absolute_url);
    }
  },
  computed: {
    url: function() {
      return this.get_url(this.solution, this.answer)
    },
    absolute_url: function() {
      const url = document.createElement('a')
      url.setAttribute('href', this.url)
      return url.href
    },
    filtered: function() {
      return  this.answer.replace(/[\u2190-\u21FF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u3000-\u303F]|[\u1F300-\u1F64F]|[\u1F680-\u1F6FF]/g, "").trim();
    },
    invalid_input: function() {
      return this.filtered !== this.answer
    },
    invalid_url: function() {
      return ! this.answer || ! this.solution
    }
  },
  mounted(){
    this.$refs.answer.focus();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

form {

}

</style>
