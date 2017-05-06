document.getElementById('formulario').addEventListener('submit', cadastraCliente);

function cadastraCliente(e){
	var nomeCliente	= document.getElementById("nomeCliente").value;
	var telCliente = document.getElementById("telCliente").value;
	var time = new Date();

	cliente = {
		nome: nomeCliente,
		telefone: telCliente,
		hora: time.getHours(),
		minutos: time.getMinutes()
	}

	console.log(cliente);

	e.preventDefault();

}