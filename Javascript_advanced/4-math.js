#!/usr/bin/node

function divideBy(firstNumber) {
    return (secondNumber) => {
        return secondNumber / firstNumber;
    };
}

function addBy(firstNumber) {
    return (secondNumber) => {
        return secondNumber + firstNumber;
    };
}

let addBy100 = (n) => {
    return addBy(100)(n);
};

let addBy1000 = (n) => {
    return addBy(1000)(n);
};

let divideBy10 = (n) => {
    return divideBy(10)(n);
};

let divideBy100 = (n) => {
    return divideBy(100)(n);
};
