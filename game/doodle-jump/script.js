document.addEventListener('DOMContentLoaded', () => {
    const doodler = document.createElement("div");
    const platform = document.createElement("div");
    const grid = document.querySelector(".grid");
    var doodlerBottomPosition = 100;
    var doodlerLeftPosition = 50;
    var isGameOver = false;
    var noPlatform = 5
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add("doodler")
        doodler.style.left = doodlerLeftPosition + 'px';
        doodler.style.bottom = doodlerBottomPosition + 'px';
    }
    class Platform {
        constructor() {
            this.left = left + 'px'
            this.bottom = bottom + 'px';
        }
    }
    function createPlatform() {
        for (var i = 0; i < noPlatform; i++) {
            let platformGap = 600 / noPlatform;
            let platformBottom = 100 + i * noPlatform;
            let platform = new Platform()
        }

        grid.append(platform);
        platform.classList.add("platform");
        platform.style.left = Math.floor(Math.random() * 500) + 'px';
        platform.style.bottom = Math.floor(Math.random() * 600) + 'px';
    }
    function start() {
        if (!isGameOver) { createDoodler(), createPlatform() }
    }
    start()
})