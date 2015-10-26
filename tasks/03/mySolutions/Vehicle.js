function Vehicle(mileage) {

	this.getMileage = function() {
		return mileage.val;
	}

	this.toString = function() {
		return 'This Vehicle mileage is ' + mileage.val;
	}
}

function Car(brand, consumation) {
	var mileage = {
		val: 0
	};

	Vehicle.call(this, mileage);
	var superToString = this.toString;

	this.drive = function(miles) {
		mileage.val += miles;
	};

	this.getBrand = function() {
		return brand;
	}

	this.getConsumation = function() {
		return consumation;
	};

	this.toString = function() {
		return brand + ' ' + consumation + ' ' + superToString();
	}
}


var c1 = new Car('honda', 5);
console.log(c1.getMileage()); // -> 0
console.log(c1.toString()); // -> honda 5 This Vehicle mileage is 0
console.log(c1.drive(1000));
console.log(c1.getMileage()); // -> 1000
console.log(c1.toString()); // -> honda 5 This Vehicle mileage is 1000
