/**
 * @author Raoul Harel
 * @license The MIT license (LICENSE.txt)
 * @copyright 2015 Raoul Harel
 * @url https://github.com/rharel/js-steering-behaviors
 */


function Vec2(x, y) {

  this._x = x;
  this._y = y;
}

Vec2.prototype = {

  constructor: Vec2,

  add: function(other) {

    return new Vec2(
      this._x + other._x,
      this._y + other._y
    );
  },

  add_: function(other) {

    this._x += other._x;
    this._y += other._y;

    return this;
  },

  sub: function(other) {

    return new Vec2(
      this._x - other._x,
      this._y - other._y
    );
  },

  sub_: function(other) {

    this._x -= other._x;
    this._y -= other._y;

    return this;
  },

  mul: function(other) {

    return new Vec2(
      this._x * other._x,
      this._y * other._y
    );
  },

  mul_: function(other) {

    this._x *= other._x;
    this._y *= other._y;

    return this;
  },

  scale: function(scalar) {

    return new Vec2(
      this._x * scalar,
      this._y * scalar
    );
  },

  scale_: function(scalar) {

    this._x *= scalar;
    this._y *= scalar;

    return this;
  },

  len2: function() {

    return this.dot(this);
  },

  len: function() {

    return Math.sqrt(this.len2());
  },

  unit: function() {

    var len = this.len();
    len = len > 0 ? len : 1;

    return this.scale(1 / len);
  },

  unit_: function() {

    var len = this.len();
    len = len > 0 ? len : 1;

    return this.scale_(1 / len);
  },

  clone: function() {
    return new Vec2(this._x, this._y);
  },

  clone_: function(other) {

    this._x = other._x;
    this._y = other._y;

    return this;
  },

  dot: function(other) {

    return this._x * other._x + this._y * other._y;
  },

  angle: function(other) {

    return Math.acos(this.dot(other) / (this.len() * other.len()));
  },

  set: function(x, y) {

    this._x = x;
    this._y = y;
  },

  get x() { return this._x; },
  set x(value) { this._x = value; },

  get y() { return this._y; },
  set y(value) { this._y = value; },

  toString: function() {

    return 'Vec2(' + this._x + ', ' + this._y + ')';
  }
};


module.exports = Vec2;
