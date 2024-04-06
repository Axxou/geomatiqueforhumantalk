# Exemples de Géomatique pour Human Talk Grenoblois

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)


Bienvenue sur le README du projet pour le Human Talk sur de la Géomatique ! Ce projet est conçu pour découvrir brièvement comment démarrer une projet avec des fonctions spatiales simples et ce qu'il est possible de faire en utilisant des outils plus complet en utilisant des services plus poussés via des API.

## 📖 Table des Matières

- [À propos des exemples](#à-propos-des-exemples)
- [Prérequis](#prérequis)
- [Librairies Utilisés](#librairies-utilises)
- [Tester en local](#tester-en-local)
- [Ressources cartographiques](#ressources-cartographiques)
- [Aller plus loin dans la découverte](#aller-plus-loin-dans-la-decouverte)
- [Contact](#contact)

## 📌 À propos des exemples

Le but de ces exemples est de montrer très simplement comment la géomatique peut être utilisé simplement, grâce à des librairies et une certaine compréhension des données spatiales.

Vous trouverez sur le youtube du Human Talk de Grenoble la retransmission de la présentation et le StoryBoard en lien avec ces exemples.

## 📋 Prérequis

Aucun pré-requis n'est demandé pour comprendre les exemples.
Une base de connaissance dans le language Typescript, l'utilisation d'une API et des traitements géospatials sont recommandés.

## 🗂 Librairies Utilisées

1) TypeScript
2) React
3) OpenRouteService
4) Leaflet
5) Axios

## 🚀 Tester en local

Voici un guide rapide pour le lancer en local.

### 1) **Cloner le dépôt**

> git clone https://axxou.github.io/geomatiqueforhumantalk/.git
> cd geomatiquehumantalk

### 2) **Installer les dépendances**

> npm install ou yarn

### 3) **Cloner le dépôt**

> npm start ou yarn start

### 4) **Lancer le site web en local**

> Aller sur le http://localhost:3000

## 🗺 Ressources cartographiques

Plusieurs types de ressources sont utilisés pour les exemples mais également pour aller plus loin dans la découverte.

### 🕹 Logiciels

• **QGIS** : https://www.qgis.org/fr/site/, logiciel open-source et gratuit, utilisé fréquemment pour du traitement de données géographiques sans connaissance au code. Possibilité d'ouvrir "tous" les types de fichiers dans le domaine comme le Shapefile. Il est possible de coder des plugins et des outils personnalisés dans le language python : https://docs.qgis.org/3.34/en/docs/pyqgis_developer_cookbook/index.html.

• **ArcGIS** : https://www.arcgis.com/index.html, logiciel sous licence détenue par ESRI, qui est également utilisé par une bonne partie des utilisateurs des logiciels SIG. ArcGIS se décline sous plusieurs outils mais le plus connu est ArcGIS Pro.


### 🗾 Fond de carte utilisables gratuitement

• **Leaflet** : https://leafletjs.com/, la Librairie principale utilisée pour afficher les fonds de carte et toutes les informations géographiques dessus. Une des références en la matière.

• https://leaflet-extras.github.io/leaflet-providers/preview/ : Site répertoriant l'ensemble des fonds de cartes utilisables "gratuitement' pour les appliquer dans un projet avec leaflet.

• **OpenLayers** : https://openlayers.org/, autre librairie pouvant être utilisé pour afficher une carte et les informations géographiques dessus. Un peu moins utilisée, mais toujours interessant de s'y attarder.

• **Umap** : https://umap.openstreetmap.fr/fr/, plateforme open-source, pas une librairie, mais permet à toute personne voulant faire une carte rapidement et sur le fond OpenStreetMap.

• **OverPass-Turbo** : https://overpass-turbo.eu/, outil disponible gratuitement permettant d'extraire des données OSM à partir de requêtes suivant le language Overpass QL, propre à son utilisation. 
Plus d'information : https://osm-queries.ldodds.com/tutorial/index.html



### 💶 Services Cartographiques payant en ligne 

• **Mapbox** : https://www.mapbox.com/, un des services couramment utilisé pour la gestion des cartes sur le web et sur le mobile. Plusieurs solutions sont mises à disposition et l'utilisation de leur API est très complète. Offre également un studio pour créer son fond de carte personnalisé.

• **StadiaMaps** : https://stadiamaps.com/, plutôt orienté vers un des entreprises à taille plus restreinte, offre un panel de service complet à partir des outils open-source de Mapzen et d'autres payant via leur API.

• **Carto** : https://carto.com/, service intéressant tant sur le plan outils mises à disposition ( workflow de traitement de données, environnement de développement et les outils de visualisation pré-conçus), que sur le plan financier avec des tarifs adaptés au besoin.

• **MapTiler** : https://documentation.maptiler.com/hc/en-us, entreprise Suisse qui offre un éventail complet d'outils cartographique, avec une APi complète et une documentation pertinente ( Guide intéressant pour les novices ).

• **TomTom** : https://developer.tomtom.com/, un des leader du marché en terme d'offre via des SDK et une API performante et qui apporte une expertise pour la navigation.

• **Autres** : Je ne mentionne pas plus en détail Google avec l'API Google Maps ou Apple et Apple Maps car ils sont déjà assez représenté sur le marché des services SIG incontournables.

### 💡 Services Cartographiques gratuits en ligne

• **Turf JS** : https://turfjs.org/, une de mes librairies préférés car complete et permet de faire des traitement géographiques poussés via plusieurs fonctions accessibles simplement.

• **D3 JS** : https://d3js.org/, librairie permettant de faire des graphiques et des représentations cartographiques poussées, si vous voulez avoir des résultats visuels intéressant pour votre site web, n'hésitez pas à la découvrir.

• **Cesium** : https://cesium.com/platform/, plateforme pour créer plusieurs visuels sur de la 3D, ce qui n'est pas une des représentations les plus courantes pour le SIG. Plutôt didactique, aussi à découvrir.

## 🔮 Aller plus loin dans l'apprentissage : 

### 📓 Livres :

•**_Leading with Data: A Police Commander’s Guide to GIS & Crime Analysis_** de Jonas H. Baughman. (2024)

•**_Designing Better Maps: A Guide for GIS Users_** de Cynthia A. Brewer (2016)

•**_Getting to Know Web GIS_** de Pinde fu (2015)

•**_Getting to Know ArcGIS Pro_** de Michael Law, Amy Collins (2019)

•**_Imagery and GIS: Best Practices for Extracting Information from Imagery_** de Kass Green, Russell G Congalton, Mark Tukman (2017)

•**_Women and GIS: Mapping Their Stories_** de ESRI Press (2019)

•**_GIS Fundamentals: A First Text on Geographic Information Systems_** de Paul Bolstad (2002)

•**_Dealing with Disasters: GIS for Emergency Management_** de Ryan Lanclos, Matt Artz (2021)

### 📓 Site web :

• **Coursera** : https://www.coursera.org/learn/gis

• **ESRI** : https://www.esri.com/training/catalog/search/

• **University at Buffalo** : https://research.lib.buffalo.edu/gis-courses/gis-training

• **Ben-Gurion University** : https://geobgu.xyz/web-mapping2/

• **Harvard University** : https://gis.harvard.edu/teaching

## 📬 Contact

Dorian AVENET

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dorian-avenet-502092130/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Axxou)

