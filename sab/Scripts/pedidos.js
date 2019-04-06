$(function () {
    ListGridLibros();
});

function ListGridLibros() {

    var dataTableLibros = $('#detalles').DataTable({
        "responsive": true,
        "autoWidth": false,
        "paging": false,
        "ordering": false,
        "info": false,
        "select": true,
        //"destroy" : true ,
        "ajax": {
            "url": "/Home/ListaLibros",
            "type": "POST",
            "data": SearchData,
            "datatype": "json"
        },
        "columns": [
            { "data": "isbn" },
            { "data": "tema" },
            { "data": "autor" },
            { "data": "editorial" },
            { "data": "idioma" },
            { "data": "edicion" },
            { "data": "cantidad" },
            {
                "data": null,
                "defaultContent": '<button type="button" class="editar btn-transparent-edit" data-toggle="modal" data-target="#addItemsModal"><i class="material-icons">&#xE254;</i></button>&nbsp;'
            }
        
        ],
        "columnDefs": [
            { "width": "1%", "targets": 0, "class": "toAlignL"},
            { "width": "1%", "targets": 1, "class": "toAlignL" },
            { "width": "1%", "targets": 2, "class": "toAlignC" },
            { "width": "10%", "targets": 3, "class": "toAlignL"},
            { "width": "7%", "targets": 4, "class": "toAlignC" },
            { "width": "25%", "targets": 5, "class": "toAlignL" },
            { "width": "7%", "targets": 6, "class": "toAlignL" },
            { "width": "15%", "targets": 7, "class": "toAlignL" }
        ],
        "language": {

            "sProcessing": '<span class="btn btn-warning"><i class="fa fa-refresh fa-spin"></i> Cargando</span>',
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": '<span class="btn btn-warning"><i class="fa fa-refresh fa-spin"></i> Cargando</span>',
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }

    });
    dataTableLibros.$('td').hover(function () {
        var iCol = $('td', this.parentNode).index(this) % 5;
        $('td:nth-child(' + (iCol + 1) + ')', dataTableLic.$('tr')).addClass('highlighted');
    }, function () {
        dataTableLibros.$('td.highlighted').removeClass('highlighted');
    });

    $('#dd_safi').change(function () {
        dataTableLibros.ajax.reload();
    });

    $('#detalles tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            dataTableLibros.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    $("#busqueda").keyup(function () {
        dataTableLibros.search($(this).val()).draw();
    });
    Obtener_Data('#detalles tbody', dataTableLibros);
}