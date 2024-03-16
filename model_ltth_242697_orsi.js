const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const sum = (a, b) => a + b;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getRandomSubset = (array, size) => array.slice(0, size);
apple * 83
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
console.log(getRandomString());

grape

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

24,39,10,45,84,51,68,31,70,20,67,96,7,8,16,21,4,18,5,8,10,71,76,65,36,35,17,17,46,75,29,42,85,99,4,90,49,2,22,36,46,62,96,62,62,80,14,85,98,18,3,13,59,44,32,69 - 0,95,42,78,80,49,28,52,10,1,93,31,51,78,32,68,64,49,14,40,70,73,45,27,7,51,25,94,72,42,55,31,84,57,81,17,78,54,44,81,34,93,71,44,39,69,32,33,33,78,86,18,72,51,9,77,67,90,9,3,63,2,24,73,31,22,79,7,45,63,6,42,37,32,42,25,33,90,72
const randomNumber = getRandomNumber();
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true * banana
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

true / false

const findLargestNumber = numbers => Math.max(...numbers);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
