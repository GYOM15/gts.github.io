<?php
 session_start();
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(isset($_POST['submit'])){
            if(empty($_POST['name'] && $_POST['email'] && $_POST['subject'] && $_POST['message'])){
                $_SESSION['formErr']=" Veuillez remplir tous les champs s'il vous plait";
            }else{
                $name = $_POST['name'];
                $email = $_POST['email'];
                $object = $_POST['subject'];
                $message = $_POST['message'];

                $destinataire = 'gyom.tech@gmail.com'; // Remplacez par votre adresse e-mail
                $sujet = "Nouveau message de $name : $object";
                $contenu = "De: $name\n";
                $contenu .= "Adresse e-mail: $email\n\n";
                $contenu .= "Message:\n$message\n";

                $entetes = "From: $name <$email>\r\n";
                $entetes .= "Reply-To: $email\r\n";

                if (mail($destinataire, $sujet, $contenu, $entetes)) {
                    $_SESSION['formMessage']='Merci de votre interêt ! Nous vous recontacterons très bientôt';
                } else {
                    $_SESSION['formMessage']='Une erreur s\'est produite lors de l\'envoi de votre e-mail. Veuillez réessayer ultérieurement.';
                }
            }
        }
    }
    header("location: ../View/Contact.php")
?>
