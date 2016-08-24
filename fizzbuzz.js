var fizzbuzz = document.getElementById("fizzbuzz");

for (i = 1; i <= 100; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		fizzbuzz.innerHTML += "fizz buzz <br />";
	} else if(i % 5 == 0) {
		fizzbuzz.innerHTML += "buzz <br />";
	} else if(i % 3 == 0) {
		fizzbuzz.innerHTML += "fizz <br />";
	} else {
		fizzbuzz.innerHTML += i + "<br />";
	}
}

// comment