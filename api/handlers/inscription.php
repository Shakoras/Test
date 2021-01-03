<?php 
include "../config/config.php";

$user = new User();

$_POST = json_decode(file_get_contents('php://input'), true);

if (!empty($_POST)) {
    $nom= $_POST['nom'];
    $prenom= $_POST['prenom'];
    $cin= $_POST['cin'];
    $age= $_POST['age'];
    $tell= $_POST['tell'];
    $email= $_POST['email'];
    $password= $_POST['password'];
    $tarif= $_POST['tarif'];
    $experience= $_POST['experience'];

    $user = $user->addCoach(
        $nom,
        $prenom,
        $cin,
        (int)$age,
        (int)$tell,
        $email,
        $password,
        $tarif,
        $experience
    );
    if ($user->rowCount()) {
?>

        {
        "success": true,
        "message":"coach added successfully!"
        }

    <?php
    } else {
    ?>

        {
        "success": false,
        "message":"coach could not be added"
        }

<?php
    }
}
