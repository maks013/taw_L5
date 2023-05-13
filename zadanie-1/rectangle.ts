class Point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
}

export{Point};

class Rectangle {
    constructor(
        public point1: Point,
        public point2: Point,
        public point3: Point,
        public point4: Point
    ) {}

    move(dx: number, dy: number): void {
        this.point1.move(dx, dy);
        this.point2.move(dx, dy);
        this.point3.move(dx, dy);
        this.point4.move(dx, dy);
    }

    getArea(): number {
        const width = Math.abs(this.point2.x - this.point1.x);
        const height = Math.abs(this.point2.y - this.point1.y);
        return width * height;
    }
}

export {Rectangle};
