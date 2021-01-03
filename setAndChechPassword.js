function setPassword(password) {
    return function checkPassword(passwordNew) {
        return passwordNew == password;
    };
}

let checkPassword = setPassword('1234');
console.log(checkPassword('1234'));
console.log(checkPassword('123'));
