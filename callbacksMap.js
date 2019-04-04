
var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map (arr, doSomething) {
    var output = [];
    arr.forEach(element => output.push(doSomething(element)));
    console.log(output);

}
