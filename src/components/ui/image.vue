<template>
<v-carousel :cycle="false" style="width: 350px; height: 250px">
  <v-carousel-item style="width:350px; height: 250px" v-for="(image, index) in item.images" :key="i" :src="image">
  </v-carousel-item>
</v-carousel>
</template>

<script>
export default {
  props: ['item'],
  data(){
    return{
    }
  }
}
</script>

<style lang='scss'>
@mixin imageListSize($w:350px, $h:350px){
  width: $w;
  height: $h;
}

.v-window__container {
  * {
    @include imageListSize(350px, 250px);
  }
}

.v-carousel__prev, .v-carousel__next {
  @include imageListSize(46px, 46px);
}
</style>
