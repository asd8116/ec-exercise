<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
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
