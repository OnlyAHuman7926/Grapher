let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth, height = canvas.height = window.innerHeight;

let eq = x => x ** 2;

function scale(value, vs, vf, cs, cf) {
    let total = vf - vs;
    let location = (value - vs) / total;
    return location * (cf - cs) + cs;
}

function graph(sx, sy, fx, fy, eq) {
    let divCount = 100;
    let dx = (fx - sx) / divCount;
    ctx.beginPath();

    let x = sx;
    while (x <= fx) {
        let y = eq(x);
        ctx.lineTo(scale(x, sx, fx, 0, width), height - scale(y, sy, fy, 0, height));
        x += dx;
    }

    ctx.stroke();
}
['x**2', 'Math.E**x','Math.sin(x)', '2*x-1'].forEach(eq => graph(-5, -5, 5, 5, x => eval(eq)));

// draw axes
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, height);
ctx.stroke();