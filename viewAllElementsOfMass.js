let arr = [
  0,
  1,
  2,
  [3, 33, 333],
  4,
  5,
  [6, 66, 666, [6666, 66666]],
  7,
  8,
  9,
  10,
];
function go(array) {
  for (let a in array) {
    if (Array.isArray(array[a])) {
      // console.log("зашли");
      // console.log(a);
      go(array[a]);
    } else {
      console.log(array[a]);
    }
  }
}
go(arr);