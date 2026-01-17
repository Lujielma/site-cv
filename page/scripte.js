let estSombre = false;

const sombre = document.getElementById("sombre");
// toggle les elemets en mode sombre a chaque clique sur le bouton
sombre.addEventListener("click", function() {

    toggleDarkMode();
});
// fonction qui toggle les classes dark sur les elements a modifier
function toggleDarkMode() {

    document.querySelector(".en-tete").classList.toggle("dark");

    document.querySelector(".Profil").classList.toggle("dark");

    document.querySelector("#portfolio").classList.toggle("dark");
    document.querySelector("#xp").classList.toggle("dark");
    document.querySelector("#formations").classList.toggle("dark");
    document.querySelector("#competences").classList.toggle("dark");
    
    document.querySelector("#Projet").classList.toggle("dark");
    document.querySelector("#Experiences").classList.toggle("dark");
    document.querySelector("#Formations").classList.toggle("dark");
    document.querySelector("#Competences").classList.toggle("dark");

    document.querySelector(".projet").classList.toggle("dark");

    document.querySelector(".Xp").classList.toggle("dark");

    document.querySelector(".Formations").classList.toggle("dark");

    document.querySelector(".Competences").classList.toggle("dark");
    
    document.querySelector("footer").classList.toggle("darkFooter");
}

