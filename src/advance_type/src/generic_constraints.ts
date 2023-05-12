// constraints Generic

interface MandatoryType {name:string,age:number}

const addToMyCrushMind = <T extends MandatoryType>(myInfo:T) =>{
    const crushName = "ileana D'cruz";
    const newValue = {...myInfo, crushName};
    return newValue;

}

interface MyInfoI{
    name:string,
    age:number,
    salary:number
}
const myInfo:MyInfoI = {
    name:"sahed",
    age:21,
    salary:0
}

const result2 = addToMyCrushMind<MyInfoI>(myInfo);

// console.log(result2)

// Constraints Keyof

type PersonType = {
    name:string,
    age:number,
    salary:number
}

type newType = "name" | "age" | "salary";  // manually korlam;

const a:newType = 'age';

type newTypeUsingKeyof = keyof PersonType;

const b:newTypeUsingKeyof = 'name';


function getProperty<X,Y extends keyof X>(obj:X, key:Y){
    return obj[key];
}

const result3 = getProperty({name:"sahed", age:21}, "age"); 
console.log(result3)