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

const lista = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 6];
let test = lista.filter(num => num == 2);

//PRUEBA

//document.querySelector('.item-image').src = 'https://images.unsplash.com/photo-1603211234763-b279ec387d64?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
//document.querySelector('.item-images').src = 'https://images.unsplash.com/photo-1603931690344-d546e4928b99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
//document.querySelector('.item-imagese').src = 'https://images.unsplash.com/photo-1603778252234-162da7e262ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
//document.querySelector('.item-img').src = 'https://images.unsplash.com/photo-1603363586831-a8477630fc19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
//document.querySelector('.item-imgs').src = 'https://images.unsplash.com/photo-1603458360961-8878b5ce18f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
//document.querySelector('.item-imgse').src = 'https://images.unsplash.com/photo-1602185505373-f5130988677b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
