// TypeScript file
class GameOver extends egret.Sprite
{
    public constructor(){
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED,this.showText,this);
    }

    private txt:egret.TextField;
    private btn:gamebtn;

    private draw(){
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;

        this.graphics.beginFill(0x111111,0.5);
        this.graphics.drawRect(0,0,w,h);
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
        this.btn.x = (w-200)/2 - 35;
        this.btn.y = (h-200)/2 + 10;
        this.addChild(this.btn);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
    }

    private showText(){
        this.txt.text = "你的分数：" + Data.score ;
    }
    
    private startGame(){
        // this.touchChildren = true;
        this.parent.removeChild(this);
        this.dispatchEventWith("startgame");
    }
}