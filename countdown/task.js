const tm = document.getElementById("timer");
const interval = setInterval(() => {
    tm.textContent = Number(tm.textContent) - 1;
    if (tm.textContent == 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);

const clock = document.getElementById("clock");

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

clock.textContent = formatTime(3665)

const clock = document.getElementById("clock");

let totalSeconds = 2 * 3600 + 30 * 60 + 15;

const interval2 = setInterval(() => {
    totalSeconds--;
    
    // Форматируем время
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    clock.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (totalSeconds === 0) {
        clearInterval(interval2);
        alert("Вы победили в конкурсе!");
    }
}, 1000);