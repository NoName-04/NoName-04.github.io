function soumettrePrix() {
          var boulons  = document.getElementById("txtBoulons").value;
          var ecrous = document.getElementById("txtEcrous").value;
          var rondelles = document.getElementById("txtRondelles").value;
          const tauxTVH = 1.13

          if(boulons!=ecrous) {
          var affiche = document.getElementById("divAffiche");
          affiche.innerHTML = "Vérifier la commande"
          } else {
          if(boulons=ecrous)
            var affiche = document.getElementById("divAffiche");
           affiche.innerHTML = "Donc, le prix totale de vos articles avec les taxes sont " +(((ecrous*0.03)+(boulons*0.05)+(rondelles*0.01))*tauxTVH).toFixed(2) + "$";
          }
        }
