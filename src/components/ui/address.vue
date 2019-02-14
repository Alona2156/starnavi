<template>
  <p class="address">{{item.full_address}}</p>
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
.address {
  font-size: 14px;
}
</style>
