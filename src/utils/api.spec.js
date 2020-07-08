import * as api from "./api";

describe("getInfo", () => {
  it("returns an array of objects", () => {
    const actual = api.getInfo("villagers");
    return actual.then((data) => {
      expect(data).toBeInstanceOf(Array);
      expect(data[0]).toBeInstanceOf(Object);
    });
  });
  it("contains an object with the id equal to 1 and species equal to Anteater", () => {
    const actual = api.getInfo("villagers");
    return actual.then((data) => {
      expect(data[0].id).toBe(1);
      expect(data[0].species).toBe("Anteater");
    });
  });
});

describe("getInfoById", () => {
  it("returns an object", () => {
    const actual = api.getInfoById("villagers", 1);
    return actual.then((data) => {
      expect(data).toBeInstanceOf(Object);
    });
  });
  it("returns an object with a species equal to Anteater and gender equal to Male", () => {
    const actual = api.getInfoById("villagers", 1);
    return actual.then((data) => {
      expect(data.species).toBe("Anteater");
      expect(data.gender).toBe("Male");
    });
  });
});
