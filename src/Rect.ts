// TypeScript file
class Rect extends egret.Sprite
{
    private _colors:Array<number> = [Data.RECT_BLACK , Data.RECT_WHITE , Data.RECT_RED , Data.RECT_GRAY];
    private _currentColor:number = 1;
    private _type:string = RectType.NONCLICKABLE;

    public constructor(){
        super();
        this.touchEnabled = false;
        this.draw();
    }

    public draw():void{
        this.width = Data.getRectwidth();
        this.height = Data.getRectheight();
        this.graphics.lineStyle(1);
        this.graphics.beginFill(this._colors[this._currentColor]);
        this.graphics.drawRect(0,0,this.width,this.height);
        this.graphics.endFill();
    }

    public get type():string{
        return this._type;
    }

    public set type(val:string){
        this._type = val;
        if(this._type == RectType.CLICKABLE){
            this._currentColor = 0;
         }
        else{
             this._currentColor = 1;
        }
        this.draw();    
    }

    public onRectClick(){
        if(this._type == RectType.CLICKABLE){
                this._currentColor = 3;
        }
        else{
            this._currentColor = 2;
        }
        this.draw();
    }
}