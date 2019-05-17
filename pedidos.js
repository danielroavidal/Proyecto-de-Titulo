$(function() {
   $("#rutg_txt").val(localStorage.getItem("rut"));
   $("#nombre_txt").val(localStorage.getItem("nombre"));
   $("#rutg_lbl").html(formateaRut(localStorage.getItem("rut")));
   $("#nombre_lbl").html(localStorage.getItem("nombre"));
   
  var input = document.getElementById("cantidad_txt");
  input.setAttribute("max", 3 ); // set a new value;
  LimpiarDOM();
  ocultar_btn_e();
  CargaPedidosxAlumno();
  ListGridLibros();
});
function CargaPedidosxAlumno() {
  var variable = { rut: $("#rutg_txt").val() };
  $.ajax({
    url: "../php/carga_pedidos.php",
    type: "post",
    data: variable,
    dataType: "JSON",
    success: function(response) {
      console.log(response);
      var len = response.data.length;
      var input = document.getElementById("cantidad_txt");
      input.setAttribute("max", 3 - len); // set a new value;
      for (var i = 0; i < len; i++) {
        if ($("#span1").html() == "LIBRO") {
          $("#span1").html(myTrim(response.data[i].tema));
          document.getElementById("L1").style.display = "none";
          var imagen = "../imagenes/" + response.data[i].isbn + ".jpg";
          $("#isbn1").val(response.data[i].isbn);
          $("#id_pedido1").val(response.data[i].id_pedido);
          $("#estado1").val(response.data[i].estado);
          $("#ubicacion1").val(response.data[i].ubicacion);
          jQuery("#qrcode1").qrcode({
            width: 60,
            height: 60,
            text: response.data[i].isbn+';'+response.data[i].ubicacion
          });
          cambiarImagenjQ_01(imagen);
        } else if ($("#span2").html() == "LIBRO") {
          $("#span2").html(myTrim(response.data[i].tema));
          document.getElementById("L2").style.display = "none";
          var imagen = "../imagenes/" + response.data[i].isbn + ".jpg";
          $("#isbn2").val(response.data[i].isbn);
          $("#id_pedido2").val(response.data[i].id_pedido);
          $("#estado2").val(response.data[i].estado);
          $("#ubicacion2").val(response.data[i].ubicacion);
          jQuery("#qrcode2").qrcode({
            width: 60,
            height: 60,
            text: response.data[i].isbn+';'+response.data[i].ubicacion
          });
          cambiarImagenjQ_02(imagen);
        } else if ($("#span3").html() == "LIBRO") {
          $("#span3").html(myTrim(response.data[i].tema));
          document.getElementById("L3").style.display = "none";
          var imagen = "../imagenes/" + response.data[i].isbn + ".jpg";
          $("#isbn3").val(response.data[i].isbn);
          $("#id_pedido3").val(response.data[i].id_pedido);
          $("#estado3").val(response.data[i].estado);
          $("#ubicacion3").val(response.data[i].ubicacion);
          jQuery("#qrcode3").qrcode({
            width: 60,
            height: 60,
            text: response.data[i].isbn+';'+response.data[i].ubicacion
          });
          cambiarImagenjQ_03(imagen);
        }
      }
    }
  });
}
function ListGridLibros() {
  var dataTableLibros = $("#detallesLibro").DataTable({
    responsive: true,
    autoWidth: false,
    paging: false,
    ordering: false,
    info: false,
    select: true,
    //"destroy" : true ,
    ajax: {
      url: "../php/leer_libros.php",
      type: "POST",
      datatype: "json"
    },
    columns: [
      {
        data: "isbn"
      },
      {
        data: "tema"
      },
      {
        data: "autor"
      },
      {
        data: "desc_editorial"
      },
      {
        data: "desc_idioma"
      },
      {
        data: "edicion"
      },
      {
        data: "cantidad"
      },
            {
        data: "ubicacion"
      },
      {
        data: null,
        defaultContent:
          '<button type="button" class="editar btn-primary-outline" data-toggle="modal" data-target="#addItemsModal"><i class="material-icons">playlist_add_check</i></button>&nbsp;'
      }
    ],
    columnDefs: [
      {
        width: "10%",
        targets: 0,
        class: "toAlignL"
      },
      {
        width: "20%",
        targets: 1,
        class: "toAlignL"
      },
      {
        width: "20%",
        targets: 2,
        class: "toAlignC"
      },
      {
        width: "10%",
        targets: 3,
        class: "toAlignL"
      },
      {
        width: "10%",
        targets: 4,
        class: "toAlignC"
      },
      {
        width: "5%",
        targets: 5,
        class: "toAlignL"
      },
      {
        width: "7%",
        targets: 6,
        class: "toAlignR"
      },
      {
        width: "10%",
        targets: 7,
        class: "toHide"
      },
      {
        width: "10%",
        targets: 8,
        class: "toAlignL"
      }
    ],
    "fnCreatedRow": function (nRow, aData, iDataIndex) {
            if ($(nRow).find('td:eq(6)').text() == '0') {
              $(nRow).find('.editar').hide();

            }

      },
    language: {
      sProcessing:
        '<span class="btn btn-warning"><i class="fa fa-refresh fa-spin"></i> Cargando</span>',
      sLengthMenu: "Mostrar _MENU_ registros",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      sInfo:
        "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
      sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
      sInfoPostFix: "",
      sSearch: "Buscar:",
      sUrl: "",
      sInfoThousands: ",",
      sLoadingRecords:
        '<span class="btn btn-warning"><i class="fa fa-refresh fa-spin"></i> Cargando</span>',
      oPaginate: {
        sFirst: "Primero",
        sLast: "Último",
        sNext: "Siguiente",
        sPrevious: "Anterior"
      },
      oAria: {
        sSortAscending:
          ": Activar para ordenar la columna de manera ascendente",
        sSortDescending:
          ": Activar para ordenar la columna de manera descendente"
      }
    }
  });
  dataTableLibros.$("td").hover(
    function() {
      var iCol = $("td", this.parentNode).index(this) % 5;
      $("td:nth-child(" + (iCol + 1) + ")", dataTableLic.$("tr")).addClass(
        "highlighted"
      );
    },
    function() {
      dataTableLibros.$("td.highlighted").removeClass("highlighted");
    }
  );
//--------------------------
  $("#detallesLibro tbody").on("click", "tr", function() {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      dataTableLibros.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });
  //-----------------------
  $("#busqueda").keyup(function() {
    dataTableLibros.search($(this).val()).draw();
  });

  $("#btnAutenticar").click(function() {
    if($("#estado1_txt").val()== '2')
    {
      
      var canvas1 = document.querySelector("#qrcode1 canvas");
      var image1 = canvas1.toDataURL("image/png");
      GrabarQR(image1,$("#isbn1_txt").val());
      var variables1 = { isbn:$("#isbn1_txt").val(),rut:$("#rutg_txt").val() ,cantidad:1,dias:Number($("#dias1_txt").val()),fecha_i:$("#fecha_i1_txt").val(),fecha_t:$("#fecha_t1_txt").val(),estado:1};
      GrabarPedidosxAlumno(variables1);
    }
    if($("#estado2_txt").val()== '2')
    {
      var canvas2 = document.querySelector("#qrcode2 canvas");
      var image2 = canvas2.toDataURL("image/png");
      GrabarQR(image2,$("#isbn2_txt").val());
      var variables2 = { isbn:$("#isbn2_txt").val(),rut:$("#rutg_txt").val()  ,cantidad:1,dias:Number($("#dias2_txt").val()),fecha_i:$("#fecha_i2_txt").val(),fecha_t:$("#fecha_t2_txt").val(),estado:1};   
      GrabarPedidosxAlumno(variables2);
  
    }
    if($("#estado3_txt").val()== '2')
    {
      var canvas3 = document.querySelector("#qrcode3 canvas");
      var image3 = canvas3.toDataURL("image/png");
      GrabarQR(image3,$("#isbn3_txt").val());
      var variables3 = { isbn:$("#isbn3_txt").val(),rut: $("#rutg_txt").val() ,cantidad:1,dias:$("#dias3_txt").val(),fecha_i:$("#fecha_i3_txt").val(),fecha_t:$("#fecha_t3_txt").val(),estado:1};   

      GrabarPedidosxAlumno(variables3);
    }
    dataTableLibros.ajax.reload();
  });
  Obtener_Data("#detallesLibro tbody", dataTableLibros);
}

