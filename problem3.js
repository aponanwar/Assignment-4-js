

function deleteInvalids(myArr) {
  
  
if(Array.isArray(myArr)){
    const newArray = myArr.filter(function (value) {
        return !Number.isNaN(value) && value !== undefined && value !== null && typeof value !== 'string' && typeof value !== 'object'});
  return newArray;
}else{
    return 'Invalid Array'
}
    
}

// const myArr = [NaN,1,12,0,-1,undefined];
const myArr = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// const myArr = {num: [ 1 , 2 , 3 ]}
const res = deleteInvalids(myArr);
console.log(res);