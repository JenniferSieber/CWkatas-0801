// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript
const transposeTwoStrings = arr => {
  return [...Array(Math.max(...arr.map(el => el.length)))]
    .map( (_,i) => `${arr[0][i] || ' '} ${arr[1][i] || ' '}`)
    .join('\n');
}

console.log(transposeTwoStrings(['Hello', 'World']));

// KATA 2 7kyu
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
const sortByLength = arr => arr.sort((a,b) => a.length - b.length);

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));

// KATA 3 8kyu
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((ttl, cv) => ttl + cv,0);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// KATA 4 8kyu
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
const digitize = n =>  n.toString().split('').reverse().map(el => el = parseInt(el));
 
console.log(digitize(35231));

// KATA 5 8kyu
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
const twoOldestAges = ages => {
  let arr = ages.sort((a,b) => b - a);
  return [arr[1], arr[0]];
}
console.log(twoOldestAges([1,5,87,45,8,8]))
