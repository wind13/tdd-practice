import { example357, matchSound } from "./num-sound";

export function fizzbuzz(n:number) {
  const s = example357.reduce((p, c) => p + matchSound(c, n), '')
  return s === '' ? s + n : s;
}

for (let i = 0; i < 100; i++) {
  // console.log(fizzbuzz(i));
}