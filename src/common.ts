function isDivBy(d: number, n: number): boolean {
  return n % d === 0;
}
function isContain(d: number, n: number): boolean {
  return ('' + n).indexOf('' + d) > -1;
}
export function isRelated(d: number, n: number) {
  return isDivBy(d, n) || isContain(d, n);
}
