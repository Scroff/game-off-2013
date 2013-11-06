// Groups a box2d body and an ivank actor together and keeps both in sync
var ActorBody = (function () {
  // Variables for converting between Box2d (meter) and IvanK (pixel)
  ActorBody.PIXEL_TO_METER = 0.1;
  ActorBody.METER_TO_PIXEL = 10;
  
  function ActorBody() {
    this._debug = false;
  }; 

  ActorBody.prototype.init = function (bitmapData, pxHeight, pxWidth, pxX, pxY, bodyType,  world) {
    // Setup IvanK sprite
    var bm = new Bitmap(bitmapData);
    bm.x = pxHeight * -0.5;
    bm.y = pxWidth * -0.5;
    this._sprite = new Sprite();
    this._sprite.addChild(bm);

    this._width = pxWidth;
    this._height = pxHeight;

    // Create box2d compnents
    var bodyDef = new b2BodyDef(),
        bxFixDef = new b2FixtureDef(),
        mHeight = pxHeight * ActorBody.PIXEL_TO_METER,
        mWidth = pxWidth * ActorBody.PIXEL_TO_METER,
        mX = pxX * ActorBody.PIXEL_TO_METER,
        mY = pxY * ActorBody.PIXEL_TO_METER;

    bxFixDef.density = 1;
    bxFixDef.shape = new b2PolygonShape();
    bxFixDef.shape.SetAsBox(mWidth * 0.5, mHeight * 0.5);

    bodyDef.type = bodyType;
    bodyDef.position.Set(mX, mY);
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(bxFixDef);
    this._body = body;

    // Update sprite to match body
    this.update();
  };

  ActorBody.prototype.update = function () {
    this._update();
  }

  // I split up the update into public and "private" to make it easier
  // for the Walker class to call update.
  // Perhaps if I was to redo, I could use some class library.
  ActorBody.prototype._update = function () {
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

  ActorBody.prototype.getBody = function () {
    return this._body;
  };

  ActorBody.prototype.setDebug = function (debug) {
    this._debug = debug;
    if(debug) {
      var x = 0 - this._width * 0.5,
          y = 0 - this._height * 0.5;
      this._sprite.graphics.lineStyle(3, 0xff0000);
      this._sprite.graphics.drawRect(x, y, this._width, this._height);
    } else {
      this._sprite.graphics.clear();
    }
  }

  return ActorBody;
})()
