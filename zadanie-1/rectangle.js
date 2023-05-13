"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(point1, point2, point3, point4) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
    }
    Rectangle.prototype.move = function (dx, dy) {
        this.point1.move(dx, dy);
        this.point2.move(dx, dy);
        this.point3.move(dx, dy);
        this.point4.move(dx, dy);
    };
    Rectangle.prototype.getArea = function () {
        var width = Math.abs(this.point2.x - this.point1.x);
        var height = Math.abs(this.point2.y - this.point1.y);
        return width * height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
