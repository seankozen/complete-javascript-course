'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////
////////////////////////////////////

// console.log(document.documentElement);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// const header = document.querySelector('.header');

// // Creating and Inserting Elements
// //.insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//   header.prepend(message);
//   //header.append(message);  //Cannot be in two places at once
//   //header.append(message.cloneNode(true));

//   //header.before(message);
//   //header.after(message);

//   document.querySelector('.btn--close-cookie').addEventListener('click', () =>{
//     message.remove();
//   });

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width ='120%';

// console.log(message.style.backgroundColor); //works only for inline sytles
// console.log(getComputedStyle(message).height);

// //Change height
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //Change CSS root variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

// console.log(logo.src);
// console.log(logo.getAttribute('src')); //gets relative path

// // Data attributes
// console.log(logo.dataset.versionNumber);

// logo.classList.add('c');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //Don't use...will erase all other classes
// logo.className = 'sean';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y):', window.scrollX, scrollY);
  console.log(
    'height/width of viewport:',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  //Top needs to be relative to top of whole page
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);  

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // })

  //Modern method
  section1.scrollIntoView({behavior: 'smooth',});
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: You are reading the heading!');

  //remove event listener
  h1.removeEventListener('mouseenter', alertH1)
}

h1.addEventListener('mouseenter', alertH1);

//Older way to add event listeners
h1.onmouseenter = (e) => {
  alert('onmouseenter: You are reading the heading!');
};