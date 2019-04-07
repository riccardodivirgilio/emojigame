<template>
  <div class="app container">
    <div class="columns is-gapless">
      <div class="column"></div>
      <div class="column is-half">
        <br class='is-hidden-mobile'/>
        <br class='is-hidden-mobile'/>
        <div class="card">
          <header class="card-header">
            <router-link to="/" class="card-header-title" style="text-align: center; display: block; font-size: 35px">The Emoji Game</a></router-link>
          </header>
          <router-view/>
        </div>
        <footer class="has-text-grey has-text-centered">
          <br/>
          <small>
              Made with ❤️ in 🇮🇹
              by <a href='https://github.com/riccardodivirgilio' target='_blank'>@riccardodivirgilio</a>
              and <a href='https://github.com/andreacat' target='_blank'>@pinoli</a>.
          <br/>
          Follow on <a href='https://github.com/riccardodivirgilio/emojigame' target='_blank'>Github</a>.
          </small>
        </footer>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmojiGame'
}
</script>

<style lang='sass'>

$primary: #3273dc
$body-background-color: #f9f9f9
$progress-bar-background-color: white

@import 'bulma/bulma.sass'

.app > .columns > .column 
  padding-top: 0px

.logo a
  color: black
  font-size: 45px
  
</style>