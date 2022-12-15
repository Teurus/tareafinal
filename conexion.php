<?php
    $host = "localhost";
    $usuario = "id20009073_root";
    $pass = "1>w9indfB*uBDav3";
    $nomdb = "id20009073_registro";

    $conexion=new mysqli($host,$usuario,$pass,$nomdb);
    
    if($conexion) {
        header('location:login.html');
    }
    else {
        Error;
    }
    ?>
