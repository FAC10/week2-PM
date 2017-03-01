
function addZero(num)
{
	(String(num).length < 2) ? num = String("0" + num) :  num = String(num);
	return num;
};

document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){
start = setInterval(stopwatch__start, 1000);
function stopwatch__start() {
  var seconds = document.getElementById('stopwatch__seconds').innerHTML;
  seconds = parseInt(seconds);
  seconds ++;
  seconds = addZero(seconds);
  document.getElementById('stopwatch__seconds').innerHTML = seconds;
  console.log(seconds);
}

document.getElementById('stopwatch__buttons__stop').addEventListener("click", function(){
console.log(start);
clearInterval(start);
  });

});

//Reset button
document.getElementById('stopwatch__buttons__reset').addEventListener("click", function(){
document.getElementById('stopwatch__hours').innerHTML="00";
document.getElementById('stopwatch__minutes').innerHTML="00";
document.getElementById('stopwatch__seconds').innerHTML="00";
});
