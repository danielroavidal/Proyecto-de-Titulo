$("#btnLogin").click(function() {
  var variable = { rut: $("#usuario").val() };
  $.ajax({
    url: "php/acceso_pedidos.php",
    type: "post",
    data: variable,
    dataType: "JSON",
    success: function(response) {
      localStorage.setItem("rut", response.data[0].rut);
      localStorage.setItem("nombre", response.data[0].nombre);
      location.href = "Paginas/pedidos.html";

    }
  });
});
$('#btnregistrarse').click(function ()
{
    Limpiar_DOM_Modal();
    $('.footer3').show();
    $('#registraseModal').modal('show');
    $('#panel4').hide();
});
$('#btnGrabaUsuario').click(function ()
{
    GeneraURLRegister();
    grabausuario();

    $('.footer3').hide();
    $('#panel4').show();

});
function grabausuario() {
    var variable = { rut: $("#rut_r_txt").val(), nombre: $("#nombre_r_txt").val(), correo: $("#correo_r_txt").val(), contrasena: $("#contrasena_r_txt").val() };
    $.ajax({
        url: "php/grabar_usuario.php",
        type: "post",
        dataType: "JSON",
        data : variable,
        success: function (response) {
            $("#rut_r_txt,#nombre_r_txt,#correo_r_txt,#contrasena_r_txt").attr("disabled", true).css("background-color", "#E0E6F8");
            $('#rut_r_txt,#nombre_r_txt,#correo_r_txt,#contrasena_r_txt').css({ pointerEvents: "none" })
        },
        error: function (response) {
            console.log('Error');
        }
    });
};
function GeneraURLRegister() {
    $.ajax({
        url: "php/capturar.php",
        type: "post",
        dataType: "JSON",
        success: function (response) {
            url = 'finspot:FingerspotReg;' + response;
            document.getElementById("lectura").href = url;
        },
        error: function (response) {
            console.log('Error');
        }
    });
};
function Limpiar_DOM_Modal()
{
    $("#rut_r_txt").val('');
    $("#nombre_r_txt").val('');
    $("#correo_r_txt").val('');
    $("#contrasena_r_txt").val('');
    $("#rut_r_txt,#nombre_r_txt,#correo_r_txt,#contrasena_r_txt").attr("disabled", false).css("background-color", "white");
    $('#rut_r_txt,#nombre_r_txt,#correo_r_txt,#contrasena_r_txt').css({ pointerEvents: "auto" })
 }
function user_register(user_id, user_name) {

    $('body').ajaxMask();

    regStats = 0;
    regCt = -1;
    try {
        timer_register.stop();
    } catch (err) {
        console.log('Registration timer has been init');
    }


    var limit = 4;
    var ct = 1;
    var timeout = 5000;

    timer_register = $.timer(timeout, function () {
        console.log("'" + user_name + "' registration checking...");
        user_checkregister(user_id, $("#user_finger_" + user_id).html());
        if (ct >= limit || regStats == 1) {
            timer_register.stop();
            console.log("'" + user_name + "' registration checking end");
            if (ct >= limit && regStats == 0) {
                alert("'" + user_name + "' registration fail!");
                $('body').ajaxMask({
                    stop: true
                });
            }
            if (regStats == 1) {
                $("#user_finger_" + user_id).html(regCt);
                alert("'" + user_name + "' registration success!");
                $('body').ajaxMask({
                    stop: true
                });
            }
        }
        ct++;
    });
}

function user_checkregister(user_id, current) {
    $.ajax({
        url: "user.php?action=checkreg&user_id=" + user_id + "&current=" + current,
        type: "GET",
        success: function (data) {
            try {
                var res = jQuery.parseJSON(data);
                if (res.result) {
                    regStats = 1;
                    $.each(res, function (key, value) {
                        if (key == 'current') {
                            regCt = value;
                        }
                    });
                }
            } catch (err) {
                alert(err.message);
            }
        }
    });
}