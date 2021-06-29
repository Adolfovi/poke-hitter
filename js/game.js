// variables

var randomoption;
var playeroption;
var points=0;
var timer = 30;

// fin de variables


// 0 red
// 1 green

// funcion que hace que el timer se reste -1 cada segundo
function muevetimer(){

    
    document.getElementById('time').innerHTML = timer; 
    timer = timer - 1;

    if(timer === 0){
            alert("Has hecho: " + points + " puntos!!");
            // reinicia la web
            location.reload();

    }
    

}

function letsgo(){
        randomoption = Math.floor(Math.random()*2);
        
        
    if(randomoption == 0){
        document.getElementById('option-image').src= "img/crojo.png";
        document.getElementById('score').innerHTML = "Score: " + points;
        setInterval("muevetimer()", 1000);
        
        
        
    }

    if(randomoption == 1){
        document.getElementById('option-image').src= "img/cverde.png";
        document.getElementById('score').innerHTML = "Score: " + points;
        setInterval("muevetimer()", 1000);
        }

    


}


function isred(){
    
    playeroption = 0;

   /* if(randomoption== 0){
        document.getElementById('option-image').src= "img/crojo.png";
    }

    if(randomoption== 1){
        document.getElementById('option-image').src= "img/cverde.png";
    }
*/
    if(randomoption== 0 && playeroption == 0){
    points= points+2;
    document.getElementById('score').innerHTML = "Score: " + points;
    randomoption = Math.floor(Math.random()*2);
    if(randomoption== 0){
        document.getElementById('option-image').src= "img/crojo.png";
    }

    if(randomoption== 1){
        document.getElementById('option-image').src= "img/cverde.png";
    }
    
    }

    if(randomoption== 1 && playeroption == 0){
        points= points-2;
        document.getElementById('score').innerHTML = "Score: " + points;
        
        
        }

        if(randomoption== 1 && playeroption == 1){
            points= points+2;
            document.getElementById('score').innerHTML = "Score: " + points;
            randomoption = Math.floor(Math.random()*2);

            if(randomoption== 0){
                document.getElementById('option-image').src= "img/crojo.png";
            }
        
            if(randomoption== 1){
                document.getElementById('option-image').src= "img/cverde.png";
            }
            
            }
            if(randomoption== 0 && playeroption == 1){
                points= points-2;
                document.getElementById('score').innerHTML = "Score: " + points;
                
                
                }
        
}



function isgreen(){
    playeroption = 1;
   
   
   /*
   
    if(randomoption== 0){
        document.getElementById('option-image').src= "img/crojo.png";
    }

    if(randomoption== 1){
        document.getElementById('option-image').src= "img/cverde.png";
    }
*/
    if(randomoption== 0 && playeroption == 1){
    points= points-2;
    document.getElementById('score').innerHTML = "Score: " + points;
    

    
    }

    if(randomoption== 1 && playeroption == 0){
        points= points-2;
        document.getElementById('score').innerHTML = "Score: " + points;
        
    
        
        }
    

    if(randomoption== 1 && playeroption == 1){
        points= points+2;
        document.getElementById('score').innerHTML = "Score: " + points;
        randomoption = Math.floor(Math.random()*2);
        if(randomoption== 0){
            document.getElementById('option-image').src= "img/crojo.png";
        }
    
        if(randomoption== 1){
            document.getElementById('option-image').src= "img/cverde.png";
        }
        
        }
        
        
        
        if(randomoption== 0 && playeroption == 0){
            points= points+2;
            document.getElementById('score').innerHTML = "Score: " + points;
            randomoption = Math.floor(Math.random()*2);
            if(randomoption== 0){
                document.getElementById('option-image').src= "img/crojo.png";
            }
        
            if(randomoption== 1){
                document.getElementById('option-image').src= "img/cverde.png";
            }
            
            }
        
        

}









function help(){
    alert("Clickea en el color correcto todo lo que puedas hasta\nque se acabe el tiempo.\nAciertos +2 Puntos\nFallos -2 Puntos");



}