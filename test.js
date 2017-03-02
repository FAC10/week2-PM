

// Checks reset when 'Reset' button is clicked

document.getElementById('stopwatch__buttons__reset').addEventListener("click", function(){
test('stopwatch should reset when reset button is clicked', function(assert) {
  var result = document.getElementById("stopwatch__hours").innerHTML;
  var expected = "00";
  assert.equal(result, expected);
  });

test('stopwatch should reset when reset button is clicked', function(assert) {
  var result = document.getElementById("stopwatch__minutes").innerHTML;
    var expected = "00";
    assert.equal(result, expected);
    });

  test('stopwatch should reset when reset button is clicked', function(assert) {
      var result = document.getElementById("stopwatch__seconds").innerHTML;
      var expected = "00";
      assert.equal(result, expected);
      });

      });

// Checks reset function specifically

test('reset function changes 45 to 00', function(assert) {
  reset(document.getElementById('resetTest__45'));
  var result = document.getElementById('resetTest__45').innerHTML;
  var expected = "00";
  assert.equal(result, expected);
  });

  test('reset function changes 01 to 00', function(assert) {
    reset(document.getElementById('resetTest__01'));
    var result = document.getElementById('resetTest__01').innerHTML;
    var expected = "00";
    assert.equal(result, expected);
  });

test('reset function changes 60 to 00', function(assert) {
  reset(document.getElementById('resetTest__60'));
  var result = document.getElementById('resetTest__60').innerHTML;
  var expected = "00";
  assert.equal(result, expected);
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

//Test function that converts single digits to double digits (with 0 in front)
        test('seconds less than 10 should have 0 displayed before them', function(assert) {
          var expected = '01';
          var result = addZero('1');
          assert.equal(result, expected);
        });

        test('seconds less than 10 should have 0 displayed before them', function(assert) {
          var expected = '09';
          var result = addZero('9');
          assert.equal(result, expected);
        });

        test('seconds less than 10 should have 0 displayed before them', function(assert) {
          var expected = '20';
          var result = addZero('20');
          assert.equal(result, expected);
        });

        test('seconds less than 10 should have 0 displayed before them', function(assert) {
          var expected = '20';
          var result = addZero('20');
          assert.equal(result, expected);
        });

  // Test that seconds don't rise above 60

  document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){

  window.setInterval( function (){

  test('seconds should not go over 60', function (assert) {
    var expected = document.getElementById('stopwatch__seconds').innerHTML > 59;
    var result = false;
    assert.equal(result, expected);

  });

}, 20000);

});

// Test that minutes don't rise above 60

document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){

window.setInterval( function (){

test('minutes should not go over 60', function (assert) {
  var expected = document.getElementById('stopwatch__minutes').innerHTML > 59;
  var result = false;
  assert.equal(result, expected);

});

}, 60000);

});

// Test that hours don't rise above 23

document.getElementById('stopwatch__buttons__start').addEventListener("click", function(){

window.setInterval( function (){

test('hours should not go over 23', function (assert) {
  var expected = document.getElementById('stopwatch__hours').innerHTML > 23;
  var result = false;
  assert.equal(result, expected);

});

}, 3600000);

});

// Checks that clone function copies element

var lapClicks = 0;

document.getElementById('stopwatch__buttons__lap').addEventListener("click", function(){

lapClicks ++;

test('element should be duplicated', function(assert) {
  clone(document.getElementById('cloneTest'));
  var expected = 2*lapClicks;
  var result = document.getElementById('cloned').childElementCount;
  assert.equal(result, expected);
});

});

// Checks that reset button removes all laps

document.getElementById('stopwatch__buttons__reset').addEventListener("click", function(){

test('reset button removes children from cloned (lap) section', function(assert) {
  var expected = 0;
  var result = lapRemove();
  assert.equal(result, expected);
});

});
