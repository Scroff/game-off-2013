var ModuleButton = (function () {

  function ModuleButton() {

  };

  ModuleButton.prototype.init = function (x, y, bitmap) {
    this._sprite = new Sprite();
    this._sprite.addChild(bitmap);
    this._sprite.x = x;
    this._sprite.y = y;
    this._sprite.addEventListener(MouseEvent.MOUSE_DOWN, this.buttonDown);
    this._sprite.addEventListener(MouseEvent.MOUSE_UP, this.buttonUp);
    this._module = false; // Start with no module
  };

  ModuleButton.prototype.setModule = function (module) {
    this._module = module;
  };

  ModuleButton.prototype.getSprite = function () {
    return this._sprite;
  };

  ModuleButton.prototype.buttonDown = function (e) {
    console.log(this);
    if(this._module)
      this._module.setActive(true);
  };

  ModuleButton.prototype.buttonUp = function (e) {
    if(this._module)
      this._module.setActive(false);
  };

  return ModuleButton;
})();
