<template>
  <section class="section">
    <div class="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">
          <div class="emojigame box">
            <div class="logo has-text-centered">
              <router-link to="/">The Emoji Game</a></router-link>
            </div>
            <router-view/>
          </div>
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
  .emojigame {
  }
  .logo a {
    color: black;
    font-size:45px;
  }
</style>
