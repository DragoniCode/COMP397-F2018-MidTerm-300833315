var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // private instance variables
        // public properties
        // constructors
        function Player() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = 435;
            if (managers.Game.scoreBoard.Level == 2) {
                this.x = 30;
            }
        };
        Player.prototype.Update = function () {
            if (managers.Game.scoreBoard.Level == 1) {
                this.x = managers.Game.stage.mouseX;
                this._updatePosition();
                // checks the right boundary
                if (this.x > 640 - this.HalfWidth) {
                    this.x = 640 - this.HalfWidth;
                }
                // check the left boundary
                if (this.x < this.HalfWidth) {
                    this.x = this.HalfWidth;
                }
            }
            if (managers.Game.scoreBoard.Level == 2) {
                this.rotation = 90;
                this.y = managers.Game.stage.mouseY;
                this._updatePosition();
                // checks the right boundary
                if (this.y > 640 - this.HalfWidth) {
                    this.y = 640 - this.HalfWidth;
                }
                // check the left boundary
                if (this.y < this.HalfWidth) {
                    this.y = this.HalfWidth;
                }
            }
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map