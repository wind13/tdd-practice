import { NumSound, matchSound } from "./num-sound";

export class NumSoundGame {
  rules: NumSound[];

  static init(rules: NumSound[]) {
    return new NumSoundGame(rules)
  }
  constructor(rules: NumSound[]) {
    this.rules = rules
  }

  sound(n:number) {
    const s = this.rules.reduce((p, c) => p + matchSound(c, n), '')
    return s === '' ? s + n : s;
  }
}
