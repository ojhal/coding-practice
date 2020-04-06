var cat = document.getElementById("cat-img");
cat.addEventListener('click', function() {
	console.log('the cat-img was clicked!')
	var counter = document.getElementById('cat-count').innerHTML
	counter++;
	document.getElementById('cat-count').innerHTML = counter;

});


var dog = document.getElementById("dog-img");
dog.addEventListener('click', function() {
	console.log('the dog-img was clicked!')
	var counter = document.getElementById('dog-count').innerHTML
	counter++;
	document.getElementById('dog-count').innerHTML = counter;

});

var lion = document.getElementById("lion-img");
lion.addEventListener('click', function() {
	console.log('the lion-img was clicked!')
	var counter = document.getElementById('lion-count').innerHTML
	counter++;
	document.getElementById('lion-count').innerHTML = counter;

});