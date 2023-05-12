let emni:any;

emni = "Next level development";
(emni as string).length; // one way of type assertion
<string>emni.length; // second way of type assertion


// type assertion in function

function convertStringToNumber(num:number| string):number|string{

  if(typeof(num) === 'string'){
     const value = parseInt(num);
     return value
  }
    return num;
}

const newValue = convertStringToNumber('3') as number;
console.log(typeof(newValue))

