function getVowels(str){
    const m = str.match(/[aeiou]/gi);
   
    if(m === null){ 
        console.log(m);
        return 0;
    }
    return m .length;
}
console.log(getVowels("seeing"));
