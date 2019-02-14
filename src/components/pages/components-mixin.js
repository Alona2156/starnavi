import Area from '../ui/area.vue';
import Price from '../ui/price.vue';
import Address from '../ui/address.vue';
import Image from '../ui/image.vue';

export const Components = {
  computed: {
    items(){
      return this.$store.state.items;
    }
  },
  components: {
    'area-ui': Area,
    'price-ui': Price,
    'address-ui': Address,
    'image-ui': Image
  }
}
