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
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // constructor
        function Ocean() {
            var _this = _super.call(this, "ocean") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Ocean.prototype._checkBounds = function () {
            if (managers.Game.scoreBoard.Level != 2) {
                if (this.y >= 0) {
                    this.Reset();
                }
            }
            if (managers.Game.scoreBoard.Level == 2) {
                if (this.x >= 0) {
                    this.Reset();
                }
            }
        };
        Ocean.prototype._move = function () {
            if (managers.Game.scoreBoard.Level != 2) {
                this.y += this.verticalSpeed;
            }
            if (managers.Game.scoreBoard.Level == 2) {
                this.x += this.horizontalSpeed;
            }
        };
        // public methods
        Ocean.prototype.Reset = function () {
            if (managers.Game.scoreBoard.Level != 2) {
                this.y = -960;
            }
            if (managers.Game.scoreBoard.Level == 2) {
                this.x = 0;
            }
        };
        Ocean.prototype.Start = function () {
            this.Reset();
            this.verticalSpeed = 5; // 5 px per frame
            this.horizontalSpeed = -5;
            // if (managers.Game.scoreBoard.Level == 2)
            // {
            //     this.rotation = 90;
            // } 
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Ocean.prototype.Destroy = function () {
        };
        return Ocean;
    }(objects.GameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map