function decompte(){
    let jours = document.getElementById('jours');
    let heures = document.getElementById('heures');
    let minutes = document.getElementById('minutes');
    let secondes = document.getElementById('secondes');
    let envementDate = new Date("2026-09-25T00:00:00");
    let maintenant = new Date();
    let difference = envementDate - maintenant;

    if(difference <= 0){
        let decompte = document.getElementById('decompte')
        decompte.innerHTML = '<h2>LES PORTES SONT OUVERTES</h2>'
    }else{
        jours.textContent = `${Math.floor(difference / (24*60*60*1000))}`;
        heures.textContent = `${Math.floor((difference / (60 *60 *1000)) %24 )}`;
        minutes.textContent = `${Math.floor((difference / (60 *1000)) %60)}`;
        secondes.textContent = `${Math.floor((difference / 1000)%60)}`;
    }
}
decompte();
setInterval(decompte, 1000);