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
        <input ref="answer" class="input is-success" type="text" placeholder="Insert answer" v-model='answer'>
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

export default {
  name: 'HelloWorld',
  data () {
    return {
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
    }
  },
  computed: {
    url: function() {
      return this.get_url(this.solution, this.answer)
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

</style>
