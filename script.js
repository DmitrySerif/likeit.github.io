let like = document.querySelector('.button');
let likesNumber = document.querySelector('.like-number');
let counter = 0;

like.onclick = function () {
    counter++;
    likesNumber.textContent = counter;
    
};