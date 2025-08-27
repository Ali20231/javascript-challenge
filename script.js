var bestelling = [];

function addToOrder(artikel, prijs) {
    var index = bestelling.findIndex(item => item.artikel === artikel);
    if (index !== -1) {
        bestelling[index].aantal++;
    } else {
        bestelling.push({ artikel: artikel, aantal: 1, prijs: prijs });
    }
    updateBestellingTable();
    updateTotalPrice(); // Roep de updateTotalPrice-functie aan na het toevoegen van een item aan de bestelling
}

function updateBestellingTable() {
    var bestellingTable = document.getElementById("bestellingTable");
    bestellingTable.innerHTML = "";

    bestelling.forEach(item => {
        var row = bestellingTable.insertRow();
        var artikelCell = row.insertCell(0);
        var aantalCell = row.insertCell(1);
        var prijsCell = row.insertCell(2);

        artikelCell.innerHTML = item.artikel;
        aantalCell.innerHTML = item.aantal;
        prijsCell.innerHTML = (item.aantal * item.prijs).toFixed(2);
    });
}

function updateTotalPrice() {
    var totalPrice = bestelling.reduce(function(total, item) {
        return total + (item.aantal * item.prijs);
    }, 0).toFixed(2);

    var totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = "Totale prijs: €" + totalPrice;
}

