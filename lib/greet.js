/**
 * Import required libraries just below this comment block.
 * Make sure that they're assigned to the variables expected below!
 */

 _ = require('lodash')

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

const curriedGreet = _.curry(greet);

module.exports = curriedGreet
