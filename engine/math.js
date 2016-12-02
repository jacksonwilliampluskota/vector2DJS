'use strict';
function vec2D(x, y) {
	this.x = x;
	this.y = y;
}

vec2D.prototype = {

	magnitude: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},

	magnitudeSquare: function() {
		return this.x * this.x + this.y * this.y;
	},

	normalize: function() {
		let magnetude = this.magnitude();
		this.x = this.x / magnetude;
		this.y = this.y / magnetude;
		return this;
	},

	add: function(otherVector2) {

	}

};