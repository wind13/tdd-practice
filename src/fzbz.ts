import { isRelated } from "./common";
import { NumCall, maps } from "./num-call";

export function mapNumCall(c:NumCall, n: number) {
  return isRelated(c.num, n) ? c.val : ''
}

export function fizzbuzz(n:number) {
  const s = maps.reduce((p, c) => p + mapNumCall(c, n), '')
  return s === '' ? s + n : s;
}

for (let i = 0; i < 100; i++) {
  // console.log(fizzbuzz(i));
}