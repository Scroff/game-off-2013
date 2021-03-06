var Module = (function () {
  // Constructor
  function Module() {
    this._jointType = Box2D.Dynamics.Joints.b2RevoluteJointDef;
    this._active = false;
  };

  Module.prototype = new ActorBody();

  Module.prototype.activate = function () {

  };

  Module.prototype.setActive = function (active) {
    this._active = active;
  };

  Module.prototype.update = function () {
    this._update();
    if(this._active) {
      this.performAction();
    }
  };

  Module.prototype.performAction = function () {
    // Nothing by default
  };

  Module.prototype.attachToActorBody = function (actorBody, locationVector, world) {
    var jointDef = new this._jointType();
    jointDef.collideConnected = false;
    jointDef.Initialize(this._body, actorBody.getBody(), locationVector);
    world.CreateJoint(jointDef);
  };

  return Module;

})();
