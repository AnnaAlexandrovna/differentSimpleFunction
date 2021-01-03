function show() {
    for (let arg of arguments) {
        console.log(arg);
    }
}
let str = '1123456789';
function show123(...args) {
    for (let arg in args) {
        console.log(arg);
    }
}
show123(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

show(...str);
function f() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(`${i} = ` + arguments[i]);
    }
}
f(1,3,4,6,7,8,93,2,9,10);
