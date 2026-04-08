const combo = document.getElementById("comboAnno");
const annoCorrente = new Date().getFullYear();
const annoLimite = annoCorrente - 18;

for (let i = annoLimite; i >= 1900; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    combo.appendChild(option);
}

function gestisciRegistrazione() {
    const cognome = document.getElementById("textBoxCognome").value.trim();
    const nome = document.getElementById("textBoxNome").value.trim();
    const cf = document.getElementById("textCodiceFiscale").value.toUpperCase().trim();
    const checkContratto = document.getElementById("chk1").checked;
    
    let sessoSelezionato = "";
    const grp = document.getElementsByName("radioSesso");
    for (let el of grp) {
        if (el.checked) {
            sessoSelezionato = el.value;
        }
    }

    if (!checkContratto) {
        console.log("Attenzione: devi accettare i termini del servizio per registrarti.");
        return; 
    }
    
    if (cognome == "" || nome == "" || sessoSelezionato == "") {
        console.log("Compilare tutti i campi (Nome, Cognome, Sesso).");
        return;
    }

    const appellativo = (sessoSelezionato === "M") ? "sig." : "sig.ra";
    const areaMessaggio = document.getElementById("messaggioRisposta");
    
    areaMessaggio.innerHTML = `Gentile ${appellativo} ${cognome.toUpperCase()} ${nome.toUpperCase()},<br>la ringraziamo per la registrazione.`;
}