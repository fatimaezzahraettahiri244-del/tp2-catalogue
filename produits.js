// Données de départ
const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

// Défi : Fonction de validation
function estValide(produit) {
  return (
    Number.isFinite(produit.prix) &&
    produit.prix >= 0 &&
    Number.isFinite(produit.stock) &&
    produit.stock >= 0
  );
}

// 1. Affichage du catalogue
console.log('--- Catalogue complet ---');
produits.forEach((p) => {
  if (estValide(p)) {
    console.log(`${p.nom} : ${p.prix} MAD`);
  }
});

// 2. Disponibilité (stock > 0)
const disponibles = produits.filter((p) => estValide(p) && p.stock > 0);
console.log('\nNombre de produits disponibles :', disponibles.length);

// 3. Valeur totale du stock
const valeurTotaleStock = produits.reduce(
  (total, p) => (estValide(p) ? total + p.prix * p.stock : total),
  0
);
console.log('Valeur totale du stock :', valeurTotaleStock, 'MAD');

// 4. Prix minimal avec déstructuration
function trouverMoinsCher(liste) {
  if (liste.length === 0) return null;
  return liste.reduce((min, p) => (p.prix < min.prix ? p : min));
}

const moinsCher = trouverMoinsCher(disponibles);
if (moinsCher) {
  const { nom, prix } = moinsCher; // Déstructuration
  console.log(`Produit disponible le moins cher : ${nom} (${prix} MAD)`);
} else {
  console.log('Aucun produit disponible');
}

// 5. Résumé avec map()
const resume = produits.map((p) => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
console.log('\n--- Résumé ---');
resume.forEach((ligne) => console.log(ligne));