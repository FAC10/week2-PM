//Adding 0 on numbers below 10

function addZero(num)
{
	(String(num).length < 2) ? num = String("0" + num) :  num = String(num);
	return num;
};

//incrementing minutes

function plusMinute() {
var minutes = document.getElementById('stopwatch__minutes').innerHTML;
    minutes = parseInt(minutes);
    minutes ++;
    minutes = addZero(minutes);
		return minutes;
}

//incrementing hours

function plusHour() {
var hours = document.getElementById('stopwatch__hours').innerHTML;
    hours = parseInt(hours);
    hours ++;
    hours = addZero(hours);
		return hours;
}

// Manipulating DOM

document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){
clearInterval(start);
start = setInterval(stopwatch__start, 10);
function stopwatch__start() {
  var seconds = document.getElementById('stopwatch__seconds').innerHTML;
  seconds = parseInt(seconds);
  seconds ++;
  seconds = addZero(seconds);
  document.getElementById('stopwatch__seconds').innerHTML = seconds;
	if (seconds > 59) {
	var minutes = document.getElementById('stopwatch__minutes').innerHTML;
	document.getElementById('stopwatch__minutes').innerHTML = plusMinute();
	reset(document.getElementById('stopwatch__seconds'));
	if (minutes = 59) {
	var hours = document.getElementById('stopwatch__hours').innerHTML;
	document.getElementById('stopwatch__hours').innerHTML = plusHour();
	reset(document.getElementById('stopwatch__minutes'));
	}
	if (hours = 23) {
	reset(document.getElementById('stopwatch__hours'));
	}
}
}

// Stopping on 'Stop'

document.getElementById('stopwatch__buttons__stop').addEventListener("click", function(){
clearInterval(start);
  });

});

//Reset button

function reset(n) {
  n.innerHTML="00";
}

document.getElementById('stopwatch__buttons__reset').addEventListener("click", function (){
reset(document.getElementById('stopwatch__hours'));
reset(document.getElementById('stopwatch__minutes'));
reset(document.getElementById('stopwatch__seconds'));
clearInterval(start);
lapRemove();
});

//Clones element passed in

function clone(element) {
	var clone = element.cloneNode(true);
	document.getElementById('cloned').appendChild(clone);
}

//Lap button clones display

document.getElementById('stopwatch__buttons__lap').addEventListener("click", function (){
clone(document.getElementById('display'));
});

// Removes children in lap section on reset

function lapRemove() {
	var cloneSection = document.getElementById('cloned');
	while (cloneSection.childElementCount > 0) {
		cloneSection.removeChild(cloneSection.firstChild);
	}
	return cloneSection.childElementCount;
}
