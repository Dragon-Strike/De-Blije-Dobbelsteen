var woorden5 = ["boter", "kleur", "dalen", "jeugd", "worst", "lepel",
    "flora", "stoep", "fiets", "hamer", "droom", "glans", "jagen",
    "kaart", "kater", "kamer", "motor", "meeuw", "regio", "radio",
    "vlees", "zwaar", "zweet", "dreun", "buren", "avond"
];
var woorden6 = ["pagina", "bladen", "bedden", "cactus",
    "hoogte", "binnen", "buiten", "flesje", "gereed",
    "eieren", "banaan", "bureau", "duimen", "fysiek",
    "piloot", "risico", "toilet", "zielig", "woning", "tomaat"
];
var woorden7 = ["uitgang", "typisch", "penning", "ontdekt", "potlood",
    "koelkast", "alcohol", "dochter", "fornuis", "grenzen", "goudvis",
    "jodelen", "kenmerk", "massage", "overval", "prinses", "seizoen",
    "toerist", "uniform", "vroeger", "tijgers", "wortels"
];
var woorden8 = ["document", "databank", "bewerken", "computer",
    "prikbord", "driehoek", "badkamer", "presteer", "tevreden",
    "tandarts", "wandelen", "zonlicht", "bioscoop", "contract", "energiek",
    "groenten", "garnalen", "hopelijk", "juwelier", "kalender", "minister"
];
var woorden9 = ["programma", "blijkbaar", "eventueel", "oordopjes",
    "toevoegen", "woonkamer", "draadloos", "evenement", "hypotheek", "knooppunt",
    "luisteren", "menukaart", "medicatie", "ontkennen", "producent", "provincie",
    "rechthoek", "schatkist", "toespraak", "vliegtuig", "woonkamer", "chauffeur"
];

var nustring = '';
nustring = prompt('hoeveel letters heeft uw woord? (min 5 - max 9)');

switch (nustring) {
    case '5':
        nustring = woorden5[(Math.random() * woorden5.length).toFixed(0)];
        console.log('5 letterig woord gekozen')
        break;
    case '6':
        nustring = woorden6[(Math.random() * woorden6.length).toFixed(0)];
        console.log('6 letterig woord gekozen')
        break;
    case '7':
        nustring = woorden7[(Math.random() * woorden7.length).toFixed(0)];
        console.log('7 letterig woord gekozen')
        break;
    case '8':
        nustring = woorden8[(Math.random() * woorden8.length).toFixed(0)];
        console.log('8 letterig woord gekozen')
        break;
    case '9':
        nustring = woorden9[(Math.random() * woorden9.length).toFixed(0)];
        console.log('9 letterig woord gekozen')
        break;
    default:
        location.reload();
}

var letters = '';
var woord = 0;
var tekst = document.getElementById("letters");
var Input = document.getElementById("keuzeInput");
var goedfout = document.getElementById("goedfout");
var keuzeInput;

document.cookie = "welGeraden=0";
document.cookie = "nietGeraden=0";

//; expires=Thu, 01 Jan 2020 00:00:00 UTC; path=/;

antwoord = nustring;
console.log(`Typ "antwoord" hieronder voor het antwoord`);
for (var k = 0; k < 1; k++) {
    letters += nustring.charAt(0);
}
for (var x = 0; x < (nustring.length) - 1; x++) {
    letters += '-';
}

document.getElementById('letters').innerHTML = (letters);

function keuze() {
    keuzeInput = Input.value.toLowerCase();
    if (keuzeInput == nustring) {
        goed();
    } else if (keuzeInput == '') {
        goedfout.innerHTML = 'Je bent vergeten iets te typen';
    } else {
        fout();
    }

    if (document.getElementById('geraden1').innerHTML == '-----') {
        document.getElementById('geraden1').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden1').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
        }

    } else if (document.getElementById('geraden2').innerHTML == '-----') {
        document.getElementById('geraden2').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden2').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
        }

    } else if (document.getElementById('geraden3').innerHTML == '-----') {
        document.getElementById('geraden3').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden3').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
        }

    } else if (document.getElementById('geraden4').innerHTML == '-----') {
        document.getElementById('geraden4').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden4').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
        }

    } else if (document.getElementById('geraden5').innerHTML == '-----') {
        document.getElementById('geraden5').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden5').innerHTML != nustring) {
            alert('je hebt alle pogingen gebruikt!');
            location.reload();
        } else {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
        }
    }
}

function goed() {
    goedfout.innerHTML = 'dit is goed';
    tekst.innerHTML = nustring;

    document.getElementById('opnieuw').style.display = 'initial';
}

function fout() {
    letters = '';
    goedfout.innerHTML = 'dit is fout';
    for (var i = 0; i <= nustring.length; i++) {
        if (keuzeInput.charAt(i) == nustring.charAt(i)) {
            letters += nustring.charAt(i);
        } else {
            letters += '-';
        }
    }
    tekst.innerHTML = letters;
}

function opnieuw() {
    location.reload();
}

function ziecookie() {
    alert('no u');
}