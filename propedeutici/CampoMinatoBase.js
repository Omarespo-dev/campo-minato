// Prendo il container per inserire i button
const container = document.getElementById("container-button");
const containerPunteggio = document.getElementById("container-punteggio")


//faccio arr per incapsulare le bombe
const arrBombCasual = []

//10 posiizioni casuali per le bombe
for (let b = 0; b < 16; b++) {
    //faccio bombe casuali che vanno da 49 a 1
    const bombeCasualiTraRighe = Math.floor(Math.random() * (49 - 1) + 1)

    //faccio anche verifica se contiene gia un numero
    if (!arrBombCasual.includes(bombeCasualiTraRighe)) {
        //pusho dentro arr
        arrBombCasual.push(bombeCasualiTraRighe)
    }


}

//punteggio totale
let punteggioTotale = 0


// Ciclo per aggiungere btn + condizione per verifica se in arrbomcasual che sarebbero le 10 posizioni casuali includono gia la length della rr
for (let i = 1; i < 50; i++) {

    // Creo il button
    const button = document.createElement("button");


    // Assegno lo stile
    button.className = "bg-gray-400 w-[50px] h-[50px] border border-black";
    button.style.cursor = "pointer"

    // Aggiungo il button al container
    container.appendChild(button);

    //per img
    let img = null



    //verifico se nelle 10 bombe casuali includono uno dei 49 numeri se si metti img
    if (arrBombCasual.includes(i)) {
        //creo img tag
        img = document.createElement("img");
        img.src = "./img/bomb-removebg-preview.png";
        img.alt = "bomba";
        img.style.display = "none";

        //assegno img bomb button
        button.appendChild(img)

    }


    //creo tag
    let p = document.getElementById("p-set")
    p.innerHTML = punteggioTotale



    //Evento button per numeri e bomba
    button.addEventListener("click", () => {

        //verifico se c e quella classe cosi non clicco il button
        if (button.classList.contains("bg-gray-200")) {
            return
        }

        //rimuovo colore e aggiungo altro
        button.classList.remove("bg-gray-400");
        button.classList.add("bg-gray-200");




        if (arrBombCasual.includes(i)) {
            // MOSTRA TUTTE LE BOMBE
            arrBombCasual.forEach(bombIndex => {
                const bombButton = container.children[bombIndex - 1]; // -1 perché i tuoi bottoni partono da 1
                const bombImg = bombButton.querySelector("img");
                if (bombImg) bombImg.style.display = "block";
            });

            
            //creo h1 e stampo dentro
            const h1 = document.createElement("h1");
            h1.innerHTML = "Hai trovato una bomba :(";

            // overlay a schermo intero con scritta centrata
            h1.className = "overlay-bomba";

            //metto h1 nel body
            document.body.appendChild(h1);

            // Reset totale ricaricando la pagina
            setTimeout(() => {
                location.reload();
            }, 2000);

        } else {
            punteggioTotale++
            //creo tag
            let p = document.getElementById("p-set")
            p.innerHTML = punteggioTotale

        }


        //condizione sei punteggio totale e 30 esce overlay hai vinto
        if (punteggioTotale == 30) {
            //creo h1 e stampo dentro
            const h1 = document.createElement("h1");
            h1.innerHTML = "Hai Vintoo!!!";

            // overlay a schermo intero con scritta centrata
            h1.className = "overlay-bomba-green";

            //metto h1 nel body
            document.body.appendChild(h1);

            // Reset totale ricaricando la pagina
            setTimeout(() => {
                location.reload();
            }, 2000);


        }

    })


}


