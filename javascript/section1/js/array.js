const array = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];
console.log(array);
// 実行結果：(2) [Array(3), Array(3)]
console.log(array[1][2]);
// 実行結果：f

// console
//
// (2) [Array(3), Array(3)]
// 0: (3) ["a", "b", "c"]
// 1: (3) [1, 2, 3]
// length: 2
// __proto__: Array(0)
////////////////////////////////
// (2) [Array(3), Array(3)]
// 0: Array(3)
// 0: "a"
// 1: "b"
// 2: "c"
// length: 3
// __proto__: Array(0)
// 1: Array(3)
// 0: 1
// 1: 2
// 2: 3
// length: 3
// __proto__: Array(0)
// length: 2
// __proto__: Array(0)
