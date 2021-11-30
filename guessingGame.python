import random
#Importer les fonctions randoms de python

def devine():
  #Jeu de devinette
  random_num = random.randint(1,10)
  #Généré un randome nombre entre 1-10
  compteur = 0
  reponse = False

  while reponse == False:
    #Lorsque la reponse est faux recommence la boucle
    nombre_devine = int(input("Devinez un nombre entre 1 et 10 : "))
    #demenende l'utilisateur de deviner un nombre entre 1 et 10, transformer a un int
    compteur = compteur + 1
    #Pour conter les essaies
    if nombre_devine == random_num:
      print("Succès, vous avez bien deviné le nombre, en", compteur, "tentatives.")
      reponse = True
      #Si l'utilisateur a deviner le bon nombre afficher la réponse et les tentatives. mettre reponse = True.
    elif nombre_devine > random_num:
      print("le numéro est trop élevé. Essayez à nouveau.")
      #Si le nombre deviner est plus grand que le random nombre afficher que le numéro est trop élevéé
    elif nombre_devine < random_num:
      print("le numéro est trop bas. Essayez à nouveau.")
      #Si le nombre deviner est plus petit que le random nombre afficher que le numéro est trop bas

devine()
