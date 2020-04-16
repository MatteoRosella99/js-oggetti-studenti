
//variabili
var aggiunta = {}
var studentigroup = [
  {
    nome : "Matteo",
    cognome : "Rosella",
    età : 21
  },
  {
    nome : "Marco",
    cognome : "Rossi",
    età : 19
  },
  {
    nome : "Benjamin",
    cognome : "Assandri",
    età : 25
  },
  {
    nome : "Luna",
    cognome : "Stellare",
    età : 33
  },
]

//scrittura in console di nome-cognome-età
for (var i = 0; i < studentigroup.length; i++) {
  console.log(studentigroup[i].nome);
  console.log(studentigroup[i].cognome);
  console.log(studentigroup[i].età);
}

//inserimento in pagina di nome e cognome
for (var i = 0; i < studentigroup.length; i++) {
  $('.nomi').append("<li><span>" + studentigroup[i].nome + "</span></li>");
  $('.cognomi').append("<li><span>" + studentigroup[i].cognome + "</span></li>");
}

//aggiunta di nuovo studente
$('.butt').click(
  function(){
    var newname = prompt("Inserisci il nome");
    aggiunta.nome = newname;
    var newsurname = prompt("Inserisci il cognome");
    aggiunta.cognome = newsurname
    var newage = prompt("Inserisci l'età");
    aggiunta.età = newage
    studentigroup.push(aggiunta)
    $('.nomi').append("<li><span>" + studentigroup[i].nome + "</span></li>");
    $('.cognomi').append("<li><span>" + studentigroup[i].cognome + "</span></li>");
  }
)
