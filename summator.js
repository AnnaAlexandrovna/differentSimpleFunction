let summator = (function () {
    let summ = 0;
    return function (...args) {
        // console.log(args);
        summ += Number(args);
        return summ;
    };
})();
console.log(summator);
console.log(summator(10));
console.log(summator(20));
console.log(summator(0));
console.log(summator(45));
