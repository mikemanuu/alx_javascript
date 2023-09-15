#!/usr/bin/node

function welcome(firstName, lastName) {
    function displayFullName() {
        let fullName = firstName + ' ' + lastName;
        alert('Welcome ' + fullName + ' !');
    }
    displayFullName();
}