<template>
  <div class="header">
    <div class="header-container">
      <h1 class="main-heading">Team Generator</h1>
      <div class="button-container">
        <nuxt-link to="/generator" class="button">
          Generate Team
        </nuxt-link>
        <nuxt-link to="/about" class="button">
          About
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  .header {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-heading {
    font-size: 3rem
  }

  .header-container {
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;
  }

  .button {
    background-color: rgba(128, 128, 128, 0.37);
    padding: 0.5rem 2rem;
    border-radius: 0.2rem;
    width: 12rem;
    margin: 2rem 1rem;
    
  }
</style>
