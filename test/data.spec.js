import { filterByGender,sortMovies } from '../src/data.js';

describe("Filtros de genero", () => {
  it( "filtramos masculino", () => {
    const PeoplebyGenderTest = {
      "films":
        [
          {"title": "Castle in the Sky",
          "people": [
          {
            "name": "General Muoro",
            "gender": "Male",
          }
        ]
        },
        {"title": "My Neighbor Totoro",
          "people": [
            { "name": "Tatsuo Kusakabe",
            "gender": "Male"
          }
          ]}
      ]
    }
    expect(filterByGender(PeoplebyGenderTest, "gender")).toBe("Male");
  });
/*   it('testeo NA', () => {
    expect(example()).toBe('example');
  }); */
});


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

describe("ordenar data", () => {
  it( "filtramos masculino", () => {
    const data = [
    {
      title:"Z"
    }, 
      {
        title: "A"
    }, 
     {
       title: "M"
      }
    ]
      const result= sortMovies(data,"A-Z")
      expect(result).toBe(
        [
          {title:"A"},
          {title:"M"},
          {title:"Z"},
        ])
      })
    });
