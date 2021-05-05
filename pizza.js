var taille = prompt("Quelle taille de pizza voulez-vous, en pouce svp?"); 
console.log("Ok, une pizza de " + taille + " pouces arrive bientôt!");
var sufaceDePizza = (parseFloat(((taille/2)**2)*Math.PI).toFixed(2) + " pouce^2");
console.log("Donc la surface de votre pizza serais de " + sufaceDePizza);
var airDeBoîte = (parseFloat(taille**2).toFixed(2) + " pouce^2");
var volumeDeBoîte = (parseFloat((taille**2)*2).toFixed(2) + " pouce^3");
console.log("Aussi, l'air de votre boîte serait " + airDeBoîte + " et le volume de votre boîte serait " + volumeDeBoîte + ". Merci pour votre coopération! ");
