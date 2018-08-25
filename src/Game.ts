// TypeScript file
class Game
{
    private _root:egret.DisplayObjectContainer;
    private _row:number;
    private _rectRoot:egret.Sprite;
    private _rectGroups:Array<GroupRect>;
    private gameOverPanel:GameOver;
    private _timerPlanel:TimerPanel;

    public constructor(root:egret.DisplayObjectContainer){
        this._root = root;
        this.createGroupRect();
        this.createTimer();
        this.startGame();
    }

    

    public createGroupRect(){
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();

        var groupRect:GroupRect;
        for(var i = 0;i<this._row;++i){
            groupRect = new GroupRect();
            groupRect.addEventListener("gameover",this.gameover,this);
            groupRect.addEventListener("right",this.nextRow,this);
            this._rectGroups.push(groupRect);
            groupRect.y = Data.getRectheight() * i;
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    }

    
    public gameover(){
        this._timerPlanel.stop();
        if(!this.gameOverPanel){
            this.gameOverPanel = new GameOver();
            this.gameOverPanel.addEventListener("startgame",this.startGame,this);
        }

        this._rectRoot.touchChildren = false;
        this._root.addChild(this.gameOverPanel);
    }

    public nextRow(){
        for(var i = 0; i<this._row ; i++){
            this._rectGroups[i].move();
        }
        Data.score++;
        if(Data.score == 1)
        {
            this._timerPlanel.start();
        }
    }


    
    public createTimer(){
        this._timerPlanel = new TimerPanel();
        this._timerPlanel.addEventListener("gameover",this.gameover,this);
        this._root.addChild(this._timerPlanel);
    }


    public startGame(){
        
        this._timerPlanel.txt.text = "20'00''";
        Data.score = 0;
        for(var i = 0;i<this._row;i++){
            this._rectGroups[i].init();
            this._rectGroups[i].y = Data.getRectheight() * i;
            this._rectGroups[i]._currentRow = i;
            this._rectGroups[i].setTouchVis();
            if(i != (this._row - 1)){
                this._rectGroups[i].createBalckRect();
            }
        }
        this._rectRoot.touchChildren = true;
        // this._timerPlanel.start();
    }
}