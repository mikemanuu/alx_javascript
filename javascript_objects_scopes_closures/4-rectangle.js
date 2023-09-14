// #!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    // Method print
    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }

    //Method double
    double() {
        this.height = this.height * 2;
        this.width = this.width * 2;
    }
    //Method rotate
    rotate() {
        [this.width, this.height] = [this.height, this.width];
    }

}
module.exports = Rectangle;
