let pageID;

// UUID生成 https://qiita.com/coa00/items/679b0b5c7c468698d53f
function getUniqueStr(myStrong){
    let strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
}

// QRコード表示
window.onload=function () {
    pageID = getUniqueStr();
    writeQr(document.getElementById("qrcode"), pageID);
}

// QRコード生成
function writeQr(canvas, data){
    return new Promise((res, rej)=>{
        QRCode.toCanvas(canvas, data, {
            margin: 2,
            scale: document.body.clientWidth / 250,
            color: {
                dark: '#333333',  // Blue dots
                light: '#0000' // Transparent background
            }
        }, (err, tg) => !err ? res(tg) : rej(err));
    });
}