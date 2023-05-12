
type GenericArray<T> = Array<T>;

const rollNumber: GenericArray<number> = [1,3,4];
const rollNumbers:GenericArray<string> = ['2','54'];



type objectType = {name:string, roll:number};

const obj2:GenericArray<{name:string, roll:number}> = [{
    name:'sahed',
    roll:3
}]


// tuple Generic

interface CrushI{
    name:string,
    age:number
}
type GenericTuple<X,Y> = [X,Y];

const myLove:GenericTuple<string, number> = ["ileana", 37];

const rolls:GenericTuple<CrushI, string>=[{
    name:"Katrina",
    age:40
},
"sahed"
]

// Generic Interface;

// you can give default parameter value in generic parameters
interface MyCrush<T,U = undefined> {
    name:string,
    husband:T,
    age?:U
}

const myFirstLove:MyCrush<string> = {
    name:"Katrina",
    husband:"Sahed"
}

console.log(myFirstLove)





