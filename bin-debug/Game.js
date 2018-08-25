var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Game = (function () {
    function Game(root) {
        this._root = root;
        this.createGroupRect();
        this.createTimer();
        this.startGame();
    }
    Game.prototype.createGroupRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; ++i) {
            groupRect = new GroupRect();
            groupRect.addEventListener("gameover", this.gameover, this);
            groupRect.addEventListener("right", this.nextRow, this);
            this._rectGroups.push(groupRect);
            groupRect.y = Data.getRectheight() * i;
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    Game.prototype.gameover = function () {
        this._timerPlanel.stop();
        if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOver();
            this.gameOverPanel.addEventListener("startgame", this.startGame, this);
        }
        this._rectRoot.touchChildren = false;
        this._root.addChild(this.gameOverPanel);
    };
    Game.prototype.nextRow = function () {
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].move();
        }
        Data.score++;
        if (Data.score == 1) {
            this._timerPlanel.start();
        }
    };
    Game.prototype.createTimer = function () {
        this._timerPlanel = new TimerPanel();
        this._timerPlanel.addEventListener("gameover", this.gameover, this);
        this._root.addChild(this._timerPlanel);
    };
    Game.prototype.startGame = function () {
        this._timerPlanel.txt.text = "20'00''";
        Data.score = 0;
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].init();
            this._rectGroups[i].y = Data.getRectheight() * i;
            this._rectGroups[i]._currentRow = i;
            this._rectGroups[i].setTouchVis();
            if (i != (this._row - 1)) {
                this._rectGroups[i].createBalckRect();
            }
        }
        this._rectRoot.touchChildren = true;
        // this._timerPlanel.start();
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map