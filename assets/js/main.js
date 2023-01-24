console.log("test?");

/* 
Frage

mit indexOf

Variable txt
    
Suche Position
    h
    Earth
    Moon
*/


const txt = "How inappropriate to call this planet Earth, when it is Ocean."
console.log(txt);
console.log(txt.length); // 62 Zeichen

console.log(txt.indexOf("h")); // 27   inkl. 0 = 28 Zeichen Index Positon 27 = h Index Position 0 = H
console.log(txt.charAt(27)); // h

console.log(txt.indexOf("Earth")); // 38
console.log(txt.charAt(38)); // E 

console.log(txt.indexOf("Moon")); // -1     -1 = heißt es kommt nicht vor