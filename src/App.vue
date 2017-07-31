<template>
  <div id="app">
    <!--<ContentText></ContentText>-->
    <loop-image></loop-image>
  </div>
</template>

<script>
  import Content from './components/Content.vue';
  import loopImage from './components/Carouse.vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components:{
        ContentText:Content,
        loopImage:loopImage
    }
  }
</script>

<style>
</style>
