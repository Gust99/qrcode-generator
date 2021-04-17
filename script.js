//https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js
var qrcode = new QRCode("contenedorQR");
var input = document.getElementById("texto");

qrcode.makeCode("");

function makeCode(){
	qrcode.makeCode(input.value);
	var a = document.getElementById("descarga");
	var stringHtml = document.getElementById("contenedorQR").innerHTML.split("\"");
	a.download = "QRCode.png";
	a.href = stringHtml[7];		//src de la imagen para descargarla
}

input.onkeydown = function(e){
	if(e.keyCode == 13){
		makeCode();
	}
};