/*!
 * is-registered (https://github.com/jonschlinkert/is-registered)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('is-registered');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('is-registered')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('registered', function() {
      debug('running registered');
      
    });
  };
};
