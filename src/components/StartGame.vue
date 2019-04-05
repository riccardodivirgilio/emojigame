<template>
  <div class="hello">
    <h1>{{ solution }}</h1>
    <form action="/aaa">
      <input v-model='answer'/>
      <router-link :to="url">Go</router-link>
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
      answer: '😂😭'
    }
  },
  computed: {
    url: function() {
      return '/' + dumps({'a': this.answer, 's': this.solution})
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
