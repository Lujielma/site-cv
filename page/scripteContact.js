
// recupere les elements du formulaire
const submit = document.getElementById("submit");
const Email = document.getElementById("email");
const Nom = document.getElementById("nom");
const Telephone = document.getElementById("telephone");
const Message = document.getElementById("message");
// liste des inputs a verifier

let inputs = [Email, Nom, Telephone, Message];

// verifie les champs du formulaire apres clique sur le bouton envoyer
submit.addEventListener("click", function(event) {
    event.preventDefault();
    // verifie si au moins un champ est vide
    if (Email.value === "" || Nom.value === "" || Telephone.value === "" || Message.value === "") {
        document.querySelector(".hideText").classList.remove("hide");


    // verifie chaque input et ajoute ou retire la bordure rouge
        inputs.forEach(function(input) 
    {
    if (input.value === "" ) {
        document.getElementById(input.id).classList.add("borderRed"); 
                
    } else {
        document.getElementById(input.id).classList.remove("borderRed");
    }

    });


    // verifie la longueur du message
    } else if(Message.value.length < 10){
        document.querySelector(".hideText").classList.add("hide");
        document.querySelector(".hideText2").classList.remove("hide2");
    }


    else {
        
        document.querySelector(".hideText").classList.add("hide");
        document.querySelector(".hideText2").classList.add("hide2");

        inputs.forEach(function(input){
            input.value = "";
        });

        console.log("Formulaire envoyé avec succès !");

    }
});



