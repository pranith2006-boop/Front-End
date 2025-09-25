export const cart = [];

export function addToCart(book) {
  cart.push(book);
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function getTotal() {
  return cart.reduce((sum, b) => sum + b.price, 0);
}
