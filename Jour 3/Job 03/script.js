const board = document.getElementById('board');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'];

let tiles = [];
let emptyTileIndex = 8;

initializeBoard();

function initializeBoard() {
    tiles = [];
    message.textContent = '';
    restartButton.classList.add('hidden');

    // Randomize images
    const shuffledImages = shuffleArray(images);

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.backgroundImage = `url(${shuffledImages[i]})`;
        tile.dataset.index = i;
        if (i === emptyTileIndex) {
            tile.style.visibility = 'hidden';
        }
        tile.addEventListener('click', moveTile);
        tiles.push(tile);
        board.appendChild(tile);
    }
}

function moveTile() {
    const currentIndex = parseInt(this.dataset.index);
    if (currentIndex === emptyTileIndex + 1 || currentIndex === emptyTileIndex - 1 || currentIndex === emptyTileIndex + 3 || currentIndex === emptyTileIndex - 3) {
        // Swap tiles
        const temp = tiles[emptyTileIndex];
        tiles[emptyTileIndex] = tiles[currentIndex];
        tiles[currentIndex] = temp;

        // Update emptyTileIndex
        emptyTileIndex = currentIndex;

        // Update board
        updateBoard();

        // Check if puzzle is solved
        if (isSolved()) {
            message.textContent = 'Vous avez gagné';
            message.style.color = 'green';
            restartButton.classList.remove('hidden');
            tiles.forEach(tile => tile.removeEventListener('click', moveTile));
        }
    }
}

function updateBoard() {
    tiles.forEach((tile, index) => {
        tile.dataset.index = index;
        if (index === emptyTileIndex) {
            tile.style.visibility = 'hidden';
        } else {
            tile.style.visibility = 'visible';
        }
    });
}

function isSolved() {
    for (let i = 0; i < 8; i++) {
        if (tiles[i].dataset.index !== i.toString()) {
            return false;
        }
    }
    return true;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

restartButton.addEventListener('click', initializeBoard);
