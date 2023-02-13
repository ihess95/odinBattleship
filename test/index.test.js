const Ship = require("../src/Ship");

it("Creates Ship Object", () => {
  expect(Ship(5, 0, false)).toEqual({ hits: 0, length: 5, sunk: false });
});
