<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Index</title>
    <script src="https://code.jquery.com/jquery-3.3.1.js" charset="utf-8"></script>
    <script src="Scripts/ajaxmask.js"></script>
    <script src="Scripts/custom.js"></script>
    <script src="Scripts/jquery.timer.js"></script>
    <script src="Scripts/bootbox.min.js"></script>
    <script src="Scripts/funciones.js"></script>
    <link type="image/gif" href="Imagenes/favicon.gif" rel="icon">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="Css/main.css" rel="stylesheet" />
    <link href="Css/util.css" rel="stylesheet" />
    <link href="assets/css/ajaxmask.css" rel="stylesheet" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="fonts/iconic/css/material-design-iconic-font.min.css" rel="stylesheet" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <br />
    <div class="container ">
        <div class="panel panel-success" id="Busqueda">
            <div class="panel-heading">Autoservicio de Préstamo de Libros</div>
            <form class="form-horizontal" role="form" id="seleccion">
                <div class="panel-body">
                    <div class="limiter">
                        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                            <form class="login100-form validate-form">
                                <div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                    <span class="label-input100">Usuario</span>
                                    <input class="input100" type="text" name="username" id="usuario" placeholder="Ingrese Usuario">
                                    <span class="focus-input100" data-symbol="&#xf206;"></span>
                                </div>
                                <div class="wrap-input100 validate-input" data-validate="Password is required">
                                    <span class="label-input100">Contraseña</span>
                                    <input class="input100" type="password" name="pass" id="clave" placeholder="Ingrese Contraseña">
                                    <span class="focus-input100" data-symbol="&#xf190;"></span>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-md-offset-1 col-md-2">
                            <button type="button" id="btnregistrarse" class="registra btn btn-success">Registrarse</button>
                        </div>
                        <div class="col-md-offset-7 col-md-2">
                            <button type="button" class="login  btn btn-info" id="btnLogin">Ingresar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <br />
    <!-- Modal -->
    <div id="registraseModal" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <form id="valida_form">
                    <div class="modal-header">
                        <h4 class="modal-title">Registrarse</h4>
                        <h6 class="modal-title">Ingrese los datos de la Intranet</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <h5 class="text-info text-center"><span id="titulo_txt"></span></h5>
                        <div class="panel panel-default" id="panel3">
                            <div class="panel-body">
                                <div class="row">

                                    <div class="form-group ">
                                        <label for="usuario_r_txt" class="col-xs-offset-2 col-xs-2 col-form-label">Rut</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" id="rut_r_txt" required>
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="form-group">
                                        <label for="contrasena_r_txt" class=" col-xs-offset-2 col-xs-2 col-form-label">Nombre</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" id="nombre_r_txt" required>
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="form-group">
                                        <label for="contrasena_r_txt" class=" col-xs-offset-2 col-xs-2 col-form-label">Contraseña</label>
                                        <div class="col-xs-5">
                                            <input type="password" class="form-control" id="contrasena_r_txt">
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="form-group">
                                        <label for="contrasena_r_txt" class=" col-xs-offset-2 col-xs-2 col-form-label">Correo</label>
                                        <div class="col-xs-7">
                                            <input type="text" class="form-control" id="correo_r_txt" required>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="footer3 panel-footer">
                                <div class="row">
                                    <div class="col-xs-offset-7 col-xs-4">
                                        <button type="button" class="Registrar btn btn-success" id="btnGrabaUsuario">Guardar Usuario</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="panel panel-primary" id="panel4">
                            <div class="panel-body">
                                <h5 class="text-info text-center"><span id="titulo_r_txt">Ingrese Codigo QR o Barra de su C.I.</span></h5>
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-xs-9">
                                            <div id="qr_rut" class="text-center"></div>
                                        </div>

                                    </div>
                                </div>
                                <br />

                                <h5 class="text-info text-center"><span id="subtitulo_r1_txt">A Continuación deberá apoyar Dedos Indice y Anular</span></h5>
                                <h5 class="text-info text-center"><span id="subtitulo_r2_txt">de Ambas Manos para generar su autenticación</span></h5>


                                <br />
                                <div class="row">
                                    <div class="form-group">
                                        <div class=" col-xs-offset-5 col-xs-4">
                                            <a id="lectura" href='finspot:FingerspotReg;'><img src="Imagenes/fingerprint.png" id="huella" style="width:60%"></a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div class="row">
                                    <div class=" col-xs-offset-5 col-xs-4">
                                        <div id="spiner_load"></div>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>
                            <div class="footer4 panel-footer">
                                <div class="row">
                                    <!--                                        <div class="col-xs-offset-7 col-xs-4">
                                            <button type="button" class="Registrar btn btn-success" id="btnRegistrar">Guardar Registro</button>
                                        </div>-->
                                </div>
                            </div>
                        </div>


                    </div>
                </form>

            </div>
        </div>
    </div>
    <script src="Scripts/logea.js"></script>
    <script src="Scripts/main.js"></script>
</body>

</html>