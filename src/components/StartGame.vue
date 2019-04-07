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
            <input ref="solution" class="input has-text-centered" type="text" placeholder="Psyco" v-model='solution'>
          </div>
          <div class="control">
            <button class="button is-static">
              &rarr;
            </button>
          </div>
          <div class="control">
            <input ref="answer" class="input has-text-centered" :class="{'is-danger': invalid_input}" type="text" v-model='answer' @keyup="on_answer_input">
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
            <input ref="url" class="input is-small has-text-grey is-family-monospace" type="text" :value='absolute_url' :disabled='invalid_url' readonly>
          </div>
          <div class="control">
            <button class="button is-small" @click.prevent='on_copy_click' :disabled='invalid_url'>
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
  </form>
</template>

<script>

import {answer_url}    from '../utils/urls'
import {remove_emojis} from '../utils/text'


//import emoji          from '../utils/emoji'
import copy           from 'copy-to-clipboard'
import map            from 'rfuncs/functions/map'
import length         from 'rfuncs/functions/length'
import values         from 'rfuncs/functions/values'

export default {
  name: 'HelloWorld',
  data () {
    return {
      solution: '',
      answer: '',
      //emoji: emoji.emoji
    }
  },
  methods: {
    on_answer_input: function() {
      this.answer = this.filtered
    },
    on_copy_click: function() {
      copy(this.absolute_url);
    },
    //is_emoji_visible: function(emoji) {
    //  return this.search_results[emoji]
    //}
  },
  computed: {
    url: function() {
      return answer_url(this.solution, this.answer)
    },
    absolute_url: function() {
      const url = document.createElement('a')
      url.setAttribute('href', '/')
      return url.href.slice(0, -1) + this.url
    },
    filtered: function() {
      return  remove_emojis(this.answer)
    },
    invalid_input: function() {
      return this.filtered !== this.answer
    },
    invalid_url: function() {
      return ! this.answer || ! this.solution
    },
    //search_results: function() {
    //  return emoji.search(this.solution)
    //},
    //suggestion: function() {
    //  return map(d => d.emoji, values(this.search_results)).join('')
    //}
  },
  mounted(){
    this.$refs.solution.focus();
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
