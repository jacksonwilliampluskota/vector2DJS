(function () {
  'use strict';

  var earth = {};
  earth.position = { x: 50, y:50};

  var moon = {};
  moon.position = {x:0, y:10};

	var velocidade = new vec2D(1, 1);


	var HEIGHT;
	var WIDTH;
  var ctx;
  var fps = 1000/30;
  var then = Date.now();
  var now;
  var delta;
  var angle = 30 * Math.PI / 180.0;

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
    now = Date.now();
    delta = now - then;
    if (delta > fps) {
      var sen = Math.sin(angle);
      var coss = Math.cos(angle);

      var vetor = { x: earth.position.x - moon.position.x, y: earth.position.y - moon.position.y };

      var newX = (vetor.x + moon.position.x) * coss + (vetor.y + moon.position.y) * sen;
      var newY = (vetor.x + moon.position.x) * sen - (vetor.y + moon.position.y) * coss;

      moon.position.x = newX + earth.position.x;
      moon.position.y = newY + earth.position.y;

      angle += 0.05;

      then = now - delta % fps;
    }
  }

	function draw() {
    ctx.drawImage(earth.image, earth.position.x, earth.position.y, 60, 60);
    ctx.drawImage(moon.image, moon.position.x, moon.position.y, 30, 30);
	}

	main();
})();