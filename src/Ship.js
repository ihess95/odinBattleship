let id = 0;
function Ship(l, hits) {
  id++;
  let sunk;
  (function isSunk() {
    if (hits >= l) {
      sunk = true;
    } else {
      sunk = false;
    }
    return sunk;
  })();
  return {
    id: id,
    length: l,
    hits: hits,
    sunk: sunk,
    // hit: function hit() {
    // this.hits++;
    // },
  };
}

module.exports = Ship;
