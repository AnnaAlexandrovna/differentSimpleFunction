//1
let user = {
    name: 'Иван',
    age: 30,
    language: 'Русский',
    weight: 45,
};
//2
console.log(user);
//3
console.log(String(user));
//4
console.log(Number(user));
//5
console.log(user[Symbol.toPrimitive]);
console.log(Symbol.toPrimitive in user);
//6
user[Symbol.toPrimitive] = function (hint) {
    if (hint == 'string') {
        return this.name;
    } else if (hint == 'number') {
        return this.age;
    } else {
        return 'Имя ' + this.name + ' Вес ' + this.weight;
    }
};
//проверка
console.log(String(user));
console.log(Number(user));
console.log(user + 1);
