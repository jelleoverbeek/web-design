[> opdracht 2](https://github.com/jelleoverbeek/web-design/tree/elo/master)

# Webdesign - opdracht 1
Met deze app zal het mogelijk zijn om nieuwe films te ontdekken op basis van een selectie aan films die de gebruiker al heeft gezien. De gebruiker vult deze films zelf in. 

![preview](https://d.pr/i/3q2wAR+)

[Demo](https://discover-movies.herokuapp.com/)

## Prerequisites
* Git
* Node
* NPM

## Project opzetten
1. Clone repo en navigeer er naar toe.
2. `npm install`
3. `node server.js`
4. Kopieer config.js.dist en verander de naam naar config.js: `cp src/assets/js/config.js.dist src/assets/js/config.js`
5. Genereer een api key bij [themoviedb](https://www.themoviedb.org/documentation/api) en zet die in config.js
4. Navigeer naar `localhost:3000` in je browser om de site te bekijken

## Principles
**Direct manipulation is best**  
De gebruiker kan interacteren met de de films door er direct op te klikken.

**Progressive disclosure**  
Gebruikers gaan door een film selectie proces heen in stappen.

**Conserve attention at all costs**  
Het belangrijkste onderdeel van de site. De films, vallen op en eisen de aandacht op.

**One primary action per screen**  
Het liken van de films is de primaire actie.

### Todo's
- Meer visuele stijlen uitproberen met grotere texten.
- Beschikbare acties duidelijker maken.
- Meer filters uitwerken.