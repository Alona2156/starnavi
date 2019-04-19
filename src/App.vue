<template> 
  <div id="app">
      <routing></routing>
      <router-view></router-view>
  </div>
</template>

<script>
import routing from './components/pages/routing.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'routing': routing
  },
  created(){
    this.$store.dispatch('getItems');
  }
}
</script>

<style lang="scss">
@import './components/style/_flex-mixin.scss';

#app {
  @include flex($fxd: column);
  width: 100%;
}
</style>
