const booksSection = document.getElementById('books');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const error = document.querySelector('.error');
const bookElement = document.querySelectorAll('.book-element');

const bookStorage = JSON.parse(localStorage.getItem('books')) || [];

function showData(){
    booksSection.innerHTML = '';
    bookStorage.forEach((book, index) => {
    booksSection.innerHTML += `
    <div>
      <div class='data-container'>
        <article class='book-element'>
          <p class='title'>${book.title}</p>
          <p class='author'>${book.author}</p>
          <button class='remove-btn' onclick='remove(${index})'>Remove</button>
        </article>
        <hr>
      </div>
    </div>
`;
    if((index % 2) === 0){
      booksSection.lastElementChild.style.backgroundColor = '#ddd';
    } else {
      booksSection.lastElementChild.style.backgroundColor = '#fff';
    }
	});
}


function addBook(){
  if(title.value && author.value){
    const bookToAdd = {
      title: title.value,
      author: author.value,
    }
    bookStorage.push(bookToAdd)
    localStorage.setItem('books', JSON.stringify(bookStorage));
    title.value = '';
    author.value = '';
    showData();
  }else {
    error.innerHTML = 'Title or Author cannot be empty';
  }
}

function remove(index){
    bookStorage.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookStorage));
    showData();
}

form.addEventListener('submit', addBook);

// remove();
window.onload = showData();
