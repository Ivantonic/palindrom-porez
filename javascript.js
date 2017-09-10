// Najveci Broj u array-u

// var niz = [23, 43, -8, 77, 0, 23, 15];
// var najveciBroj = 0;

// for (var i=0; i<=najveciBroj; i++){
//     if (niz[i]>najveciBroj) {
//         var najveciBroj=niz[i];
//     }
// }

// console.log(najveciBroj);

//CENE ***PRVI ZADATAK***

// zelim da se sve vrednosti niza cene uporedjujem sa brojem 50,
// if vrednost manja od 50, +18%
// else vrednost +8%

function prviZadatak() {
var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var porez18, porez8, konacnaCena, cenaSkracena;

//indeks je 0, ako je manji od broja vrednosti varijable cene, +1 za indeks
for (var i=0; i<cene.length; i++) {
// proveri da li je vrednost iz niza veca od 50, ako jeste saberi sa 18% svoje vrednosti
	if (cene[i]>50) {
		porez18 = 18 / 100 * cene[i];
		konacnaCena = cene[i] + porez18;
		cenaBezSkracena = konacnaCena.toFixed(2);
		console.log('Za proizvod sa cenom od ' + cene[i] + '€ ' + '+ porez od 18% je ' + cenaBezSkracena + '€')
		document.getElementById('container').innerHTML += 'Za proizvod sa cenom od ' + cene[i] + '€ ' + '+ porez od 18% je ' + cenaBezSkracena + '€<br>';
	} else {
// ako je cena bilo sta drugo (manja od 50), saberi sa 8% svoje vrednost
		porez8 = 8 / 100 * cene[i];
		konacnaCena = cene[i] + porez8;
		cenaBezSkracena = konacnaCena.toFixed(2);
		console.log('Za proizvod sa cenom od ' + cene[i] + '€ ' + '+ porez od 8% je ' + cenaBezSkracena + '€')
		document.getElementById('container').innerHTML += 'Za proizvod sa cenom od ' + cene[i] + '€ ' + '+ porez od 8% je ' + cenaBezSkracena + '€<br>';
	}
}
}

//PALINDROM ***DRUGI ZADATAK***

//povezi s dugmicem
function drugiZadatak(){
var test = checkPalindrome(prompt());
}

function checkPalindrome(string){

    var regeks = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''); //smanji velika slova i ukloni sve sem malih slova
	var brojSlova = 0;
// proveri dal je string prazan
	if(regeks==="") {
	alert("Unesi nesto.");
	return false;
	}
// proveri dal je string paran ili neparan
	if ((regeks.length) % 2 === 0) {
	brojSlova = (regeks.length) / 2;
	} else {
// ako je duzina stringa 1, postaje palindrom
		if (regeks.length === 1) {
		alert("Unos je palindrom.");
		return true;
		} else {
// ako je duzina stringa neparna skloni srednji karakter
			brojSlova = (regeks.length - 1) / 2;
		}
	}
// loop koji proverava prvi i poslednji karakter pa prelazi na sledeci
	for (var x = 0; x < brojSlova; x++) {
// uporedi karaktere i izbaci ako su false
		if (regeks[x] != regeks.slice(-1-x)[0]) {
		alert("Unos nije palindrom.");
		return false;
		}
	}
	alert("Unos je palindrom.");
	return true;
}

// Neuspeli Palindrom :(

// function neuspeliPalindrom () {

// var unesiRec = prompt('Unesi neku rec');
// var nekaRec = palindromeTest(unesiRec.toLowerCase());

// function palindromeTest(string) {
// 	var sliced = string;
// 	for (i=0; i<sliced.length; i++) {
// 		if (sliced[0] == sliced[sliced.length-1]) {
// 			var sliced = sliced.substr(1).slice(0, -1);
// 			if (sliced.length == 0 || 1) {
// 				console.log('is a palindrome')
// 			} else {
// 				console.log('is not a palindrome')
// 			}
// 		} else {
// 			console.log('is not a palindrome')
// 		}
// 	}
// }
// }

//--------------------------------