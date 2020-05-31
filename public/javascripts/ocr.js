let print = document.getElementById( "select_square" );

let recognition_lang = 'eng';

function convert_text(url) {
    console.log(url);
    let selectBox = document.getElementById("language");
    Tesseract
        .recognize(url, {
            lang: selectBox.options[selectBox.selectedIndex].value
        })
        .then(function(result) {
            console.log(result);
            print.innerHTML = result.text;
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