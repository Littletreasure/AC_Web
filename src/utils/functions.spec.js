const { capitalise, sortBy } = require("./functions");

describe("capitalise", () => {
  it('returns "Perfect Painting" when passed "perfect painting"', () => {
    const actual = capitalise("perfect painting");
    const expected = "Perfect Painting";
    expect(expected).toBe(actual);
  });
});

describe("sortBy", () => {
  it("sorts an array of objects by name and in ascending order", () => {
    const products = [
      { id: 1, name: "Pango", species: "Anteater" },
      { id: 2, name: "Bob", species: "Cat" },
      { id: 3, name: "Axel", species: "Elephant" },
      { id: 4, name: "Daisy", species: "Dog" },
    ];
    const order = "asc";
    const sort_by = "name";
    const actual = sortBy(sort_by, order, products);
    const expected = [
      { id: 3, name: "Axel", species: "Elephant" },
      { id: 2, name: "Bob", species: "Cat" },
      { id: 4, name: "Daisy", species: "Dog" },
      { id: 1, name: "Pango", species: "Anteater" },
    ];
    expect(actual).toStrictEqual(expected);
  });
  it("sorts an array of objects by species and in descending order", () => {
    const products = [
      { id: 1, name: "Pango", species: "Anteater" },
      { id: 2, name: "Bob", species: "Cat" },
      { id: 3, name: "Axel", species: "Elephant" },
      { id: 4, name: "Daisy", species: "Dog" },
    ];
    const order = "desc";
    const sort_by = "species";
    const actual = sortBy(sort_by, order, products);
    const expected = [
      { id: 3, name: "Axel", species: "Elephant" },
      { id: 4, name: "Daisy", species: "Dog" },
      { id: 2, name: "Bob", species: "Cat" },
      { id: 1, name: "Pango", species: "Anteater" },
    ];

    expect(actual).toStrictEqual(expected);
  });
});
