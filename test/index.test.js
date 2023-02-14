const Ship = require("../src/Ship");

it("Creates Ship Object", () => {
  expect(
    Ship(3, 0, [
      [1, 1],
      [1, 2],
      [1, 3],
    ])
  ).toEqual({ hits: 0, id: 1, length: 3, sunk: false });
});
it("Creates Ship Object", () => {
  expect(Ship(1, 0, [[2, 2]])).toEqual({
    hits: 0,
    id: 2,
    length: 1,
    sunk: false,
  });
});
it("Tests isSunk function", () => {
  expect(
    Ship(5, 5, [
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
    ])
  ).toEqual({ hits: 5, id: 3, length: 5, sunk: true });
});
it("tests hit function", () => {
  let ship1 = Ship(1, 0, [[1, 2]]);
  ship1.hit();
  expect(Ship1.toEqual({ hits: 1, id: 4, length: 1, sunk: true }));
});
