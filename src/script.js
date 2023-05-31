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