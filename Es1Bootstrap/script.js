let studenti = [];

const inputNome = document.getElementById('nome');
const inputCognome = document.getElementById('cognome');
const inputEta = document.getElementById('eta');
const btnAggiungi = document.getElementById('btnAggiungi');
const corpoTabella = document.getElementById('corpoTabella');

btnAggiungi.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const cognome = inputCognome.value.trim();
    const eta = inputEta.value.trim();

    if (nome === "" || cognome === "" || eta === "") {
        alert("Per favore, compila tutti i campi!");
        return;
    }

    const nuovoStudente = {
        nome: nome,
        cognome: cognome,
        eta: eta
    };

    studenti.push(nuovoStudente);

    mostraStudenti();
    svuotaCampi();
});

function mostraStudenti() {
    corpoTabella.innerHTML = "";

    studenti.forEach((studente, indice) => {
        const riga = document.createElement('tr');

        riga.innerHTML = `
            <td>${studente.nome}</td>
            <td>${studente.cognome}</td>
            <td>${studente.eta}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminaStudente(${indice})">Elimina</button>
            </td>
        `;

        corpoTabella.appendChild(riga);
    });
}

function eliminaStudente(indice) {
    studenti.splice(indice, 1);
    
    mostraStudenti();
}

function svuotaCampi() {
    inputNome.value = "";
    inputCognome.value = "";
    inputEta.value = "";
}