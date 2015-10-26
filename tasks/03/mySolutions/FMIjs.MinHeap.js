var FMIjs = function() {

	function heapSort(array){

	}

	function MinHeap() {
		
	}

	MinHeap.prototype = Object.create(Array.prototype);

	MinHeap.prototype.insert = function(element) {
		// body...
	};

	MinHeap.prototype.parentIndex = function(){
		// body...
	};

	MinHeap.prototype.leftIndex = function(){
		// body...
	};

	MinHeap.prototype.parentElement = function() {
		// body...
	};

	MinHeap.prototype.leftElement = function() {
		// body...
	};

	MinHeap.prototype.rightElement = function() {
		// body...
	};

	MinHeap.prototype.getMinimum = function() {
		// body...
	};

	MinHeap.prototype.isEmpty = function() {
		// body...
	};

	MinHeap.prototype.bubbleUp = function(n) {
		// Fetch the element that has to be moved.
		var element = this[n],
			score = this.scoreFunction(element);
		// When at 0, an element can not go up any further.
		while (n > 0) {
			// Compute the parent element's index, and fetch it.
			var parentN = Math.floor((n + 1) / 2) - 1,
				parent = this[parentN];
			// If the parent has a lesser score, things are in order and we
			// are done.
			if (score >= this.scoreFunction(parent))
				break;

			// Otherwise, swap the parent with the current element and
			// continue.
			this[parentN] = element;
			this[n] = parent;
			n = parentN;
		}
	};

	MinHeap.prototype.bubbleDown = function(n) {
		// Look up the target element and its score.
		var length = this.length,
			element = this[n],
			elemScore = this.scoreFunction(element);

		while (true) {
			// Compute the indices of the child elements.
			var child2N = (n + 1) * 2,
				child1N = child2N - 1;
			// This is used to store the new position of the element,
			// if any.
			var swap = null;
			// If the first child exists (is inside the array)...
			if (child1N < length) {
				// Look it up and compute its score.
				var child1 = this[child1N],
					child1Score = this.scoreFunction(child1);
				// If the score is less than our element's, we need to swap.
				if (child1Score < elemScore)
					swap = child1N;
			}
			// Do the same checks for the other child.
			if (child2N < length) {
				var child2 = this[child2N],
					child2Score = this.scoreFunction(child2);
				if (child2Score < (swap == null ? elemScore : child1Score))
					swap = child2N;
			}

			// No need to swap further, we are done.
			if (swap == null) break;

			// Otherwise, swap and continue.
			this[n] = this[swap];
			this[swap] = element;
			n = swap;
		}
	};

	return {
		MinHeap: MinHeap,
		heapSort: heapSort
	}
}
