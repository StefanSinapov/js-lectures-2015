function Point(x, y) {
	this.x = x;
	this.y = y;

	// this.toString = function() {
	// 	return x + ', ' + y;
	// }
};



Point.prototype.toArray = function() {
	var self = this;
	var result = [];
	Object.keys(this).forEach(function(key) {
		result.push(self[key]);
	});
	return result;
};

function Point3D(x, y, z) {
	Point.call(this, x, y);
	this.z = z;
};

Point3D.prototype = Object.create(Point.prototype);

Point3D.prototype.toString = function() {
	return this.prototype.toString() + ', ' + z;
};

var p = new Point3D(1, 2, 3);
console.log(p.toArray());
//console.log(p.toString())
