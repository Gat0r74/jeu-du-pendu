let motChoisi, lettresTrouvees, erreurs, motATrouver, partieTerminee;
let lettresUtilisees = [];
const maxErreurs = 6;

function sansAccent(ch) {
  return ch.normalize("NFD")
           .replace(/[\u0300-\u036f]/g, "")
           .replace(/[ç]/gi, "c")
           .replace(/œ/gi, "oe")
           .replace(/æ/gi, "ae");
}

// Bouton Commencer
document.getElementById('commencer').onclick = function() {
  document.getElementById('accueil').style.display = 'none';
  demarrerPartie();
  document.getElementById('jeu').style.display = 'block';
};

// Bouton Rejouer
document.getElementById('rejouer').onclick = function() {
  document.getElementById('fin').style.display = 'none';
  demarrerPartie();
  document.getElementById('jeu').style.display = 'block';
};

// Démarre une partie
function demarrerPartie() {
  motChoisi = listeMots[Math.floor(Math.random() * listeMots.length)];
  lettresTrouvees = [];
  lettresUtilisees = [];
  erreurs = 0;
  partieTerminee = false;

  let n = motChoisi.mot.length <= 4 ? 1 : 2;
  while (lettresTrouvees.length < n) {
    let ltr = motChoisi.mot[Math.floor(Math.random() * motChoisi.mot.length)];
    if (!lettresTrouvees.includes(ltr) && ltr !== '-') lettresTrouvees.push(ltr);
  }

  document.getElementById('definition-courte').textContent = motChoisi.definitionCourte || '';
  document.getElementById('message').textContent = "";
  dessinerPendu(erreurs);
  afficherMot();
  afficherLettresUtilisees();
  document.getElementById('image-mot').style.display = 'none'; // Masque la photo au démarrage de la partie
}

// Mot caché sur une seule ligne, 12 caractères max, tiret visible directement
function afficherMot() {
  let motATrouver = '';
  for (let i = 0; i < motChoisi.mot.length && i < 12; i++) {
    let l = motChoisi.mot[i];
    if (l === '-') {
      motATrouver += '-';
    } else if (lettresTrouvees.includes(l)) {
      motATrouver += l;
    } else {
      motATrouver += '_';
    }
  }
  document.getElementById('mot-cache').textContent = motATrouver;
}

// Lettres déjà utilisées
function afficherLettresUtilisees() {
  document.getElementById('lettres-utilisees').textContent =
    'Lettres déjà utilisées : ' + lettresUtilisees.join(' ');
}

// Saisie clavier physique
document.addEventListener('keydown', function(e) {
  if (partieTerminee) return;
  let lettre = e.key.toLowerCase();
  if (!lettre.match(/^[a-zàâçéèêëîïôûùüÿñæœ]$/i)) return;

  if (!lettresUtilisees.includes(lettre)) {
    lettresUtilisees.push(lettre);
    afficherLettresUtilisees();
  }

  if (lettresTrouvees.includes(lettre) || motChoisi.mot.indexOf(lettre) === -1) {
    if (!lettresTrouvees.includes(lettre)) {
      erreurs++;
      dessinerPendu(erreurs);
      if (erreurs >= maxErreurs) {
        finPartie(false);
      }
    }
    return;
  }

  lettresTrouvees.push(lettre);
  afficherMot();
  if (motChoisi.mot.split('').every(l => l === '-' || lettresTrouvees.includes(l))) {
    finPartie(true);
  }
});

// Portique toujours visible, bonhomme progressif
function dessinerPendu(nb) {
  const ctx = document.getElementById('pendu-canvas').getContext('2d');
  ctx.clearRect(0, 0, 200, 240);
  ctx.strokeStyle = "#3B3226";
  ctx.lineWidth = 3;

  // Portique affiché dès le début
  ctx.beginPath(); ctx.moveTo(20,220); ctx.lineTo(180,220); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(60,220); ctx.lineTo(60,30); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(60,30); ctx.lineTo(140,30); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(140,30); ctx.lineTo(140,50); ctx.stroke();

  // Bonhomme progressif (1 faute = tête, 2 = corps…)
  if(nb>0){ ctx.beginPath(); ctx.arc(140,70,20,0,2*Math.PI); ctx.stroke(); } // tête
  if(nb>1){ ctx.beginPath(); ctx.moveTo(140,90); ctx.lineTo(140,150); ctx.stroke(); } // corps
  if(nb>2){ ctx.beginPath(); ctx.moveTo(140,110); ctx.lineTo(120,130); ctx.stroke(); } // bras gauche
  if(nb>3){ ctx.beginPath(); ctx.moveTo(140,110); ctx.lineTo(160,130); ctx.stroke(); } // bras droit
  if(nb>4){ ctx.beginPath(); ctx.moveTo(140,150); ctx.lineTo(120,190); ctx.stroke(); } // jambe gauche
  if(nb>5){ ctx.beginPath(); ctx.moveTo(140,150); ctx.lineTo(160,190); ctx.stroke(); } // jambe droite
  if(nb>5){
    ctx.beginPath(); ctx.moveTo(130,60); ctx.lineTo(150,80); ctx.stroke();
    ctx.moveTo(150,60); ctx.lineTo(130,80); ctx.stroke();
  }
}

// Résultat fin de partie avec affichage photo liée au mot
function finPartie(gagne) {
  partieTerminee = true;
  document.getElementById('jeu').style.display = 'none';
  document.getElementById('fin').style.display = 'block';
  document.getElementById('resultat').textContent = gagne ? "Gagné !" : "Perdu...";
  document.getElementById('definition-longue').textContent = motChoisi.definitionLongue || '';
  document.getElementById('mot-final').textContent = "Le mot était : " + motChoisi.mot;
}