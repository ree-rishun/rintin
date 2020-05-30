let width_prev = 0;
let height_prev = 0;

function get_image(ctx, video, x_point, y_point, width, height) {
    // キャンバスを初期化
    ctx.clearRect(0, 0, width_prev, height_prev);
    // 画像生成用のキャンバスへ転写
    ctx.drawImage(video, x_point, y_point, width, height,0,0, width, height);
    width_prev = width;
    height_prev = height;
    // 画像生成
    let imgData = canvas.toDataURL("image/png");
    convert_text(imgData);
}