var op1 = "...terra dourada";
var op2 = "...terra adorada";
var op3 = "...terra prateada";
document.getElementById("opcao1").value = op1;
document.getElementById("opcao2").value = op2;
document.getElementById("opcao3").value = op3;

function BotaoDoResultado1() {
  if (document.getElementById("opcao1").checked == true){
    alert("Resposta Errada!: "+(op1));
  } else if (document.getElementById("opcao2").checked == true){
    alert("Resposta Certa!: "+(op2));
  } else if (document.getElementById("opcao3").checked == true){
    alert("Resposta Errada!: "+(op3));
  }
}

var op4 = "...Um love, um love, um love com você";
var op5 = "...Um body, um body, um body com você";
var op6 = "...Um lobby, um hobby, um love com você";
document.getElementById("opcao4").value = op4;
document.getElementById("opcao5").value = op5;
document.getElementById("opcao6").value = op6;

function BotaoDoResultado2() {
  if (document.getElementById("opcao4").checked == true){
    alert("Resposta Errada!: "+(op4));
  } else if (document.getElementById("opcao5").checked == true){
    alert("Resposta Errada!: "+(op5));
  } else if (document.getElementById("opcao6").checked == true){
    alert("Resposta Certa!: "+(op6));
  }
}
