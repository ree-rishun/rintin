// 現在の位置を取得
function pos_sm(e) {
    let x, y;
    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;
    return [x, y];
}

// スマホ版
// マウスダウン
target.addEventListener('touchstart', function(e) {
    e.preventDefault();
    square.style.display = "inline-block";
    dragging = true;
    start_pos = pos_sm(e);
});

// マウスアップ
target.addEventListener('touchend', function(e) {
    dragging = false;
    get_image(ctx,video, x_point, y_point, width, height);
});

// マウス移動
target.addEventListener('touchmove', function(e) {
    if(dragging){
        draw(pos_sm(e));
    }
    convert_text();
});


