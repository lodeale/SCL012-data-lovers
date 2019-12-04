//  import LoL from './data/lol/lol.js'

import { example } from './data.js';

// console.log(example);

const home = document.getElementById('home');
const homeButton = document.getElementById('homeButton')
const champions = document.getElementById('champions');
const championsButton = document.getElementById('championsButton')

function setView(e) {
  if (e.target.id === 'championsButton') {
    home.style.display = 'none';
    champions.style.display = 'inherit';
    championsButton.style.color = 'rgba(55, 225, 227, 0.5)';
    homeButton.style.color = '';

    champions.innerHTML = '<select name="" id="" class="classSelect"><options>      <option>Todas las clases</option>      <option>Asesino</option>      <option>Luchador</option>      <option>Mago</option>      <option>Soporte</option>      <option>Tanque</option>    </options>  </select>  <button class="positionButton">Superior</button>  <button class="positionButton">Jungla</button>  <button class="positionButton">Medio</button>  <button class="positionButton">Inferior</button>  <button class="positionButton">Soporte</button>'
    champions.innerHTML += '<div class = "championBox margin-top"><button class="imageButton center"><img class="imgRedonda" src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png"/></button></div>'; // dentro del div averiguar imagen en circulo //
  } else {
    home.style.display = 'inherit';
    champions.style.display = 'none';
    homeButton.style.color = 'rgba(55, 225, 227, 0.5)';
    championsButton.style.color = '';

  }

}

homeButton.addEventListener('click', setView);
championsButton.addEventListener('click', setView);
