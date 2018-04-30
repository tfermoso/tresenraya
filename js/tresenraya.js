window.onload=function(){
    var turno=true;
    var juego=["","","","","","","","",""];
    var el=document.getElementById("body");
    el.setAttribute("style","height:"+window.innerHeight+"px");

    var celdas=document.getElementsByClassName("celda");
    for (var celda of celdas) {
       celda.onclick=function(){
           if(turno){
            this.innerHTML="x";
            turno=false;
            juego[this.id]="x";
           }else{
            this.innerHTML="o";
            turno=true;
            juego[this.id]="o";
           }
          comprobar(juego);
       }
    }
}

function comprobar(juego){
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }
    if((juego[0]==juego[1])&&(juego[1]==juego[2])&&juego[0]!=""){
        alert("ha ganado: "+juego[0]);
    }

    var empate=true;
    for (var ele of juego) {
        if(ele==""){
            empate=false;
        }
    }
    if(empate){
        alert("empate");
    }
    

}

