 "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(point1, point2, point3, point4) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
    }
    move(dx, dy) {
        this.point1.move(dx, dy);
        this.point2.move(dx, dy);
        this.point3.move(dx, dy);
        this.point4.move(dx, dy);
    }
    getArea() {
        const width = Math.abs(this.point2.x - this.point1.x);
        const height = Math.abs(this.point2.y - this.point1.y);
        return width * height;
    }
}
exports.Rectangle = Rectangle;
