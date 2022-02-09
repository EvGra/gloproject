const books = document.querySelectorAll('.book');
const bg = document.querySelector('body');
const change = books[4].querySelector('h2 > a');
const adv = document.querySelector('.adv');
const lis2 = books[0].querySelectorAll('li');
const lis5 = books[5].querySelectorAll('li');
const book6 = books[2].querySelectorAll('li');
const clone = book6[0].cloneNode(true);

books[2].before(books[4]);
books[0].before(books[1]);
books[4].after(books[3]);
books[2].before(books[5]);

bg.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

change.textContent = 'Книга 3. this и Прототипы Объектов'

adv.remove()

lis2[10].before(lis2[2])
lis2[4].before(lis2[6])
lis2[4].before(lis2[8])

lis5[2].before(lis5[9])
lis5[5].before(lis5[2])
lis5[8].before(lis5[5])

clone.textContent = 'Глава 8: За пределами ES6'
book6[8].append(clone)
