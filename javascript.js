
/*Pontszámolás*/
var pont = 0;
function bekuldes(){
    if (document.getElementById("nev").value == "" || document.getElementById("email").value == ""){
        alert(`Nem töltötted ki valamelyik kötelező mezőt (név,email)`);
    }
    else{
        if(document.getElementById("release").value == "2015-12"){
            pont=pont+1;
        }
        if(document.getElementById("operatorint").value == 20){
            pont=pont+1;
        }
        if(document.getElementById("pc").checked && document.getElementById("xb1").checked && document.getElementById("ps4").checked){
            pont=pont+1
        }
        if(document.getElementById("ev").value == 8 && document.getElementById("szezon").value == 4){
            pont=pont+1;
        }
        if(document.getElementById("genre").selectedIndex == 3){
            pont=pont+1;
        }
        if(document.getElementById("h").checked){
            pont=pont+1;
        }
        if(document.getElementById("defu").checked){
            pont=pont+1;
        }
        if(document.getElementById("map").selectedIndex == 2){
            pont=pont+1;
        }
        if(document.getElementById("operator").selectedIndex == 3){
            pont=pont+1;
        }
        if(document.getElementById("fegyver").selectedIndex == 1){
            pont=pont+1
        }
        if(document.getElementById("favop").value != ""){
            pont=pont+1
        }
        if(pont<8){
            alert(`Összesen ${pont} pontot értél el, ami még nem elég a pólóhoz`)
        }
        if(pont>7){
            window.location.href = 'nyeremeny.html';
        }
        pont = 0
        }
    }

/*Rendelés ellenőrzés*/
const DatumInput = document.getElementById('datum').value;
const MaiNap = new Date().getTime()
const bedatum = new Date(DatumInput);
const bedatumtime = bedatum.getTime();
function rendeles(){
    if(document.getElementById("cim").value != "" || document.getElementById("datum").value != "" ){
        alert(`A termék megrendelésre került`);
        window.location.href = 'index.html';
    }
    else{
        alert('Az egyik kötelező adat hiányzik');
    }
}