const Ship = require("../src/Ship");

it("Creates Ship Object", () => {
  expect(Ship(3, 0)).toEqual({
    hits: 0,
    id: 1,
    length: 3,
    sunk: false,
  });
});
it("Creates Ship Object", () => {
  expect(Ship(1, 0)).toEqual({
    hits: 0,
    id: 2,
    length: 1,
    sunk: false,
  });
});
it("Tests isSunk function", () => {
  expect(Ship(5, 5)).toStrict({ hits: 5, id: 3, length: 5, sunk: true });
});
it("tests hit function", () => {
  let ship1 = Ship(3, 2);
  ship1.hit();

  expect(ship1).toEqual({ hits: 3, id: 4, length: 3, sunk: false });
});
