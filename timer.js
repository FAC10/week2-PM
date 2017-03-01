

document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){
var start = setInterval(stopwatch__start, 1000);
function stopwatch__start() {
  var seconds = document.getElementById('stopwatch__seconds').innerHTML;
  seconds = parseInt(seconds);
  seconds ++;
  document.getElementById('stopwatch__seconds').innerHTML = seconds;
  console.log(seconds);
}

document.getElementById('stopwatch__buttons__stop').addEventListener("click", function(){
console.log(start);
clearInterval(start);
  });

});
