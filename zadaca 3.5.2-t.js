
var nizaKorisnici = [
    {name:"Petar",surName:"Petkov"},
    {name:"Zoran",surName:"Stojkov"}
];

function PrebaruvajKorisnik(){
var result;
for (var i = 0; i < nizaKorisnici.length; i++) { 
  if (nizaKorisnici[i].name === "Petar" && nizaKorisnici[i].surName === "Petkov" ) { 
    result = nizaKorisnici[i];
      console.log(result);
  } 
}
}
nizaKorisnici.logDetails = PrebaruvajKorisnik;
nizaKorisnici.logDetails();



