// GET recevoir données-----------------------------------------------------------------------------------

// const url = "https://blockchain.info/ticker";

// function recupererPrix() {
//     // créer REQUETE
//     let requete = new XMLHttpRequest();
//     requete.open("GET", url); // Premier paramètre : GET / POST, Deuxieme paramètre : URL

//     requete.responseType = "json"; // On attends du JSON
//     requete.send(); // Envoi de la requête

//     // Quand on recoit une réponse, cette fonction est excecutée

//     requete.onload = function() {
//         if (requete.readyState === XMLHttpRequest.DONE) {
//             if (requete.status === 200) {
//                 let reponse = requete.response; // on stock la reponse
//                 let prixEnEuros = reponse.EUR.last;
//                 document.querySelector("#price_label").textContent = prixEnEuros;
//             } else {
//                 alert("un problème est intervenu, merci de revenir plus tard");
//             }
//         }
//     };
//     console.log("prix actualise");
// }
// setInterval(recupererPrix, 1000);

// POST envoyer données---------------------------------------------------------------------------------------
// const url = "https://lesoublisdelinfo.com/api.php";

// let requete = new XMLHttpRequest();

// // GET
// // requete.open("GET", url);
// // requete.responseType = "json";
// // requete.send();

// // Post
// requete.open("POST", url);
// requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// requete.responsetype = "json";
// requete.send("prenom=samsampanda");

// requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//         if (requete.status === 200) {
//             let reponse = requete.response; // on stock la reponse
//             console.log(reponse);
//         } else {
//             alert("un problème est intervenu, merci de revenir plus tard");
//         }
//     }
// };

// Quand on recoit une réponse, cette fonction est excecutée

// APPLI METEO

let ville = "Paris";
recevoirTemperature(ville);

let changerVille = document.querySelector("#changer");

changerVille.addEventListener("click", () => {
    ville = prompt("Choississez la nouvelle ville");
    recevoirTemperature(ville);
    console.log(ville);
});

function recevoirTemperature(ville) {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid=6d6cca6d2744d8c021baf01ab2a7d59e&units=metric";
    let requete = new XMLHttpRequest();

    requete.open("GET", url);
    requete.responseType = "json";
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response; // on stock la reponse
                let temperature = reponse.main.temp;

                document.querySelector("#temperature_label").textContent = temperature;
                document.querySelector("#ville").textContent = ville;
            } else {
                alert("un problème est intervenu, merci de revenir plus tard");
            }
        }
    };
}