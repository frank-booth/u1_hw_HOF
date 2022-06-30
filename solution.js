// You must RETURN your result in each function!
const nums = [1, 2, 3, 4]
nums.forEach(printNums)
function printNums(nums) {
  const newNums = nums
  return newNums
}
/**
 *  Using .forEach, add each number in the nums array to a new array.
 * @param nums => [1,2,3,4]
 */
const nums1 = [1, 2, 3, 4, 5]
nums1.forEach(returnSums)
function returnSums(nums1, index) {
  newArr1 = nums1 + index
  //console.log(newArr1)
  return newArr1
}

/**
 * Using forEach, push the sum of n plus the index
 * to a new array and return the new array
 * @param nums => [1,2,3,4,5]
 */

function returnTotal(objs) {
  let sum = 0
  const numsPrint = objs.forEach((obj) => {
    sum += obj.n
  })
  return sum
}
/**
 * Using forEach return a number that is the total sum of all numbers in the array of objects.
 * The key for each object will be n
 * @param objs => [{n:1}]
 */

const decimals = [2.3, 2.4, 32.99]
const newArr2 = decimals.map(printMoney)
function printMoney(decimals) {
  return `$${decimals.toFixed(2)}`
}
//console.log(newArr2)

/**
 * @param decimals => [2.30, 2.40, 32.99]
 * Using .map, return an array of decimals formatted as dollars.
 * EX: {
 * input: [12.34, 9.99],
 * output: ['$12.34', '$9.99']
 * }
 * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
 */

function returnAllTrueValues(values) {
  const trueVal = values.filter((val) => {
    if (val.happy === true) {
      return val
    }
  })
  return trueVal
  /**v
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

/**
 * @param values => [{name: 'Joe', happy:false}]
 * Using .filter, return an array of objects where happy equals true
 */
const nums2 = [1, 2, 3, 4]
const sum1 = nums2.reduce(addTwo, 0)
function addTwo(total, numbers) {
  return total + numbers + 2
}
//console.log(sum1)

/**
 * @param nums => [1,2,3,4]
 * Using .reduce, return the total sum of all numbers.
 * Each number should have 2 added to it.
 */
//   3
//   4 => 7
const strings = ['h', 'e', 'l', 'l', 'o']
const newString = strings.reduce(joinStrings)
function joinStrings(total, letter) {
  return total + letter
}
console.log(newString)
/**
 * @param strings => ['g', 'f', 'z']
 * Using .reduce, return a new string containing each string from the strings array.
 */

//Bonus
function sortObjectsByValue(objs) {
  const sortByValue = objs.sort((a, b) => {
    return a.value - b.value
  })
  return sortByValue
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
