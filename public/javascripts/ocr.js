function convert_text(url) {
    console.log(url);
    Tesseract
        .recognize(url, {
            lang: 'jpn'
        })
        .then(function(result) {
            console.log(result);
            let print = document.getElementById( "select_square" );
            print.innerHTML = result.text;
        });
}