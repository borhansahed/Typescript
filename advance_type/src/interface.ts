
interface IUser {
    name: string,
    roll: number
}

// here same name interface marge each other
interface IUser{
    name: string,
    roll: number,
    role: string 
}

// i can extends interface 

interface ExtendsUser extends IUser{
    role:string
}

const user:IUser ={
    name: "sahed",
    roll:3,
    role:"Web Developer"
}


interface RollArray{
 [index:number] : number
}

const roll:RollArray =[1,3,4];