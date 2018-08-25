var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var RectType = (function () {
    function RectType() {
    }
    RectType.CLICKABLE = "clickable";
    RectType.NONCLICKABLE = "nonclickable";
    return RectType;
}());
__reflect(RectType.prototype, "RectType");
//# sourceMappingURL=RectType.js.map