/**
 * Created by Drew on 7/23/17.
 *
 * The tutorial for arcs starts here:
 *      https://youtu.be/83L6B13ixQ0?t=7m7s
 *
 * REVIEW: how RADIANS work!
 *  https://www.khanacademy.org/math/algebra2/
 *  trig-functions/intro-to-radians-alg2/v/introduction-to-radians
 *
 */

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = rgba( redValue greenVal blueVal transparency/alpha)
c.fillStyle = 'rgba(255, 0, 0, .5)';
// c.fillRect(x, y, width, height);
c.fillRect(100, 100, 100, 100); //this will take the last fill style above it
c.fillStyle = 'rgba(0, 0, 255, .5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, .5)';
c.fillRect(300, 300, 100, 100);

// ARCS AND CIRCLES
//==============
// BEGIN A NEW PATH
c.beginPath();
/*c.arc(x: Int, y: Int, radius: Int, startAngle: Float(/RADIAN), endAngle: Float(/RADIAN), drawCounterClockWise: Bool)
 */
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

// Creating 100 circles randomly throughout the page
for (i=0; i<100; i++) {
    x = Math.random() * window.innerWidth;
    //note that Math.random() generates values between 0 and 1, similar to MATLAB. so we multiply by the window width
    y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}