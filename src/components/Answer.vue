<template>
  <form>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <h1 class="title">
          {{ answer }}
        </h1>
        <h2 class="subtitle">
          Guess the answer.
        </h2>
      </div>
    </section>
    <div class="control">
      <input class="input" ref='solution' :class="{'is-success': correct}" type="text" placeholder="Insert solution" v-model='proposed'>
    </div>
    <br/>
    <section class="hero has-text-centered" :class="{'is-success': correct}">
      <div class="hero-body">
        <h1 class="title title-correct" style="font-size:80px">
          <span v-if='correct'>👍</span>
          <span v-else>?</span>
        </h1>
    </div>
    </section>
  </form>
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
    correct: function() {
      return this.proposed.toLowerCase() == this.solution.toLowerCase()
    },
    decoded: function() {
      return loads(this.$route.params.dump)
    },
    answer: function() {
      return this.decoded.a
    },
    solution: function() {
      return this.decoded.s
    },
  },
  mounted(){
    this.$refs.solution.focus();
  }
}
</script>

<style>
  .hero.is-success {

  }
</style>