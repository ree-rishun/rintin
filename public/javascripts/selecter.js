let target = document.getElementById( "select_area" );
let square = document.getElementById('select_square');

let dragging = false;

let start_pos = [0,0];

// 選択位置格納変数
let x_point = 0;
let y_point = 0;
let width = 0;
let height = 0;

let video = document.getElementById("video"),
    canvas = document.getElementById("video_copy"),
    ctx = canvas.getContext("2d");
requestAnimationFrame(draw);

function draw(pos) {
    if (dragging) {
        // 計算

        if(start_pos[0] < pos[0]){
            x_point = start_pos[0];
            width = pos[0] - start_pos[0];
        }else{
            x_point = pos[0];
            width = start_pos[0] - pos[0];
        }

        if(start_pos[1] < pos[1]){
            y_point = start_pos[1];
            height = pos[1] - start_pos[1];
        }else{
            y_point = pos[1];
            height = start_pos[1] - pos[1];
        }

        console.log("x_point :" + x_point);
        console.log("y_point :" + y_point);
        console.log("width :" + width);
        console.log("height :" + height);

        draw_square(x_point,y_point,width,height);
    }
}

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
    square.style.display = "inline-block";
    dragging = true;
    start_pos = pos(e);
    console.log("start_pos: " + start_pos);
});

// マウスアップ
target.addEventListener('mouseup', function(e) {
    dragging = false;
    console.log("マウスアップ" + pos(e));

    // 画像生成用のキャンバスへ転写
    ctx.drawImage(video, x_point, y_point, width, height,
        0, 0, width, height);
    // 画像生成
    let imgData = canvas.toDataURL("image/png");
    convert_text(imgData);
});

// マウス移動
target.addEventListener('mousemove', function(e) {
    if(dragging){
        //console.log("マウス移動中" + pos(e));
        draw(pos(e));
    }
});

