# Maximemo  

Création projet sans la dernière version de typescript qui bogue  
```
npx react-native init Maximemo --template react-native-template-typescript@6.10.2
cd Maximemo
git init
```

**Lancer le projet**
- Sur émulateur :  
lancer android studio, créer un device qu'on choisi, et l'exécuter puis en ligne de commande :
```
npx react-native start
npx react-native run-android
```
On peut fermer android studio, l'émulateur est lancé.

- Sur mobile :
Connecter le cable, accepter les indications sur le mobile. Voir si le mobile est bien connecté :
```
adb devices
```
Lancer l'app :
```
npx react-native run-android
```
