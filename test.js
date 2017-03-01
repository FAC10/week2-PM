

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
