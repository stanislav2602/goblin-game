import './style.css';
import goblinImg from './img/goblin.png';

const board = document.getElementById('board');

for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    board.appendChild(cell);
}

const cells = Array.from(document.querySelectorAll('.cell'));
const goblin = document.createElement('img');
goblin.src = goblinImg;

cells[Math.floor(Math.random() * 16)].appendChild(goblin);

setInterval(() => {
    const currentCell = goblin.parentNode;
    let newCell;
    do {
        newCell = cells[Math.floor(Math.random() * 16)];
    } while (newCell === currentCell);
    newCell.appendChild(goblin);
}, 1000);