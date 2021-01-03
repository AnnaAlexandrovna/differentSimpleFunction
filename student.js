// 1, 2
let student = {
    name: 'Иван',
    surname: 'Иванов',
    age: 20,
    languages: [],
    currentLevel: 4,
    log: [],
    //5
    setAge: function () {
        while (true) {
            let userAge = prompt('Введите ваш возраст цифрой');
            if (this.log !== undefined) {
                this.log.push(
                    'Пользователь ввел ' +
                    '"' +
                    userAge +
                    '"' +
                    'в значение userAge'
                );
            }
            if (userAge !== null && userAge !== '') {
                userAge = parseInt(userAge);
                if (!isNaN(userAge)) {
                    if (userAge > 16 && userAge < 30) {
                        this.age = userAge;
                        break;
                    } else {
                        alert('Значение не входит в диапазон от 17 до 29');
                        continue;
                    }
                } else {
                    alert('Вы ввели некорректные символы');
                    continue;
                }
            } else {
                alert('Вы нажали отмена или ничего не ввели');
                continue;
            }
        }
    },
    //6
    getName() {
        // alert("Имя студента - " + this.name + ", фамилия студента - " + this.surname);
        if (this.name !== undefined && this.surname !== undefined) {
            return this.name + ' ' + this.surname;
        } else {
            console.log('У объекта нет имени и/или фамилии');
            return null;
        }
    },
    //7
    showName: (names = student.getName()) => {
        console.log('Имя, Фамилия студента : ' + names);
    },
};
//3
function setNames() {
    let usersNameAndSurname;
    outer: while (true) {
        usersNameAndSurname = '';
        usersNameAndSurname = prompt('Введите имя и фамилию');
        if (this.log !== undefined) {
            this.log.push(
                'Пользователь ввел ' +
                '"' +
                usersNameAndSurname +
                '"' +
                'в значение usersNameAndSurname'
            );
        }

        if (usersNameAndSurname !== null && usersNameAndSurname !== '') {
            for (let key in usersNameAndSurname) {
                //пустая строка преобразуется в 0
                if (
                    !isNaN(+usersNameAndSurname.charAt(key)) &&
                    usersNameAndSurname.charAt(key) !== ' '
                ) {
                    alert('Вы ввели число');
                    continue outer;
                }
            }

            usersNameAndSurname = usersNameAndSurname.split(' ');

            if (usersNameAndSurname.length == 1) {
                usersNameAndSurname = usersNameAndSurname[0].split(',');
            }

            if (usersNameAndSurname.length == 1) {
                usersNameAndSurname = usersNameAndSurname[0].split('.');
            }

            if (usersNameAndSurname.length == 1) {
                usersNameAndSurname = usersNameAndSurname[0].split(';');
            }
            if (usersNameAndSurname.length == 1) {
                alert('Не удалось разделить имя и фамилию');
                continue outer;
            } else if (usersNameAndSurname.length > 2) {
                alert('Вы ввели более 2х слов');
                continue outer;
            } else {
                console.log(usersNameAndSurname);
                this.name = usersNameAndSurname[0];
                this.surname = usersNameAndSurname[1];
                break;
            }
        } else {
            alert('Вы нажали отмена или ничего не ввели');
            continue outer;
        }
    }
}
//4
student.setName = setNames;
// student.setName();
// console.log(student.name+ " " + student.surname + " "+ student.log);

// student.setAge();
// console.log(student.age);

// console.log(student.getName());

// student.showName();

//8
function getAge() {
    let str;
    if (this.age !== undefined) {
        count = this.age % 100;
        if (count >= 5 && count <= 20) {
            str = 'лет';
        } else {
            count = count % 10;
            if (count == 1) {
                str = 'год';
            } else if (count >= 2 && count <= 4) {
                str = 'года';
            } else {
                str = 'лет';
            }
        }
        return this.age + ' ' + str;
    } else {
        console.log('У объекта нет свойства age');
        return null;
    }
}

//9
student.getAge = getAge;
// console.log(student.getAge());

//10
let showAge = function () {
    console.log(`Возраст студента: ${this.getAge()}`);
};

student.showAge = showAge;
// student.showAge();

//11
let askLanguage = function () {
    while (true) {
        let lenguageInfo = prompt(
            'Введите информацию о языке, которым вы владеете (разделитель - запятая)',
            'Английский,b2,2012'
        );
        if (this.log !== undefined) {
            this.log.push(
                'Пользователь ввел ' +
                '"' +
                lenguageInfo +
                '"' +
                'в значение lenguageInfo'
            );
        }
        if (lenguageInfo !== null) {
            if (lenguageInfo !== '') {
                lenguageInfo = lenguageInfo.split(',');
                if (lenguageInfo.length == 3) {
                    return lenguageInfo;
                } else {
                    alert(
                        'Вы заполнили информацию некорректно, заполните информацию согласно примеру'
                    );
                    continue;
                }
            } else {
                alert('Пустая строка, заполните информацию согласно примеру');
                continue;
            }
        } else {
            alert(
                'Вы нажали Отмена, для записи информации о языках, вызовите функцию еще раз'
            );
            return null;
        }
    }
};
student.askLanguage = askLanguage;
// console.log(student.askLanguage());

//12
student.setLanguage = function () {
    let language = this.askLanguage();
    if (language !== null) {
        language = {
            nameOfLanguage: language[0],
            levelOfLanguage: language[1],
            yearOfLanguage: +language[2],
        };
        this.languages.push(language);
        // console.log(this.languages);
    }
};

student.setLanguage();
student.setLanguage();
student.setLanguage();
student.setLanguage();
console.log(student.languages);

//13
student.getLanguageByYear = function (startYear, stopYear) {
    return this.languages.filter(
        language =>
            language.yearOfLanguage >= startYear &&
            language.yearOfLanguage <= stopYear
    );
};
// console.log(student.getLanguageByYear(2012, 2013));

//14
student.getLanguageByLevel = function (levelFind) {
    return this.languages.filter(
        language => language.levelOfLanguage == levelFind
    );
};
// console.log(student.getLanguageByLevel("b2"));

//15
student.showLanguages = function (arrOfLan = this.languages) {
    arrOfLan = arrOfLan.sort(function compare(a, b) {
        return a.yearOfLanguage - b.yearOfLanguage;
    });
    for (let key in arrOfLan) {
        console.log(
            `Язык: ${arrOfLan[key].nameOfLanguage} Уровень: ${arrOfLan[key].levelOfLanguage} Год завершения обучения:${arrOfLan[key].yearOfLanguage}`
        );
    }
};

// student.showLanguages();

//16
student.showLog = function () {
    for (let key in this.log) {
        console.log(this.log[key]);
    }
};

// student.showLog();

student.showName();