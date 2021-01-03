function min3(arr) {
    arr = arr.sort((a, b) => a - b);
    if (arr.length >= 3) {
        return arr.slice(0, 3);
    } else {
        console.log("В массиве меньше 3 символов");
        return null;
    }
}

console.log(min3([-100, 1, -2, 3, 100, 20, 50]));
