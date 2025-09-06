// Checkpoint 1
function startCheckpoint1() {
    const status = document.getElementById('status');
    status.innerText = "Redirecting to Linkvertise in 5 seconds...";
    setTimeout(() => {
        window.location.href = "https://linkvertise.com/first-link?target=https://yourusername.github.io/two-checkpoints-site/checkpoint2.html";
    }, 5000);
}

// Checkpoint 2
function startCheckpoint2() {
    const status = document.getElementById('status');
    status.innerText = "Redirecting to Linkvertise in 5 seconds...";
    setTimeout(() => {
        window.location.href = "https://linkvertise.com/second-link?target=https://yourusername.github.io/two-checkpoints-site/generatekey.html";
    }, 5000);
}

// Generate Key
function generateKey() {
    const keyDisplay = document.getElementById('keyDisplay');
    keyDisplay.innerText = "JHUB_016391";

    // Optional: redirect after showing key
    // setTimeout(() => { window.location.href = "https://yourusername.github.io/two-checkpoints-site/thankyou.html"; }, 5000);
}
