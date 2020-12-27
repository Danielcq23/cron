<?php
include_once("banco.php");

$vel = $_POST['count'];
//echo "$vel";

$result_msg_contato = "INSERT INTO crono(tempo)VALUES('$vel')";
$resultado_msg_contato= mysqli_query($conn,$result_msg_contato)or die(mysqli_error($conn));
if($resultado_msg_contato == 1){
   echo "<script>   
alert('Cadastro feito com sucesso!');
window.location.href='index.php';
</script>";
}
?>