let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, "a", true];
let h: [string, number, boolean] = ["a", 3, false];

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {
  kredi,
  havalae,
  eft,
}

let kredi = Payment.kredi;

console.log(kredi);
console.log(Payment.havalae);
console.log(Payment.eft);
