import { addToCart } from './cart.js';
import { renderBooks, renderCart } from './ui.js';
import { fetchBooks } from './public.js';

async function init() {
  const books = await fetchBooks();
  renderBooks(books, book => {
    addToCart(book);
    renderCart();
  });
}

init();
