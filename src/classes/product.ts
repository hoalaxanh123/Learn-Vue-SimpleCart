export class Product {
  name: string
  stock: number
  shippingFee: number
  detail: Array<string>
  types: Array<ProductType>

  constructor(
    name: string,
    stock: number,
    shippingFee: number,
    detail: Array<string>,
    types: Array<ProductType>
  ) {
    this.name = name
    this.stock = stock
    ;(this.shippingFee = shippingFee), (this.detail = detail)
    this.types = types
  }
}

export class ProductType {
  img: string
  label: string
  css: string
  constructor(label: string, css: string, img: string) {
    this.label = label
    this.css = css
    this.img = img
  }
}
