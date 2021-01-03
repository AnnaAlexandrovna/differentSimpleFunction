function maxSalaryEmp(obj) {
    let val = 0;
    let k = '';
    if (obj) {
        for (let [key, value] of Object.entries(obj)) {
            if (value > val) {
                val = value;
                k = key;
            }
        }
        return k;
    } else {
        return null;
    }
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
console.log(maxSalaryEmp(salaries));
//
let topSalary =(obj)=>{
    let mas =[];
    let max=0;
    let names =[];
    for (let key in obj){
        mas.push(obj[key])
        names.push(key);
    }
    console.log(mas);
    console.log(names);
    for(let i=0;i<mas.length;i++){
        if (max < mas[i])
            max = mas[i];
    }
    if (mas ===[]){return null}
    else return console.log(max);
}
let Salaries ={
    "Jonh":100,
    "Pete":300,
    "Mary":250,
}
topSalary(Salaries);
