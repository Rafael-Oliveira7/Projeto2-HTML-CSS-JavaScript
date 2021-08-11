window.load = slide(1);

function mudaFoto (foto){
	document.getElementById("foto").src = foto;
}

var bgNumber = 1;

function slide(n){
	var allbg = 4;
	document.getElementById('imagembg').style.backgroundImage = "url('../imagens/"+n+".jpg')";
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
			document.getElementById('botoes').innerHTML += `<li2 class='selected' onclick = 'slide(${a})'></li2>`;
		}else{
			document.getElementById('botoes').innerHTML += "<li2 onclick ='slide("+a+")'></li2>";
		}
	}
}

//-------------------------Modal----------------------------------
function iniciaModal(modalID){
	const modal = document.getElementById(modalID);
	modal.classList.add('mostrar')
	modal.addEventListener('click', (e) => {
		if(e.target.id == modalID || e.target.className == 'fechar'){
			modal.classList.remove('mostrar');
		}
	})
}

const interesse = document.querySelectorAll('.modal-t');

interesse.forEach((modal) =>
  modal.addEventListener('click', (event) => {
    iniciaModal('modal-id')
  })
);

//----------------------------Mascara Telefone---------------------------
$("#telefone").mask("(99) 9999-9999")
//----------------------------Mascara CPF--------------------------------
$("#cpf").mask("999.999.999-99")
//------------------------Validação do Nome------------------------
function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
			(charCode == 32) || //espaço
            (charCode > 191 && charCode <= 255) // letras com acentos
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}
//---------------Requisição AJAX-----------------------------------------
	let nome = document.getElementById('nome');
	let telefone = document.getElementById('telefone');
	let cpf = document.getElementById('cpf');
	let email = document.getElementById('email');
	let form = document.getElementById('tenho-interesse')

	form.addEventListener("submit", function(event){
		event.preventDefault();

		let dados = {
			nome: nome.value,
			telefone: telefone.value,
			cpf: cpf.value,
			email: email.value
		};

		localStorage.setItem("usuário", JSON.stringify(dados));

	fetch('https://reqres.in/api/users', {
			method: 'POST', 
			body: JSON.stringify(dados)
		})
		
		.then(function(response){
			return response.json()
		})
		.then(function(response){
			alert("Interesse Registrado com Sucesso")
		})
	})
	