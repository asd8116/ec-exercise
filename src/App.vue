<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <a href="#">12345</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`

    console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH)
    this.$http.get(api).then(response => {
      console.log(response.data)
    })
  }
}
</script>

<style lang="scss">
@import './scss/all';
</style>
