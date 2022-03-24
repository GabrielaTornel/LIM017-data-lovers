import {sortMovies , filterByGender} from './data.js';
import {} from './data.js';
import data from './data/ghibli/ghibli.js';
console.log (data);
console.log(filterByGender)

console.log (sortMovies)

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


let myArray = data.films;

//nombrando nuestra lista recorrida
const totalDataFilms = (listData) =>{
  let listTitlePrueba = "";
//recorriendo nuestro array
listData.forEach((myArray) => {
  const dataCard = `
  <div class="cardContainer">
  <div class="cardInner">
  <div class="cardFront">
  <img class="poster" src="${myArray.poster}">
   <div class="filmsTitle"> ${myArray.title}</div>
   <div class="filmsYear"> Year: ${myArray.release_date} <span>  ⭐ ${myArray.rt_score}</span> 
   </div>
  </div>
  <div class="cardBack">
  <div class="cardTextBack">
  Director:  ${myArray.director}
  <br>
  Description: ${myArray.description}
  </div>
   </div>
   </div>
   </div> 
  `;
  listTitlePrueba += dataCard ;
    });
    document.getElementById("filmsInfo").innerHTML= listTitlePrueba;
  }
  totalDataFilms(myArray);

  //concatenamos arrays para llegar a gender de people
 let peopleValue=[];
 for (let element of myArray) {
peopleValue.push(element.people);
 }
 let listOfPeople = peopleValue[0];
for (let i=1; i<peopleValue.length; i++){
  listOfPeople = listOfPeople.concat(peopleValue[i]);
}
let peopleGender=[];
 for (let element of listOfPeople) {
peopleGender.push(element.gender);
 }

 const genderArr= new Set(peopleGender);
let result = [...genderArr];
console.log(result);
console.log(filterByGender(genderArr, "female"));

//console.log(listOfPeople); //Este array contiene todos los personajes
 /* console.log(sortMovies(myArray, "title", "A-Z"))
  console.log(sortMovies(myArray, "release_date" , "sortDateAsc"))*/
 document.getElementById('selectSortAZ').addEventListener('change', (e) => {
  const selectedIndex = e.currentTarget.value;
  //debugger 
  // sortBy.options[sortBy.selectedIndex].value;
  if (selectedIndex === "A-Z") {
    totalDataFilms(sortMovies(myArray, 'title', 'A-Z'));
  }if (selectedIndex === "Z-A") {
    totalDataFilms(sortMovies(myArray, 'title', "Z-A"));
  }if (selectedIndex === "sortDateAsc") {
    totalDataFilms(sortMovies(myArray, "release_date", "sortDateAsc"));
  }if (selectedIndex === "sortDateDes") {
    totalDataFilms(sortMovies(myArray, "release_date", "sortDateDes"));
  }else{
 return totalDataFilms(myArray);
  }
});
