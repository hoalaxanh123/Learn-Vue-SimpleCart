<template>
  <div class="content">
    <div class="left">
      <div class="img-border">
        <img :src="'/src/assets/' + selectedType.img" :alt="selectedType.img" />
      </div>
    </div>
    <div class="right">
      <div class="product">
        <div class="product-header">
          <h2 class="product-name">{{ product.name }}</h2>
          <button class="btn-cart" @click="handleClickCart">
            Cart ({{ cartCounter }})
          </button>
        </div>
        <div class="product-info">
          <p
            :style="'font-weight:' + (product.stock === 0 ? 'bold' : 'normal')"
          >
            Warehouse:
            {{ product.stock === 0 ? 'Out of stock' : product.stock }}
          </p>
          <p>
            Shipping:
            {{ product.shippingFee === 0 ? 'Free' : product.shippingFee }}
          </p>
          <p>Detail</p>
          <ul>
            <li v-for="(text, index) in product.detail" :key="index">
              {{ text }}
            </li>
          </ul>

          <div
            v-for="(typeObj, index) in product.types"
            :key="index"
            class="row"
          >
            <input
              :id="'color-' + typeObj.css"
              type="radio"
              name="color"
              :value="typeObj.css"
              :style="'color:' + typeObj.css"
              :checked="typeObj.css === selectedType.css"
              required
              @click="handleChangeSelectedType(typeObj)"
            />
            <label for="color-green">{{ typeObj.label }}</label>
          </div>

          <div class="add-to-cart">
            <label for="quantity">Quantity:</label>
            <input
              id=""
              v-model="selectedQuantity"
              type="number"
              min="1"
              :max="product.stock > 20 ? 10 : product.stock"
              :disabled="product.stock === 0"
              :title="product.stock === 0 ? 'Out of stock!' : ''"
              @keyup="handleChangeQuantity"
            />
            <button
              :disabled="product.stock === 0"
              :title="product.stock === 0 ? 'Out of stock!' : ''"
              @click="handleAddToCart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Product, ProductType } from '../classes/product'
  import { ref, Ref } from 'vue'

  export default {
    props: {
      product: {
        type: Product,
        required: true,
      },
      cartCounter: {
        type: Number,
        required: true,
      },
    },
    emits: ['handleBuy'],
    setup(
      props: {
        product: { types: ProductType[]; name: string; stock: number }
      },
      context: {
        emit: (arg0: string, arg1: (string | number | ProductType)[]) => void
      }
    ) {
      const selectedType: Ref<ProductType> = ref(props.product.types[0])
      const selectedQuantity: Ref<number> = ref(1)

      const handleChangeSelectedType = (newType: ProductType) => {
        selectedType.value = newType
      }

      const handleAddToCart = () => {
        context.emit('handleBuy', [
          selectedQuantity.value,
          props.product.name,
          selectedType.value,
        ])
      }

      const handleChangeQuantity = () => {
        const max = props.product.stock >= 10 ? 10 : props.product.stock

        if (selectedQuantity.value > max) {
          selectedQuantity.value = max
          alert(`Maximum is ${max}!`)
        }
        if (selectedQuantity.value <= 0) {
          selectedQuantity.value = 1
          alert('Minimum is 1')
        }
      }

      const handleClickCart = () => {
        alert('Under construction!')
      }
      return {
        selectedType,
        handleChangeSelectedType,
        selectedQuantity,
        handleAddToCart,
        handleChangeQuantity,
        handleClickCart,
      }
    },
  }
</script>

<style></style>
