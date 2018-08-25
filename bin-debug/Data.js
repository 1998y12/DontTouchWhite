var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Data = (function () {
    function Data() {
    }
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    Data.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    Data.getRectwidth = function () {
        if (Data._rectwidth == 0) {
            Data._rectwidth = this.getStageWidth() / 4;
        }
        return Data._rectwidth;
    };
    Data.getRectheight = function () {
        if (Data._rectheight == 0) {
            Data._rectheight = this._rectwidth * 2;
        }
        return Data._rectheight;
    };
    Data.getRectRow = function () {
        if (Data._rectrow == 0) {
            Data._rectrow = Math.ceil(this.getStageHeight() / Data.getRectwidth()) + 1;
        }
        return Data._rectrow;
    };
    Data._rectwidth = 0;
    Data._rectheight = 0;
    Data._rectrow = 0;
    Data.score = 0;
    Data.RECT_WHITE = 0xffffff;
    Data.RECT_BLACK = 0x000000;
    Data.RECT_RED = 0xff0000;
    Data.RECT_GRAY = 0xe1d9d9;
    Data.GAMETIME = 20;
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map