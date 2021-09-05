export function recursionSumMoney(n: number) {
  return sumDayMoney(n, 0)
}

export function remainder(n: number) {
  return (n - 1) % 7 + 1
}

export function divide(n: number) {
  return Math.floor((n - 1) / 7)
}

export function dayMoney(n: number) {
  return remainder(n) + divide(n)
}

export function sumDayMoney(n: number, sum: number): number {
  return (n === 1) ? sum + 1 :
    sumDayMoney(n - 1, sum + dayMoney(n))
}

/**
 * Get the sum money of n days.
 * Strange is i and k use this also works.
 * const i = divide(n)
 * const k = remainder(n)
 * @param n The number input
 * @returns The sum money
 */
export function formulaSumMoney(n: number) {
  const i = Math.floor(n / 7)
  // const k = n % 7
  // n = 7 * i + k
  // return 28 * i + 7 * (i - 1) * i / 2 + k * (k + 1) / 2 + k * i
  // return (2 * 4 * 7 * i + 7 * (i - 1) * i) / 2 + k * (k + 1) / 2 + k * i
  // return (8 * 7 * i + 7 * (i - 1) * i + k * (k + 1)) / 2 + k * i
  // return (8 * 7 * i + 7 * i * i - 7 * i + k * k + k) / 2 + k * i
  // return (7 * 7 * i + k + 7 * i * i + 2 * k * i + k * k) / 2 

  // return (7 * i * (i + 7) + k * (k + 2 * i + 1)) / 2
  // return (n * (i + 7) - k * (i + 7) + k * (k + 2 * i + 1)) / 2
  // return (n * (i + 7) + k * (k + i - 6)) / 2

  // ===== only n, i =====
  // return (n * (i + 7) + (n - 7 * i) * (n - 6 * i - 6)) / 2

  // return (n * (i + 7) + (n - 7 * i) * (n - 7 * i + i - 6)) / 2
  // return (n * (i + 7) + (n - 7 * i)^2 + (n - 7 * i) * (i - 6)) / 2
  // return (n * i + 7 * n + n * n - 7 * i * 2 * n + 49 * i * i + (n - 7 * i) * (i - 6)) / 2
  // return (7 * n + n * n - 13 * i * n + 49 * i * i + n * i - 7 * i * i - 6 * n + 42 * i) / 2
  // return (n + n * n - 12 * i * n + 42 * i * i + 42 * i) / 2
  // return (n + n * n - 12 * i * n + 42 * i * (i + 1)) / 2
  // return (n * n + 13 * n - 12 * n * (i + 1) + 42 * i * (i + 1)) / 2
  // return ((n + 13) * n + (42 * i - 12 * n) * (i + 1)) / 2
  return (n + 13) * n / 2 + (21 * i - 6 * n) * (i + 1)

  // return (6 * 7 * i + n + (n + k) * i + k * k) / 2 
  // return 21 * i + (n + (n + k) * i + k * k) / 2 
  // return 3 * n - 3 * k + (n + (n + k) * i + k * k) / 2 
  // return 3 * n + (n + (n + k) * i + k * k - 6 * k) / 2 

  // ===== only n, k =====
  // return 3 * n + (n + (n + k) * (n - k) / 7 + k * k - 6 * k) / 2 
  // return 3 * n + (n + (n * n - k * k) / 7 + k * k - 6 * k) / 2 
  // return 3 * n + (n + (n * n + 6 * k * k) / 7 - 6 * k) / 2 
  // return 3 * n + ((7 + n) * n + 6 * (k - 7) * k) / 7 / 2 
  // return (3 * 14 * n + (7 + n) * n + 6 * (k - 7) * k) / 14 
  // return ((49 + n) * n + 6 * (k - 7) * k) / 14 
}
