let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let highest = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    if (count > highest) {
        highest = count;
    }
    saveEl.textContent = "Top Crowd Count: " + highest;
}

function save() {
    if (count > 0) {
        count -= 1;
        countEl.textContent = count;
    } else {
        alert("🚫 People count cannot go below 0");
    }
}

function reset() {
    count = 0;
    highest = 0;
    countEl.textContent = count;
    saveEl.textContent = "Top Crowd Count: 0";
}

document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("save-btn").addEventListener("click", save);
document.getElementById("reset-btn").addEventListener("click", reset);
