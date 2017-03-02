

function addZero(num)
{
	(String(num).length < 2) ? num = String("0" + num) :  num = String(num);
	return num;
};

//
// function plusMinute(minutes, seconds){
//   if (seconds>59){
//     resetSecs();
//     minutes = parseInt(minutes);
//     minutes ++;
//     minutes = addZero(minutes);
//     console.log(minutes);
//   }

// }

function plusMinute() {
var minutes = document.getElementById('stopwatch__minutes').innerHTML;
    minutes = parseInt(minutes);
    minutes ++;
    minutes = addZero(minutes);
		return minutes;
}

document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){
start = setInterval(stopwatch__start, 1000);
function stopwatch__start() {
  var seconds = document.getElementById('stopwatch__seconds').innerHTML;
  seconds = parseInt(seconds);
  seconds ++;
  seconds = addZero(seconds);
  document.getElementById('stopwatch__seconds').innerHTML = seconds;
	if (seconds > 59) {
	var minutes = document.getElementById('stopwatch__minutes').innerHTML;
	document.getElementById('stopwatch__minutes').innerHTML = plusMinute();
	resetSecs();
}
}

document.getElementById('stopwatch__buttons__stop').addEventListener("click", function(){
console.log(start);
clearInterval(start);
  });

});

//Reset button

function resetSecs() {
  document.getElementById('stopwatch__seconds').innerHTML="00";
}

function resetMins() {
  document.getElementById('stopwatch__minutes').innerHTML="00";
}

function resetHours() {
  document.getElementById('stopwatch__hours').innerHTML="00";
}

document.getElementById('stopwatch__buttons__reset').addEventListener("click", function(){
resetHours();
resetMins();
resetSecs();
});
