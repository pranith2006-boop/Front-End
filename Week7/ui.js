import { cart, removeFromCart, getTotal } from './cart.js';

export function renderBooks(books, addFn) {
  const container = document.getElementById('book-list');
  container.innerHTML = '';

  books.forEach(b => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <h3>${b.title}</h3>
      <p>by ${b.author}</p>
      <p>$${b.price}</p>
      <p>${b.inStock ? '(in stock)' : '(out of stock)'}</p>
      <button ${b.inStock ? '' : 'disabled'}>Add to Cart</button>
    `;
    card.querySelector('button').addEventListener('click', () => addFn(b));
    container.appendChild(card);
  });
}

export function renderCart() {
  const list = document.getElementById('cart-list');
  const total = document.getElementById('total-price');
  list.innerHTML = '';

  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.title} - $${item.price.toFixed(2)}
      <button class="remove-btn" data-i="${idx}">Remove</button>
    `;
    li.querySelector('button').addEventListener('click', () => {
      removeFromCart(idx);
      renderCart();
    });
    list.appendChild(li);
  });

  total.textContent = `Total: $${getTotal().toFixed(2)}`;
}
