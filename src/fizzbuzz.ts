import { isRelated } from "./common";

export function fizzbuzz(n: number): string {
  let s = '';
  if (isRelated(3, n)) {
    s += 'Fizz';
  }
  if (isRelated(5, n)) {
    s += 'Buzz';
  }
  if (isRelated(7, n)) {
    s += 'Mezz';
  }
  return s === '' ? s + n : s;
}

for (let i = 0; i < 100; i++) {
  // console.log(fizzbuzz(i));
}