let no = document.getElementById("noBtn");
let yes = document.getElementById("yesBtn");

window.onload = function () {

    yes.addEventListener("click", () => {
        let msg = document.querySelector(".msg");
        let img = document.querySelector(".img");
        let btnBox = document.querySelector(".btnbox");
        msg.innerHTML = "Hehehe, I knew it! 😁😘💖";
        img.src = "happy.gif";
        btnBox.style.visibility = "hidden";
    });


    function moveNoBtn() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 200));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 200));

        no.style.position = "absolute";
        no.style.left = randomX + "px";
        no.style.top = randomY + "px";
    }

    no.addEventListener("mouseenter", () => {
        moveNoBtn();
    });

    no.addEventListener("click", () => {
        moveNoBtn();
    });
}