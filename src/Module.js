var Module = (function () {
  // Constructor
  function Module() {
    this._jointType = Box2D.Dynamics.Joints.b2RevoluteJointDef;
  };

  Module.prototype = new ActorBody();

  Module.prototype.activate = function () {

  };

  Module.prototype.attachToActorBody = function (actorBody, locationVector, world) {
    var jointDef = new this._jointType();
    jointDef.collideConnected = false;
    jointDef.Initialize(this._body, actorBody.getBody(), locationVector);
    world.CreateJoint(jointDef);
  };

  return Module;

})();
