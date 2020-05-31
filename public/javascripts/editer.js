let line = 1;
let prev_line = 1;

// 行数の表示
$(function() {
    $("#editer").linedtextarea();
});

// 行数カウント
document.getElementById('editer').addEventListener('change',function() {
    let num = document.getElementById("editer").indexOf("\n");
    if(num!=null){
        line = num.length +1;
    }else{
        line = 1;
    }

    // 行数が変化した場合
   if(line != prev_line){
        if(line < prev_line){
            for(let i = 1;i < line; i++){
                let new_child = document.createElement("li");
                // new_child.setAttribute("id", "abe_prime_minister");
                new_child.innerHTML = String(i);
                document.getElementById("line").appendChild(new_child);
            }
        }else{
            for(let i = prev_line;i < line; i++){
                let new_child = document.createElement("li");
                // new_child.setAttribute("id", "abe_prime_minister");
                new_child.innerHTML = String(i);
                document.getElementById("line").appendChild(new_child);
            }
        }
    }
});