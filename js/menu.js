const list = document.getElementById('list');
const add = document.getElementById('add');
const contactLink = document.getElementById('contact-link');

const showBook = document.getElementById('books');
const addNew = document.getElementById('add-book');
const contactInfo = document.getElementById('contact');

list.addEventListener('click', () => {
  addNew.style.display = 'none';
  contactInfo.style.display = 'none';
  showBook.style.display = 'block';
});

add.addEventListener('click', () => {
  addNew.style.display = 'block';
  showBook.style.display = 'none';
  contactInfo.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  addNew.style.display = 'none';
  contactInfo.style.display = 'flex';
  showBook.style.display = 'none';
});