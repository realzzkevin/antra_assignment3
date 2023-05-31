Array.prototype.myMap = function (fn, thisArg) {
  const newArray = [];
  const len = this.length;
  for (let i = 0; i < len; ++i) {
    newArray.push(fn(this[i], i, this));
  }
  return newArray;
};

Array.prototype.myFilter = function (fn, thisArg) {
  const newArray = [];
  const len = this.length;
  for (let i = 0; i < len; ++i) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.myReduce = function (fn, initalValue) {
  const len = this.length;
  let currentIndex = initalValue !== undefined ? 0 : 1;
  let accumulator = initalValue !== undefined ? initalValue : this[currentIndex];
  for (currentIndex; currentIndex < len; ++currentIndex) {
    let currentValue = this[currentIndex];
    accumulator = fn(accumulator, currentValue, currentIndex, this);
  }
  return accumulator;
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 42];

let myMapTest = arr.myMap((el) => el * 3);
console.log(myMapTest);
myMaptest = arr.myMap((el, index) => el + index);
console.log(myMapTest);

let myFilterTest = arr.myFilter((el) => el % 2 == 0);
console.log(myFilterTest);
myFilterTest = arr.myFilter((el, index) => {
  return (el - index) % 2 != 0;
});
console.log(myFilterTest);

let myReduceTest = arr.myReduce((a, b) => a * b);
console.log(myReduceTest);
myReduceTest = arr.myReduce((a, b) => a + b, 3);
console.log(myReduceTest);
