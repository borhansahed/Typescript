
type Crush = {
     name:string,
    age:number,
    profession:string,
    country?:string
}
const crush:Crush = {
    name:"Katrina Kaif",
    age:40,
    profession: "Actress",
    country:"United States"
}

const crush2:Crush ={
    name:"Ileana D'cruz",
    age:37,
    profession: "Actress",
}

// type alias in primitive
type Sahed = string;

const brotherName:Sahed = "MOhammad Borhan Uddin";


// function type alias

type OperationType = (x:number, y:number) => number;
const calculate = (
    num:number, 
    num2:number, 
    operation:OperationType) =>{
   return operation(num, num2);
}

console.log(calculate(19,14, (x,y) => x - y))


