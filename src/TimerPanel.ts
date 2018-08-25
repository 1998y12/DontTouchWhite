// TypeScript file
class TimerPanel extends egret.Sprite
{
    public txt:egret.TextField;
    private _timer:egret.Timer;
    private _num = Data.GAMETIME;
    private _timers = Data.GAMETIME;

    public constructor(){
        super();
        this.draw();
        this.createTimer();
    }

    
    public draw(){
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = 80;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = Data.GAMETIME + "'00''";
        this.txt.size = 35;
        this.addChild(this.txt);
    }

    
    private createTimer(){
        this._timer = new egret.Timer(1000,this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerComp,this);

    }

    
    private onTimer(){
        this._timers-- ;
        this.txt.text = this._timers + "'00''";
    }

    private onTimerComp(){
        this.txt.text = "0'00''";
        this.dispatchEventWith("gameover");
    }

    public start(){
        this.txt.text = Data.GAMETIME + "'00''";
        this._timers = Data.GAMETIME;
        this._timer.reset();
        this._timer.start();
    }

    public stop(){
        this._timer.stop();
    }


}