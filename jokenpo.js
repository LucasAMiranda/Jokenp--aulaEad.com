/**
 * Js - Jokenpô
 * @author Lucas Miranda
 */

 function jogar(){
        //verfica se o usuário escolheu alguma opção ao jogar
        if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
            alert("Selecione uma opção");
        }
        else
        {
            //Lógica principal do app

            var sorteio = Math.floor(Math.random() * 3);
            switch(sorteio){
                case 0:
                    document.getElementById("pc").src="pcpedra.png";
                case 1:
                    document.getElementById("pc").src="pcpapel.png";
                case 2:
                    document.getElementById("pc").src="pctesoura.png";
                    break;
            }

            //verifica o vencedor e declara empate
            if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura") == true && sorteio == 2)){
                document.getElementById("placar").innerHTML = "Empate"; 

            }else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura") == true && sorteio == 1)){
                document.getElementById("placar").innerHTML = "Jogador Venceu"; 

            }else{
                document.getElementById("placar").innerHTML = "computador Venceu"; 
            }  
        } 
    } 

    function resetar(){
        document.getElementById("pc").src="pc.png">

        //Troca a imagem e limpa o texto
        document.getElementById("placar").innerHTML == "";
    }