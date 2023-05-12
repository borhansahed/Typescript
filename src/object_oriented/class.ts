// class Animal{
//     // name:string
//     // sound:string

// // parameter properties
// // typescript compiler set everything
//     constructor(public name:string, public sound:string){}

//     get Data():string{
//         console.log(`${this.name} and ${this.sound}`)
//         return `${this.name} and ${this.sound}`;
//     }
// }

// const animal = new Animal("jacky", "Ghaw Ghaw");
// animal.Data;

function checkTheType(param: unknown): void {
  if (typeof param === "string") {
    console.log(param);
  } else throw new Error("NOt a String type")
  
}

checkTheType("sahed");