//------------------------
$("#eliminaItem").click(function() {
  if ($("#le_txt").val() == "L1") {
    $("#span1").html("LIBRO");
    imagen = "../Imagenes/signo_interrogacion.jpg";
    $("#qrcode1").html("");
    document.getElementById("L1").style.display = "none";
    $("#estado1_txt").val("0");
    cambiarImagenjQ_01(imagen);
  }
  if ($("#le_txt").val() == "L2") {
    $("#span2").html("LIBRO");
    imagen = "../Imagenes/signo_interrogacion.jpg";
    $("#qrcode2").html("");
    document.getElementById("L2").style.display = "none";
    $("#estado2_txt").val("0");
    cambiarImagenjQ_02(imagen);
  }
  if ($("#le_txt").val() == "L3") {
    $("#span3").html("LIBRO");
    imagen = "../Imagenes/signo_interrogacion.jpg";
    $("#qrcode3").html("");
    document.getElementById("L3").style.display = "none";
    $("#estado3_txt").val("0");
    cambiarImagenjQ_03(imagen);
  }
  Verificar_Acreditacion();
  $("#deleteItemModal").modal("hide");
});
//-----------------------------
$("#btnReservar").click(function() {
  if ($("#cantidad_txt").val() > 0) {
    document.getElementById("btnAutenticar").style.display = "block";           
  }
  for (var i = 0; i < $("#cantidad_txt").val(); i++) {
    AsignaLibro();
  }
  $("#addItemsModal").modal("hide");
});
$("#btnCerrar").click(function() {
  localStorage.removeItem('rut');
  localStorage.removeItem('nombre');
  location.href ="../index.html";
});
function Verificar_Acreditacion() {
  document.getElementById("btnAutenticar").style.display = "none";
  if ($("#estado1_txt").val() == "2")
    document.getElementById("btnAutenticar").style.display = "block";
  else if ($("#estado2_txt").val() == "2")
    document.getElementById("btnAutenticar").style.display = "block";
  else if ($("#estado3_txt").val() == "2")
    document.getElementById("btnAutenticar").style.display = "block";
}
function GrabarQR(qr,isbn)
{
  $.ajax({
    url:"../php/guardar_qr.php",
    data:{
      base64: qr,libro:isbn
    },
    type:"post",
    complete:function(){
      console.log("Ready");
    }
  });
}
//-----------------------------
function GrabarPedidosxAlumno(variable) {
  
  $.ajax({
    url: "../php/grabar_pedido.php",
    type: "post",
    data: variable,
    dataType: "JSON",
    success: function(response) {
      if (response== true)
      {
        document.getElementById("btnAutenticar").style.display = "none";
        ocultar_btn_e();


      }
    }
  });
}
//-----------------------------
function AsignaLibro() {
  if ($("#span1").html() == "LIBRO") {
    $("#span1").html(myTrim($("#tema_txt").val()));
    document.getElementById("L1").style.display = "block";
    var imagen = "../Imagenes/" + $("#isbn_txt").val() + ".jpg";
    $("#cantidad1_txt").val($("#cantidad_txt").val());
    $("#isbn1_txt").val($("#isbn_txt").val());   
    $("#estado1_txt").val("2");
    $("#fecha_i1_txt").val($("#fecha_i_txt").val());
    $("#fecha_t1_txt").val($("#fecha_t_txt").val()); 
    $("#dias1_txt").val($("#dias_txt").val());    
    $("#ubicacion1_txt").val($("#ubicacion_txt").val());     
    jQuery("#qrcode1").qrcode({
      width: 60,
      height: 60,
      text: $("#isbn1_txt").val()+';'+$("#ubicacion1_txt").val()
    });
    cambiarImagenjQ_01(imagen);
  } else if ($("#span2").html() == "LIBRO") {
    $("#span2").html(myTrim($("#tema_txt").val()));
    var imagen = "../Imagenes/" + $("#isbn_txt").val() + ".jpg";
    document.getElementById("L2").style.display = "block";
    $("#cantidad2_txt").val($("#cantidad_txt").val());
    $("#isbn2_txt").val($("#isbn_txt").val());   
    $("#estado2_txt").val("2");
    $("#fecha_i2_txt").val($("#fecha_i_txt").val());
    $("#fecha_t2_txt").val($("#fecha_t_txt").val()); 
    $("#dias2_txt").val($("#dias_txt").val());
    $("#ubicacion2_txt").val($("#ubicacion_txt").val());     
    jQuery("#qrcode2").qrcode({
      width: 60,
      height: 60,
      text: $("#isbn2_txt").val()+';'+$("#ubicacion2_txt").val()
    });
    cambiarImagenjQ_02(imagen);
  } else if ($("#span3").html() == "LIBRO") {
    $("#span3").html(myTrim($("#tema_txt").val()));
    var imagen = "../Imagenes/" + $("#isbn_txt").val() + ".jpg";
    document.getElementById("L3").style.display = "block";
    $("#cantidad3_txt").val($("#cantidad_txt").val());
    $("#isbn3_txt").val($("#isbn_txt").val());   
    $("#estado3_txt").val("2");
    $("#fecha_i3_txt").val($("#fecha_i_txt").val());
    $("#fecha_t3_txt").val($("#fecha_t_txt").val()); 
    $("#dias3_txt").val($("#dias_txt").val());  
    $("#ubicacion3_txt").val($("#ubicacion_txt").val());  
    jQuery("#qrcode3").qrcode({
      width: 60,
      height: 60,
      text: $("#isbn3_txt").val()+';'+$("#ubicacion3_txt").val()
    });
    cambiarImagenjQ_03(imagen);
  }
}
//----------------------------
var Obtener_Data = function(tbodys, table) {
  $(tbodys).on("click", "button.editar", function() {
    if (table.row(this).child.isShown()) {
      var data = table.row(this).data();
    } else {
      data = table.row($(this).parents("tr")).data();
    }

    $("#isbn_txt").val(data.isbn);
    $("#qr_isbn").html('');
    jQuery("#qr_isbn").qrcode({
      width: 60,
      height: 60,
      text: data.isbn+';'+data.ubicacion
    });
    $("#ubicacion_txt").val(data.ubicacion);
    $("#tema_txt").val(data.tema);
    $("#autor_txt").val(data.autor);
    $("#dias_txt").val(3);
    $("#fecha_i_txt").val(moment().format("DD-MM-YYYY"));
    $("#fecha_t_txt").val(
      moment()
        .add(3, "days")
        .format("DD-MM-YYYY")
    );
  });
};
$("#L1").click(function() {
  $("#le_txt").val("L1");
});
$("#L2").click(function() {
  $("#le_txt").val("L2");
});
$("#L3").click(function() {
  $("#le_txt").val("L3");
});

function ocultar_btn_e() {
  document.getElementById("L1").style.display = "none";
  document.getElementById("L2").style.display = "none";
  document.getElementById("L3").style.display = "none";
  document.getElementById("btnAutenticar").style.display = "none";
}

function LimpiarDOM() {
  $("#el_txt").val("");
  $("#span1").html("LIBRO");
  $("#span2").html("LIBRO");
  $("#span3").html("LIBRO");
  $("#qrcode1").html("");
  $("#qrcode2").html("");
  $("#qrcode3").html("");
  $("#estado1_txt").val("0");
  $("#estado2_txt").val("0");
  $("#estado3_txt").val("0");
  $("#ubicacion1_txt").val("");
  $("#ubicacion2_txt").val("");
  $("#ubicacion3_txt").val("");
}

function cambiarImagenjQ_01(imagen1) {
  $("#img_01").attr("src", imagen1);
}

function cambiarImagenjQ_02(imagen2) {
  $("#img_02").attr("src", imagen2);
}

function cambiarImagenjQ_03(imagen3) {
  $("#img_03").attr("src", imagen3);
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm, "");
}
