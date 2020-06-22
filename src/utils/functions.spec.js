const { capitalise, sortBy, filterVillager } = require("./functions");

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
      {
        id: 1,
        name: {
          "name-USen": "X",
          "name-EUen": "Pango",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Anteater",
      },
      {
        id: 2,
        name: {
          "name-USen": "X",
          "name-EUen": "Bob",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Cat",
      },
      {
        id: 3,
        name: {
          "name-USen": "X",
          "name-EUen": "Axel",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Elephant",
      },
      {
        id: 4,
        name: {
          "name-USen": "X",
          "name-EUen": "Daisy",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Dog",
      },
    ];
    const order = "asc";
    const sort_by = "name";
    const actual = sortBy(sort_by, order, products);
    const expected = [
      {
        id: 3,
        name: {
          "name-USen": "X",
          "name-EUen": "Axel",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Elephant",
      },
      {
        id: 2,
        name: {
          "name-USen": "X",
          "name-EUen": "Bob",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Cat",
      },
      {
        id: 4,
        name: {
          "name-USen": "X",
          "name-EUen": "Daisy",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Dog",
      },
      {
        id: 1,
        name: {
          "name-USen": "X",
          "name-EUen": "Pango",
          "name-EUde": "X",
          "name-EUes": "X",
        },
        species: "Anteater",
      },
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

describe("filterVillager", () => {
  it("returns the villagers with the filtered personality type", () => {
    const villagers = [
      { id: 1, name: "Pango", species: "Anteater", personality: "Cranky" },
      { id: 2, name: "Bob", species: "Cat", personality: "Normal" },
      { id: 3, name: "Axel", species: "Elephant", personality: "Snooty" },
      { id: 4, name: "Daisy", species: "Dog", personality: "Cranky" },
    ];
    const type = "Cranky";
    const actual = filterVillager(type, villagers);
    const expected = [
      { id: 1, name: "Pango", species: "Anteater", personality: "Cranky" },
      { id: 4, name: "Daisy", species: "Dog", personality: "Cranky" },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
