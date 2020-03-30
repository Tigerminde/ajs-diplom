import heroInfo from '../characters/shortHeroInfo';

test('Вывод информации о персонаже', () => {
  const hero = {
    level: 1,
    health: 100,
    type: 'swordsman',
    attack: 40,
    defence: 10,
    distance: 1,
    distanceAttack: 4,
  };

  const expected = '🎖1 ⚔40 🛡10 ❤100';
  const received = heroInfo(hero);
  expect(received).toEqual(expected);
});
