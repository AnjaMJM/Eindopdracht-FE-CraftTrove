# Eindopdracht Frontend: CraftTrove - webshop

## Inleiding
Welkom op CraftTrove, een schatkist vol inspiratie. Laat je inspireren door designers binnen de textiele ambachten en ga zelf aan de slag met hun ontwerpen.

Op dit moment wordt CraftTrove gevuld door de data van de DummyJSON-API, een API met test-data voor webshops. Helaas biedt deze API weinig handwerk en al helemaal geen patronen. We hopen dat je hier doorheen kunt kijken tot een beter API zich aandient.

![screenshot](src/assets/screenshot.png)

## Applicatie starten

Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de `node_modules` door het volgende
commando in de terminal te runnen:

```
npm install
```

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

```
npm run dev
```

of gebruik de WebStorm knop (npm start). Open de localhost (meestal [http://localhost:5173](http://localhost:5173/), maar een ander nummer kan ook, als 5173 op dat moment al in gebruik is) om de pagina in de browser
te bekijken. 

### Libraries
De applicatie maakt gebruik van de volgende libraries:

```
axios
```
,
```
react-router-dom
```
en
```
jwt-decode
```
Deze zouden gelijk met het uitvoeren van de npm install geïnstalleerd moeten worden.
Dit kun je controleren in de package.json onder 'dependencies'. Dit zou er als volgt uit moeten zien:

```
"dependencies": {
    "axios": "^1.6.8",
    "jwt-decode": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
```
Of een recentere versie

### API's: 

Voor deze webshop worden twee API's gebruikt, te weten:

fake store API, voor de winkeldata: https://dummyjson.com/ (geen API-key nodig)
NOVI Educational Backend, voor de registratie en login: https://novi.datavortex.nl (API-key;  crafttrove:A9GPZ9fuTVS4x1u6oimE)

### To do:

verantwoordingsdocument
read me

Wishlist maken


## Beoordelingscriteria website:

[x ] Minimaal 4 kern functionaliteiten; (ophalen en manipuleren van data in de API)

    [X] Inloggen/registreren
    [X] Zoekfunctie
    [X] Winkelmand vullen
    [] Wishlist maken
    [x] random product slider
    [X] producten filteren op categorie

[X ] Minimaal 6 herbruikbare componenten
    
    [x] Button
    [x] inlog/registratie Form
    [x] Gallery Slider
    [x] Navbar
    [x] Header
    [] Footer
    [x] Productcard
    [x] Modal (inloggen/ registreren)
    [x] Searchbar


GIT:

[ X] Minimaal 5 branches en merches met main branch

    [X] Gallery Slider
    [X] searchbar (get data)
    [X] Pages (aanmaken en basic lay-out)
    [x] Registratie, authethicatie
    [X] Formulieren
    [] Error handling
    [X] Navbar functioneel maken
    [X] Winkelmandje
    

[X ] Minimaal 20 commits met zinvolle messages


icons via flaticon.com, attributed to:
   - treasure chest by Smashicons
   - settings by Freepik
   - wicker-basket by Freepik
   - craft-logo by Gravisio
   - hand-made by Freepik
   - crochet by Becris
   - knitting by Freepik
   - sewing-machine by Freepik
   - lace-making by Freepik
   - wool by Freepik
   - embroidery by Eucalyp
   - macrame by Freepik
   - weaving by Freepik
   - mending by Freepik
   - patch by Freepik
   - bed by Darius Dan
   - add-post by HideMaru

Searchbar is created with help of this tutorial: https://upmostly.com/tutorials/how-to-create-a-search-bar-in-react

login: CraftTrove, info@crafttrove.nl, wachtwoord