/*!
 * is-registered (https://github.com/jonschlinkert/is-registered)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var debug = require('debug');

module.exports = function(app, name, fn) {
  if (!isObject(app)) {
    return false;
  }

  fn = fn || (app.options ? app.options.validatePlugin : null);
  if (typeof fn === 'function') {
    return fn(app);
  }

  if (typeof name === 'undefined') {
    return false;
  }

  if (typeof app.isRegistered === 'function') {
    return app.isRegistered(name);
  }
  return false;
};
