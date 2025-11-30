const paraCanvas = document.getElementById("parallax");
const pctx = paraCanvas.getContext("2d");
paraCanvas.width = window.innerWidth;
paraCanvas.height = window.innerHeight;
document.addEventListener("mousemove", e => {
    const dx = e.clientX / window.innerWidth;
    const dy = e.clientY / window.innerHeight;
    pctx.clearRect(0,0,paraCanvas.width, paraCanvas.height);
    pctx.fillStyle = "rgba(255,255,255,0.05)";
    for(let i=0;i<50;i++){
        pctx.beginPath();
        pctx.arc(dx*paraCanvas.width*Math.random(), dy*paraCanvas.height*Math.random(), Math.random()*3,0,Math.PI*2);
        pctx.fill();
    }
});
