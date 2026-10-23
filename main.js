import { Pokemon } from './Pokemon.js';
import { random, createCountClick } from './utils.js';

const $btnKick = document.getElementById('btn-kick');
const $btnSpecial = document.getElementById('btn-special');
const $btnKickCount = document.getElementById('btn-kick-count');
const $btnSpecialCount = document.getElementById('btn-special-count');

const character = new Pokemon({
  name: 'Pikachu',
  defaultHP: 100,
  selectors: {
    hp: 'health-character',
    progressbar: 'progressbar-character',
  },
});

const enemy = new Pokemon({
  name: 'Charmander',
  defaultHP: 100,
  selectors: {
    hp: 'health-enemy',
    progressbar: 'progressbar-enemy',
  },
});

const disableButtons = () => {
  $btnKick.disabled = true;
  $btnSpecial.disabled = true;
};

const makeAttack = (maxCharDamage, maxEnemyDamage) => {
  const charDamage = random(maxCharDamage);
  const enemyDamage = random(maxEnemyDamage);

  character.changeHP(charDamage, enemy, disableButtons);
  enemy.changeHP(enemyDamage, character, disableButtons);
};

const btnKickClick = createCountClick(6, $btnKick, $btnKickCount, makeAttack);
const btnSpecialClick = createCountClick(6, $btnSpecial, $btnSpecialCount, makeAttack);

$btnKick.addEventListener('click', () => {
  btnKickClick(20, 20);
});

$btnSpecial.addEventListener('click', () => {
  btnSpecialClick(15, 35);
});

const init = () => {
  character.renderHP();
  enemy.renderHP();
};

init();