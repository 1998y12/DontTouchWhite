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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.draw();
        _this.addEventListener(egret.Event.ADDED, _this.showText, _this);
        return _this;
    }
    GameOver.prototype.draw = function () {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.graphics.beginFill(0x111111, 0.5);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
        this.txt = new egret.TextField();
        this.txt.width = w;
        this.txt.y = 200;
        this.txt.textColor = 0xff00ff;
        this.txt.size = 100;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.fontFamily = "KaiTi";
        this.addChild(this.txt);
        // var btn = new egret.Sprite();
        // btn.graphics.beginFill(0x0000ff);
        // btn.graphics.drawRect(0,0,200,100);
        // btn.graphics.endFill();
        this.btn = new gamebtn();
        this.btn.width = 300;
        this.btn.height = 154;
        this.btn.x = (w - 200) / 2 - 35;
        this.btn.y = (h - 200) / 2 + 10;
        this.addChild(this.btn);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    GameOver.prototype.showText = function () {
        this.txt.text = "你的分数：" + Data.score;
    };
    GameOver.prototype.startGame = function () {
        // this.touchChildren = true;
        this.parent.removeChild(this);
        this.dispatchEventWith("startgame");
    };
    return GameOver;
}(egret.Sprite));
__reflect(GameOver.prototype, "GameOver");
//# sourceMappingURL=GameOver.js.map