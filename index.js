/*!
 * is-registered (https://github.com/jonschlinkert/is-registered)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

module.exports = function(app, name) {
  if (!isObject(app) || typeof name !== 'string') {
    return true;
  }

  if (typeof app.isRegistered !== 'function') {
    app.registered = {};
    app.isRegistered = function(name) {
      if (app.isRegistered(name)) {
        return true;
      }
      app.registered[name] = true;
      return false;
    };
  }
  return app.isRegistered(name);
};
