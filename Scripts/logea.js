	$("#btnLogin").click(function() {
        var variable = { rut: $("#usuario").val() };
		$.ajax({
	  		url: "/sab/php/acceso_pedidos.php",
	 	 	type: "post",
	  		data: variable,
	  		dataType: "JSON",
	  		success: function(response) {
				localStorage.setItem("rut", response.data[0].rut);
				localStorage.setItem("nombre", response.data[0].nombre);
				location.href = 'Paginas/pedidos.html';
        }
	  });
	});

	