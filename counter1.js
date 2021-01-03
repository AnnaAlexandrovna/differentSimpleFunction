function makeArray() {
    let elements = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let element = function () {
            // функция
            console.log(j); // должна выводить порядковый номер
        };
        elements.push(element);
        i++;
    }
    return elements;
}

let elements = makeArray();
elements[0]();
elements[5]();

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
let counter3 = counter;

console.log("---");
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log("----"); // 1
// console.log(counter3()); // 2
// console.log(counter3()); // 3
console.log(makeCounter()());

