let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCatergoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001= {
        nome: "BRASIL",
        categoria: "PAISES"
    },
    palavra002= {
        nome: "MEXICO",
        categoria: "PAISES"
    },
    palavra003= {
        nome: "ESPANHA",
        categoria: "PAISES"
    },
    palavra004= {
        nome: "ARGENTINA",
        categoria: "PAISES"
    },
    palavra005= {
        nome: "CANADA",
        categoria: "PAISES"
    },
    palavra006= {
        nome: "CHINA",
        categoria: "PAISES"
    },
    palavra007= {
        nome: "RUSSIA",
        categoria: "PAISES"
    },
    palavra008= {
        nome: "COLOMBIA",
        categoria: "PAISES"
    },
    palavra009= {
        nome: "ALEMANHA",
        categoria: "PAISES"
    },
    palavra010= {
        nome: "CHILE",
        categoria: "PAISES"
    },
    palavra011= {
        nome: "FRANGO",
        categoria: "COMIDAS"
    },
    palavra012= {
        nome: "BATATA",
        categoria: "COMIDAS"
    },
    palavra013= {
        nome: "PIZZA",
        categoria: "COMIDAS"
    },
    palavra014= {
        nome: "BROCOLIS",
        categoria: "COMIDAS"
    },
    palavra015= {
        nome: "FEIJOADA",
        categoria: "COMIDAS"
    },
    palavra016= {
        nome: "BRIGADEIRO",
        categoria: "COMIDAS"
    },
    palavra017= {
        nome: "BOLO",
        categoria: "COMIDAS"
    },
    palavra018= {
        nome: "LASANHA",
        categoria: "COMIDAS"
    },
    palavra019= {
        nome: "BOLACHA",
        categoria: "COMIDAS"
    },
    palavra020= {
        nome: "BISCOITO",
        categoria: "COMIDAS"
    },
    palavra021= {
        nome: "CESAR",
        categoria: "NOMES"
    },
    palavra022= {
        nome: "FERNANDA",
        categoria: "NOMES"
    },
    palavra023= {
        nome: "ISABELA",
        categoria: "NOMES",
    },
    palavra024= {
        nome: "JAQUELINE",
        categoria: "NOMES"
    },
    palavra025= {
        nome: "ANGELINA",
        categoria: "NOMES"
    },
    palavra026= {
        nome: "GELSON",
        categoria: "NOMES"
    },
    palavra027= {
        nome: "IVETE",
        categoria: "NOMES"
    },
    palavra028= {
        nome: "IVANILSON",
        categoria: "NOMES"
    },
    palavra029= {
        nome: "JULIANE",
        categoria: "NOMES"
    },
    palavra030= {
        nome: "JULIANA",
        categoria: "NOMES"
    },
    palavra031= {
        nome: "PEDRO",
        categoria: "NOMES"
    },

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random()*palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome
    palavraSecretaCatergoria = palavras[indexPalavra].categoria

    console.log(indexPalavra)
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCatergoria)

}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCatergoria

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";


    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if (listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" +listaDinamica[i] +"</div>"
        }
        else {palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" +listaDinamica[i] +"</div>"}
    }
}


function verificaLetraEscolhida(letra){
    document.getElementById("tecla-"+letra).disabled = true;
    if(tentativas > 0){    
        comparaListas(letra);
        montarPalavraNaTela();
    }

    
}

function mudarStyleLetraAcerto (tecla){
    document.getElementById(tecla).style.background = "#20c997";
    document.getElementById(tecla).style.color = "#fff";

}

function mudarStyleLetraErro (tecla){
    document.getElementById(tecla).style.background = "#dc3545";
    document.getElementById(tecla).style.color = "#fff";

}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){
        tentativas = tentativas - 1;
        carregaImagemForca();
        mudarStyleLetraErro("tecla-"+letra);
        if(tentativas == 0 ){
            abreModal("OPS! Você perdeu!", "Não foi dessa vez, a palavra secreta era <br>" + palavraSecretaSorteada);
        }
        

    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
                mudarStyleLetraAcerto("tecla-"+letra);

            }
        }
        

    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i]!= listaDinamica[i]){
            vitoria = false;
        }

    }
    if(vitoria == true){
        abreModal("PARABÉNS!",  "VOCÊ VENCEU!!" );

        console.log("voce ganhou");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5: 
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4: 
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;   
        case 3: 
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;           
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;            
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0: 
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:      
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;    

    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("staticBackdropLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalbody");
    modalBody.innerHTML = mensagem;

    console.log("abriu")
    $("#my-modal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
    console.log("Reiniciar")
    location.reload();
})

let btnReinicia = document.querySelector("#btnReinicia");
btnReinicia.addEventListener("click", function(){
    console.log("Reiniciar")
    location.reload();
})