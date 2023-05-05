

type Data = {
  value: number;
}

type B = {
    [key in keyof Data] : string;
}

const t:B = {
    value : "sahed"
}

// Generic
type C<T> = {
    [key in keyof T]: T[key];
}

const area:C<{value:number}> = {value:3}