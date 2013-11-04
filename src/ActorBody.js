// Groups a box2d body and an ivank actor together and keeps both in sync
var ActorBody = (function () {
  function ActorBody() {
    
  }

  ActorBody.prototype.init = function (bitmapLocation, height, width, body) {
    var bmData = new BitmapData(bitmapLocation),
        bm = new Bitmap(bmData);
    bm.x = height * -0.5;
    bm.y = width * -0.5;
    this._sprite = new Sprite();
    this._sprite.addChild(bm);

    this._body = body;
    this.update();
  };

  ActorBody.prototype.update = function () {
    var p = this._body.GetPosition();
    this._sprite.x = p.x * 10;
    this._sprite.y = p.y * 10;
    this._sprite.rotation = this._body.GetAngle() * 180 / Math.PI;
  };

   // Setters and Getters
  ActorBody.prototype.getSprite = function () {
    return this._sprite;
  };

  return ActorBody;
})()
