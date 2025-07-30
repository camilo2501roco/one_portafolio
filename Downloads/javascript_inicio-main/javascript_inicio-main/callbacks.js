



// ejercicio #1 
/*
function saludarDespuesDe (nombre,callback,){
    setTimeout (function( ){
        callback(nombre);

    },  2000);
}

function mostrarSaludo(nombre){
    console.log(`hola ${nombre} como estas?`);
    
}


saludarDespuesDe("Ana", mostrarSaludo);

*/


// desafio extra
/*
const prompt = require('prompt-sync') ();


function saludarDespuesDe(nombre,callback,tiempoSegundos){
    setTimeout (function() {
        callback(nombre);
    }, tiempoSegundos * 1000);
}
 function mostrarSaludo(nombre){
    console.log(` hola, ${nombre} como estas?`);
    
 }
const nombreUsuario = prompt ("como te llamas?");
const tiempo= prompt ("cuantos segundos deseas para ver el saludo?")
 

const tiempoSegundos = Number(tiempo);


saludarDespuesDe(nombreUsuario,mostrarSaludo,tiempoSegundos)


*/










// practica extra del extra


/*
function saludarDespuesDe(nombre,callback,tiempoSegundos){
    setTimeout(function () {
        callback(nombre);

    }  , tiempoSegundos * 1000);
}

function mostrarSaludo(nombre){
    console.log(` hola ${nombre} como estas?`);
    
}


const amigos = [
    { nombre : "Ana" , espera:2},
    {nombre : "carlos", espera: 4},

    {nombre : "camilo" , espera: 1}

];



amigos.forEach(function (amigo) {
    saludarDespuesDe(amigo.nombre,mostrarSaludo,amigo.espera);
}
);


*/







// ejercicio #2

/*
function prepararPancakes (callback){
    console.log("prepaarando pancakes");
 
    


    setTimeout(function() {
        callback("pancakes listos");
    } , 3000);
}

function servirDesayuno (mensaje){
    console.log(mensaje);
    
}

prepararPancakes(servirDesayuno);

*/




//extra 


/*
function prepararDesayuno ( callback) {
    console.log("preparando pancakes");



    setTimeout( function()  {
        callback ("pancakes listos para servir ");
        servirJugo();


    }, 3000 );
    
}

function servirDesayuno (mensaje){
 console.log(mensaje);
 
}


function servirJugo () {
    console.log("preparando juo de naranja");


    setTimeout ( function () {
        console.log("jugo de naranja servido");
        
    }, 2000);
    
}

prepararDesayuno(servirDesayuno)


*/





/* desafio extra del extra




function prepararPancakes(callback) {


    console.log("preparando pancakes");
    

      

    setTimeout( () => {
        console.log("pancakes listos");
        callback();
        
    }, 3000);
}


function servirJugo(callback){
    console.log("preparando jugo de naranja");
    


    setTimeout(() =>{
        console.log("jugo sevido");
        callback();
    }, 2000);
}


function tostarPan (callback){
    console.log("tostando pan con mantequilla ");
 
    
    setTimeout(() => {

        console.log("pan listo ");
        callback ();
    }, 1500);
}


function desayunoCompleto (){

    prepararPancakes( () =>  {



servirJugo ( () => {



    tostarPan (() => {
console.log("desayuno completo, buen provecho");

    });
});

 });
}

desayunoCompleto();

*/







// EJERCICIO 3


  function  descargarArchivo (nombreArchivo, callback){

console.log(`descargar archivo ${nombreArchivo}...`);
setTimeout( () =>{
    const mensaje = ` archivo ${nombreArchivo} descargado ` ;
    callback (mensaje);

} , 4000); 

  }

/*

descargarArchivo("mi_archivo.txt", function(mensaje) {
    console.log(mensaje);
});



*/





function procesarArchivo ( mensaje,callcback){
    console.log("procesando archivo...");
    setTimeout( () =>{
        const mensajeprocesado = "archivo procesado correctamente";

        callcback(mensajeprocesado);
     }, 2000);
    
}





