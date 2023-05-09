
var clicks = 0;
var vencedor = "";
var vez = 1;

$(function () {
    //Jquery é uma lib java script.
    //tudo que é dele tem que ficar aqui dentro



    // ponto (. é class ) jogo da velha ( # é ID )
    $(".casa").click(function () {
        clicks++;
        // console.log($(this));
        var bg = $(this).css("background-image");
        //console.log(bg);
        if (bg == "none" || bg == "") {
            var fig = "url(imagens/" + vez.toString() + ".jpg)";
            //console.log(fig);
            $(this).css("background-image", fig);
            vez = (vez == 1 ? 2 : 1); // if ternário , trocando de vez do jogador
            /*
            if ( vez == 1) { // é a mesma coisa do  if ternário
                vez = 2;
            }else {
                vez = 1;
            }*/

            verificarFimDeJogo();
        }
    });


});

function casasIguais(a, b, c) { // função que retorna o vencedor
    var casaA = $("#casa" + a); //pegando cada div pelo ID
    var casaB = $("#casa" + b);
    var casaC = $("#casa" + c);

    var bgA = $("#casa" + a).css("background-image");
    var bgB = $("#casa" + b).css("background-image");
    var bgC = $("#casa" + c).css("background-image");

    if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
       // console.log(bgA.indexOf("1.jpg"))

        if (bgA.indexOf("1.jpg") != -1) { //indexOf retorna a posição correta do que eu estou pedindo "string"
            vencedor = "1";
            
        } else {
            vencedor = "2";
            
        }
        return true;
    }
    else {
        return false;
    }
}

function verificarFimDeJogo() { // mapeando todas as jogadas para vencer

    if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
    ) {
        $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>" +
           " <h2> Quer jogar de novo?</h2>" +
           " <button onclick='sim()'> Sim ?</button> "); //injeta html dentro da DIV

        $(".casa").off("click"); //desabilou o click nas casinhas...
       

    }
    else if ( clicks >= 9 && vencedor == "") {
        $("#resultado").html("<h1>O JOGO EMPATOU! </h1>" +
        " <h2> Quer jogar de novo?</h2>" +
        " <button onclick='sim()'> Sim ?</button> "); //injeta html dentro da DIV
    }
   
}


function sim(){
    location.reload(); //atualiza a página é o mesmo de aperta F5
}


