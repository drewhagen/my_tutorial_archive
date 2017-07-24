/**
 * Created by Drew on 7/23/17.
 *
 * ACTIVE EXAMPLE FOR LINES:
 * https://christopherlis.com/#/projects/its-alive!
 *
 * The tutorial for lines starts here:
 *      https://youtu.be/83L6B13ixQ0?t=2m16s
 *
 */

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Lines
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