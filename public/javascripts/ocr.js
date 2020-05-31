let print = document.getElementById( "select_square" );

function convert_text(url) {
    console.log(url);
    let selectBox = document.getElementById("language");
    Tesseract
        .recognize(url, {
            lang: selectBox.options[selectBox.selectedIndex].value
        })
        .then(function(result) {
            console.log(result);
            print.value = result.text;
        });
    repeat = setInterval(function() {
        qrcode_reader();
    }, 500);
}

// 言語の切り替え
let nav_display = false;
let nav_button = document.getElementById("nav_button");
let menu_area = document.getElementById("menu");

// ナビゲーションの表示
nav_button.addEventListener('touchend', function(e) {
    console.log(nav_display);
    if(nav_display){
        menu_area.style.display="none";
    }else{
        menu_area.style.display="inline-block";
    }
    nav_display = !nav_display;
});

let copytext = document.getElementById('select_square');

function toutch_controller(mode) {
    switch (mode) {
        case "copy":
            copytext.value = print.innerHTML;
            // コピー対象の要素を取得
            // 使用端末を区別し、iOSとandroidで処理を分ける。
            if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                // iphone用のコピー設定
                try {
                    // iOSの場合、readOnlyではコピーできない(たぶん)ので、
                    // readOnlyを外す
                    copytext.readOnly = false;
                    // ここから下が、iOS用でしか機能しない関数------
                    let range = document.createRange();
                    range.selectNode(copytext);
                    window.getSelection().addRange(range);
                    // ------------------------------------------
                    document.execCommand("copy");
                    // readOnlyに戻す
                    copytext.readOnly = true;
                    alert("コピーしました。");
                } catch (e) {
                    // エラーになった場合も、readOnlyに戻す
                    copytext.readOnly = true;
                    alert("このブラウザでは対応していません。");
                }
            } else {
                // iphone以外のコピー設定
                try {
                    copytext.select();
                    document.execCommand('copy');
                    alert("コピーしました。");
                } catch (e) {
                    alert("このブラウザでは対応していません。");
                }
            }
            break;
        case "retry":
            clearInterval(repeat);
            repeat = setInterval(function() {
                qrcode_reader();
            }, 500);
            break;
        case "delete":
            square.style.display = "none";
            document.getElementById("controller").style.display = "none";
            break;
    }
}