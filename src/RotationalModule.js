var RotationalModule = (function () {
  function RotationalModule() {
    this._jointType = Box2D.Dynamics.Joints.b2RevoluteJointDef;
    this._speed = Math.PI;
    this._active = false;
  };

  RotationalModule.prototype = new Module();

  Module.prototype.performAction = function () {
    this.SetAngularVelocity(this._speed);
  };

  Module.prototype.setSpeed = function (speed) { 
    this._speed = speed; 
  };

  return RotationalModule;
})();
