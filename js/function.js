//------------------------------------Descrições de Competencias-------------------


function showDesc(a){
  var descricao = document.getElementById(`desc${a}`);
  if(descricao.style.display ==="none" ){
    descricao.style.display = "block"
  }else{
    descricao.style.display = "none"
  }
}
//---------------------------------------Slides---------------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("texto-Slides");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
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
	