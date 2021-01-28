// Polymorphism

/**
 * creat a new class shape
 * @constructor
 */
function Shape() {
    this.area = function () {
        return 0;
    }

    this.toString = function () {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

/**
 * @inheritDoc
 * @type {Shape}
 */
Circle.prototype = Object.create(Shape.prototype); // extend method of a class parent in a class shape
Circle.prototype.constructor = Circle; // save constructor

/**
 * creat a new class circle
 * @param r
 * @constructor
 */
function Circle(r) {
    Shape.call(this);
    this.radius = r;

    this.area = function () {
        return Math.PI * (this.radius ** 2);
    }
}

/**
 * @inheritDoc
 * @type {Shape}
 */
Rectangle.prototype = Object.create(Shape.prototype); // extend method of a class parent in a class shape
Rectangle.prototype.constructor = Rectangle;// save constructor


/**
 * creat a new class rectangle
 * @param w
 * @param h
 * @constructor
 */
function Rectangle(w, h) {
    Shape.call(this);
    this.width = w;
    this.height = h;

    this.area = function () {
        return this.width * this.height;
    }
}

/**
 * @inheritDoc
 * @type {Shape}
 */
Triangle.prototype = Object.create(Shape.prototype); // extend method of a class parent in a class shape
Triangle.prototype.constructor = Triangle; // save constructor

/**
 * creat a new class triangle
 * @param b
 * @param h
 * @constructor
 */
function Triangle(b, h) {
    Shape.call(this);
    this.base = b;
    this.height = h;

    this.area = function () {
        return this.base * this.height / 2;
    }
}


/**
 * calculates the amount
 * @param shapes
 * @returns {*} sum shape
 */
function totalShapes(shapes) {
    return shapes.reduce(function (sum, shape) {
        if(shape instanceof Shape) {
            console.log('Shape: ' + shape.toString() + ' - area ' + shape.area())
            return sum + shape.area();
        }
        throw Error('Bad argument')
    }, 0)
}

const shapes = [
    new Circle(3),
    new Rectangle(2, 3),
    new Triangle(3, 4),
    new Circle(2)
]

totalShapes(shapes);