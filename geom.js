
// Rectangle
// Define a `Rectangle` class. Its constructor should take a `length` and `width` as arguments.
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    // Augment the class with the following methods...
    // * `isSquare` - returns true if the rectangle is a square.
    isSquare() {
        if (this.length === this.width) {
            console.log("True: this is square")
            return;
        } else {
            console.log("False: This is not square")
            return;
        }
    }
    // * `area` - calculates the area of the rectangle.
    area() {
        let area = this.length * this.width;
        console.log(`The area is ${area}`);
        return;
    }
    // * `perimeter` - calculates the perimeter of the rectangle. 
    perimeter() {
        let perimeter = (this.length * 2) + (this.width * 2);
        console.log(`The perimeter is ${perimeter}`);
        return;
    }
}


// Create a few rectangles with different lengths and widths.
let rectangle1 = new Rectangle(42, 42);
console.log("rectangle1");
rectangle1.isSquare();
rectangle1.area();
rectangle1.perimeter();

let rectangle2 = new Rectangle(56, 78);
console.log("rectangle2");
rectangle2.isSquare();
rectangle2.area();
rectangle2.perimeter();

let rectangle3 = new Rectangle(56, 78);
console.log("rectangle3");
rectangle3.isSquare();
rectangle3.area();
rectangle3.perimeter();

let rectangle4 = new Rectangle(23, 21);
console.log("rectangle4");
rectangle4.isSquare();
rectangle4.area();
rectangle4.perimeter();

//Triangle
// Define a `Triangle` class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    // Augment the class with the following methods...
    // * `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
    isEquilateral() {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            console.log("True: This is an Equilateral triangle")
            return;
        } else {
            console.log("False: This is not an Equilateral triangle")
            return;
        }
    }
    // * `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
    isIsosceles() {
        if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
            console.log("True: This is an Isosceles triangle.")
            return;
        } else {
            console.log("False: This is not an Isosceles triangle.")
            return;
        }
    }
    // * `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
    isArea() {
        let s = (this.sideA + this.sideB + this.sideC) / 2;
        let area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        console.log(`The area of the triangle is ${area}.`)

    }
    // * `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).
    isObtuse() {
        //If a2 + b2 < c2, then it is obtuse triangle.
        if (((Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)) < Math.pow(this.sideC, 2)) || ((Math.pow(this.sideC, 2) + Math.pow(this.sideB, 2)) < Math.pow(this.sideA, 2)) || ((Math.pow(this.sideC, 2) + Math.pow(this.sideA, 2)) < Math.pow(this.sideB, 2))) {
            console.log("True: This triangle is obtuse.")
            return;
        } else {
            console.log("False: This triangle is not obtuse.")
            return;
        }

    }


}

// Create a few triangles with different lengths and widths.
let triangle1 = new Triangle(24, 24, 24);
console.log("triangle1")
triangle1.isEquilateral();
triangle1.isIsosceles();
triangle1.isArea();
triangle1.isObtuse();

let triangle2 = new Triangle(62, 43, 20);
console.log("triangle2")
triangle2.isEquilateral();
triangle2.isIsosceles();
triangle2.isArea();
triangle2.isObtuse();

let triangle3 = new Triangle(33, 33, 4);
console.log("triangle3")
triangle3.isEquilateral();
triangle3.isIsosceles();
triangle3.isArea();
triangle3.isObtuse();


// Line Segment
// Define a `LineSegment` class. Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.
class LineSegment {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    // Augment the class with the following method...
    // * `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).
    // squareroot of (x1 - y1)squared + (x2 - y2)squared
    length() {
        let coordXY1 = Math.pow((this.x1 - this.y1), 2);
        let coordXY2 = Math.pow((this.x2 - this.y2), 2);
        let length = Math.sqrt(coordXY1 + coordXY2);
        console.log(`The length of the line is: ${length}`);

    }
}
let lineSegment1 = new LineSegment(22, 30, 24, 50);
console.log("line segment 1");
lineSegment1.length();


