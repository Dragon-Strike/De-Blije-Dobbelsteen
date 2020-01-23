var woorden5 = ["boter", "kleur", "dalen", "jeugd", "worst", "lepel",
    "vloer", "stoep", "fiets", "hamer", "droom", "glans", "jagen",
    "kaart", "kater", "kamer", "motor", "meeuw", "regio", "radio",
    "vlees", "zwaar", "zweet", "dreun", "buren", "avond"
];
var woorden6 = ["pagina", "bladen", "bedden", "cactus",
    "hoogte", "binnen", "buiten", "flesje", "gereed",
    "eieren", "banaan", "bureau", "duimen", "fysiek",
    "piloot", "risico", "toilet", "zielig", "woning", "tomaat"
];
var woorden7 = ["uitgang", "typisch", "penning", "ontdekt", "potlood",
    "alcohol", "dochter", "fornuis", "grenzen", "goudvis",
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
        break;
    case '6':
        nustring = woorden6[(Math.random() * woorden6.length).toFixed(0)];
        break;
    case '7':
        nustring = woorden7[(Math.random() * woorden7.length).toFixed(0)];
        break;
    case '8':
        nustring = woorden8[(Math.random() * woorden8.length).toFixed(0)];
        break;
    case '9':
        nustring = woorden9[(Math.random() * woorden9.length).toFixed(0)];
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
var c_gokken;

for (var k = 0; k < 1; k++) {
    letters += nustring.charAt(0);
}
for (var x = 0; x < (nustring.length) - 1; x++) {
    letters += '-';
}

document.getElementById('letters').innerHTML = (letters);

console.log(nustring);

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
            c_gokken = "aantal pogingen: " + 1;
            saveScore();
        }

    } else if (document.getElementById('geraden2').innerHTML == '-----') {
        document.getElementById('geraden2').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden2').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
            c_gokken = "aantal pogingen: " + 2;
            saveScore();
        }

    } else if (document.getElementById('geraden3').innerHTML == '-----') {
        document.getElementById('geraden3').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden3').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
            c_gokken = "aantal pogingen: " + 3;
            saveScore();
        }

    } else if (document.getElementById('geraden4').innerHTML == '-----') {
        document.getElementById('geraden4').innerHTML = (keuzeInput);
        document.getElementById('keuzeInput').value = "";

        if (document.getElementById('geraden4').innerHTML == nustring) {
            document.getElementById('kz').style.display = 'none';
            alert('je hebt het woord geraden!');
            c_gokken = "aantal pogingen: " + 4;
            saveScore();
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
            c_gokken = "aantal pogingen: " + 5;
            saveScore();
        }
    }
}

function goed() {
    goedfout.innerHTML = 'dit is goed';
    tekst.innerHTML = `<span class="goed">${nustring}</span>`;

    document.getElementById('opnieuw').style.display = 'initial';
}

function fout() {
    letters = '';
    goedfout.innerHTML = 'dit is fout';
    for (var i = 0; i <= nustring.length; i++) {
        if (nustring.includes(keuzeInput.charAt(i))) {
            if (keuzeInput.charAt(i) === nustring.charAt(i)) {
                letters += `<span class="goed">${nustring.charAt(i)}</span>`;
            } else {
                letters += `<span class="in-woord">${keuzeInput.charAt(i)}</span>`;
            }
        } else {
            letters += `<span class="fout">${keuzeInput.charAt(i)}</span>`;
        }
    }
    let lettersArray = letters.split('');
    if (lettersArray.length > nustring.length) {
        lettersArray.pop();
        letters = lettersArray.join('');
    }
    tekst.innerHTML = letters;
    keuzeInput = letters;
}

function saveScore() {
    var c_date = new Date();
    c_date.setMonth(c_date.getMonth() + 5);
    var c_expires = "; expires=" + c_date.toGMTString();

    var c_name = prompt("wat is je naam?");

    document.cookie = c_name + "=" + c_gokken + c_expires + "; path=/";
}

function opnieuw() {
    location.reload();
}

function zieHighScore() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1; i <= theCookies.length; i++) {
        aString += theCookies[i - 1] + "\n";
    }
    alert(aString);
}