function draw_square(x,y,width,height){
    square.style.width = width + 'px';
    square.style.height = height + 'px';
    square.style.top = y + 'px';
    square.style.left = x + 'px';
}

// 現在の位置を取得
function pos(e) {
    let x, y;
    x = e.clientX - target.getBoundingClientRect().left;
    y = e.clientY - target.getBoundingClientRect().top;
    return [x, y];
}

// PC版
// マウスダウン
target.addEventListener('mousedown', function(e) {
    clearInterval(repeat);
    print.innerHTML ="";
    dragging = true;
    document.getElementById("controller").style.display = "none";
    square.style.display = "inline-block";
    start_pos = pos(e);
});

// マウスアップ
target.addEventListener('mouseup', function(e) {
    dragging = false;
    document.getElementById("controller").style.marginLeft = String(x_point + width - 100) + "px";
    document.getElementById("controller").style.marginTop = String(y_point + height + 10) + "px";
    document.getElementById("controller").style.display = "inline-block";
    get_image(ctx,video, x_point, y_point, width, height);
});

// マウス移動
target.addEventListener('mousemove', function(e) {
    if(dragging){
        draw(pos(e));
    }
});

