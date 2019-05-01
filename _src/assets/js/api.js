'use strict';

const cardList = document.querySelector('.card-list');
const fourCards = document.querySelector('#four-cards');
const sixCards = document.querySelector('#six-cards');
const eigthCards = document.querySelector('#eigth-cards');
const btn = document.querySelector('.btn');
let cardsNumber = fourCards.value;
const cardsImg = [];

function find() {
  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${cardsNumber}.json`)
    .then(response => response.json())
    .then(data => {
      removeElements();
      for (let j = 0; j < cardsNumber; j++) {
        cardsImg.push(data[j].image);

        const newItem = document.createElement('li');
        newItem.classList.add('new_item');
        const newDiv = document.createElement('div');
        newDiv.classList.add('new_div1');
        const newImg = document.createElement('img');
        newImg.classList.add('hidden');
        newImg.src = cardsImg[j];

        newDiv.appendChild(newImg);
        newItem.appendChild(newDiv);
        cardList.appendChild(newItem);

        function change() {
          newImg.classList.toggle('new_img');
          if (newDiv.classList.contains('new_div1')) {
            newDiv.classList.remove('new_div1');
            newDiv.classList.add('new_div');
          } else {
            newDiv.classList.add('new_div1');
            newDiv.classList.remove('new_div');
          }
          // No entiendo por que no me funciona toggle con newDiv
          // newDiv.classList.toggle('new_div');
        }
        newDiv.addEventListener('click', change);
      }
    });
}

function howManyCards (event) {
  cardsNumber = event.currentTarget.value;
  console.log(cardsNumber);
}



function removeElements() {
  cardList.innerHTML = '';
}



fourCards.addEventListener('click', howManyCards);
sixCards.addEventListener('click', howManyCards);
eigthCards.addEventListener('click', howManyCards);
btn.addEventListener('click', find);
