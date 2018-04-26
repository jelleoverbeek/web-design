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

## Weekly nerds
De weekly nerds kunnen worden teruggezien in een splitscreen video waarbij de spreker en de slides met elkaar gesynchroniseerd zijn. Onder de video zijn alle slides terug te zien en de daarbij horende aantekeningen.

### Todo's
- Tabblad toevoegen met overzicht van alle aantekeningen.
- Visueel duidelijker maken dat er iets veranderd in de notities.

**Voorbeeld**  
<img src="weeklynerd.gif?raw=true">

## Principles

**Direct manipulation is best**  
De gebruiker kan interacteren met de presentatie doormiddel van de slide thumbnails en de media items zelf.

**Progressive disclosure**  
Gebruikers zien alleen wat er op dat moment het meeste toe doet. Het is wel mogelijk om andere data op te halen. 

**Consistency matters**  
Kleuren en kopgroottes worden consistent gebruikt.

**Highlight, don't determine, with color**  
Kleur wordt gebruikt om elementen er uit te laten springen die extra aandacht vereisen.

## User scenario's
Vooraf heb ik een aantal user scenarios gemaakt. Uiteindelijk is er nog maar 1 van toepassing op mijn website.

* ~~Student wilt kijken waar de weekly geek is en opent de website. Vervolgens gaat hij naar het rooster en ziet dat de weekly geek begint om 16:00 en duurt tot 18:00. Er staat ook een locatie bij die doorlinkt naar Google Maps met als beginbestemming de vorige activiteit.~~
* Student heeft weekly geek gemist en wilt deze terugzien. Hij gaat naar de website naar de pagina “weekly geeks” en klikt daar op de weekly geek van de dag die hij gemist heeft. Op de pagina staat een ondertitelde video met daarbij de eventuele powerpoint presentatie (gesynct).
* ~~Student wilt opdrachten van een vak bekijken en klikt op het vak. Zodra hij in het vak aangekomen is klikt hij op de link naar de opdrachten (GDrive).~~
* ~~Student wilt Github en Slack username toevoegen aan profiel zodat docenten deze makkelijk kunnen terugvinden en dat student deze makkelijk van medestudenten kunnen inzien.~~
* ~~Student wil link naar Slack channel en Github pagina duidelijk zien.~~
* ~~Student wilt geboekte timeslots terugzien in rooster.~~

## Card sorting
Om content inzichtelijk te maken heb ik gebruikt gemaakt van de techniek card sorting.
![card sorting](https://d.pr/i/C4XZEf+)

## User test
Mijn twee gebruikers zijn Marie en Vienna.

**Marie**  
Marie is doof en voor haar is Nederlands een 2e taal. Ik heb geprobeerd de interface zo to-the-point mogelijk te maken.
Marie gaf aan dat het lastig is om college's te volgen voor haar. Dit komt doordat ze op de tolk, de presentatie, en de spreker tegelijk moet letten. Daarbij moet ze ook nog aantekeningen maken. Veel dingen te gelijk dus.
Om dit probleem te verminderen heb ik een pagina gemaakt waarop de Weekly Nerds terug te zien zijn. Zie [Weekly nerds](#Weekly nerds) voor meer hier over.

Uit de user test bleek dat Marie de interface snel begreep. Sommige details (zoals de kleur van het huidige vak) waren niet helemaal duidelijk. Deze bevindingen heb ik opgenomen in de todo's. Marie was verder enthousiast over de oplossing van de weekly geeks. Ze verteld dat dit heel handig kan zijn voor dove mensen. 