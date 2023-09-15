#!/usr/bin/node

const studentHogwarts = () => {
    this.privateScore = 0;
    this.name = null;
    this.changeScoreBy = function (points) {
        this.privateScore += points;
    };

    return {
        setName: (newName) => {
            this.name = newName;
        },
        rewardStudent: () => {
            this.changeScoreBy(1);
        },
        penalizeStudent: () => {
            this.changeScoreBy(-1);
        },
        getScore: () => {
            return this.name + ': ' + this.privateScore;
        },
    };
};

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());

