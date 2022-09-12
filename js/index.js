// console.log ("¡Estoy listo!")

// Iteration 1: Names and Input
const hacker1 = "Pedro";
console.log(`El nombre del conductor es ${hacker1}`);
const hacker2 = "Enrique";
console.log(`El nombre del navegador es ${hacker2}`);

//
// Iteration 2: Conditionals

console.log(`longitud de ${hacker1} es igual a ${hacker1.length}`);
console.log(`longitud de ${hacker2} es igual a ${hacker2.length}`);

if (hacker1.length > hacker2.length){
    console.log(`hacker1 ${hacker1} tiene ${hacker1.length-hacker2.length} char mas `);
 } else if (hacker1.length < hacker2.length){
    if(hacker1.length-hacker2.length > 0){  // Control de resta negativa. 
        console.log(`Parece que haker2 ${hacker2} tiene mas char ${hacker1.length-hacker2.length} char `);
    } else{
        console.log(`Parece que haker2 ${hacker2} tiene ${hacker2.length-hacker1.length} char mas `);
    }
 } else if(hacker1.length === hacker2.length){
    console.log(`hacker1 tiene ${hacker1.length} char y hacker2 tiene ${hacker2.length} char por lo que tienen igual valor`);
 }


// // Iteration 3: Loops 

// let resultHacker1 = "";

// for (i=0; i < hacker1.length; i++){
//     resultHacker1 += hacker1[i].toUpperCase()+" ";
// }
// console.log(resultHacker1);


// let hacker2DelReves = "";
// for (x=hacker2.length-1; x>=0; x--){
//     hacker2DelReves += hacker2[x];
// }
// console.log(hacker2DelReves);


// let a = hacker1.toUpperCase();
// let b = hacker2.toUpperCase();

// if ( a < b ){
//     console.log("El nombre del conductor va primero");

// }else if(a > b){
//     console.log("Yo, el navegador va primero definitivamente");

// }else if(a === b){
//     console.log("¿Que? ¿Los dos tienen el mismo nombre?")

// }



