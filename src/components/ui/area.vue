<template>
<p class="area" v-if='item.area'>{{item.area}} кв.м</p>
<p class="area" v-else-if='item.rating'>{{item.rating}} кв.м</p>
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

<style lang="scss">
.area {
  font-size: 14px;
}
</style>
