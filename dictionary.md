# HTML

## Dokumentstruktur

- doctype html = forteller nettleseren at dette er et HTML5 dokument
- html = rot elementet som inneholder hele nettsiden
- head = inneholder metadata om nettsiden, for eksempel tittel og koblinger
- title = navnet som vises i fanen i nettleseren
- meta = charset bestemmer hvilke tegnsett som brukes, for eksempel æ, ø og å, og viewport gjør at nettsiden tilpasser seg skjermstørrelsen
- link = kobler HTML dokumentet til en ekstern CSS fil
- script = kobler HTML dokumentet til en ekstern JavaScript fil som inneholder funksjonalitet
- body = inneholder alt innhold som vises på nettsiden

## Semantiske strukturelementer

- header = introduksjonsinnhold, ofte toppen av nettsiden
- main = hovedinnholdet på nettsiden
- footer = avsluttende informasjon, ofte nederst på - nettsiden
- section = brukes til å dele opp innhold i seksjoner
- nav = inneholder navigasjon, for eksempel lenker til andre sider eller deler av siden

## Innholdselementer

- h1-h6 = overskrifter, der h1 er viktigst og h6 er minst viktig
- p = paragraftekst
  ol og ul med li = ordnet eller uordnet liste med listepunkter
- img = viser et bilde, src er bildeadressen og alt er alternativ tekst som beskriver bildet

## Tekstformatering og betoning

- br = inline element som lager et linjeskift i teksten.
- strong og b = begge gjør teksten fet, men strong betyr at innholdet er viktig
- em og i = begge gjør teksten kursiv, men em betyr at innholdet har ekstra betoning

# CSS

## Struktur

En CSS-regel bestar av en selector og en eller flere declarations.

### Selector

Selector velger hvilket HTML-element vi vil style.

Eksempler:

- header = alle header elementer
- .header = alle elementer med klasse-navnet header
- #header = elementet med id-navnet header

### Declaration block

Declaration block er det som star inni {} og inneholder all stylingen for selektoren.

### Declaration

Declaration er en enkelt regel inni blokken, skrevet som property: value;

---

## Flexbox

Flexbox er en plasseringsmetode i CSS som brukes for å plassere elementer på en fleksibel mate.

### Grunnleggende egenskaper

- display: flex;  
  aktiverer flexbox på et foreldre-element

- flex-direction  
  bestemmer retningen barna skal plasseres i, for eksempel rad eller kolonne

- justify-content  
  styrer fordelingen langs hovedaksen

- align-items  
  styrer fordelingen langs tverraksen

- gap  
  lager mellomrom mellom elementene

### Viktig prinsipp

Flexbox brukes på foreldre-elementet.

Det er barna inni forelderen som blir plassert med flex.

## Media query

Media query brukes for å endre CSS basert på skjermstørrelse eller type enhet.

Dette brukes ofte for å lage responsive nettsider som fungerer pa mobil, nettbrett og desktop.

En media query setter en betingelse. Hvis skjermen oppfyller betingelsen, blir CSS-reglene brukt.

Vanlig bruk:

- max-width = gjelder for skjermer som er mindre enn en bestemt bredde
- min-width = gjelder for skjermer som er storre enn en bestemt bredde

### Viktig prinsipp:

Media query brukes ofte for å endre layout, for eksempel:

- endre flex-direction
- justere bredder
- endre font-size
- flytte eller skjule elementer
