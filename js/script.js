'use strict';

const ratingContainer = document.querySelector('.rating');
const thankYouContainer = document.querySelector('.thank-you');
const ratings = document.querySelector('ul');
const buttonSubmit = document.querySelector('.card__button');
const ratingField = document.querySelector('.selected');
let ratingValue = 0;

// prettier-ignore
ratings.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__list-item')) {
    
    // Remove .active class from rating
    document.querySelectorAll('li').forEach((item) => {
      item.classList.remove('active');
    });

    // Adding .active class to the selected element
    e.target.classList.add('active');
    ratingValue = e.target.textContent;
  }
});

// Hide rating section, delete .hidden class from thank-you section when the submit button is clicked
buttonSubmit.addEventListener('click', () => {
  ratingContainer.classList.add('hidden');
  thankYouContainer.classList.remove('hidden');
  ratingField.textContent = `You selected ${ratingValue} out of 5`;
});
