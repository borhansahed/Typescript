
type Noob = {
    name:string
}

type Junior = {
    name:string,
    expert: string
}

type NextLevel = Junior & {
    level:string,
    experience: number
}

const myLevel:Noob | Junior ={
    name:"Sahed",
    expert:"javascript"
}
const level:NextLevel ={
    name:"Sahed",
    expert:"javascript",
    level:"junior",
    experience:1
}

// enum
enum Day {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  let today: Day = Day.Monday ;
  console.log(`Today is ${Day[today]}`);
 