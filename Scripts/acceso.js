  $("#btnlogin").click(function() {
  		var variable = { rut: $("#usuario").val() };
  		$.ajax({
    	url: "php/acceso_pedidos.php",
    	type: "post",
    	data: variable,
    	dataType: "JSON",
    	success: function(response) {
    		console.log(response);
    	}
		});
  });
