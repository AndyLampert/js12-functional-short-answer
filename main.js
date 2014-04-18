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

// Write a function which removes falsey values from an array.
// A falsey value is one which evaluates to false when type coerced, which are the following:
// 0, null, "" (empty string), undefined, NaN, false.
// Write two versions of the function: one that uses side effects and one that is pure.ss

// impure function
// could make it way MORE impure if I did a destructive edit like slice
var outputArr = [];
var removeFalsy = function(inputArr) {
	for(var i=0; i<inputArr.length; i++){
		if(inputArr[i] !== false && inputArr[i] !== null && inputArr[i] !== undefined && inputArr[i] !== NaN && inputArr[i] !== 0 && inputArr[i] !== '') {
			outputArr.push(inputArr[i]);
		}
	}
	return outputArr;
}

// pure function
var removeFalsy = function(inputArr) {
	var outputArr = [];
	for(var i=0; i<inputArr.length; i++){
		if(inputArr[i] !== false && inputArr[i] !== null && inputArr[i] !== undefined && inputArr[i] !== NaN && inputArr[i] !== 0 && inputArr[i] !== '') {
			outputArr.push(inputArr[i]);
		}
	}
	return outputArr;
}
console.log(removeFalsy([1,'b',"",false,null,true]));
