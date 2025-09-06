let checkpoint = 1;

function goToCheckpoint() {
    const status = document.getElementById('status');
    const button = document.getElementById('startButton');

    if (checkpoint === 1) {
        status.innerText = "Checkpoint 1 reached! Redirecting in 5 seconds...";
        button.disabled = true;
        setTimeout(() => {
            // Replace with your first Linkvertise URL
            window.location.href = "https://linkvertise.com/first-link";
        }, 5000);
        checkpoint++;
    } else if (checkpoint === 2) {
        status.innerText = "Checkpoint 2 reached! Redirecting in 5 seconds...";
        button.disabled = true;
        setTimeout(() => {
            // Replace with your second Linkvertise URL
            window.location.href = "https://linkvertise.com/second-link";
        }, 5000);
        checkpoint++;
    } else if (checkpoint === 3) {
        status.innerText = "All checkpoints completed!";
        const keyButton = document.createElement('button');
        keyButton.innerText = "Generate Key";
        keyButton.onclick = generateKey;
        document.body.appendChild(keyButton);
        button.style.display = "none";
    }
}

function generateKey() {
    const keyDisplay = document.createElement('p');
    keyDisplay.innerText = "Your key: JHUB_016391";
    document.body.appendChild(keyDisplay);
}
