/**
 * Created by Drew on 7/22/17.
 */
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-100;

var c = canvas.getContext('2d');

// c.fillStyle = rgba( redValue greenVal blueVal transparency/alpha)
c.fillStyle = 'rgba(255, 0, 0, .5)';
// c.fillRect(x, y, width, height);
c.fillRect(100, 100, 100, 100); //this will take the last fill style above it
c.fillStyle = 'rgba(0, 0, 255, .5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, .5)';
c.fillRect(300, 300, 100, 100);

// LINES
//==============
c.beginPath();

//c.moveTo(x, y);
c.moveTo(50, 300);
/* The above point is invisible until stroke method is called.
*  Once we call the stroke mehod, then we will start to see a line
*  from point to point.
*  Apparently in the video, its shown that these "moveTo" coordinates
*  are the starting point .... */

c.lineTo(300, 100);
// Then, this point above will be the end point.
c.lineTo(400, 300);
// We even add a third point, where a line extends from second point to third.

c.strokeStyle = "#D24D57";
c.stroke();
// Finally, this stroke method completes the line.r

// ARCS AND CIRCLES
//==============
// BEGIN A NEW PATH
c.beginPath();
/*c.arc(x: Int, y: Int, radius: Int, startAngle: Float(/RADIAN),
endAngle: Float(/RADIAN), drawCounterClockWise: Bool)
*/
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

// Creating 100 circles randomly throughout the page
for (i=0; i<100; i++) {
    x = Math.random() * window.innerWidth;
    //note that Math.random() generates values between 0 and 1,
    //  similar to MATLAB. so we multiply by the window width
    y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}