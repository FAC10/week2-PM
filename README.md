# JAVASCRIPT STOPWATCH

## WHAT

### Our goal is to complete following user stories

 * I can press a start button, in order to start a timer
 * I can press a stop button, in order to stop the timer at how much time has passed since start
 * I can press a reset button, in order to stop the timer and reset the displayed time to 00:00:00:00
 * I can see the timer's current time in hours, seconds, minutes and milliseconds

### We're also aiming to attempt to fulfil following stretch goals:

* laps
* countdown timer
* use BlanketJS for code coverage

## WHY

We want to practice TDD methodology and the implementation of multiple unit tests. We want our code to be testable and are aiming for the highest possible test coverage. We also want to practice Javascript DOM manipulation.

## HOW

* Implementation of TDD approach; we create tests first and write code second

* Ping-pong coding (one person from the pair writes tests and the other writes code)

* BEM for CSS elements

* Technical spike at the beginning of the project - we had to figure out which functions we would use and how to test them

## LEARNINGS

* We have learnt that you could wrap tests in onclick Event:

``` Javascript

document.getElementById('stopwatch__buttons__reset').addEventListener("click", function(){
test('stopwatch should be showing zeros when the page is loaded', function(assert) {
  var result = document.getElementById("stopwatch__hours").innerHTML;
  var expected = "00";
  assert.equal(result, expected);
  });

test('stopwatch should be showing zeros when the page is loaded', function(assert) {
  var result = document.getElementById("stopwatch__minutes").innerHTML;
    var expected = "00";
    assert.equal(result, expected);
    });

  test('stopwatch should be showing zeros when the page is loaded', function(assert) {
      var result = document.getElementById("stopwatch__seconds").innerHTML;
      var expected = "00";
      assert.equal(result, expected);
      });

      });

      ```

* We found and interesting way of comparing BEFORE and AFTER events in testing:

``` Javascript
document.getElementById('stopwatch__buttons__stop').addEventListener("click", function(){
  // Hours
      var expectedHours = document.getElementById("stopwatch__hours").innerHTML;
      window.setTimeout( function (){
      test('stopwatch hours should stop when stop button is clicked', function(assert) {
      var resultHours = document.getElementById("stopwatch__hours").innerHTML;
      assert.equal(resultHours, expectedHours);
      });
    }, 1000);

  // Minutes
      var expectedMinutes = document.getElementById("stopwatch__minutes").innerHTML;
      window.setTimeout( function (){
      test('stopwatch minutes should stop when stop button is clicked', function(assert) {
      var resultMinutes = document.getElementById("stopwatch__minutes").innerHTML;
      assert.equal(resultMinutes, expectedMinutes);
      });
    }, 1000);

  // Seconds
      var expectedSeconds = document.getElementById("stopwatch__seconds").innerHTML;
      window.setTimeout( function (){
      test('stopwatch seconds should stop when stop button is clicked', function(assert) {
      var resultSeconds = document.getElementById("stopwatch__seconds").innerHTML;
      assert.equal(resultSeconds, expectedSeconds);
      });
    }, 1000);
  });
```       
*Note: There might be better ways of doing this and we welcome any suggestions on how other groups have solved similar issues*

* We've learnt that we can set intervals on tests to repeat them

``` Javascript
document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){

window.setInterval( function (){

test('seconds should not go over 60', function (assert) {
  var expected = document.getElementById('stopwatch__seconds').innerHTML > 59;
  var result = false;
  assert.equal(result, expected);

});

}, 20000);

});
```
* We also learnt how to test for less than/greater than conditions:

``` Javascript

var expected = document.getElementById('stopwatch__seconds').innerHTML > 59;

```
