function excel(number) {
    let num1 = (number + '').split('').reverse();
    let num2 = [];
    let n = 0;
    for (let i in num1) {
        num2.push(num1[i]);
        n++;
        if (n == 3) {
            num2.push(' ');
            n = 0;
        }
    }
    return num2.reverse().join('') + ',00 руб.';
}
console.log(excel(1234567856756556556));
