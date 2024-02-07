function checkName(name){
    if (typeof name === 'string'){
        const sampleName = name.split('');
   
        const letters = 'aeiouwy';
      
        const lastWord = sampleName[sampleName.length-1];
        
    
        if(letters.includes(lastWord)){
            return 'GOOD NAME';
        }else{
            return "BAD NAME";
        }
    
    }else{
        return "INVALID INPUT"
    }
    
}


const output = checkName('sayed');
console.log(output);
