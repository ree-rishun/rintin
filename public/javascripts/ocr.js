let print = document.getElementById( "select_square" );

let recognition_lang = 'eng';

function convert_text(url) {
    console.log(url);
    Tesseract
        .recognize(url, {
            lang: recognition_lang
        })
        .then(function(result) {
            console.log(result);
            print.innerHTML = result.text;
        });
    repeat = setInterval(function() {
        qrcode_reader();
    }, 500);
}