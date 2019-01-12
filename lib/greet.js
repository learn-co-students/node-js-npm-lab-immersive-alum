/**
 * Import required libraries just below this comment block.
 * Make sure that they're assigned to the variables expected below!
 */

var _ = require('lodash');//added to enable _.curry

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

const curriedGreet = _.curry(greet); //creates curried version of greet

module.exports = curriedGreet;//added to export function greet
