const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function checkGame() {
    const deadCount = Number(dead.textContent);
    const lostCount = Number(lost.textContent);
    
    if (deadCount === 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
    } else if (lostCount === 5) {
        alert('Поражение! Вы пропустили 5 кротов!');
        resetGame();
    }
}

function resetGame() {
    dead.textContent = '0';
    lost.textContent = '0';
}

for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    
    hole.addEventListener('click', function() {
        if (this.classList === 'hole has-mole') {
            // Попадание по кроту
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            // Промах
            lost.textContent = Number(lost.textContent) + 1;
        }
                
        // Проверяем условия победы/поражения
        checkGame();
    });
}