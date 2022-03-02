function opacidade1(){
  document.getElementById('icone2').style="opacity: 0%";
  document.getElementById('icone3').style="opacity: 0%";
  document.getElementById('primeiroLink').style="opacity: 0%";
  document.getElementById('segundoLink').style="opacity: 0%";
  document.getElementById('terceiroLink').style="opacity: 0%";
}

opacidade1()


function verificarPrimeiraResposta(){
  var primeiraResposta = document.getElementById('texto').value;
  document.getElementById('mensagem2').innerHTML = primeiraResposta;
  document.getElementById('texto').value = "";
  var mensagem3 = document.getElementById('primeiroLink');
  setInterval(function () {mensagem3.style = "opacity:100%"}, 3000);
  document.getElementById('icone1').style="display:none"
  var icone2 = document.getElementById('icone2')
  icone2.style="opacity: 100%"
  icone2.style="right: 9px"
  icone2.style="bottom: 4px"
  console.log('1')
}

function verificarSegundaResposta() {
  var segundaResposta = document.getElementById('texto').value;
  document.getElementById('mensagem4').innerHTML = segundaResposta;
  document.getElementById('texto').value = "";
  var mensagem5 = document.getElementById('segundoLink');
  setInterval(function () {mensagem5.style = "opacity:100%"}, 3000);
  console.log("2")
  var icone3 = document.getElementById('icone3')
  icone3.style="opacity: 100%"
  icone3.style="right: 9px"
  icone3.style="bottom: 4px"
  //document.getElementById('icone1').style="display:none"
}

function verificarTerceiraResposta() {
  var terceiraResposta = document.getElementById('texto').value;
  document.getElementById('mensagem6').innerHTML = terceiraResposta;
  document.getElementById('texto').value = "";
  var mensagem7 = document.getElementById('terceiroLink');
  setInterval(function () {mensagem7.style = "opacity:100%"}, 3000);
  console.log("3")
  //document.getElementById('icone1').style="display:none"
}
