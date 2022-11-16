
var nizaKorisnici = [
    {name:"Petar",surName:"Petkov"},
    {name:"petar",surName:"Stojkov"}
];

function PrebaruvajKorisnik(){
var result;
var ime = "Petar";
for (var i = 0; i < nizaKorisnici.length; i++) { 
  if (nizaKorisnici[i].name.toLowerCase() === ime.toLowerCase()) { 
    result = nizaKorisnici[i];
      console.log(result);
  } 
}
}
nizaKorisnici.logDetails = PrebaruvajKorisnik;
nizaKorisnici.logDetails();



