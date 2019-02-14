<template>
  <p class="price">$ {{item.price | price}}</p>
</template>

<script>
export default {
  props: ['item'],
  data(){
    return{
    }
  },
  filters: {
    price(value){
      return value = value.toLocaleString();
    }
  }
}
</script>

<style lang="scss">
.price {
  font-weight: bold;
}
</style>
