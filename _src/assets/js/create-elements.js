'use strict';
const cardList = document.querySelector('.card-list');
const fourCards = document.querySelector('#four-cards');
const sixCards = document.querySelector('#six-cards');
const eigthCards = document.querySelector('#eigth-cards');
const btn = document.querySelector('.btn');
let cardsNumber = fourCards.value;

function createElements () {

  for (let i = 0; i<cardsNumber; i++) {
    const newItem = document.createElement('li');
    newItem.classList.add('newItem');
    const newDiv = document.createElement('div');
    newDiv.classList.add('new_div');
    const newDiv1 = document.createElement('div');
    newDiv1.classList.add('new_div1');

    newItem.appendChild(newDiv);
    newItem.appendChild(newDiv1);
    cardList.appendChild(newItem);
  }
}

function howManyCards (event) {
  cardsNumber = event.currentTarget.value;
  console.log(cardsNumber);
}

btn.addEventListener('click', createElements);
fourCards.addEventListener('click', howManyCards);
sixCards.addEventListener('click', howManyCards);
eigthCards.addEventListener('click', howManyCards);
