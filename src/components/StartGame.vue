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
            <input ref="solution" class="input has-text-centered" type="text" :placeholder="solution_suggestion" v-model='solution'>
          </div>
          <div class="control">
            <button class="button is-static">
              &rarr;
            </button>
          </div>
          <div class="control">
            <input ref="answer" class="input has-text-centered" :placeholder="answer_suggestion" :class="{'is-danger': invalid_input}" type="text" v-model='answer' @blur="on_answer_blur">
          </div>
        </div>
      </div>
    </div>
    <div class="emoji-controls">
      <div class="buttons">
        <a class="button is-small" :title='name' v-show='is_emoji_visible(emoji)' v-for='emoji, name in emojis' @click.prevent='on_click_emoji(emoji)'>
          <span class="icon is-small">{{ emoji }}</span>
        </a>
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

import {remove_text, remove_emoji, normalize_solution} from '../utils/text'
import {answer_url}    from '../utils/urls'
import emoji           from '../utils/emoji'

import copy            from 'copy-to-clipboard'
import map             from 'rfuncs/functions/map'
import length          from 'rfuncs/functions/length'
import values          from 'rfuncs/functions/values'
import first           from 'rfuncs/functions/first'
import filter          from 'rfuncs/functions/filter'

export default {
  name: 'HelloWorld',
  data () {
    return {
      solution: '',
      answer: '',
      emojis: emoji.emoji,
      is_searching: false
    }
  },
  methods: {
    on_answer_blur: function() {
      setTimeout(
        () => this.answer = this.filtered,
        125
      )
    },
    on_copy_click: function() {
      copy(this.absolute_url);
    },
    on_click_emoji: function(emoji) {
      this.answer = this.filtered + emoji
    },
    is_emoji_visible: function(emoji) {
      if (length(this.emoji_query)) {
        return this.emoji_query[emoji]
      }
      return true
    }
  },
  computed: {
    url: function() {
      return answer_url(
        this.solution || this.solution_suggestion, 
        this.answer   || this.answer_suggestion,
      )
    },
    absolute_url: function() {
      const url = document.createElement('a')
      url.setAttribute('href', '/')
      return url.href.slice(0, -1) + this.url
    },

    filtered: function() {
      return remove_text(this.answer)
    },
    invalid_input: function() {
      return this.filtered !== this.answer
    },
    invalid_url: function() {
      return false
    },

    emoji_query: function() {
      return emoji.search(remove_emoji(this.answer))
    },
    search_results: function() {
      return emoji.search(this.solution)
    },

    solution_suggestion: function() {
      return 'cow boy'
    },
    answer_suggestion: function() {

      const query  = normalize_solution(this.solution || this.solution_suggestion)
      const words  = query.split(' ')

      if (! query) {return ''}

      return map(d => d.emoji, filter(a => a, map(w => first(emoji.search(w + '* ' + w)), words))).join('')

    }
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

.emoji-controls {
  max-height: 138px;
  overflow-y: scroll;
}

</style>
