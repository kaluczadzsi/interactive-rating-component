/* 'use strict';

const ratings = document.querySelector('ul');
const buttonSubmit = document.querySelector('.card__button');
let ratingValue;

// prettier-ignore
ratings.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__list-item')) {
    
    // Remove .active class from rating
    document.querySelectorAll('li').forEach((item) => {
      item.classList.remove('active');
    });

    // Adding .active class to the selected element
    e.target.classList.add('active');
  }
});

// buttonSubmit.addEventListener('click', () => {});
 */
