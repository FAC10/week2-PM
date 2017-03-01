

// Checks reset when 'Reset' button is clicked

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

// Checks behaviour of start button
document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){
  window.setTimeout( function (){


test('stopwatch second start should change once we initiate start button and >1s has passed', function(assert) {


  var result = document.getElementById("stopwatch__seconds").innerHTML;
  var expected = "00";
  assert.notEqual(result, expected);
  });
  }, 1000);
  });

  // Checks behaviour of stop button

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