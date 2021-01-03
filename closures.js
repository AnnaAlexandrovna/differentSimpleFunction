let user = {
    name: 'Иван',
    hi() {
        console.log(this.name, 'говорит привет!');
    },
};
let tId = setInterval(() => {
    user.hi();
}, 1000);
