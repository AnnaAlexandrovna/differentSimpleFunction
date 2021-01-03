function counter1() {
    return counter1;
}
counter1.count = 0;
counter1.inc = function () {
    return this.count++;
};
counter1.dec = function () {
    return this.count--;
};
counter1.shw = function () {
    console.log(this.count);
};

let count1 = counter1();
console.log(count1);
count1.inc();
count1.inc();
count1.shw();
count1.dec();
count1.shw();