var Walker = (function () { 
  // Constructor
  function Walker() {
    this._modules = [];
  };

  Walker.prototype = new ActorBody();

  Walker.prototype.addModule = function (module, i) {
    this._modules[i] = module;
  };

  Walker.prototype.activateModule = function (i) {
    this._modules[i].activate();
  }

  return Walker;
 
})();
