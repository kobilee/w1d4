var countdownGenerator = function (x) {
    /* your code here */
    var y = 2;

    return function() {
        x -= 1
        if (x > -1){
            console.log("T-minus", x + 1 ,"...");
        } else if (x == -1){
            console.log("Blast Off!");
        } else {
            console.log("Rockets already gone, bub!");
        }
        return x;
    }


  };

  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!