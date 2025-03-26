document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btntopico");
    const secoes = document.querySelectorAll(".right div")

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            botoes.forEach(btn => btn.classList.remove("ativo"));
            botao.classList.add("ativo");

            secoes.forEach(secao => secao.classList.remove("ativo"));

            const topID = botao.getAttribute("data-topico");
            document.getElementById(topID).classList.add("ativo");
            const clickSound = document.getElementById("click-sound");
            clickSound.play();
        })
    })

    document.querySelector(".banner").addEventListener("click", () => {
        const clickSound = document.getElementById("aurora-piun");
        clickSound.play();
    })


    const playPauseBtn = document.getElementById('playPauseBtn');
    const music = document.getElementById('music');
    let isPlaying = false;
    music.volume = 0.5;  //
    music.addEventListener('canplaythrough', function () {
        playPauseBtn.style.display = 'block';
    }, false);

    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            music.pause();
            music.currentTime = 0;
            playPauseBtn.src = 'img/botao-tocar.png';
        } else {
            music.play();
            playPauseBtn.src = 'img/botao-pausar.png';
        }
        isPlaying = !isPlaying;
    });


})