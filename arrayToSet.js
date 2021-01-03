let arr = ['Петя', 'Валя', 'Коля', 'Петя'];
let set1 = new Set(arr);
console.log(set1.size);

for (let i of set1) {
    console.log(i);
}
function uniq(arr) {
    return Array.from(new Set(arr));
}
let values = [
    'Hare',
    'Krishna',
    'Hare',
    'Krishna',
    'Krishna',
    'Krishna',
    'Hare',
    'Hare',
    ':-O',
];
console.log(uniq(values));
