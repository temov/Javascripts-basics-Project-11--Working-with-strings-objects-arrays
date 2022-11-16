var broj1,broj2;
function Sum(broj1,broj2){
var result = broj1 + broj2;
    if( !isNaN(result)) {
        console.log(result);
 }else{
    alert("Внесете два броеви");  
 }
}
Sum(5,5);