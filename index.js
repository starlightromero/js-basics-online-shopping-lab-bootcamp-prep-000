var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  cart.push({ [itemName]: itemPrice })
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var viewCart = []
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      viewCart.push(cart[i])
    }
  }
  return 'In your cart, you have' + viewCart + '.'
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  if (obj.hasOwnProperty(item) = false) {
    console.log('That item is not in your cart.')
    return cart
  }
  else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
