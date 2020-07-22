// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
var wordsLength = [];

function findScaryWord(input) {
  if (input.length == 0) {
    return null;
  } else if (input.length == 1) {
    return input[0];
  }
  else {

    for (let index = 0; index < length; index++) {
      const element = input[index].length;
      wordsLength.push(element);
    }
    var max = Math.max(wordsLength);
    // wordsLength.sort();
    return max;
  }

}
findScaryWord(words);

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(num) {
  if (num.length == 1) {
    return num[0];
  } else {
    const sum = 0;
    for (let index = 0; index < num.length; index++) {
      sum = sum + array[index];
    }
    return sum;
  }
}

netPrice(numbers);

//Progrssion 3.1
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add(num) {
  if (num.length == 0) {
    return 0;
  }
  if (num.length != 0) {
    const sum = 0;
    for (let index = 0; index < num.length; index++) {
      const element = num[index];

      if (typeof (element) == "number") {
        sum = sum + element;
      } else if (typeof (element) == "boolean") {
        const ele = Number(element);
        sum = sum + ele;
      } else if (typeof (element) == "string") {
        const len = element.length;
        sum = sum + len;
      }

      return sum;
    }

  }
}

add(mixedArr);


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(num) {
  if (num.length == 0) {
    return 0;
  }

  if (num.length != 0) {
    const sum = 0;
    for (let index = 0; index < num.length; index++) {
      sum = sum + num[index];
    }

    const avg = sum / numbersAvg.length;
    return avg;

  }
}

midPointOfLevels(numbersAvg);

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  const sum = 0;
  for (let index = 0; index < words.length; index++) {
    sum = sum + words[index].length;
  }

  const avg = sum / wordsArr.length;
  return avg;
}

function avg(arr) {
  const sum = add(arr);
  if (sum == 0) {
    return null;
  } else {
    const average = sum / arr.length;
    return average;
  }
}
avg(mixedArr);

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(arr, wordToSearch) {
  if (arr.length == 0) {
    return null;
  } else {
    const arr1 = arr.split(" ");
    let check;
    for (let index = 0; index < arr1.length; index++) {
      const element = arr1[index];
      if (element == wordToSearch) {
        check = true;
      } else {
        check = false;
      }
    }
    return check;
  }
}

searchElement(wordsFind, "starting");

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(arr, wordToSearch) {
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return 1;
  } else if (arr.length > 1) {
    const arr1 = arr.split(" ");
    let check = 0;
    for (let index = 0; index < arr1.length; index++) {
      const element = arr1[index];
      if (element == wordToSearch) {
        check = check + 1;
      }

    }
    return check;
  }
}

howManyTimesElementRepeated(wordsCount, "matter");
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
