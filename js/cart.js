const cartListEl = document.querySelector('.cart-items')
const removeAllButtonEl = document.querySelector('.cart-action')

class Cart {
  total = 0
  cartItems = []

  init() {
    this.initCartElements()
  }

  initCartElements() {
    this.renderItems()
    this.total = this.getTotalCost()
    this.updateTotalPriceTextContent()
    this.updateTotalItemsTextContent()
    this.registerListeners()
  }

  registerListeners() {
    const self = this
    removeAllButtonEl.addEventListener('click', this.deleteItems.bind(this))
    const removeItemButtons = document.querySelectorAll('.cart-remove')
    removeItemButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const clickedNode = e.target
        const mealEl = clickedNode.closest('.cart-item')
        const mealId = mealEl.dataset.id
        if (!mealId) return
        self.deleteItem(mealId)
      })
    })
  }

  addItemToCart(item) {
    const itemIndex = this.cartItems.findIndex(({ id }) => item.id === id)
    if (itemIndex > -1) {
      this.cartItems[itemIndex].amount += 1
    } else {
      this.cartItems.push(item)
    }
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
      <div class="cart-item-info">
        <img class="cart-image-box" src="${imageUrl}"  />
        <div class="cart-about">
          <h2 class="cart-about-title">${title}</h2>
          <h3 class="cart-about-subtitle">${subtitle}</h3>
        </div>
      </div>
      <div class="cart-counter-prices"></div>
        <div class="cart-prices">
          <div class="cart-amount"> &#8362; ${price}</div>
          <div class="cart-remove"><u>Remove</u></div>
        </div>
      </div>
    `
    cartListEl.insertAdjacentHTML('afterbegin', html)
  }

  getTotalCost() {
    let total = 0
    this.cartItems.forEach(item => {
      total += item.price * item.amount
    })
    return total
  }

  updateTotalPriceTextContent(total = this.total) {
    const cartTotalCostEl = document.querySelector('.cart-total-amount')
    cartTotalCostEl.textContent =  `₪${ total}`
  }

  updateTotalItemsTextContent() {
    const cartTotalItemsEl = document.querySelector('.cart-items-total')
    let totalItems = 0
    this.cartItems.forEach(item => {
      totalItems += item.amount
    })
    cartTotalItemsEl.textContent = `${totalItems} Items`
  }

  deleteItem(cartItemId) {
    const itemToRemoveIndex = this.cartItems.findIndex(item => item.id === cartItemId)
    if (itemToRemoveIndex > -1) {
      this.cartItems.splice(itemToRemoveIndex, 1)
      this.initCartElements()
    }
  }

  deleteItems() {
    this.cartItems = []
    this.initCartElements()
  }
}

export default new Cart()