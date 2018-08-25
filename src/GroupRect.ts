// TypeScript file
class GroupRect extends egret.Sprite
{

    private _rects:Array<Rect>;
    public _currentRow:number = 0;
    private _currentBlackRectIndex:number = 0;

    public constructor(){
        super();
        this.createRects();
    }

    public setTouchVis(){
        if(this._currentRow == (Data._rectrow-2)){
            for(var i = 0;i<4;i++){
                this._rects[i].touchEnabled = true;
            }
        }
        else{
            for(var i = 0;i<4;i++){
                this._rects[i].touchEnabled = false;
            }
        }
    }
    public createRects(){
        this._rects = [];
        for(var i = 0; i<4;++i){
            var rect:Rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width*i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this);
        }
        
    }
   
    private onClickRect(evt:egret.TouchEvent){
        evt.target.onRectClick();
        
        if(evt.target.type == RectType.NONCLICKABLE && this._currentRow==(Data.getRectRow()-2)){
            this.dispatchEventWith("gameover");
        }
        else{
            this.dispatchEventWith("right");
        }
    }

    public createBalckRect(){
        this.init();
        var random = Math.random() * 4;
        if(random >=0 && random <1){
            this._currentBlackRectIndex = 0;
        }
        else if(random >=1 && random<2){
            this._currentBlackRectIndex = 1;
        }
        else if(random >=2 && random<3){
            this._currentBlackRectIndex = 2;
        }
        else{
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    }

    public init(){
        for(var i = 0;i<4;++i){
            this._rects[i].type = RectType.NONCLICKABLE;
        }
    }

    public move(){
        this._currentRow++;
        if(this._currentRow == Data.getRectRow()){
            this._currentRow = 0;
            this.createBalckRect();
        }
        this.y = this._currentRow * Data.getRectheight();
        this.setTouchVis();
    }
}