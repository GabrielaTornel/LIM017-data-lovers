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


export const filterByGender = function(dataPeople, genderData){
const filterData= dataPeople.filter(element => element.gender === genderData);
return filterData;
};

export const  computeStats = (dataFilms, nameDirector) =>{
  //constante que guarde funcion de filtro de directores 
  const moviesByDirector = (dataFilms.filter(y => y.director === nameDirector));
  // constante guarda el numero de directores
  const count = moviesByDirector.length;
  //constante que realiza la operacion matemtica,regla de tres
    const percent = Math.round((count / dataFilms.length)*100);
  return percent;
};


<<<<<<< HEAD
=======

>>>>>>> 33c9151474f9942b22f6a32dd1b1cd315d2a5808
