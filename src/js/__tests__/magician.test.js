import Magician from '../magician';

test('create Magician', () => {
  const result = new Magician('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
    distance: 1,
    setAttack: 10,
  });
});

test('Magician regular attack', () => {
  const result = new Magician('Amy');
  result.attack = 100;
  expect(result.attack).toEqual(100);
});

test('Magician attack with set distance 3 squares', () => {
  const result = new Magician('Amy');
  result.attack = 100;
  result.distance = 3;
  expect(result.attack).toEqual(80);
});

test('Magician attack < 0', () => {
  const result = new Magician('Amy');
  result.attack = 100;
  result.distance = 10;
  result.stoned = true;
  expect(result.attack).toEqual(0);
});

test('Magician stoned', () => {
  const result = new Magician('Amy');
  result.stoned = true;
  expect(result.stoned).toBeTruthy();
});

test('Magician stoned and distance 2 squares', () => {
  const result = new Magician('Amy');
  result.attack = 100;
  result.distance = 2;
  result.stoned = true;
  expect(result.attack).toEqual(85);
});
