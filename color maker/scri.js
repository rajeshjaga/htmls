const color = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
const button = document.querySelector('.button');
const body = document.querySelector('body');
const hex = document.querySelector('.hex');
body.style.backgroundColor = '#00c3c3';
hex.innerHTML = '#00c3c3';

button.addEventListener('click', () => {
  let hexa = '#';
  for (let i = 0; i < 6; i++) {
    let hexcol = Math.floor(Math.random() * color.length);
    hexa += color[hexcol];
  }
  body.style.backgroundColor = hexa;
  document.querySelector('.hex').innerHTML = hexa;
});
