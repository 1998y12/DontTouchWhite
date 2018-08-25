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
var GroupRect = (function (_super) {
    __extends(GroupRect, _super);
    function GroupRect() {
        var _this = _super.call(this) || this;
        _this._currentRow = 0;
        _this._currentBlackRectIndex = 0;
        _this.createRects();
        return _this;
    }
    GroupRect.prototype.setTouchVis = function () {
        if (this._currentRow == (Data._rectrow - 2)) {
            for (var i = 0; i < 4; i++) {
                this._rects[i].touchEnabled = true;
            }
        }
        else {
            for (var i = 0; i < 4; i++) {
                this._rects[i].touchEnabled = false;
            }
        }
    };
    GroupRect.prototype.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; ++i) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    };
    GroupRect.prototype.onClickRect = function (evt) {
        evt.target.onRectClick();
        if (evt.target.type == RectType.NONCLICKABLE && this._currentRow == (Data.getRectRow() - 2)) {
            this.dispatchEventWith("gameover");
        }
        else {
            this.dispatchEventWith("right");
        }
    };
    GroupRect.prototype.createBalckRect = function () {
        this.init();
        var random = Math.random() * 4;
        if (random >= 0 && random < 1) {
            this._currentBlackRectIndex = 0;
        }
        else if (random >= 1 && random < 2) {
            this._currentBlackRectIndex = 1;
        }
        else if (random >= 2 && random < 3) {
            this._currentBlackRectIndex = 2;
        }
        else {
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    };
    GroupRect.prototype.init = function () {
        for (var i = 0; i < 4; ++i) {
            this._rects[i].type = RectType.NONCLICKABLE;
        }
    };
    GroupRect.prototype.move = function () {
        this._currentRow++;
        if (this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.createBalckRect();
        }
        this.y = this._currentRow * Data.getRectheight();
        this.setTouchVis();
    };
    return GroupRect;
}(egret.Sprite));
__reflect(GroupRect.prototype, "GroupRect");
//# sourceMappingURL=GroupRect.js.map