// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

    arr.forEach(found);
  }

  function actionWhenFound(element, index) {
    if (element === "Waldo") {
        console.log("Found Waldo at index " + index + "!");
    }
  }

  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);