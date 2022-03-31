import {sortMovies , filterByGender} from "./data.js";
import data from "./data/ghibli/ghibli.js";
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

let btnPeople = document.getElementById("btnPeople");
btnPeople.addEventListener("click",()=>{
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="";
})
let backIntro2 = document.getElementById("backIntro2");
backIntro2.addEventListener("click",()=>{
  const pageOne=document.getElementById("pageOne");
  pageOne.style.display="";
  const pageTwo=document.getElementById("pageTwo");
pageTwo.style.display="none";
const pageThree=document.getElementById("pageThree");
pageThree.style.display="none";
})

let filmsData = data.films;

//nombrando nuestra lista recorrida
const totalDataFilms = (listData) =>{
  let resultMovies = "";
//recorriendo nuestro array
listData.forEach((filmsData) => {
  const dataCard = `
  <div class="cardContainer">
  <div class="cardInner">
  <div class="cardFront">
  <img class="poster" src="${filmsData.poster}">
  <div class="filmsTitle"> ${filmsData.title}</div>
  <div class="filmsYear"> Year: ${filmsData.release_date} <span>  ⭐ ${filmsData.rt_score}</span> 
  </div>
  </div>
  <div class="cardBack">
  <div class="cardTextBack">
  <strong> Director: </strong>  ${filmsData.director}
  <br>
  <strong> Description:</strong> ${filmsData.description}
  </div>
  </div>
  </div>
  </div>
  `;
  resultMovies += dataCard ;
    });
    document.getElementById("filmsInfo").innerHTML= resultMovies;
  }
  totalDataFilms(filmsData);
 /* console.log(sortMovies(myArray, "title", "A-Z"))
  console.log(sortMovies(myArray, "release_date" , "sortDateAsc"))*/
 document.getElementById("selectSortAZ").addEventListener("change", (e) => {
  const selectedIndex = e.currentTarget.value;
  //debugger
  // sortBy.options[sortBy.selectedIndex].value;
  if (selectedIndex === "A-Z") {
    totalDataFilms(sortMovies(filmsData, "title", "A-Z"));
  }if (selectedIndex === "Z-A") {
    totalDataFilms(sortMovies(filmsData, "title", "Z-A"));
  }if (selectedIndex === "sortDateAsc") {
    totalDataFilms(sortMovies(filmsData, "release_date", "sortDateAsc"));
  }if (selectedIndex === "sortDateDes") {
    totalDataFilms(sortMovies(filmsData, "release_date", "sortDateDes"));
  }else{
 return totalDataFilms(filmsData);
  }
});

//traemos la data "gender" del objeto e imprimimos en interfaz
  //concatenamos arrays para acceder a nuestros personajes del objeto
  let peopleValue=[];
  for (let element of filmsData) {
 peopleValue.push(element.people);
  }
  let listOfPeople = peopleValue[0];
 for (let i=1; i<peopleValue.length; i++){
   listOfPeople = listOfPeople.concat(peopleValue[i]);
 }
 console.log(listOfPeople); //Este array contiene todos los personajes.
 
 let peopleGender=[];
  for (let element of listOfPeople) {
 peopleGender.push(element.gender);
  }
/*const genderArr= new Set(peopleGender);
 let result = [...genderArr];
 console.log(result);
 /*console.log(filterByGender(filmsData, peopleGender.Female)); */


//por revisar!vehicles

/* let vehicleValue=[];
for (let element of filmsData) {
  vehicleValue.push(element.vehicles);
}

let listOfVehicle = vehicleValue[0];
for (let i=1; i<vehicleValue.length; i++){
  listOfVehicle = listOfVehicle.concat(vehicleValue[i]);
}

const vehicleArr= new Set(vehicleValue);
 let resultVehicle = [...vehicleArr];
 console.log(resultVehicle); */




const totalPeople = (listData) =>{
  let resultPeople = "";
//recorriendo nuestro array
listData.forEach((listOfPeople) => {
  const dataPeopleObj = `
  <div class="cardContainerPeople">
  <div class="cardInner">
  <div class="cardFront">
  <img class="posterPeople" src="${listOfPeople.img}">
  <div class="filmsPeopleName">
  Name: ${listOfPeople.name}
  <br>
  Gender: ${listOfPeople.gender}
  <br>
  Specie:  ${listOfPeople.specie}
  <br>
  Eye color: ${listOfPeople.eye_color}
  </div>
  </div>
  </div>
  </div>
  `;
  resultPeople += dataPeopleObj ;
    });
    document.getElementById("filmsPeopleCard").innerHTML= resultPeople;
  }
  totalPeople(listOfPeople);

//Aplicando evento al FILTER
/*   const filterGender = document.getElementById("selectGender");
  filterGender.addEventListener("change", (x) => {
    const selectedGender =  x.target.value);
    if (selectedGender == "Female") {
      totalPeople(filterByGender(listOfPeople, peopleGender.Female));
    }
    console.log(filterGender);
    return totalPeople(listOfPeople);
      }); */


//Aplicando evento al FILTER
document.getElementById("selectGender").addEventListener("change", (e) => {
  const selectedFilter = e.currentTarget.value;
  //debugger
  // sortBy.options[sortBy.selectedIndex].value;
  if (selectedFilter == "002") {
   return totalPeople(filterByGender(listOfPeople, "Female"));
  }else if(selectedFilter == "001") {
    return totalPeople(filterByGender(listOfPeople, "Male"));
  } else if(selectedFilter == "003") {
    return totalPeople(filterByGender(listOfPeople, "NA"));
  }else {
      return totalPeople(filterByGender(listOfPeople, "Unknown (Possible Male)"));
   }
  });
 /* if (selectedFilter === "Male") {
    totalDataFilms(sortMovies(filmsData, 'title', "Z-A"));
  }if (selectedFilter === "NA") {
    totalDataFilms(sortMovies(filmsData, "release_date", "sortDateAsc"));
  }if (selectedFilter === "Unknown (Possible Male)") {
    totalDataFilms(sortMovies(filmsData, "release_date", "sortDateDes"));

console.log(filterByGender(listOfPeople,"Unknown (Possible Male)"))*/