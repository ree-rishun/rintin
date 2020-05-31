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
            print.innerText = result.text;
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