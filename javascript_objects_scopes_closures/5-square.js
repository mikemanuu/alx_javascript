// #!/usr/bin/node

class Square extends require('./4-rectangle.js') {
    constructor(size) {
        super(size, size);
    }
};
module.exports = Square;
