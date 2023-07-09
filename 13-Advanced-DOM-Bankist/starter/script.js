'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

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
//Button scrolling
btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////
//Page navigation
//Add to common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const handleHover = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// //Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function(e) {
//   console.log(window.scrollY);
//   if(this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//Intersection Observer API
// When section1 intersects the viewport at 10%, below function will get called
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2] //visible percentage in viewport

// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;



const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //Specifies when menubar will appear
});

headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  //Unobserve sections
  observer.unobserve(entry.target);
  


};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
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

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', e => {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll (X/Y):', window.scrollX, scrollY);
//   console.log(
//     'height/width of viewport:',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   Scrolling
//   Top needs to be relative to top of whole page
//   window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

//   window.scrollTo({
//     left: s1coords.left + window.scrollX,
//     top: s1coords.top + window.scrollY,
//     behavior: 'smooth',
//   })

//   Modern method
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: You are reading the heading!');

//   //remove event listener
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// //Older way to add event listeners
// h1.onmouseenter = e => {
//   alert('onmouseenter: You are reading the heading!');
// };

// //Event propogation
// //rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //Stop propogation (Usually not a good thing to do)
//   // e.stopPropagation();

// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target,e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target,e.currentTarget);
// });

//DOM Traversing

// const h1 = document.querySelector('h1');

// //Going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //Limits nodes to HTML elements that are direct children
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //Finds parents
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach((el) =>{
//   if(el !== h1)el.style.transform = 'scale(0.5)';
// });
