console.log ("hola")

let canvas = document.getElementbyID ("line-style-canvas");

let ctx = canvas.getContext ("2d");



// 

let img = document.createElement("img");

img.src = 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg';


img.addEventListener ('load', function() {
    let pattern = ctx.createPattern (img, 'repeat');

    ctx.fillStyle = pattern ;
    ctx.fillreact (0,0,500,500);

});


// DRAWING TEXT 

ctx.font = " 50 px monospace"; 
ctx.filltext ('Ironhackers' , 10 , 150);
ctx. strokeText () ;



let img = document.getElementById('img');

img.src = 'some url'; 



// img 



// video 


// canvas 


let myImg = document.getElementById ('my-image'); 




//// AMINIMATION 


ctx.clearRect ( 0,0, canvas.with , canvas.height) ;

ctx.restore (); // last saved state  . cuando pones esta funcion se restaura el ultimo valor guardado 

/// codepen example Uros Cirkovic 



