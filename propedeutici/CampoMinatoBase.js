// Prendo il container per inserire i button
const container = document.getElementById("container-button");

//arr di 7x7 = 49


//faccio arr per incapsulare le bombe
const arrBombCasual = []


//10 posiizioni casuali per le bombe
for (let b = 0; b < 10; b++) {
    //faccio bombe casuali che vanno da 49 a 1
    const bombeCasualiTraRighe = Math.floor(Math.random() * (49 - 1) + 1)

    //faccio anche verifica se contiene gia un numero
    if (!arrBombCasual.includes(bombeCasualiTraRighe)) {
        //pusho dentro arr
        arrBombCasual.push(bombeCasualiTraRighe)
    }


}



// Ciclo per aggiungere btn + condizione per verifica se in arrbomcasual che sarebbero le 10 posizioni casuali includono gia la length della rr
for (let i = 1; i < 50; i++) {

    // Creo il button
    var button = document.createElement("button");


    // Assegno lo stile
    button.className = "bg-gray-300 w-[50px] h-[50px] border-3";


    // Aggiungo il button al container
    container.appendChild(button);


    if (arrBombCasual.includes(i)) {
        //creo img tag
        const img = document.createElement("img");
        img.src = "./img/bomb-removebg-preview.png";
        img.alt = "bomba";


        //assegno img bomb button
        button.appendChild(img)
    }
}

//arr bombe casuali
console.log(arrBombCasual);

