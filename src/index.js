import './style.css';
import goblinImg from './img/goblin.png';

const FIELD_SIZE = 4;
const CELLS_COUNT = FIELD_SIZE * FIELD_SIZE;
const INTERVAL_MS = 1000;

const board = document.getElementById('board');
if (!board) {
    throw new Error('Элемент #board не найден в DOM');
}

for (let i = 0; i < CELLS_COUNT; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    board.append(cell);
}

const cells = Array.from(document.querySelectorAll('.cell'));
const goblin = document.createElement('img');
goblin.src = goblinImg;

cells[Math.floor(Math.random() * CELLS_COUNT)].append(goblin);

const interval = setInterval(() => {
    const currentCell = goblin.parentNode;
    let newCell;
    do {
        newCell = cells[Math.floor(Math.random() * CELLS_COUNT)];
    } while (newCell === currentCell);
    newCell.append(goblin);
}, INTERVAL_MS);

