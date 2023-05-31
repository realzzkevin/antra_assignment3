// start from mymap
Array.prototype.myMap = function (fn, thisArg) {
    const newArray = [];
    const len = this.length;
    for (let i = 0; i < len; ++i){
        newArray.push(fn( this[i], i, this));
    }
    return newArray;
}

Array.prototype.myFilter = function(fn, thisArg) {
    const newArray = [];
    const len = this.length;
    for (let i = 0; i < len; ++i) {
        if (fn(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

Array.prototype.myReduce = function(fn, initalValue){
    const len = this.length
    let currentIndex = initalValue !== undefined ? 0 : 1;
    let accumulator =  initalValue !== undefined ? initalValue : this[currentIndex];
    for( currentIndex; currentIndex < len; ++currentIndex){
        let currentValue = this[currentIndex];
        accumulator = fn( accumulator, currentValue, currentIndex, this);
    }
    return accumulator;
}
const test = [1,2,3,4,5,6];
const test2 = {a : "this"};

const result = test.myMap((el, index) => {
    if(index > 3){
        return el * index;
    } else {
        return 0;
    }
}, test2);

const filterRes = test.myFilter( x =>  (x % 2 == 0));
const reduceTest = test.myReduce( ((a,b,c) => {return a + b}));

console.log(result);
console.log(filterRes);
console.log(reduceTest);