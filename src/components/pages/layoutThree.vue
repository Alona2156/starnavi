<template>
  <div class="main">
    <div class="property" v-for="item in items">
      <address-ui v-bind:item="item" class="addressTop"></address-ui>
      <image-ui v-bind:item="item"></image-ui>
      <price-ui v-bind:item="item" class="priceOnImage"></price-ui>
      <area-ui v-bind:item="item" class="areaBottom"></area-ui>
    </div>
  </div>
</template>

<script>
import {Components} from './components-mixin.js';

export default {
  mixins: [Components],
  data(){
    return {
    }
  }
}
</script>

<style lang='scss'>
@import '../style/_property-style.scss';
@import '../style/_main-style.scss';
@import '../style/_flex-mixin.scss';

.addressTop {
  height: 50px;
  @include flex($jc: flex-start);
}

.priceOnImage {
  position: absolute !important;
  margin-top: -250px !important;
  color: white;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: black;
  }
}

.areaBottom {
  margin-top: 10px !important;
}
</style>
