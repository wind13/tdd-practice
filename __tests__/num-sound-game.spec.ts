import { example35, example357, example37 } from "../src/num-sound";
import { NumSoundGame } from "../src/num-sound-game"

export const FIZZ = example357[0].val;
export const BUZZ = example357[1].val;
export const MEZZ = example357[2].val;

test('should have a game class', () => {
  expect(NumSoundGame).toBeDefined()
})

test('should sound correct when given example35', () => {
  expect(NumSoundGame.init).toBeDefined()
  const game = NumSoundGame.init(example35)
  expect(game).toBeDefined()
  expect(game.rules).toEqual(example35)
  expect(game.sound(1)).toBe('1');
  expect(game.sound(2)).toBe('2');
  expect(game.sound(3)).toBe(FIZZ);
  expect(game.sound(5)).toBe(BUZZ);
  expect(game.sound(13)).toBe(FIZZ);
  expect(game.sound(15)).toBe(FIZZ + BUZZ);
  expect(game.sound(25)).toBe(BUZZ);
  expect(game.sound(52)).toBe(BUZZ);
  expect(game.sound(53)).toBe(FIZZ + BUZZ);
  expect(game.sound(73)).toBe(FIZZ);
  expect(game.sound(75)).toBe(FIZZ + BUZZ);
})

test('should sound correct when given example37', () => {
  expect(NumSoundGame.init).toBeDefined()
  const game = NumSoundGame.init(example37)
  expect(game).toBeDefined()
  expect(game.rules).toEqual(example37)
  expect(game.sound(1)).toBe('1');
  expect(game.sound(2)).toBe('2');
  expect(game.sound(3)).toBe(FIZZ);
  expect(game.sound(5)).toBe('5');
  expect(game.sound(13)).toBe(FIZZ);
  expect(game.sound(15)).toBe(FIZZ);
  expect(game.sound(25)).toBe('25');
  expect(game.sound(52)).toBe('52');
  expect(game.sound(53)).toBe(FIZZ);
  expect(game.sound(73)).toBe(FIZZ + MEZZ);
  expect(game.sound(75)).toBe(FIZZ + MEZZ);
})

test('should have create factory function', () => {
  expect(NumSoundGame.init).toBeDefined()
  const game = NumSoundGame.init(example357)
  expect(game).toBeDefined()
  expect(game.rules).toEqual(example357)
  expect(game.sound(1)).toBe('1');
  expect(game.sound(2)).toBe('2');
  expect(game.sound(3)).toBe(FIZZ);
  expect(game.sound(5)).toBe(BUZZ);
  expect(game.sound(13)).toBe(FIZZ);
  expect(game.sound(15)).toBe(FIZZ + BUZZ);
  expect(game.sound(25)).toBe(BUZZ);
  expect(game.sound(52)).toBe(BUZZ);
  expect(game.sound(53)).toBe(FIZZ + BUZZ);
  expect(game.sound(73)).toBe(FIZZ + MEZZ);
  expect(game.sound(75)).toBe(FIZZ + BUZZ + MEZZ);
})