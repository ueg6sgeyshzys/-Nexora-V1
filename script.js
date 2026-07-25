const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    startBtn.innerText = "Loading...";

    startBtn.disabled = true;

    document.body.style.transition = "0.8s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        alert("🚀 Welcome to Nexora!");

        document.body.style.opacity = "1";

        startBtn.innerText = "Tap To Start";

        startBtn.disabled = false;

    }, 800);

});
