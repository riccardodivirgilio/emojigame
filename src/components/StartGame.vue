<template>
  <form>
    <div class="field">
      <label class="label">Solution</label>
      <div class="control">
        <input ref="solution" class="input" type="text" placeholder="Insert solution" v-model='solution'>
      </div>
    </div>
    <div class="field">
      <label class="label">Answer</label>
      <div class="control">
        <input ref="answer" class="input" :class="{'is-danger': error}" type="text" placeholder="Insert answer" v-model='answer' @keyup="on_answer_input">
      </div>
    </div>
    <br/>
    <div class="control has-text-centered">
      <router-link class="button is-primary is-fullwidth is-medium" :to="url">Go</router-link>
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
import emojiRegex from 'emoji-regex'

const regex = emojiRegex();

export default {
  name: 'HelloWorld',
  data () {
    return {
      stokazzo: 2,
      solution: 'stokazzo',
      answer: '😂😭',
      proposals: {
        'pompiere':   '😅🤩',
        'salvini':    '🤡',
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
    }
  },
  computed: {
    url: function() {
      return this.get_url(this.solution, this.answer)
    },
    filtered: function() {
      return  this.answer.replace(/[\u2190-\u21FF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u3000-\u303F]|[\u1F300-\u1F64F]|[\u1F680-\u1F6FF]/g, "").trim();
    },
    error: function() {
      return this.filtered !== this.answer
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
