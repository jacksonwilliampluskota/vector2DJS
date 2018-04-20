(function () {
  'use strict';

  var earth = {};
  earth.position = new vec2D(100, 100);

  var moon = {};
  moon.position = new vec2D(170, 170);

	var velocidade = new vec2D(1, 3.3);


	var HEIGHT;
	var WIDTH;
	var ctx;

	function main() {
		HEIGHT = window.innerHeight;
		WIDTH = window.innerWidth;

		var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = WIDTH / 2;
    canvas.height = HEIGHT / 2;
		canvas.style.border = '1px solid #000';

    ctx = canvas.getContext('2d');

    earth.image = new Image();
    earth.image.src = "assets/earth.png";

    moon.image = new Image();
    moon.image.src = "assets/moon.png";

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
  }

	function draw() {
    ctx.drawImage(earth.image, earth.position.x, earth.position.y, 70, 70);
    ctx.drawImage(moon.image, moon.position.x, moon.position.y, 40, 40);
	}

	main();
})();