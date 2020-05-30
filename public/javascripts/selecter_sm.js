let target = document.getElementById('select_area');
let square = document.getElementById('select_square');

let dragging = false;

let start_pos = [0,0];

// 選択位置格納変数
let x_point = 0;
let y_point = 0;
let width = 0;
let height = 0;

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

        draw_square(x_point,y_point,width,height);
    }
}

let canvas = document.getElementById("video_copy"),
    ctx = canvas.getContext("2d");
requestAnimationFrame(draw);

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


