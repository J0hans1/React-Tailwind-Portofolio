
export default Line

function Line(){
    const canvas =  <canvas id="timeline-line"></canvas>
    DashedLine();
    return(
        canvas
    )
}

function DashedLine(){
    const canvas = document.getElementById('timeline-line');
    const ctx = canvas.getContext('2d');
    
    // Dashed line
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(0, 50);
    ctx.lineTo(300, 50);
    ctx.stroke();
}