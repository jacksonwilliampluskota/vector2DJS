(function () {
	'use strict';


	var vec = new vec2D(100, 100);
	console.log('priMagnetude', vec.magnitude());
	console.log('normalize', vec.normalize());
	console.log('normalizeSqrt', vec.normalizeSquare());
	console.log('ultMagnitude', vec.magnitude());
	var HEIGHT;
	var WIDTH;
	var ctx;
	var bola = {
		x: 100,
		y: 100,
		xspeed:1,
		yspeed:3.3,
	};

	function main() {
		HEIGHT = window.innerHeight;
		WIDTH = window.innerWidth;

		var canvas = document.createElement('canvas');
    	canvas.id = 'canvas';
    	canvas.width = WIDTH / 2;
    	canvas.height = HEIGHT / 2;
		canvas.style.border = '1px solid #000';

    	ctx = canvas.getContext('2d');
    	document.body.appendChild(canvas);
		init();
	}
	function init() {
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		update();
		draw();
		window.requestAnimationFrame(init);
	}
	function update() {

		bola.x = bola.x + bola.xspeed;
  		bola.y = bola.y + bola.yspeed;

		if ((bola.x > (WIDTH / 2)) || (bola.x < 0)) {
    		bola.xspeed = bola.xspeed * -1;
  		}

  		if ((bola.y > (HEIGHT/2)) || (bola.y < 0)) {
    		bola.yspeed = bola.yspeed * -1;
  		}
	}
	function draw() {

		ctx.beginPath();
     	ctx.arc(bola.x, bola.y, 30, 0, 2 * Math.PI, false);
     	ctx.fillStyle = 'green';
      	ctx.fill();
      	ctx.lineWidth = 1;
      	ctx.strokeStyle = '#003300';
      	ctx.stroke();
	}

	main();
})();