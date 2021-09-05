import { isRelated } from "./common";

export type NumSound = {
  num: number;
  val: string;
};

export function matchSound(rule:NumSound, n: number) {
  return isRelated(rule.num, n) ? rule.val : ''
}

export const example3: NumSound[] = [
  { num: 3, val: 'Fizz' }
];

export const example35: NumSound[] = [
  { num: 3, val: 'Fizz' },
  { num: 5, val: 'Buzz' }
];

export const example37: NumSound[] = [
  { num: 3, val: 'Fizz' },
  { num: 7, val: 'Mezz' }
];

export const example357: NumSound[] = [
  { num: 3, val: 'Fizz' },
  { num: 5, val: 'Buzz' },
  { num: 7, val: 'Mezz' }
];
