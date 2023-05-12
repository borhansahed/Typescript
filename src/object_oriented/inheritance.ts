class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound():void{
    console.log("Hello");
  }
}


class Cat extends Animal{
    constructor(name:string, species:string){
      super(name,species)
    }
    // sound(): void {
    //     console.log("cat")
    // }
}

class Dog extends Animal{
    constructor(name:string, species:string){
      super(name,species)
    }
    // sound(): void {
    //     console.log("Dog")
    // }
}

const cat = new Cat("Jimmy", 'cat');
const dog = new Dog("Jhoro", 'dog');

console.log(cat.name)
console.log(dog.name)

cat.sound();
dog.sound()