<template>
  <section class="section">
    <div class="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">


          <div class="card">
            <header class="card-header">
              <router-link to="/" class="card-header-title" style="text-align: center; display: block; font-size: 35px">The Emoji Game</a></router-link>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <router-view/>
              </div>
            </div>
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
