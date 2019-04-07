<template>
  <form @submit.prevent>
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
          <template v-if='correct'>👍</template>
          <template v-else>
            <template v-for='w in solution_words'>- </template>?
          </template>
        </h1>
    </div>
    </section>
  </form>
</template>

<script>

import first    from 'rfuncs/functions/first'
import group_by from 'rfuncs/functions/group_by'
import last     from 'rfuncs/functions/last'
import length   from 'rfuncs/functions/length'
import map      from 'rfuncs/functions/map'
import values   from 'rfuncs/functions/values'
import zip      from 'rfuncs/functions/zip'

import {normalize_solution} from '../utils/text'
import total from '../utils/total'

export default {
  props: ['answer', 'solution'],
  data () {
    return {
      proposed: '',
    }
  },
  computed: {
    correct: function() {
      return this.score == 1
    },
    solution_words: function() {
      return normalize_solution(this.solution).split(' ')
    },
    solution_array: function() {
      return normalize_solution(this.solution).split('')
    },
    proposed_array: function() {
      return normalize_solution(this.proposed).split('')
    },
    score_unordered_result: function() {
      //counting number of characters
      const s = group_by(this.solution_array, a => a, group => group.length)
      const p = group_by(this.proposed_array, a => a, group => group.length)

      const maximum = total(values(s))
      const diff    = map((v, k) => Math.max(v - (p[k] || 0), 0), s)
      const value   = total(values(diff))

      return 1 - value / maximum
    },
    score_orderer_result: function() {
      const score = total(map(
        items => 0 + (first(items) == last(items)),
        zip(this.solution_array, this.proposed_array)
      ))

      return score / length(this.solution_array)
    },
    score_letter_number: function() {
      return 1 / (1 + Math.abs(length(this.solution_array) - length(this.proposed_array)))
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

<style scoped>
.progress::-webkit-progress-value {
  transition: all 0.5s ease;
}
</style>