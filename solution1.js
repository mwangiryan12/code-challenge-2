function swap(str){
    //convert the string into an array of characters
let newTxt='';
str.split('').map(e => {
    if (e == e.toUpperCase()) { // check is characters is in uppercase
        newTxt += e.toLowerCase();// if uppercase convert to lower case 
    } else { // if lowercase convert into uppercase
        newTxt += e.toUpperCase();
    }
}); // convert the array of characters back to a srting and return
return newTxt;
}


console.log(swap('The Quick Brown Fox')); // tHE qUICK bROWN fOX