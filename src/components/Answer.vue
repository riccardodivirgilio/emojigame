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
        <progress class="progress" :value="score" max="1" :class="score_classes"></progress>
      </div>
    </section>
    <div class="control">
      <input class="input has-text-centered" ref='solution' :class="{'is-success': correct}" type="text" placeholder="Insert solution" v-model='proposed'>
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

import {loads}  from '../utils/base64'
import group_by from 'rfuncs/functions/group_by'
import values   from 'rfuncs/functions/values'
import first    from 'rfuncs/functions/first'
import last     from 'rfuncs/functions/last'
import map      from 'rfuncs/functions/map'

function zip() {
    var args = [].slice.call(arguments);
    var shortest = args.length==0 ? [] : args.reduce(function(a,b){
        return a.length<b.length ? a : b
    });

    return shortest.map(function(_,i){
        return args.map(function(array){return array[i]})
    });
}

export default {
  props: ['answer', 'encoded_solution'],
  data () {
    return {
      proposed: '',
    }
  },
  computed: {
    correct: function() {
      return this.proposed.toLowerCase() == this.solution.toLowerCase()
    },
    solution: function() {
      return loads(this.encoded_solution)
    },
    score_unordered_result: function() {
      //counting number of characters
      const s = group_by(this.solution.split(''), a => a, group => group.length)
      const p = group_by(this.proposed.split(''), a => a, group => group.length)

      const maximum = values(s).reduce((a, b) => a+b)
      const diff    = map((v, k) => Math.max(v - (p[k] || 0), 0), s)
      const value   = values(diff).reduce((a, b) => a+b)

      return 1 - value / maximum
    },
    score_orderer_result: function() {

      const s = this.solution.split('')
      const p = this.proposed.split('')

      const score = map(
        items => 0 + (first(items) == last(items)),
        zip(s, p)
      ).reduce((a, b) => a+b, 0)

      return score / s.length
    },
    score_letter_number: function() {
      return 1 / (1 + Math.abs(this.solution.length - this.proposed.length))
    },
    score: function() {
      return this.score_unordered_result * 0.4 + this.score_orderer_result * 0.4 + this.score_letter_number * 0.2
    },
    score_classes: function() {
      return {
          'is-danger':  this.score <= 0.40, 
          'is-warning': this.score <= 0.99, 
          'is-success': this.score <= 1
      }
    }
  },
  mounted(){
    this.$refs.solution.focus();
  }
}
</script>

<style>
.progress::-webkit-progress-value {
  transition: all 0.5s ease;

}
</style>