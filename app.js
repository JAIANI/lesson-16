// function about numbers are odd or even

function number(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(number(3));
// Perimeter
function rectanglePerimeter(length, width) {
  return 2 * (width + length);
}
let length = 5;
let width = 4;
console.log("perimeter=", 2 * (width + length));
// კვადრატის პერიმეტრი
function squarePerimeter(side) {
  return 4 * side;
}
let side = 5;
console.log("squarePerimeter=", 4 * side);
// get random number ეს სამწუხაროდ ვერ გავაკეთე ქალბატონო ალინა რაღაც სასწაულ შედეგებს ვღებულობ
//   about USD, EUR,GEL.
function getCurrencySymbolFromCode(curr) {
  let symbol;
  switch (curr) {
    case "USD":
      symbol = "$";
      break;
    case "EUR":
      symbol = "€";
      break;
    case "GEL":
      symbol = "₾";
      break;
    default:
      symbol = "Error";
      break;
  }
  return symbol;
}

console.log(getCurrencySymbolFromCode());
//   about people
let people = [
  {
    name: "Beqa",
    age: 17,
  },
  {
    name: "Jaba",
    age: 21,
  },
  {
    name: "Jemali",
    age: 26,
  },

  {
    name: "Ednari",
    age: 51,
  },
  {
    name: "nika",
    age: 15,
  },
];

function getYoungerPerson(array) {
  let youngest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].age < youngest.age) {
      youngest = array[i];
    }
  }
  return youngest;
}
console.log(getYoungerPerson(people));
