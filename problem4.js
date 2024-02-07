

function password(myObj) {
   let names = myObj.name;
   let bdate = myObj.birthYear;
   let website = myObj.siteName;
   let pass = website+'#'+names+'@'+bdate;
 

    let propLen = Object.keys(myObj).length;
    

    let textLen = bdate.toString().length;

    if(textLen<4 || propLen < 3){
        return 'invalid'
    }else{
    return pass;
    }
}





const called = password({ name: 'rahat', birthYear: 2004, siteName: 'Facebook'});

console.log(called);