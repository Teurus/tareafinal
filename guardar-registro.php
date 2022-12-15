<?php
include("conexion.php");

$nombre=$_POST["nombre"];
$usuario=$_POST["usuario"];
$correo=$_POST["correo"];
$contraseña=$_POST["contraseña"];
$confirm_contraseña=$_POST["confirm_contraseña"];


$sql=$conexion->query("INSERT INTO registro(nombre,usuario,correo,contraseña,confirm_contraseña) 
VALUES ('$nombre','$usuario','$correo','$contraseña','$confirm_contraseña')");
?>