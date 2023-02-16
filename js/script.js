import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

var swiper = new Swiper(".books-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  let contact_info = document.querySelector('#contact_info');
    let contact_us = document.querySelector('#contact_us');
    let swtich_to_contact_us = document.querySelector('#swtich_to_contact_us');
    let swtich_to_contact_info = document.querySelector('#swtich_to_contact_info');

    swtich_to_contact_us.addEventListener("click",()=>{
        contact_info.style.display = 'block';
        contact_us.style.display = 'block';
    });
    
    swtich_to_contact_info.addEventListener("click",()=>{
        contact_info.style.display = 'block';
        contact_us.style.display = 'block';
    });


    