import { it } from 'eslint/lib/rule-tester/rule-tester';
import { filterByGender,sortMovies } from '../src/data.js';

describe("Filtros de genero", () => {
  it( "filtramos masculino", () => {
    const PeoplebyGenderTest = [
    { name: 'Naoko Yoshioka', gender: 'Female', age: 'Adult'},
    { name: 'Howl Jenkins Pendragon', gender: 'Male', age: '27'},
    ]
    const result =[
      {name: 'Howl Jenkins Pendragon', gender: 'Male', age: '27'}
    ]
    expect(filterByGender(PeoplebyGenderTest, "Male")).toEqual(result)
  });
});

describe("ordenar data", () => {
  it( "ordenamos alfabeticamente A-Z", () => {
    const data = [
    {
      title: "My Neighbor Totoro"
    },
    {
      title: "Castle in the Sky"
    },
    {
      title: "Castle in the Sky"
    },
    {
      title: "A"
    }
    ]
      const result= sortMovies(data,"title","A-Z")
      expect(result).toEqual(
        [
          {title:"A"},
          {title:"Castle in the Sky"},
          {title:"Castle in the Sky"},
          {title:"My Neighbor Totoro"},
        ])
      })
    it("mantenemos orden alfabeticamente", () =>{
      const data2 =[
        {
          title: "A"
        },
        {
          title:"Castle in the Sky"
        },
        {
          title:"My Neighbor Totoro"
        }
      ]
    const result= sortMovies(data2,"title","A-Z")
      expect(result).toEqual(
        [
          {title:"A"},
          {title:"Castle in the Sky"},
          {title:"My Neighbor Totoro"},
        ])
    })
      it( "ordenamos alfabeticamente Z-A", () => {
        const data = [
          {
            title: "Castle in the Sky"
            },
          {
          title: "My Neighbor Totoro"
        },
          {
            title: "Kiki's Delivery Service"
        },
        {
          title: "Kiki's Delivery Service"
      },
      ]
        const result= sortMovies(data,"title","Z-A")
        expect(result).toEqual(
          [
            {title:"My Neighbor Totoro"},
            {title: "Kiki's Delivery Service"},
            {title: "Kiki's Delivery Service"},
            {title:"Castle in the Sky"},
          ])
      })
          it( "ordenamos por fecha lanzamiento mayor a menor", () => {
            const data = [
            {
              release_date: "1991"
            },
              {
                release_date: "1988"
            },
            {
              release_date: "1989",
              }
            ]
            const result= sortMovies(data,"release_date","sortDateDes")
            expect(result).toEqual(
              [
                {release_date: "1991"},
                {release_date: "1989"},
                {release_date: "1988"},
              ])
    })
    it( "ordenamos por fecha lanzamiento mayor a menor", () => {
      const data = [
      {
        release_date: "1991"
      },
        {
          release_date: "1988"
      },
        {
          release_date: "1989",
          }
      ]
      const result= sortMovies(data,"release_date","sortDateDes")
      expect(result).toEqual(
        [
          {release_date: "1991"},
          {release_date: "1989"},
          {release_date: "1988"},
        ])
})
    it( "ordenamos por fecha lanzamiento menor a mayor", () => {
      const data = [
      {
        release_date: "1991"
      },
        {
          release_date: "1988"
      },
      {
        release_date: "1988",
        },
        {
          release_date: "1989",
          }
      ]
      const result= sortMovies(data,"release_date","sortDateAsc")
      expect(result).toEqual(
        [
          {release_date: "1988"},
          {release_date: "1988"},
          {release_date: "1989"},
          {release_date: "1991"}
        ])
  })
})