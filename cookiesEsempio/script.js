function setCookie(nome, valore, giorni) {
    let data = new Date();
    let g = giorni || 1; 
    data.setTime(data.getTime() + (g * 24 * 60 * 60 * 1000));
    
    document.cookie = nome + "=" + encodeURIComponent(valore) +
                      ";expires=" + data.toUTCString() +
                      ";path=/";
}

function getCookie(nome) {
    let nomeCercato = nome + "=";
    let cookies = document.cookie.split(';');
    
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim(); //rimuove spazi vuoti
        if (c.indexOf(nomeCercato) == 0) {
            return decodeURIComponent(c.substring(nomeCercato.length, c.length));
        }
    }
    return "";
}

function salvaDati() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value; //ID corretto
    
    setCookie("nome", nome, 7);
    setCookie("cognome", cognome, 7);
    
    window.location.href = "pagina2.html";
}

function caricaRiepilogo() {
    let nome = getCookie("nome");
    let cognome = getCookie("cognome");
    
    let s = "Nome: " + nome + "<br>Cognome: " + cognome;
    document.getElementById("riepilogo").innerHTML = s;
}