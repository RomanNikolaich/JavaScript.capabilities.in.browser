const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

const speedElement = document.createElement('div');

speedElement.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span> кликов/сек';
clickerCounter.parentNode.appendChild(speedElement);

let lastClickTime = null;

cookie.onclick = () => {
    const currentTime = new Date();
    counter.textContent = Number(counter.textContent) + 1;
    
    if (cookie.width === 200) {
        cookie.width += 50;
    } else {
        cookie.width -= 50;
    }

    if (lastClickTime !== null) {
        const timeDiff = (currentTime - lastClickTime) / 1000; // Разница в секундах
        const speed = (1 / timeDiff).toFixed(2);
        
        document.getElementById('clicker__speed').textContent = speed;
    }
    
    lastClickTime = currentTime; 
}