var titles = document.getElementsByClassName('title');
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(function(item) {
    console.log(item);
})
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);
var books = document.querySelector('#book-list li .name');
console.log(books);
books = document.querySelectorAll('#book-list li .name');
console.log(books);
Array.from(books).forEach(function(book){
    book.textContent += '(book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more books</h2>';
bookList.innerHTML += '<p>This is how you add html</p>';

const banner = document.querySelector('#page-banner');
console.log('Thus node type is',banner.nodeName);
console.log('Thus childs',banner.hasChildNodes)

let h2 =document.querySelector('#book-list h2')
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
});
//  let btns = document.querySelectorAll('#book-list .delete');
//  Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     });
//  });
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if (e.target.className == 'delete') {
       const li = e.target.parentElement;
        list.removeChild(li);
    }
})

 const link = document.querySelector('#page-banner a');
 link.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('navigation to', e.target.textContent, 'was prevented');
 })

 // Add books
 const addForm = document.forms['add-book'];
 addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    //append to document
    list.appendChild(li);
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

 });

 // hide books
 const hideBooks = document.querySelector('#hide');
 hideBooks.addEventListener('change', function(e){
    if (hideBooks.checked) {
        list.style.display = "none";
    }
    else {
        list.style.display = "initial"
    }
 })
 // Search book
 const searchBar = document.forms['search-books'].querySelector('input');
 searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term)!= -1) {
            book.style.display = 'block';
        }
        else {
            book.style.display = 'none';
        }
    })
 })
 // tabbed content
 const tabs = document.querySelector('.tabs');
 const panels = document.querySelectorAll('.panel');
 tabs.addEventListener('click', function(e) {
    if(e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            }
            else {
                panel.classList.remove('active')
            }
        })
    }
 })