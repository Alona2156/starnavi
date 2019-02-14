<template>
  <div id="menu">
    <router-link class="route" v-for="route in routes" :to="route.url" v-bind:class="{'selected': selected === route.title}" @click.native="chooseRoute(route)">{{route.title}}</router-link>
  </div>
</template>

<script>

export default {
  data(){
    return {
      selected: 'Default',
      routes: [
        {url: '/', title: 'Default'},
        {url: '/custom', title: "Custom"},
        {url: '/nested', title: 'Nested'}
      ]
    }
  },
  methods: {
    chooseRoute(route){
      this.selected = route.title;
    }
  }
}
</script>

<style lang="scss">
@import '../style/_colors.scss';
@import '../style/_flex-mixin.scss';

  #menu {
    margin-top: 20px;
    width: 100%;
    @include flex();
  }

  #menu > a {
      padding: 3px 8px;
      border: 2px solid $green;
      cursor: pointer;
      letter-spacing: 1.2px;
      text-decoration: none;
      font-size: 16px;
      margin: 10px;
      font-weight: bold;
  }

  .route {
      background-color: white;
      color: $grey;
  }

  .selected {
    background-color: $green;
    color: white;
  }
</style>
