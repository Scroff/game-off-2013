var ModuleManager = (function () {
  // Constructor
  function ModuleManager(stage, world) {
    this._modules = [];
    this._moduleDefs = [];
    this._createQueue = []; // Queue of moduleDef sprites that need modules created.
    this._moduleSpriteUnderMouse = null;
    this._mouseSprite = null;
    this._mouse = {'x': 0, 'y': 0};
    this._mouseOffset = {'x': 0, 'y': 0};

    this._stage = stage;
    this._world = world;
  };

  ModuleManager.prototype.addModuleDef = function (
    type, 
    bitmapData, 
    width, 
    height,
    menu,
    menuX,
    menuY) {
    var moduleDef = new ModuleDef(type, bitmapData, width, height, this._world),
        sprite = moduleDef.getSprite();
    sprite.index = this._moduleDefs.length;
    sprite.addEventListener(MouseEvent.MOUSE_UP, this._moduleDefSpriteMouseUp);
    sprite.visible = false; // Don't show until it's under mouse
    this._stage.addChild(sprite);
    this._moduleDefs.push(moduleDef);
  }; //TODO: Setup module in menu here

  // Called every frame to update all modules
  // mouse = position of the mouse with x and y values
  ModuleManager.prototype.update = function (mouse) {
    for(module in modules) {
      module.update();
    }
  };

  // Events //
  // To be added to module def sprite and called when mouse is released
  ModuleManager.prototype._moduleDefSpriteMouseUp = function (e) {
    if(this._mouseSprite = e.currentTarget) {
      var module = this._moduleDefs[e.currentTarget.index].spawnModule(mouse.x, mouse.y)
      this._mouseSprite.visible = false; // TODO: HERE
    };
  };

  // To be added to module def sprites and called when mouse is over them
  // Keeps a track of what is under the mouse for when we want to attach things
  ModuleManager.prototype._mouseOverModuleSprite = function (e) {
    this._moduleSpriteUnderMouse = e.currentTarget;
  };
  
  return ModuleManager;
};
