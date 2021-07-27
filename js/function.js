window.load = slide(1);

function mudaFoto (foto){
	document.getElementById("foto").src = foto;
}

var bgNumber = 1;

function slide(n){
	var allbg = 6;
	document.getElementById('imagembg').style.backgroundImage = "url('../Imagens/"+n+".jpg')";
	botoes(n, allbg);
	bgNumber=n;
}
function anterior(){
	if(bgNumber>1){
		bgNumber--;
		slide(bgNumber);
	}
}
function proximo(){
	if(bgNumber<6){
		bgNumber++;
		slide(bgNumber);
	}
}
function botoes(n, m){
	document.getElementById('botoes').innerHTML = "";
	for(a=1;a<=m;a++){
		if(a==n){
			document.getElementById('botoes').innerHTML += "<li2 class='selected' onclick = 'slide("+a+")'></li2>";
		}else{
			document.getElementById('botoes').innerHTML += "<li2 onclick ='slide("+a+")'></li2>";
		}
	}
}