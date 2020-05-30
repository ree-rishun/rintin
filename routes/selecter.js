var app = (function (){
    //キャンバスエレメント
    let _displayLayer;
    let _drowingLayer;
    //描画コンテキスト
    let _ctxDisplayLayer;
    let _ctxDrowingLayer;

    // キャンバスサイズ
    let _canvasY;
    let _canvasX;

    // コンストラクタ
    let app = function (_display, _drowing) {
        _displayLayer    = _display;
        _drowingLayer    = _drowing;
        _canvasY         = _drowingLayer.clientHeight;
        _canvasX         = _drowingLayer.clientWidth;
        _ctxDisplayLayer = _display.getContext("2d");
        _ctxDrowingLayer = _drowing.getContext("2d");
        _drowingLayer.addEventListener("mousedown", onMouseDown, false);
        _drowingLayer.addEventListener("mouseup"  , onMouseUp  , false);
    };

    // 矩形オブジェクト
    let _rectangle = {
        startY:0,
        startX:0,
        endY:0,
        endX:0,
        clear:function () {
            this.startY = 0;
            this.startX = 0;
            this.endY   = 0;
            this.endX   = 0;
        }
    };
    function onMouseDown (e) {
        _rectangle.startY = e.clientY;
        _rectangle.startX = e.clientX;
        _drowingLayer.addEventListener ("mousemove", onMouseMove, false);
    };

    function onMouseMove (e) {
        _ctxDrowingLayer.clearRect(0, 0, _canvasX, _canvasY);
        _rectangle.endY = e.layerY - _rectangle.startY;
        _rectangle.endX = e.layerX - _rectangle.startX;
        _ctxDrowingLayer.strokeRect (_rectangle.startX, _rectangle.startY, _rectangle.endX, _rectangle.endY);
    };

    function onMouseUp (e) {
        _ctxDisplayLayer.fillRect(_rectangle.startX, _rectangle.startY, _rectangle.endX, _rectangle.endY);
        _rectangle.clear();
        _ctxDrowingLayer.clearRect(0, 0, _canvasX, _canvasY);
        _drowingLayer.removeEventListener ("mousemove", onMouseMove, false);
    };

    return app;
})();