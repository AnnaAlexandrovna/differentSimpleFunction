//Пишем функцию init с аргументами start, end, запуск которой возвращает другую функцию rnd. Запуск функции rnd генерирует и
//возвращает случайное числа от start до end, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
//Если все числа в диапазоне до end сгенерированы, функция rnd возвращает массив сгенерированных чисел и пишет, что числа из диапазона сгенерированы.

//Пишем задачу с использованием замыкания. В лексическом окружении (замыкании) функции rnd должен храниться массив чисел,
//которые уже были сгенерированы функцией.
function init(start, end) {

    let arrForDelete = [];
    let arrFull = [];
    for (i = start; i <= end; i++) {
        arrForDelete.push(i);
        arrFull.push(i);
    }
    function rnd() {
        while (arrForDelete.length !== 0) {
            let num = Math.abs(Math.floor(Math.random() * arrForDelete.length));
            let randomNumFormArr = arrForDelete[num];
            // console.log('a is ' + a);
            // interval.delete(arr[num]);
            arrForDelete.splice(num,1);
            return randomNumFormArr;
            // console.log(arr);
        }
        if (arrForDelete.length == 0) {
            console.log('все числа из интервала использованы');
            return arrFull;
        }
    }
    return rnd;
}
let gen1 = init(1, 10);
let result1;
for (i = 1; i < 11; i++) {
    console.log((result1 = gen1()));
}
console.log('------');
let gen2 = init(11, 23);
let result2;
for (i = 11; i < 25; i++) {
    console.log((result2 = gen2()));
}
