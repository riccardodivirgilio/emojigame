<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">
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
  </section>

</template>

<script>
export default {
  name: 'EmojiGame'
}
</script>

<style>

  .logo a {
    color: black;
    font-size:45px;
  }
</style>