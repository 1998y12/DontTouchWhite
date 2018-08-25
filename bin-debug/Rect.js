var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super.call(this) || this;
        _this._colors = [Data.RECT_BLACK, Data.RECT_WHITE, Data.RECT_RED, Data.RECT_GRAY];
        _this._currentColor = 1;
        _this._type = RectType.NONCLICKABLE;
        _this.touchEnabled = false;
        _this.draw();
        return _this;
    }
    Rect.prototype.draw = function () {
        this.width = Data.getRectwidth();
        this.height = Data.getRectheight();
        this.graphics.lineStyle(1);
        this.graphics.beginFill(this._colors[this._currentColor]);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();
    };
    Object.defineProperty(Rect.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            if (this._type == RectType.CLICKABLE) {
                this._currentColor = 0;
            }
            else {
                this._currentColor = 1;
            }
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.onRectClick = function () {
        if (this._type == RectType.CLICKABLE) {
            this._currentColor = 3;
        }
        else {
            this._currentColor = 2;
        }
        this.draw();
    };
    return Rect;
}(egret.Sprite));
__reflect(Rect.prototype, "Rect");
//# sourceMappingURL=Rect.js.map