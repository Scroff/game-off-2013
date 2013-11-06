var Walker = (function () { 
  // Constructor
  function Walker() {
    this._modules = [];
  };

  Walker.prototype = new ActorBody();

  Walker.prototype.addModule = function (module, i) {
    this._modules[i] = module;
  };

  Walker.prototype.setModuleActive = function (i, active) {
    this._modules[i].setActive(active);
  }

  Walker.prototype.update = function () {
    this._update();
    for(m in this._modules) {
      this._modules[m].update();
    }
  }

  return Walker;
 
})();
