"use strict";

let stars = document.querySelectorAll(".star__item"), 
    starsActive,
    starsSelect;
 
stars.forEach((element, index) => {
  
	element.addEventListener('mouseover', ()=> {
    starsActive = Array.prototype.slice.call(stars, 0, index+1);
    starsActive.forEach((star) => {
      star.classList.add("star__item_active");
    });
  });
  
	element.addEventListener('mouseout', ()=> {
    stars.forEach((star) => {
      star.classList.remove("star__item_active");
    });
  });
  
	element.addEventListener('click', ()=> {
    stars.forEach((star) => {
      star.classList.remove("star__item_select");
    });
    starsActive.forEach((star) => {
      star.classList.add("star__item_select");
    });
     starsSelect = starsActive;
  });
  
});


const passEl = formEl.querySelector('.password');
const passRepeatEl = formEl.querySelector('.password_repeat');

passEl.addEventListener("input", validatePasswords);
passRepeatEl.addEventListener("input", validatePasswords);

function validatePasswords() {
  if (passEl.value === passRepeatEl.value) {
    passEl.classList.add("passRepeat");
    passRepeatEl.classList.add("passRepeat");
    passEl.classList.remove("error");
    passRepeatEl.classList.remove("error");
  } else {
    passEl.classList.remove("passRepeat");
    passRepeatEl.classList.remove("passRepeat");
    passEl.classList.add("error");
    passRepeatEl.classList.add("error");
  }
};