<template>
  <div id="app">
    <Head></Head>
    <tudo></tudo>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Head from "./components/Head"
import Footer from "./components/Footer"
import tudo from "./components/tudo"
export default {
  components:{
    Head,
    tudo,
    Footer
  },
  name: 'App'
}
</script>

<style scoped>
#app {
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
