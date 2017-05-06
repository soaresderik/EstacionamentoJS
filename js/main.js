
document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);

function cadastrarVeiculo(e){
	
	var modeloVeiculo = document.getElementById('modeloVeiculo').value;
	var placaVeiculo = document.getElementById('placaVeiculo').value;
	var horaEntrada = new Date();

	if(!modeloVeiculo && !placaVeiculo){
		
		alert("Preencha todos os campos!");
		return false;
	} 

	var veiculo = {
		modelo: modeloVeiculo,
		placa: placaVeiculo,
		hora: horaEntrada.getHours(),
		minutos: horaEntrada.getMinutes()
	};

	if(localStorage.getItem('patio') === null){
		var veiculos = [];
		veiculos.push(veiculo);
		localStorage.setItem('patio', JSON.stringify(veiculos));
	} else {
		var veiculos = JSON.parse(localStorage.getItem('patio'));
		veiculos.push(veiculo);
		localStorage.setItem('patio', JSON.stringify(veiculos));
	}

	document.getElementById('formulario').reset();

	mostraPatio();

	e.preventDefault();
}

function removeVeiculo(placa){
	var patio = JSON.parse(localStorage.getItem('patio'));
	console.log(patio);

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].placa == placa){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('patio', JSON.stringify(patio));

	mostraPatio();
}

function mostraPatio(){
	var veiculos = JSON.parse(localStorage.getItem('patio'));
	var patioResultado = document.getElementById('resultados');

	patioResultado.innerHTML = '';

	for(var i = 0; i < veiculos.length; i++){
		var modelo = veiculos[i].modelo;
		var placa = veiculos[i].placa;
		var hora = veiculos[i].hora;
		var minutos = veiculos[i].minutos;
		 patioResultado.innerHTML += '<tr><td>'+ modelo + '</td>'+
		 							 	  '<td>'+ placa + '</td>' +
		 							 	  '<td>'+ hora + ':' + minutos + '</td>' +
		 							 	  '<td><button onclick="removeVeiculo(\''+ placa +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}


