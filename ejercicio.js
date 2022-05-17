	var cantidad = "";
	var sumatoria = 0;
	var sumar = false;
	var restar = false
	var Multi = false;
	var dividir = false;
	var borra = false;
	var Porcentajes = false;
	var potenciar = false;
	var raiz= false;
	var potencia= false;

	document.getElementById("DP").value = 0

	function mostrar(numero) {
	    document.getElementById("DP").value = cantidad + numero;
	    cantidad = document.getElementById("DP").value;
	}

	function suma() {
	    sumatoria = sumatoria + parseInt(cantidad);
	    document.getElementById("DP").value = sumatoria;
	    cantidad = "";
	    sumar = true;
	}

	function resta() {
	    sumatoria = sumatoria + parseInt(cantidad);
	    document.getElementById("DP").value = sumatoria;
	    cantidad = "";
	    restar = true;
	}

	function multiplica() {
	    sumatoria = sumatoria + parseInt(cantidad);
	    document.getElementById("DP").value = sumatoria;
	    cantidad = "";
	    Multi = true;
	}

	function divida() {
	    sumatoria = sumatoria + parseInt(cantidad);
	    document.getElementById("DP").value = sumatoria;
	    cantidad = "";
	    dividir = true;

	}

	function porcentaje() {
	    sumatoria = sumatoria + parseInt(cantidad) / (100);
	    document.getElementById("DP").value = sumatoria;
	    cantidad = "";
	    Porcentajes = true;
	}

	function igual() {
	    if (sumar) {
	        document.getElementById("DP").value = sumatoria + parseInt(cantidad);
	    }
	    if (restar) {
	        document.getElementById("DP").value = sumatoria - parseInt(cantidad);
	    }
	    if (Multi) {
	        document.getElementById("DP").value = sumatoria * parseInt(cantidad);
	    }
	    if (dividir) {
	        document.getElementById("DP").value = sumatoria / parseInt(cantidad);
	    }
	    if (Porcentajes) {
	        document.getElementById("DP").value = sumatoria % parseInt(cantidad);
	    }
	    
	}
	function Raiz (){
		raiz=Math.sqrt(cantidad);
		document.getElementById("display").value=raiz;
		cantidad="";
	}
	
	function potencia() {
		sumatoria = parseInt(cantidad) * cantidad;
		document.getElementById("display").value = sumatoria;
		cantidad="";
		potenciar=true;
	}

	function borrar() {
	    sumatoria = parseInt(cantidad) * (0);
	    document.getElementById("DP").value = sumatoria;
	    cantidad = "";
	    borra = true;
	}