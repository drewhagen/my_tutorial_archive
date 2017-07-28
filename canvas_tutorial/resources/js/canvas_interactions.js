/**
 * Created by Drew on 7/28/17.
 *
 * The tutorial for animations starts (roughly) here:
 *    https://www.youtube.com/watch?v=vxljFhP2krI
 *
 */
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
//var minRadius = 2;

var fillColorArray = [
    '#e74c3c',
    '#e67e22',
    '#f1c40f',
];

var strokeColorArray = [
    '#f39c12',
    '#d35400',
    '#c0392b'
];

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    });

window.addEventListener('resize',
    function(event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
)

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.fillColor = fillColorArray[Math.floor(Math.random() * fillColorArray.length)];
    this.strokeColor = strokeColorArray[Math.floor(Math.random() * fillColorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.strokeColor;
        c.stroke();
        c.fillStyle = this.fillColor;
        c.fill();
    }

    this.update = function() {
        if(this.x+this.radius > innerWidth || this.x-this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y+this.radius > innerHeight || this.y-this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x+= this.dx;
        this.y+= this.dy;

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y -this.y > -50) {
            if(this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 800; i++) {
    var radius = Math.random() * 3.5 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;

    circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();