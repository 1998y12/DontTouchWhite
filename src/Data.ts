// TypeScript file
class Data
{
    public static _rectwidth:number = 0;
    public static _rectheight:number = 0;
    public static _rectrow:number = 0;
    public static score:number = 0;

    public static RECT_WHITE = 0xffffff;
    public static RECT_BLACK = 0x000000;
    public static RECT_RED = 0xff0000;
    public static RECT_GRAY = 0xe1d9d9;

    public static GAMETIME = 20;

    public static getStageHeight():number{
        return egret.MainContext.instance.stage.stageHeight;
    }
    public static getStageWidth():number{
        return egret.MainContext.instance.stage.stageWidth;
    }
    
    public static getRectwidth():number{

        if(Data._rectwidth == 0){
            Data._rectwidth = this.getStageWidth()/4;
        }
        return Data._rectwidth;
    }

    public static getRectheight():number{
        if(Data._rectheight==0){
            Data._rectheight = this._rectwidth * 2;
        }
        return Data._rectheight;
    }

    public static getRectRow():number{
        if(Data._rectrow == 0){
            Data._rectrow = Math.ceil(this.getStageHeight()/Data.getRectwidth())+1;
        
        }
        return Data._rectrow;
    }
}