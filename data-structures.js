const age = [30, 29, 54];

// [30, 29, 54] => [30, 29, 54, _]
// [0, 1, 2] => [0, 1, 2, 3]

age.push(60); // Constant time complexity: O(1)

// [30, 29, 54] => [_, 30, 29, 54]
// [0, 1, 2] => [0, 1, 2, 3]

age.unshift(10); // Linear time complexity: O(n)

const myAge = age[1]; // Constant time complexity O(1)

////////////

const namePopularity = [
  { userName: "manu", usages: 6 },
  { userName: "max", usages: 5 },
];

const manuUsages = namePopularity.find(
  (person) => person.userName === "manu"
).usages;
// Best case: Constant time complexity: O(1)
// Worst case: Linear time complexity: O(n)
// Average case: Linear time complexity: O(n)

const nameMap = { manu: 6, max: 5 };

const manuUsages2 = nameMap["manu"]; // Constant time complexity: O(1)

// const nameRealMap = new Map();
