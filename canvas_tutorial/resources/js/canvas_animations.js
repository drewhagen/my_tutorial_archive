/**
 * Created by Drew on 7/23/17.
 *
 * The tutorial for animations starts (roughly) here:
 *      https://youtu.be/yq2au9EfeRQ?t=1m12s
 *
 */
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 4;
var dy = (Math.random() - 0.5) * 4;
var radius = 30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    //Let's start with a circle.
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if(x+radius > innerWidth || x-radius < 0) {
        dx = -dx;
    }
    if(y+radius > innerHeight || y-radius < 0) {
        dy = -dy;
    }

    x+= dx;
    y+= dy;
}

animate();