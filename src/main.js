import {dataMovies} from './data.js';
import data from './data/ghibli/ghibli.js';
console.log (data);
console.log(dataMovies);


let bttnMoreInf = document.getElementById("bttnMoreInf");
bttnMoreInf.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="none";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="";
})


let backIntro = document.getElementById("backIntro");
backIntro.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
})

// import data from './data/rickandmorty/rickandmorty.js';

let myArray = data.films;
//let myList = "";

myArray.forEach((displayAllData) => {
  document.getElementById("filmsInfo").innerHTML += `
  <div class="cardContainer">
  <div class="cardInner">
  <div class="cardFront">
  <img class="poster" src="${displayAllData.poster}">
  <div class="filmsTitle"> Title: ${displayAllData.title}</div>
  <br>
  <div class="filmsYear"> Year: ${displayAllData.release_date} ⭐ ${displayAllData.rt_score} 
  </div>
  </div>
  <div class="cardBack">
  <div class="filmsDescription"> Description: ${displayAllData.description}</div>
   <br>
  </div>
  </div>
  </div>
  `
    })