/* import { filterByGender, anotherExample } from '../src/data.js';

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
describe("Filtros de genero", () => {
  it("testear masculino", () => {
    expect(function(PeoplebyGenderTest, "Pazu")).toBe("Male");
  });
 */
  it('testeo NA', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
