// cats array
const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

//destructive functions
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

//nondestructive function
function appendCat(name) {
  return [...cats, name]; // or cats.concat(name)
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}

