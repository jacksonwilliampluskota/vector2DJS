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
		let obj = {
			x: 0,
			y:0,
		};

		obj.x = this.x / magnetude;
		obj.y = this.y / magnetude;
		return obj;
	},

	add: function(otherVector2) {

		this.x = this.x + otherVector2.x;
		this.y = this.y + otherVector2.y;

		return this;

	},

	subtract: function(otherVector2) {

		this.x = this.x - otherVector2.x;
		this.y = this.y - otherVector2.y;

		return this;

	},

	mult: function(otherVector2) {

		this.x = this.x * otherVector2.x;
		this.y = this.y * otherVector2.y;

		return this;

	},

	div: function(otherVector2) {

		this.x = this.x / otherVector2.x;
		this.y = this.y / otherVector2.y;

		return this;

	},

	toRadians: function(angleInDegrees) {
            return angleInDegrees * Math.PI / 180.0;// Math.PI / 180.0 radiano = 1 grau
    },

    toDegrees: function(angleInRadians) {
            return angleInRadians * 180.0 / Math.PI;//180.0 / Math.PI graus = 1 radiano
    },

    set: function(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
};