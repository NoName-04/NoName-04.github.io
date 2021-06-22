//set battleship health, la couleur des boutons et le score
let player1Health = 14;
let buttonColour = "grey";
let score = 114;

//cett fonction soustrait une vie de l'ennemi
function onHitPlayer1(){
  player1Health--
    if(player1Health == 0){                //Si il reste plus de vie demande si le joueur veut jouer encore
      var yes = confirm("Score: " + score + "\n\n Voulez-vous rejouer?");
      if (yes == true) {                   //Si oui, redemare la page
        location.reload();
      }
    }
}



/*
Les tables de jeux, chaque 1 est la position d'un bateau.
Chaque 2 est un bateau qui est frappé.
Chauqe 3 est un espace manquée.
*/

let b0 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','1',' ',' ',' ',' ',' ',' ',' '],
  [' ','1',' ',' ',' ','1','1','1',' '],
  [' ','1',' ',' ',' ',' ',' ',' ',' '],
  [' ','1',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','1','1','1','1','1',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1','1',' ',' ',' ',' ',' ',' ',' '],
]

let b1 = [
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1',' ',' ','1',' ',' ',' ','1',' '],
  ['1',' ',' ','1',' ',' ',' ','1',' '],
  ['1',' ',' ',' ',' ',' ',' ','1',' '],
  ['1',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','1','1','1',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
]

let b2 = [
  [' ',' ',' ','1',' ',' ','1',' ',' '],
  [' ',' ',' ','1',' ',' ','1',' ',' '],
  [' ',' ',' ','1',' ',' ',' ',' ',' '],
  [' ',' ',' ','1',' ',' ',' ',' ',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1',' ',' ',' ',' ',' ','1',' ',' '],
  ['1',' ',' ',' ',' ',' ','1',' ',' '],
  ['1',' ',' ',' ',' ',' ','1',' ',' '],
]

let b3 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1',' ','1',' ',' ',' ',' ',' ',' '],
  ['1','1','1',' ',' ',' ',' ',' ',' '],
  ['1','1','1',' ',' ',' ',' ',' ',' '],
  ['1','1','1',' ',' ',' ',' ',' ',' '],
  ['1','1','1',' ',' ',' ',' ',' ',' '],
]

let b4 = [
  [' ','1','1','1','1',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ','1',' ',' '],
  [' ',' ',' ',' ',' ',' ','1',' ',' '],
  ['1',' ',' ',' ',' ',' ','1',' ',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ','1','1','1','1','1'],
]

let b5 = [
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  ['1',' ',' ',' ','1',' ',' ',' ',' '],
  ['1',' ',' ',' ','1',' ',' ',' ',' '],
  ['1',' ',' ',' ','1',' ',' ',' ',' '],
  ['1',' ',' ',' ','1',' ',' ',' ',' '],
  ['1',' ',' ',' ','1',' ',' ',' ',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
]

let b6 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1','1','1',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ','1',' ',' ',' '],
  [' ',' ',' ',' ',' ','1',' ',' ',' '],
  [' ',' ',' ',' ',' ','1',' ',' ','1'],
  [' ',' ','1',' ',' ','1',' ',' ','1'],
  [' ',' ','1',' ',' ',' ',' ',' ','1'],
  [' ',' ',' ',' ',' ',' ',' ',' ','1'],
  [' ',' ',' ',' ',' ',' ',' ',' ','1'],
]

let b7 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','1','1','1','1',' ',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1','1','1','1','1','1','1','1','1'],
]

let b8 = [
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ','1',' ',' ','1',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  [' ',' ',' ',' ','1',' ',' ',' ',' '],
  ['1','1','1','1',' ',' ','1',' ',' '],
  [' ',' ',' ',' ',' ',' ','1',' ',' '],
]

let b9 = [
  ['1','1',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  [' ',' ','1','1','1','1','1','1',' '],
  [' ',' ','1',' ',' ',' ',' ',' ',' '],
  [' ',' ','1',' ',' ',' ',' ',' ',' '],
]

let b10 = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ','1',' ',' ',' ',' ',' ','1',' '],
  [' ','1',' ',' ',' ',' ',' ','1',' '],
  [' ',' ',' ',' ',' ',' ',' ','1',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  ['1',' ','1','1','1','1','1',' ',' '],
  ['1',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' '],
]
let randomBoard = ("b"+(Math.floor(Math.random()*11)));
let player1Position = eval(randomBoard);

// Cette loop génère tous les boutons sur la page HTML
var output = "<form>"
var row = ""
for(let i = 0; i < 9; i++) {
  for(let j = 0; j < 9; j++) {
    row = row + "<input class='sq' id='" + String(i+1) + String(j+1) + "' style='background-color:"+ buttonColour +"' type='button' onclick= fire(" + String(i+1) + String(j+1) + ") />"
  
  }
  row = row + "<br>"
}
document.getElementById("button").innerHTML = (row)


// Cette fonction change la couleur des boutons 
function display(){
  for (let k = 1; k < 100 ;k++) {
    
    let hit = "red"
    let miss = "white"

    if (k == 1) {
      var displayX = "1"
      var displayY = "1"

      /* 
      Cette loop regarde dans le tableau player1Position, si il y a un 3 dans le 
      tableau on change le couleur du boutton correspondant a un blanc. Si il y 
      a un 2 dans le tableau on change le couleur du bouton a rouge. 

      On utilise un loop qui augmente la valeur de k jusqu'à 99 pour vérifier l'état 
      de chaque casse dans le tableaux player1Position, ensuite on change le bouton 
      avec les mêmes coordonnées. Il y a un problème, les valeurs de k qui sont plus 
      petits que 10 ont seulement 1 nombre et par conséquent ne fonctionne pas. Pour 
      toutes les valeurs <=9 les coordonnées sont changées.
      */
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 2) {
      var displayX = "1"
      var displayY = "2"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 3) {
      var displayX = "1"
      var displayY = "3"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 4) {
      var displayX = "1"
      var displayY = "4"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 5) {
      var displayX = "1"
      var displayY = "5"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 6) {
      var displayX = "1"
      var displayY = "6"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 7) {
      var displayX = "1"
      var displayY = "7"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 8) {
      var displayX = "1"
      var displayY = "8"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k == 9) {
      var displayX = "1"
      var displayY = "9"
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    } else if (k > 9) {
      var displayX = ((String(k).slice(1)));
      var displayY = ((String(k).slice(0, 1)));
      if (player1Position[displayY-1][displayX-1] == 2) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = hit
      } else if (player1Position[displayY-1][displayX-1] == 3) {
        var btnColour = document.getElementById(  String(displayY)  + String(displayX)       );
        btnColour.style.backgroundColor = miss
      }
    }
  }
}

// Chaque fois que tu clique sur un bouton on éxécute cette fonction
function fire(x) {
  var fireX = ((String(x).slice(1)));
  var fireY = ((String(x).slice(0, 1)));

  // si on frappe un bateau
  if (player1Position[fireY-1][fireX-1] == 1) {
    player1Position[fireY-1][fireX-1] = 2
    score--
    display();
    onHitPlayer1()
    document.getElementById("output").innerHTML = player1Health 
  } else if (player1Position[fireY-1][fireX-1] != 2) {
    player1Position[fireY-1][fireX-1] = 3
    score--
    display();
    document.getElementById("output").innerHTML = player1Health 
  }

}
