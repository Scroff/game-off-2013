// Defines a specific type of module and spawns a new instance of the module
var ModuleDef = (function () {
  function ModuleDef(type, bitmapData, width, height, world) {
    this._type = type;
    this._bitmapData = bitmapData;
    var bitmap = new Bitmap(bitmapData);
    bitmap.x = width * -0.5;
    bitmap.y = height * -0.5;
    this._sprite = new Sprite();
    this._sprite.addChild(bitmap);
    this._width = width;
    this._height = height;
    this._world = world;
  };

  ModuleDef.prototype.spawnModule = function (x, y) {
    var module = new this._type();
    module.init(this._bitmapData, this._height, this._width, x, y, b2Body.b2_dynamicBody, this._world);
    return module;
  };

  ModuleDef.prototype.getBitmapData = function () {
    return this._bitmapData;
  };

  ModuleDef.prototype.getWidth = function () {
    return this._width;
  };

  ModuleDef.prototype.getHeight = function () {
    return this._height;
  };

  ModuleDef.prototype.getSprite = function () {
    return this._sprite;
  };
  
  return ModuleDef;
})();
