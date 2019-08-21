
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./first-interaction-action.cjs.production.min.js')
} else {
  module.exports = require('./first-interaction-action.cjs.development.js')
}
