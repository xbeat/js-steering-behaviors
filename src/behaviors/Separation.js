/**
 * @author Raoul Harel
 * @license The MIT license (LICENSE.txt)
 * @copyright 2015 Raoul Harel
 * @url https://github.com/rharel/js-steering-behaviors
 */


var Vec2 = require('../math/Vec2');


/**
 * Drives a character away from the central position of nearby characters.
 *
 * @param {callback} nearest_neighbours
 *    Callback that evaluates and returns an array of characters that are considered
 *    'nearby'. The callback accepts a single Vec2 argument indicating the driven character's
 *    current position.
 *
 * @param {callback} repulsion_weight
 *    Callback that controls the scaling of the repulsive force. The callback accepts a single
 *    scalar argument indicating the distance between the driven character and the central
 *    repulsion point.
 *
 * @constructor
 */
function Separation(nearest_neighbours, repulsion_weight) {

  this._nearest_neighbours = nearest_neighbours;
  this._repulsion_weight = repulsion_weight;
}


Separation.prototype = {

  constructor: Separation,

  drive: function(character, dt) {

    dt = dt || 1;

    var neighbours = this._nearest_neighbours(character.position);

    if (neighbours.length === 1) {

      return character.velocity.scale(-character.mass / dt);
    }

    else {

      var total_force = new Vec2(0, 0);

      neighbours.forEach(

        function(neighbour) {

          var repulsive_force =
            character.position
              .sub(neighbour.position)
              .unit_()
              .scale_(this._repulsion_weight(character.position.distance(neighbour.position)));

          total_force.add_(repulsive_force);
        },
        this
      );

      return total_force;
    }
  }
};


module.exports = Separation;
