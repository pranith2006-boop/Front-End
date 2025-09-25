export async function fetchBooks() {
  const res = await fetch('./books.json');
  if (!res.ok) throw new Error('Failed to fetch books');
  return await res.json();
}
