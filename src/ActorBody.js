// Groups a box2d body and an ivank actor together and keeps both in sync
var ActorBody = (function () {
  // Variables for converting between Box2d (meter) and IvanK (pixel)
  ActorBody.PIXEL_TO_METER = 0.1;
  ActorBody.METER_TO_PIXEL = 10;
  
  function ActorBody() {
    this._debug = false;
  }; 

  ActorBody.prototype.init = function (bitmapLocation, height, width, body) {
    var bmData = new BitmapData(bitmapLocation),
        bm = new Bitmap(bmData);
    bm.x = height * -0.5;
    bm.y = width * -0.5;
    this._sprite = new Sprite();
    this._sprite.addChild(bm);
    this._width = width;
    this._height = height;

    this._body = body;
    this.update();
  };

  ActorBody.prototype.update = function () {
    var p = this._body.GetPosition();
    this._sprite.x = p.x * ActorBody.METER_TO_PIXEL;
    this._sprite.y = p.y * ActorBody.METER_TO_PIXEL;
    this._sprite.rotation = this._body.GetAngle() * 180 / Math.PI;
  };

  ActorBody.prototype.getSprite = function () {
    return this._sprite;
  };

  ActorBody.prototype.SetLinearVelocity = function (v) {
    this._body.SetLinearVelocity(v);
  };

  ActorBody.prototype.SetAngularVelocity = function (omega) {
    this._body.SetAngularVelocity(omega);
  }

  ActorBody.prototype.setDebug = function (debug) {
    this._debug = debug;
    if(debug) {
      var x = this._sprite.x - this._width * 0.5,
          y = this._sprite.y - this._height * 0.5;
      this._sprite.graphics.lineStyle(3, 0xff0000);
      this._sprite.graphics.drawRect(x, y, this._width, this._height);
    } else {
      this._sprite.graphics.clear();
    }
  }

  return ActorBody;
})()
