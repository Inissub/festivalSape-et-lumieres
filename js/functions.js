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
    <li class="prog_item"><span>23:00</span> <p>Fermeture de la première soirée</p></li>
    </ul>`
    vendredi.style.background = "#ffcf32";
    vendredi.style.color = "#681532";
    samedi.style.background = "";
    samedi.style.color = "#ffcf32";
    dimanche.style.background = "";
    dimanche.style.color = "#ffcf32";
})

samedi.addEventListener('click', ()=>{
    programme.innerHTML = `<ul class="prog_liste" >
    <li class="prog_item" ><span>10:00</span> <p>Atelier stylisme & couture</p></li>
    <li class="prog_item" ><span>12:00</span> <p> Panel “La Sape, un art de vivre” avec des figures locales</p></li>
    <li class="prog_item"><span>15:00</span> <p>Défilé des créateurs</p></li>
    <li class="prog_item"><span>20:00</span> <p>Concert de nuit</p></li>
    </ul>`
    vendredi.style.background = "";
    vendredi.style.color = "#ffcf32";
    dimanche.style.background = "";
    dimanche.style.color = "#ffcf32";
    samedi.style.background = "#ffcf32";
    samedi.style.color = "#681532";
})

dimanche.addEventListener('click', ()=>{
    programme.innerHTML = `<ul class="prog_liste"  >
    <li class="prog_item"><span>11:00</span> <p>Brunch festival</p></li>
    <li class="prog_item"><span>15:00</span> <p>Art et Culture,  expositions lumière</p></li>
    <li class="prog_item"><span>16:30</span> <p>Battle Sapeurs (concours d’élégance)</p></li>
    <li class="prog_item"><span>19:00</span> <p>Cérémonie de clôture</p></li>
    </ul>`
    samedi.style.background = "";
    samedi.style.color = "#ffcf32";
    vendredi.style.background = "";
    vendredi.style.color = "#ffcf32";
    dimanche.style.background = "#ffcf32";
    dimanche.style.color = "#681532";
})

let artistes = {
    musique: [
        {id: 1, nom: "dj Bookson", profession: "Dj musique Urbaine", photo:"images/DjBookson.jpg"},
        {id: 2, nom: "Companie Viluka", profession: "Compagnie Dans comptemporaine", photo: "images/compagnie_viluka.jpg"},
    ],
    mode_et_sape: [
        {id: 1, nom: "Ntsimba Marie Jeanne", profession: "Sapeur", photo:"images/hero4.jpg" },
        {id: 1, nom: "Alphonse Mavoungou", profession: "Sapeur", photo:"images/sapeur5.jpg" },
        {id: 1, nom: "Jocelyn le Bachelor", profession: "Styliste", photo:"images/Jocelyn_le_Bachelor.jpg" }
    ],
    art_lumiere: [
        {id: 1, nom: "Jonas Ekonga", profession: "peintre", photo:"images/peintre.jpg" },
        {id: 1, nom: "Jonas Ekonga", profession: "meteur en scene", photo:"images/metteur_en_scene.jpg" },
    ]
}
let lineupListe = document.getElementById('lineup_liste')
function tousAffiche(){
        let liste = ''
    for(let el in artistes){
        for(let artiste of artistes[el]){
            liste += `<div class="artiste_item">
            <img src="${artiste.photo}"/>
            <div class="conteneur">
                <h3>${artiste.nom}</h3>
                <span>${artiste.profession}</span>
            </div>
            </div>`
        }
    }
    lineupListe.innerHTML = liste
}
tousAffiche()

function fficheCategorie(categorie){
    let liste = ''
    for(let el in artistes){
        if(el == categorie){
            for(let artiste of artistes[el]){
                liste += `<div class="artiste_item">
                <img src="${artiste.photo}"/>
                <div class="conteneur">
                    <h3>${artiste.nom}</h3>
                    <span>${artiste.profession}</span>
                </div>
                </div>`
            }
        }
    }
    lineupListe.innerHTML = liste
}
let tous = document.getElementById('tous')
tous.addEventListener('click', ()=>{
    tousAffiche()
    tous.style.background = "#ffcf32";
    tous.style.color = "#681532";
    musique.style.background = "";
    musique.style.color = "#ffcf32";
    mode_et_sape.style.background = "";
    mode_et_sape.style.color = "#ffcf32";
    art_lumiere.style.background = "";
    art_lumiere.style.color = "#ffcf32";
})

let musique = document.getElementById('musique')
musique.addEventListener('click', ()=>{
    fficheCategorie(musique.id)
    musique.style.background = "#ffcf32";
    musique.style.color = "#681532";
    tous.style.background = "";
    tous.style.color = "#ffcf32";
    mode_et_sape.style.background = "";
    mode_et_sape.style.color = "#ffcf32";
    art_lumiere.style.background = "";
    art_lumiere.style.color = "#ffcf32";
})

let mode_et_sape = document.getElementById('mode_et_sape')
mode_et_sape.addEventListener('click', ()=>{
    fficheCategorie(mode_et_sape.id)
    mode_et_sape.style.background = "#ffcf32";
    mode_et_sape.style.color = "#681532";
    tous.style.background = "";
    tous.style.color = "#ffcf32";
    musique.style.background = "";
    musique.style.color = "#ffcf32";
    art_lumiere.style.background = "";
    art_lumiere.style.color = "#ffcf32";
})

let art_lumiere = document.getElementById('art_lumiere')
art_lumiere.addEventListener('click', ()=>{
    fficheCategorie(art_lumiere.id)
    art_lumiere.style.background = "#ffcf32";
    art_lumiere.style.color = "#681532";
    tous.style.background = "";
    tous.style.color = "#ffcf32";
    musique.style.background = "";
    musique.style.color = "#ffcf32";
    mode_et_sape.style.background = "";
    mode_et_sape.style.color = "#ffcf32";
})

function reserverWhatsapp(pass){
    let numero = "242068953250";
    let message = `Bonjour, je souhaite réserver un ${pass} pour le Festival Sape & Lumière`;
    let encode = encodeURIComponent(message);
    const url = `https://wa.me/${numero}?text=${encode}`;
    window.open(url, '_blank');
}

let reserve = document.querySelectorAll('.reserve');
for(let buton of reserve){
    buton.addEventListener('click', ()=>{
        reserverWhatsapp(buton.dataset.pass);
    })
}

let burger = document.getElementById('burger');
let mobile = document.querySelector('.nav_mobile');
burger.addEventListener('click', () => {
    if(mobile){
        mobile.remove();
        mobile = null; 
        return;
    }
    const liste = `<ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#programme">Programme</a></li>
        <li><a href="#lineup">Line-up</a></li>
        <li><a href="#billetterie">Billetterie</a></li>
        <li><a href="#partenaires">Partenaires</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>`;

    mobile = document.createElement('div');
    mobile.classList.add('nav_mobile');
    mobile.innerHTML = liste;
    document.body.appendChild(mobile);     
});