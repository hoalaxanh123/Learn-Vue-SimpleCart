<template>
  <div>
    <div class="header">V Shop</div>
    <product-page
      :product="product"
      :cart-counter="cartCounter"
      @handle-buy="handleBuy"
    />
    <comment-page />
  </div>
</template>

<script lang="ts">
import CommentPage from './components/CommentPage.vue'
import ProductPage from './components/ProductPage.vue'
import { reactive, ref, Ref } from 'vue'
import { ProductType, Product } from './classes/product'

export default {
  components: { CommentPage, ProductPage },
  setup() {
    const productInfo = new Product(
      'Vue Mastery Shock',
      5,
      0,
      ['80% natural cotton.', '20% polyester', 'Gender-neutral'],
      [
        new ProductType('Green', 'green', 'Eslint.png'),
        new ProductType('Black', 'black', 'ts.png'),
      ]
    )

    const product = reactive(productInfo)
    const cartCounter = ref(0)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBuy = (args: Array<any>) => {
      const quantity: number = args[0]
      const item: string = args[1]
      const type: ProductType = args[2]
      if (cartCounter.value + quantity > 20) {
        alert('Maximum items is 20!')
      } else {
        cartCounter.value = cartCounter.value + quantity
        product.stock = product.stock - quantity
        alert(
          `Added ${quantity} item named ${item} (${type.label}) into your cart!`
        )
      }
    }
    return { product, cartCounter, handleBuy }
  },
}
</script>

<style scoped></style>
