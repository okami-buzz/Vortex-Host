const starCanvas = document.getElementById("stars");
const sctx = starCanvas.getContext("2d");
starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;
const stars = Array.from({length:200}, () => ({
    x: Math.random()*starCanvas.width,
    y: Math.random()*starCanvas.height,
    r: Math.random()*1.5,
}));
function drawStars() {
    sctx.clearRect(0,0,starCanvas.width, starCanvas.height);
    stars.forEach(s => {
        sctx.beginPath();
        sctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        sctx.fillStyle="white";
        sctx.fill();
    });
    requestAnimationFrame(drawStars);
}
drawStars();
