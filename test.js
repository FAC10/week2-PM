

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
