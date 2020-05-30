function qrcode_reader(){
    // カメラの映像をCanvasに複写
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    console.log("reading...");

    // QRコードの読み取り
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    console.log("code :" + code);
    // QRコード発見時
    if( code ){ // 結果を表示
        print.innerHTML = code.data;
        clearInterval(repeat);
    }
}
