var articoli = [
    { nome: "mouse", prezzo: 16 },
    { nome: "tastiera 105 tasti", prezzo: 25 },
    { nome: "stampante deskjet colori", prezzo: 350 },
    { nome: "scanner A4 colori", prezzo: 200 }
];

var corpo = document.getElementById("corpo-tabella");

for (var i = 0; i < articoli.length; i++) {
    var riga = corpo.insertRow();
    riga.innerHTML = `
        <td>
            <button onclick="modifica(${i}, -1)">-</button>
            <input type="number" id="qta${i}" value="0" style="width:35px">
            <button onclick="modifica(${i}, 1)">+</button>
        </td>
        <td>${articoli[i].nome}</td>
        <td>${articoli[i].prezzo}€</td>
        <td><input type="text" id="tot${i}" value="0" readonly></td>
    `;
}

function modifica(i, v) {
    var input = document.getElementById("qta" + i);
    var nuovo = parseInt(input.value) + v;
    if (nuovo >= 0 && nuovo <= 20) {
        input.value = nuovo;
    }
}

function calcola() {
    var globale = 0;
    var errore = false;
    document.getElementById("mex").innerHTML = "";

    for (var i = 0; i < articoli.length; i++) {
        var q = parseInt(document.getElementById("qta" + i).value);
        if (q < 0 || q > 20 || isNaN(q)) {
            document.getElementById("mex").innerHTML = "Quantità errata (inserire 0-20) [cite: 3]";
            errore = true;
        }
        var rigaTot = q * articoli[i].prezzo;
        document.getElementById("tot" + i).value = rigaTot;
        globale += rigaTot;
    }
    document.getElementById("totale-ordine").value = errore ? 0 : globale;
    return { totale: globale, errore: errore };
}

function invia() {
    var res = calcola();
    if (res.errore) return;

    var mail = document.getElementById("email").value;
    var dom = mail.split("@")[1];

    if (!mail.includes("@") || !isNaN(mail[0]) || (dom && /\d/.test(dom))) {
        document.getElementById("mex").innerHTML = "E-mail non valida [cite: 6, 7]";
        return;
    }

    var pag = document.getElementById("pagamento").value;
    alert("Grazie per il suo ordine di " + res.totale + "€, il pagamento avverrà tramite " + pag + ". Riceverà notifiche a: " + mail + " [cite: 5]");
}

function azzera() {
    location.reload();
}