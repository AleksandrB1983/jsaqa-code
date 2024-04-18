const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([        
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([      
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",          
    ])
    expect(
      sorting.sortByName([
        "Аладдин",
        "Аладдин",
        "Аладдин",
      ])
    ).toEqual([
      "Аладдин",
      "Аладдин",
      "Аладдин",
    ])                
  });
  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  })
});
