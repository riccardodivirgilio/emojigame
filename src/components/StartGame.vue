<template>
  <div class="hello">
    <form action="/aaa">
      <input v-model='solution'/>
      <input v-model='answer'/>
      <router-link :to="url">Go</router-link>
      <br/>
      <ul class="proposals">
        <li v-for="answer, solution in proposals">
          <router-link :to="get_url(solution, answer)">
            {{ solution }} {{ answer }}
          </router-link>
        </li>
      </ul>
    </form>
  </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
