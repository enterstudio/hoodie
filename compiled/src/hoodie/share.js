// Generated by CoffeeScript 1.3.3
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Hoodie.Share = (function() {

  function Share(hoodie) {
    var api;
    this.hoodie = hoodie;
    this.open = __bind(this.open, this);

    this.instance = Hoodie.Share.Instance;
    Hoodie.Share.Instance.prototype.hoodie = this.hoodie;
    api = this.open;
    $.extend(api, this);
    return api;
  }

  Share.prototype.open = function(share_id, options) {
    return new this.instance({
      id: share_id
    }, options);
  };

  Share.prototype.create = function(attributes) {
    var share;
    if (attributes == null) {
      attributes = {};
    }
    share = new this.instance(attributes);
    return share.save();
  };

  Share.prototype.find = function(id) {
    var _this = this;
    return this.hoodie.my.store.find('$share', id).pipe(function(object) {
      return new _this.instance(object);
    });
  };

  Share.prototype.findAll = function() {
    var _this = this;
    return this.hoodie.my.store.findAll('$share').pipe(function(objects) {
      var obj, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        obj = objects[_i];
        _results.push(new _this.instance(obj));
      }
      return _results;
    });
  };

  Share.prototype.findOrCreate = function(id, attributes) {
    var _this = this;
    return this.hoodie.my.store.findOrCreate('$share', id, attributes).pipe(function(object) {
      return new _this.instance(object);
    });
  };

  Share.prototype.save = function(id, attributes) {
    var _this = this;
    return this.hoodie.my.store.save('$share', id, attributes).pipe(function(object) {
      return new _this.instance(object);
    });
  };

  Share.prototype.update = function(id, changed_attributes) {
    var _this = this;
    return this.hoodie.my.store.update('$share', id, changed_attributes).pipe(function(object) {
      return new _this.instance(object);
    });
  };

  Share.prototype.updateAll = function(changed_attributes) {
    var _this = this;
    return this.hoodie.my.store.updateAll('$share', changed_attributes).pipe(function(objects) {
      var obj, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        obj = objects[_i];
        _results.push(new _this.instance(obj));
      }
      return _results;
    });
  };

  Share.prototype.destroy = function(id) {
    var _this = this;
    return this.find(id).pipe(function(obj) {
      var share;
      share = new _this.instance(obj);
      return share.destroy();
    });
  };

  Share.prototype["delete"] = function() {
    return this.destroy.apply(this, arguments);
  };

  Share.prototype.destroyAll = function() {
    var _this = this;
    return this.findAll().pipe(function(objects) {
      var obj, share, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        obj = objects[_i];
        share = new _this.instance(obj);
        _results.push(share.destroy());
      }
      return _results;
    });
  };

  Share.prototype.deleteAll = function() {
    return this.destroyAll.apply(this, arguments);
  };

  return Share;

})();
