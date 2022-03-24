export const sortMovies = (dataFilms, sortBy, sortOrder) => {
  let orderSelectF = [];
        /* lo siguiente ordena según el titulo, dividiendose en ascendente(true) y descendente(false) */
        if (sortBy === "title") {
          // ordena de forma ascendente
          if (sortOrder === "A-Z"){
              //aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden.  El sort hace el trabajo de filtrar ascendente o descendente
              orderSelectF= dataFilms.sort(function(x, y) {
                if (x.title > y.title) return 1;
                if (y.title === x.title) return 0;
                return -1;
              });
          } else {
            orderSelectF = dataFilms.sort(function(x, y) { // ordena de forma descendente
              //aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden. El sort hace el trabajo de filtrar ascendente o descendente
              if (y.title > x.title) return 1;
              if (y.title === x.title) return 0;
              return -1;
            });
          }
        } else if (sortBy === "release_date") {
          // ordena de forma ascendente fechas lanzamiento
         if (sortOrder === "sortDateAsc") {
          orderSelectF = dataFilms.sort(function(x, y) { 
            if (x.release_date > y.release_date) return 1;
        if (x.release_date === y.release_date) return 0;
        return -1;
      });
    }  else {
      orderSelectF = dataFilms.sort(function(x , y) {
            if (y.release_date > x.release_date) return 1;
        if (y.release_date === x.release_date) return 0;
        return -1;
      })
    }
    }
  return orderSelectF;
}

/*medio confuso,por terminar-attempt 1
export const filterData = (data, condition) => {
   let dummyData=[];
  filmsData.filter((filmsData) => filmsData.people == "gender");
  if  if(genderData === "Female"){
  filterByResult = people.gender.female;
  return filmsData.people=="Female";
  }) 
}

attempt 2-con objeto*/
/*export const filterByGender = (dataFilms, genderData) => {
  let filterData =[]
  let filterData= dataFilms.filter((films) => films.people.gender === genderData
)
if(genderData === "Female"){
  filterData = dataFilms.name;
}/* if(genderData === "Male"){
  return false;
}*/

  export const filterByGender = (dataFilms, genderData) => {
    const filterData= dataFilms.filter((films) => films.people.gender === genderData
  );
  if(genderData === "Female"){
    return filterData === "Female" + "name";
  } else{
    return filterData === "no es mujer";
  }
    };
    
  //let nuevoArreglo = arreglo.filter(callback); => metodo 1arreglo vacio = array al cual se le aplica y callback funcion que se le aplica a cada elemento del arreglo

