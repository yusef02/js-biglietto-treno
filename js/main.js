let kmTratta = parseInt(prompt("inserisci i km della tratta: "));
console.log(kmTratta);
let etaPasseggero = parseInt(prompt("inserisci l'età del passeggero: "));
console.log(etaPasseggero);

if(!(isNaN(kmTratta) || isNaN(etaPasseggero))) {
    const prezzoPerKm = 0.21;
    let prezzoBiglietto = 0;

    if(etaPasseggero < 18){
        prezzoBiglietto = (kmTratta * prezzoPerKm) / 100 * 80;
        console.log(prezzoBiglietto);
    } else if(etaPasseggero > 65){
        prezzoBiglietto = (kmTratta * prezzoPerKm) / 100 * 60;
        console.log(prezzoBiglietto);
    } else {
        prezzoBiglietto = (kmTratta * prezzoPerKm);
        console.log(prezzoBiglietto);
    }

    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    const h1Element = document.createElement('h1');
    h1Element.innerHTML = `il costo del tuo biglietto è €${prezzoBiglietto}`;
    document.body.appendChild(h1Element);
} else {
    alert(`i dati inseriti non sono validi`);
}
