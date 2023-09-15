#!/usr/bin/node

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return () => {
            return seat;
        };
    }
    students = [];
    for (let i = 1; i < numbersOfStudents + 2; i++) {
        students.push(studentSeat(i));
    }
    return students;
}
let classRoom = createClassRoom(10);
