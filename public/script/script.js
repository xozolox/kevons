'use strict';
// BOTON DE MENU
const botonMenu = document.getElementById('menu_boton');
botonMenu.addEventListener('click', () => {
  const modelBox = document.querySelector('#model_box');
  modelBox.classList.toggle('model-box')
  if(modelBox.classList.contains('model-box')) {
    modelBox.style.transform = 'scale(1,1)';
    botonMenu.innerHTML = '✖';
  } else {
    modelBox.style.transform = 'scale(0,0)';
    botonMenu.innerHTML = '☰';
  }
});

// CARRITO DE COMPRAS
const botonCart = document.querySelector('.open-cart-shop');
botonCart.addEventListener('click', () => {
  const openCart = document.querySelector('#box-cart-shop');
  openCart.classList.toggle('open-carrito');
  if(openCart.classList.contains('open-carrito')) {
    openCart.style.transform = 'translate(0,0)';
    openCart.style.transition = 'all 0.4s ease';
  }
});

const closeCart = document.querySelector('.close-cart-shop');
closeCart.addEventListener('click', () => {
  const openCart = document.querySelector('#box-cart-shop');
  openCart.classList.toggle('open-carrito');
  if(openCart.classList.contains('open-carrito')) {
  } else {
    openCart.style.transform = 'translate(-100%, 0)'
  }
})

//AÑADIR AL  CARRITO
const count = () => {
  let n = 0;
  return () => {n += 1; return document.querySelector('.barra-number').innerHTML = n;}
}

const add = document.querySelector('.box-add-cart');
add.addEventListener('click', count());

//PRUEBA

