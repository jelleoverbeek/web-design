# ELO minor webdevelopment
Dit project is de front-end van een leeromgeving voor de minor webdevelopment. 

![preview](https://d.pr/i/yNmGyN+)

**Demo:** http://elo.jelle.im/

## Prerequisites
* Git
* Node
* NPM

## Project opzetten
1. Clone repo en navigeer er naar toe.
2. **Productie**
   Voer `gulp` uit om bestanden te compilen en kopieren naar `/build` folder. 
   **Development**
   Met `gulp watch` wordt het project opnieuw gebuild zodra er iets veranderd.
3. Open `/build/index.html` om de website te bekijken.

## Tijdlijn
Het eerste scherm waar de gebruiker op terecht komt.

**Meldingen**
Het is de bedoeling dat de meldingen worden ingeladen vanaf een Slack kanaal. Het moet ook mogelijk worden om browsernotificaties in te schakelen zodat de studenten geen enkele melding missen. 

**Tijdlijn**
In de tijdlijn is per dag en vak het volgende te zien:
* Titel vak
* Titel opdracht
* Links naar opdracht
* Deadline opdracht
* Tijd van vak
* Locatie vak

Met de button "Dag eerder laden", kunnen gebruikers terug in de tijd om bijvoorbeeld opdrachten te bekijken die ze nog moeten inhalen. 

![preview](https://d.pr/i/yNmGyN+)

### Todo's
* Search en filter toevoegen.
* Duidelijker maken dat blauwe kleur.

## Weekly geek
De weekly geeks kunnen worden teruggezien in een splitscreen video waarbij de spreker en de slides met elkaar gesynchroniseerd zijn. Onder de video zijn alle slides terug te zien en de daarbij horende aantekeningen.

### Todo's
- Tabblad toevoegen met overzicht van alle aantekeningen.
- Visueel duidelijker maken dat er iets veranderd in de notities.

**Voorbeeld**
<img src="weeklynerd.gif?raw=true" width="200px">

