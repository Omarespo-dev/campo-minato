// Prendo il container per inserire i button
const container = document.getElementById("container-button");

// Ciclo per aggiungere btn
for (let i = 0; i < 49; i++) {
    
    // Creo il button
    const button = document.createElement("button");

    // Assegno lo stile
    button.className = "bg-gray-200 w-[50px] h-[50px] border-3";

    // Aggiungo il button al container
    container.appendChild(button);
}

//Ora implementiamo le bombe casuali dentro i button


