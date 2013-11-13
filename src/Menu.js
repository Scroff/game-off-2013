var Menu = (function () {
  function Menu(stageWidth, stageHeight) {
    var colour = 0xff0000,
        border = 32,
        x = border,
        y = border,
        width = stageWidth - (2 * border);
        height = stageHeight - (2 * border);
    this._sprite = new Sprite();
    this._sprite.graphics.beginFill(colour, 1.0);
    this._sprite.graphics.drawRect(x, y, width, height);
    colour = 0x000000;
    this._sprite.graphics.lineStyle(3, colour, 1);
    this._sprite.graphics.moveTo(x, y);
    this._sprite.graphics.lineTo(x, height + y);
    this._sprite.graphics.lineTo(width + x, height + y);
    this._sprite.graphics.lineTo(width + x, y);
    this._sprite.graphics.lineTo(x, y);
    this._sprite.visible = false; // Start off invisible

    this._active = false;
    this._moduleDefs = []; // Module definitions
    this._moduleSprites = []; // Module sprites
   };

  Menu.prototype.addSprite = function (sprite) {
    this._sprite.addChild(sprite);
  };

  Menu.prototype.addModuleOption = function (bitmapData, x, y, width, height, action, moduleDefIndex) {
    var bitmap = new Bitmap(bitmapData),
        sprite = new Sprite();

    bitmap.x = width * -0.5;
    bitmap.y = height * -0.5;
    sprite.addChild(bitmap);
    sprite.x = x;
    sprite.y = y;
    sprite.index = moduleDefIndex;
    sprite.addEventListener(MouseEvent.MOUSE_UP, action);

    this._sprite.addChild(sprite);
  };

  // Deprecated
  Menu.prototype.addModuleDef = function (moduleDef, x, y, stage) {
    var sprite = new Sprite(),
        bitmap = new Bitmap(moduleDef.getBitmapData()),
        menuBitmap = new Bitmap(moduleDef.getBitmapData());

    //bitmap.x = moduleDef.getWidth * -0.5;
    //bitmap.y = moduleDef.getHeight * -0.5;
    sprite.addChild(bitmap);

    sprite.index = this._moduleDefs.length;
    sprite.x = x;
    sprite.y = y;

    this._sprite.addChild(bitmap);

    this._moduleDefs.push(moduleDef);
    this._moduleSprites.push(sprite);
  };

  Menu.prototype.getSprite = function () {
    return this._sprite;
  };

  Menu.prototype.setActive = function (active) {
    this._active = this._sprite.visible = active;
  };

  return Menu;

})();
