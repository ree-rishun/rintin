function convert_text(url) {
    console.log(url);
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