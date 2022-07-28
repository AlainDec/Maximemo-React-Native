# Maximemo  

## Création du projet 

Création projet sans la dernière version de typescript qui bogue  
```
npx react-native init Maximemo --template react-native-template-typescript@6.10.2
cd Maximemo
git init
```

## Exécution du projet 

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

## Ajouter des modules

### React Native Paper
Pour la gestion du FAB, l'icône bas droite déployable  
```
npm install react-native-paper
```
Ajouter dans babel.config.js  
```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'react-native-reanimated/plugin'],
    },
  },
};
```

### Navigation + icônes

```
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated
npm install --save react-native-vector-icons
```
Ne pas installer @react-navigation/stack qui est moins rapide que native-stack et qui est développé en JS  
Choisir une icône : https://ionic.io/ionicons ou encore pour plus de choix : https://oblador.github.io/react-native-vector-icons/

### Gestion des formulaires avec React Hook Form
```
npm install react-hook-form
```
un bon tuto vidéo : https://www.youtube.com/watch?v=6DRAg26QtPI&list=PLpepLKamtPjh-xbBONWs42XNNSbtz3VGc&index=7&ab_channel=WawaSensei

### Gestion des règles de validations des formulaires avec YUP
```
npm i yup
```
Yup a besoin d'un resolver et donc de sa librairie :
```
npm install @hookform/resolvers
```

### Champ input select/option
```
npm i @react-native-picker/picker
```

### Gérer les données via le SGBD Realm : https://realm.io/  
doc : https://www.mongodb.com/docs/realm/tutorial/?_ga=2.233929880.725042621.1655800794-244169423.1655800794  
doc de base à suivre : https://www.mongodb.com/docs/realm/sdk/react-native/  
doc 3 : https://github.com/realm/realm-js  
doc 4 : https://github.com/realm/realm-js/tree/master/packages/realm-react#readme  
Les exemples sur lesquels je me suis appuyé: https://aboutreact.com/example-of-realm-database-in-react-native/  
```
npm install realm @realm/react
```

Attention, à l'utilisation de Realm, l'asynchronisation de Await nécessite de modifier tsconfig.json :  
"target": "esnext",  
"module": "commonjs",  

deviennent :  
"target": "es2017",  
"module": "es2022",  

### Utiliser la librairie Moment pour les dates, et timetone pour les convertion tz
```
npm i moment
npm i moment-timezone
```
Dans le code :
```
import Moment from "moment";
import 'moment-timezone';
```

### Génération d'identifiants UUID V4
```
npm i react-native-uuid
```
