<template>
  <form @submit.prevent='on_form_submit'>
    <div class='card-content'>
      <p>Make your friends guess what's behind the emojis!</p>
      <div class="content is-small">
        <ol>
          <li>Pick something to guess.</li>
          <li>Choose the emojis that best describe it.</li>
          <li>Share the link and make your friends go crazy!</li>
        </ol>
      </div>
      <div class="field">
        <div class="columns is-gapless is-mobile" style="margin-bottom: 7px">
          <div class="column"><label class="label">1. Pick the word</label></div>
          <div class="column has-text-right"><label class="label">2. Pick the emoji</label></div>
        </div>
        <div class="control">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input ref="solution" class="input has-text-centered" type="text" :placeholder="solution_suggestion" v-model='solution'>
            </div>
            <div class="control is-hidden-mobile">
              <button class="button is-static">
                &rarr;
              </button>
            </div>
            <div class="control">
              <input ref="answer" class="input has-text-centered" :placeholder="is_searching ? '' : answer_suggestion" :class="{'is-danger': invalid_input}" type="text" v-model='answer' @blur="on_answer_blur" @focus='is_searching = true'>
            </div>
          </div>
        </div>
      </div>
      <div class="emoji-controls">
        <div class="buttons has-addons is-fullwidth is-centered">
          <a class="button is-radiusless" :title='name' v-show='is_emoji_visible(emoji)' v-for='emoji, name in emojis' @click.prevent='on_click_emoji(emoji)'>
            <span class="icon">{{ emoji }}</span>
          </a>
        </div>
      </div>
      <br/>
      <Share :url='url' label='3. Share the link!'/>
    </div>
    <Controls>
      <router-link :to='url' class="card-footer-item has-background-primary has-text-white">
        Go &rarr;
      </router-link>
    </Controls>
  </form>
</template>

<script>

import Share           from '@/components/Share'
import Controls        from '@/components/Controls'

import {remove_text, remove_emoji, normalize_solution} from '../utils/text'
import {answer_url}    from '@/utils/urls'
import emoji           from '@/utils/emoji'
import random          from '@/utils/random'
import examples        from '@/utils/examples'

import map             from 'rfuncs/functions/map'
import length          from 'rfuncs/functions/length'
import values          from 'rfuncs/functions/values'
import first           from 'rfuncs/functions/first'
import keys            from 'rfuncs/functions/keys'
import filter          from 'rfuncs/functions/filter'

export default {
  components: {Share, Controls},
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
      this.is_searching = false
      setTimeout(
        () => this.answer = this.filtered,
        125
      )
    },
    on_form_submit: function () {
      this.$router.push(this.url)
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
    filtered: function() {
      return remove_text(this.answer)
    },
    invalid_input: function() {
      return this.filtered !== this.answer
    },
    emoji_query: function() {
      return emoji.search(remove_emoji(this.answer))
    },
    search_results: function() {
      return emoji.search(this.solution)
    },

    solution_suggestion: function() {
      return random.choice(['Scream', 'Guns and Roses', 'Twin peaks'])
      return random.choice(keys(examples))
    },
    answer_suggestion: function() {

      if (! this.solution) {
        return examples[this.solution_suggestion]
      }

      const query  = normalize_solution(this.solution)
      const words  = query.split(' ')

      if (! query) {return ''}

      return map(d => d.emoji, filter(a => a, map(w => first(emoji.search(w + '* ' + w)), words))).join('')

    }
  },
  //mounted(){
  //  this.$refs.solution.focus();
  //}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emoji-controls {
  height: 128px;
  overflow-y: scroll;
}
</style>