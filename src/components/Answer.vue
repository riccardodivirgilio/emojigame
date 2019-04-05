<template>
  <div class="hello">
    <h1>{{ answer }}</h1>
    <input v-model='proposed'/>
    <br/>
    <p v-if="proposed.toLowerCase() == solution.toLowerCase()">GRANDE</p>
  </div>
</template>

<script>

import {loads} from '../utils/encode'

export default {
  name: 'HelloWorld',
  data () {
    return {
      proposed: '',
    }
  },
  computed: {
    decoded: function() {
      return loads(this.$route.params.dump)
    },
    answer: function() {
      return this.decoded.a
    },
    solution: function() {
      return this.decoded.s
    },
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
