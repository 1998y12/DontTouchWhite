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
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        var _this = _super.call(this) || this;
        _this._num = Data.GAMETIME;
        _this._timers = Data.GAMETIME;
        _this.draw();
        _this.createTimer();
        return _this;
    }
    TimerPanel.prototype.draw = function () {
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = 80;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = Data.GAMETIME + "'00''";
        this.txt.size = 35;
        this.addChild(this.txt);
    };
    TimerPanel.prototype.createTimer = function () {
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComp, this);
    };
    TimerPanel.prototype.onTimer = function () {
        this._timers--;
        this.txt.text = this._timers + "'00''";
    };
    TimerPanel.prototype.onTimerComp = function () {
        this.txt.text = "0'00''";
        this.dispatchEventWith("gameover");
    };
    TimerPanel.prototype.start = function () {
        this.txt.text = Data.GAMETIME + "'00''";
        this._timers = Data.GAMETIME;
        this._timer.reset();
        this._timer.start();
    };
    TimerPanel.prototype.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
}(egret.Sprite));
__reflect(TimerPanel.prototype, "TimerPanel");
//# sourceMappingURL=TimerPanel.js.map