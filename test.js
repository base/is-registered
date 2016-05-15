'use strict';

require('mocha');
var assert = require('assert');
var isRegistered = require('./');
var Base = require('base');
var base, plugin;

describe('is-registered', function() {
  beforeEach(function() {
    base = new Base();
  });

  it('should export a function', function() {
    assert.equal(typeof isRegistered, 'function');
  });

  it('should return false if the value is not an object', function() {
    assert(!isRegistered());
    assert(!isRegistered(null));
    assert(!isRegistered('foo'));
    assert(!isRegistered([]));
    assert(!isRegistered(42));
  });

  it('should return false if the value is not an instance of Base', function() {
    assert(!isRegistered({}));
    assert(!isRegistered({isApp: true}));
    function Foo() {};
    assert(new Foo());
  });

  it('should return false if a plugin is not registered', function() {
    var base = new Base();
    assert(!isRegistered(base, 'foo'));
  });

  it('should return true if a plugin is registered', function() {
    var base = new Base();
    isRegistered(base, 'foo');
    assert(isRegistered(base, 'foo'));
  });

  it('should use a custom function', function() {
    var base = new Base();
    var is = isRegistered(base, 'foo', function(app) {
      return app.isApp === true;
    });
    assert(!is);

    base.isApp = true;
    var is = isRegistered(base, 'foo', function(app) {
      return app.isApp === true;
    });
    assert(is);
  });

  it('should use a custom function on app.options', function() {
    var base = new Base();
    base.options.isRegistered = function(app) {
      return app.isApp === true;
    };
    assert(!isRegistered(base, 'foo'));
    base.isApp = true;
    assert(isRegistered(base, 'foo'));
  });
});
