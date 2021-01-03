let userOne = {
    name : "Иван",
    age : 17,
    adres : "Ленина"
}
let userTwo = {
    name : "Петр",
    age : 19,
    adres : "Комарова"
}
let userTree = {
    name : "Оля",
    age : 19,
    adres : "Маршака"
}

let usersMap = new Map ();
usersMap.set(userOne,1);
usersMap.set("a2", userTwo);
usersMap.set(userTree, [1, "2", true]);

console.log(usersMap.size);
console.log("----------");
for (let i of usersMap.keys()){
    console.log(i);
}
console.log("----------");
for (let i of usersMap.values()){
    console.log(i);
}
console.log("----------");
for (let i of usersMap.entries()){
    console.log(i);
}
console.log("----------");
let obj = Object.fromEntries(usersMap.entries());

let map = new Map(Object.entries(userTree));

usersMap.delete("a2");

console.log(usersMap.has(userOne));
console.log(usersMap.has("a2"));
console.log(usersMap.size);

usersMap.clear();
console.log(usersMap.size);
