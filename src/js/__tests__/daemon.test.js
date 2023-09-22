import Daemon from '../daemon';

test('create Daemon', () => {
  const result = new Daemon('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
    distance: 1,
    setAttack: 10,
  });
});

test('Daemon attack regular', () => {
  const result = new Daemon('Amy');
  result.attack = 100;
  expect(result.attack).toEqual(100);
});

test('Daemon attack with set distance 3 squares', () => {
  const result = new Daemon('Amy');
  result.attack = 100;
  result.distance = 3;
  expect(result.attack).toEqual(80);
});

test('Daemon attack < 0', () => {
  const result = new Daemon('Amy');
  result.attack = 100;
  result.distance = 11;
  expect(result.attack).toEqual(0);
});

test('Daemon stoned', () => {
  const result = new Daemon('Amy');
  result.stoned = true;
  expect(result.stoned).toBeTruthy();
});

test('Daemon stoned and distance 2 squares', () => {
  const result = new Daemon('Amy');
  result.attack = 100;
  result.distance = 2;
  result.stoned = true;
  expect(result.attack).toEqual(85);
});
