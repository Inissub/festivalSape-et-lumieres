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

let vendredi = document.getElementById('vendredi')
let samedi = document.getElementById('samedi')
let dimanche = document.getElementById('dimanche')
let programme = document.getElementById('mon_programme')

vendredi.addEventListener('click', ()=>{
    programme.innerHTML = `<ul class="prog_liste"  >
    <li class="prog_item"><span>18:00</span> <p>Ouverture des portes</p></li>
    <li class="prog_item"><span>19:00</span> <p>Show Sape, parade des Ambianceurs</p></li>
    <li class="prog_item"><span>21:00</span> <p>Concert d'ouverture</p></li>
    </ul>`
})

samedi.addEventListener('click', ()=>{
    programme.innerHTML = `<ul class="prog_liste" >
    <li class="prog_item" ><span>10:00</span> <p>Atelier stylisme & couture</p></li>
    <li class="prog_item"><span>15:00</span> <p>Défilé des créateurs</p></li>
    <li class="prog_item"><span>20:00</span> <p>Concert de nuit</p></li>
    </ul>`
})

dimanche.addEventListener('click', ()=>{
    programme.innerHTML = `<ul class="prog_liste"  >
    <li class="prog_item"><span>11:00</span> <p>Brunch festival</p></li>
    <li class="prog_item"><span>15:00</span> <p>Art et Culture,  expositions lumière</p></li>
    <li class="prog_item"><span>19:00</span> <p>Cérémonie de clôture</p></li>
    </ul>`
})