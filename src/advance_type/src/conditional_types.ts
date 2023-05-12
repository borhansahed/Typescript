
// condition types

type a = string;
type b = a extends string ? string :null

// nested types
type c1 = a extends null ? number : a extends string ? string : a extends null? number : never;


type Sahed = {
 wife1: string;
 wife2: string;
}

type CheckProperty<T, K> = K extends keyof T ? true : false;

type CheckWife1 = CheckProperty<Sahed, "wife1">;