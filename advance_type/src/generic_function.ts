

// arrow function

const createArray = (temp:string):string[] =>{

    return [temp]
}

// console.log(createArray("hello"))
// in generic

// const createArray1 = <T>(temp: T):T[] =>{

//     return [temp]
// }

// const result = createArray1<number>(3);
// console.log(result);

// normal function

function createArray3<T>(temp:T):T[]{
    return [temp]
}


// Generic Tuple in function

const createArray1 = <T,U>(temp: T, temp2:U):[T,U] =>{

    return [temp,temp2]
}

const result = createArray1<number,string>(3,"sahed");
// console.log(result);s


