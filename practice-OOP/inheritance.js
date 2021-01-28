// Inheritance
// Object, Array, String, Number, Error, Boolean;

/**
 * creat a new class parent
 * @constructor
 */
function Parent() {
    this.p = 'parent prop';
}

/**
 * make method in prototype of a class parent
 * @returns {string}
 */
Parent.prototype.pMethod = function () {
    return this.p;
}

/**
 * @inheritDoc
 * @type {Parent}
 */
Child.prototype = Object.create(Parent.prototype); // extend method of a class parent in a class child
Child.prototype.constructor = Child; // save constructor child


/**
 * create a new class child
 * @constructor
 */
function Child() {
    Parent.call(this);
    this.c = 'child prop';
}

/**
 * make method in prototype of a class child
 * @returns {string}
 */
Child.prototype.cMethod = function () {
    return this.c;
}

/**
 * @inheritDoc
 * @type {Child}
 */
First.prototype = Object.create(Child.prototype);
First.prototype.constructor = First;

/**
 * create a new class first
 * @constructor
 */
function First() {
    Child.call(this);
    this.f = 'first prop'
}

/**
 * make method in prototype of a class first
 * @returns {string}
 */
First.prototype.fMethod = function () {
    return this.f;
}

var first = new First();
console.log(first);