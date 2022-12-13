const items = [
  {
    id: '1',
    price: 100,
    title: 'Chili pizza',
    subtitle: 'anchovi1',
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',
    amount: 1
  },
  {
    id: '2',
    price: 120,
    title: 'Chili pizza',
    subtitle: 'anchovi',
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',
    amount: 1
  },
]

const cartListEl = document.querySelector('.cart-items')
const cartTotalCostEl = document.querySelector('.cart-total-amount')
const cartTotalItemsEl = document.querySelector('.cart-total-total')

class Cart {
  total = 0
  cartItems = []

  init() {
    // new place in memory
    console.log('items ', items.length)
    this.cartItems = [...items]
    console.log('this items, ', this.cartItems.length, this.cartItems)
    this.renderItems()
    this.total = this.getTotalCost()
    this.updateTotalPriceTextContent()
    this.updateTotalItemsTextContent()
  }

  renderItems() {
    cartListEl.innerHTML = ""
    if (this.cartItems.length === 0) {
      const html = '<p>Cart is empty.</p>'
      cartListEl.insertAdjacentHTML('afterbegin', html)
      return
    }
    this.cartItems.forEach(this.renderItem.bind(this))
  }

  renderItem({ id, price, title, subtitle, imageUrl, amount }) {
    const html = `
      <div class="cart-item" data-id="${id}">
        <div class="cart-image-box">
          <img src="${imageUrl}"  />
        </div>
      <div class="cart-about">
        <h2 class="cart-about-title">${title}</h2>
        <h3 class="cart-about-subtitle">${subtitle}</h3>
      </div>
      <div class="cart-counter">
        <div class="cart-counter-btn">-</div>
        <div class="cart-counter-count">${amount}</div>
        <div class="cart-counter-btn">+</div>
      </div>
      <div class="cart-counter-prices"></div>
        <div class="cart-prices">
          <div class="cart-amount">$${price}</div>
          <div class="cart-remove"><u>Remove</u></div>
        </div>
      </div>
    `
    cartListEl.insertAdjacentHTML('afterbegin', html)
  }

  getTotalCost() {
    let total = 0
    items.forEach(item => {
      total += item.price
    })
    return total
  }

  updateTotalPriceTextContent(total = this.total) {
    cartTotalCostEl.textContent = `$${total}`
  }

  updateTotalItemsTextContent() {
    cartTotalItemsEl.textContent = `${this.cartItems.length} Items`
  }

  updateItemAmount(cartItemId, amountToChange) {
    this.updateItem(cartItemId, { amount: amount + amountToChange })
  }

  updateItem(cartItemId, updatedData) {
    this.cartItems = this.cartItems.map(item => {
      if (item.id !== cartItemId) return item
      return { ...item, ...updatedData }
    })
  }

  deleteItem(cartItemId) {
    this.cartItems = this.cartItems.filter(item => item.id === cartItemId)
  }

  deleteItems() {
    this.cartItems = []
  }
}

export default new Cart()