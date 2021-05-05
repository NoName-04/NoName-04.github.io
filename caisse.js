var tauxTVH = 1.13
var prixArticle = prompt("C'est quoi le prix de votre article, en dollars canadien? (ne mettez pas le signe $)");
var quantitéArticle = prompt("Quelle quantité de cet article achetez-vous?");
var prixTotale = (parseFloat((prixArticle*quantitéArticle)*tauxTVH).toFixed(2) + " $");
console.log("Le prix totale de vos articles avec les taxes sont " + prixTotale);
