const canvas = document.getElementById("aurora");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let t = 0;
function drawAurora() {
    t += 0.002;
    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, `hsl(${(t*100)%360},80%,60%)`);
    grd.addColorStop(1, `hsl(${(t*200)%360},80%,40%)`);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(drawAurora);
}
drawAurora();
