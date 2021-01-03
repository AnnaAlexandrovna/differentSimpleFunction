let date1 = new Date(2012, 1, 22, 3, 12);
let date2 = new Date('2012-02-20T03:12-03:00');
let date3 = new Date('2012-02-20 3:12');
console.log(date1);
console.log(date2);
console.log(date3);

function getWeekDay(date) {
    let dateNew = date.getDay();
    switch (dateNew) {
        case 0:
            return 'ВС';
        case 1:
            return 'ПН';
        case 2:
            return 'ВТ';
        case 3:
            return 'СР';
        case 4:
            return 'ЧТ';
        case 5:
            return 'ПТ';
        case 6:
            return 'СБ';
    }

    // console.log(dateNew);
}
console.log(getWeekDay(date1));

function date12(d) {
    let day = d.getDay();
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    return arr[day];
}
console.log(getWeekDay(date1));

let date123 = new Date(2015, 0, 2);
//дата
function getDateAgo(dateQ, ago) {
    console.log(dateQ instanceof Date);
    if (dateQ instanceof Date) {
        return new Date(dateQ - ago * 1000 * 3600 * 24).getDate();
    } else {
        console.log("Не является датой");
        return null;
    }
}
console.log(getDateAgo(date123, 2));
