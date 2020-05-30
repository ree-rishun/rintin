var Tesseract = require('tesseract.js');

function convert_text() {
    const url = document.getElementById( "select_area" ).toDataURL("image/png");
    Tesseract
        .recognize(url, {
            lang: 'jpn'
        })
        .then(function(result) {
            console.log(result);
            let msg = document.getElementById( "select_square" );
            msg.innerHTML = result.text;
        });
}