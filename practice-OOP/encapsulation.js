// Encapsulation

/**
 * Creates a new class user
 * @param name
 * @constructor
 */
function User(name) {

  this.name = name; // public property
  this.say = function () { // public method
    return this.name;
  }

  var _name = name; // private property
  function say() { // private method
    return;
  }

  var _name = name; // private property
  this.say = function () { // public privilege method
    return _name;
  }
}

var user = new User('Bob');
console.log(user)


/**
 * Creates a new class gadget
 * @name Gadget
 * @constructor
 */
function Gadget() {
  /**
   * @namespace Gadget
   * @private
   * @property {object} defaults
   * @property {number} defaults.width
   * @property {number} defaults.hight
   * @property {string} defaults.color
   * @type {{color: string, width: number, height: number}}
   */
  var specs = {
    width: 100,
    height: 100,
    color: 'white'
  };

  /**
   * @this Gadget
   * @returns {number}
   */
  this.getSpecsWidth = function () {
    return specs.width;
  }

  /**
   * @this Gadget
   * @returns {string}
   */
  this.getSpecsColor = function () {
    return specs.color;
  }
}

var gadget = new Gadget(); // make class instance
var width = gadget.getSpecsWidth(); // return width gadget
var color = gadget.getSpecsColor(); //return color gadget

console.log(gadget, width, color);