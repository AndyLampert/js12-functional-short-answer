var pluralize = function(word,number){
	// evalutate and return that value
	return (number === 1)? word : word + s;
}

// Rewrite the following code to be more functional:
// so that it effects the global scope
// PURE FUNCTION
var getVictimInfo = function() {
	var victim = {};
	victim.name = prompt("Please enter your name:");
	victim.phone = prompt("Please enter your phone number:");
	victim.street = prompt("Please enter your street:");
	return victim;
};

var v1 = getVictimInfo();
var v2 = getVictimInfo();
console.log(v1);

// want to use this so I can get brand new objects each time the request is made
// if, for ex, I did console.log v1 and v2 separately, they will give unique values


// alert('Thank you! Victim entered: \n' +
//  victim.name + ", " +
//  victim.phone + ", " +
//  victim.street);

// Write a function which removes falsey values from an array. A falsey value is one which evaluates to false when type coerced, which are the following:
// 0, null, "" (empty string), undefined, NaN, false.

// Write two versions of the function: one that uses side effects and one that is pure.ss