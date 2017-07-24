/**
 * Created by Drew on 7/23/17.
 *
 * INTERACTIVE EXAMPLE FOR RECTANGLES:
 * https://christopherlis.com/#/projects/amplify
 *
 * The tutorial for rectangles starts here:
 *      https://youtu.be/EO6OkltgudE?t=13m8s
 *
 */
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangles
//==============
// c.fillStyle = rgba( redValue greenVal blueVal transparency/alpha)
c.fillStyle = 'rgba(255, 0, 0, .5)';
// c.fillRect(x, y, width, height);
c.fillRect(100, 100, 100, 100); //this will take the last fill style above it
c.fillStyle = 'rgba(0, 0, 255, .5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, .5)';
c.fillRect(300, 300, 100, 100);