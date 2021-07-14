// '3453A 3 4 B433' // '34343433'
// const poyoyotion = value => {
//   let i = 0;
//   const result = [];
//   while (i < value.length) {
//     if (value[i] === 'A') {
//       result[i - 1] = (Number(value[i - 1]) + 1);
//       i += 1;
//     }
//     if (value[i] === 'B') {
//       result[i] = (Number(value[i + 1]) - 1);
//       i += 1;
//     } else {
//       result.push(value[i]);
//     }
//     i += 1;
//   }
//   return result.join('');
// };
// console.log(poyoyotion('432A452B2')) ///4334521
// console.log(poyoyotion('7545B4B1')) // 754530




///////////////////////////////////////factor chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
// factorChain([1, 2, 4, 8, 16, 32]) ➞ true

// factorChain([1, 1, 1, 1, 1, 1]) ➞ true

// factorChain([2, 4, 6, 7, 12]) ➞ false

// factorChain([10, 1]) ➞ false


function factorChain(arr) {
    // ////////////solution 1
	// for(let i=0;i<arr.length;i++){
	// 	if(arr[i+1]%arr[i]){
	// 		return false
	// 	}
	// }
	// 	return true



    // //////////////////solution2
    // return arr.slice(1).every((num,i)=>num%arr[i]===0)


    // ////////////////////solution 3
    // return arr.reduce((acc,curr,i)=> {
    //     return arr[i]%arr[i-1]===0
    // })
}

// console.log(factorChain([1, 2, 4, 8, 16, 32])) //➞ true

// console.log(factorChain([1, 1, 1, 1, 1, 1])) //➞ true

// console.log(factorChain([2, 4, 6, 7, 12])) //➞ false

// console.log(factorChain([10, 1])) //➞ false


// //////////////////////////////////index multiplier

// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)

function indexMultiplier(arr){
    // ///////////////solution 1
    // let output = 0;
    // for(let i=0; i<arr.length;i++){
    //     output+=i*(arr[i])
    // }
    // return output


// //////////////solution 2
    return arr.reduce((acc,curr,i)=> {
        return acc + curr*i
    },0)
}




// console.log(indexMultiplier([9, 3, 7, -7]), -4)
// console.log(indexMultiplier([3, 8, 6, -4]), 8)
// console.log(indexMultiplier([10, -9, -2, 0, 2]), -5)
// console.log(indexMultiplier([4, 4, 2, 2, -4]), -2)
// console.log(indexMultiplier([9, 4, 7, 5, -1, -3]), 14)
// console.log(indexMultiplier([-9, 5, 9, 5, -7, 7]), 45)
// console.log(indexMultiplier([-1, -2, 8, -5]), -1)
// console.log(indexMultiplier([7, 10, -5, -4, 6, 2]), 22)
// console.log(indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16)
// console.log(indexMultiplier([-2, 5, -7, -23, 0, 14]), -8)
// console.log(indexMultiplier([53, -43, 39, -2, -11, 3]), 0)
// console.log(indexMultiplier([40, 32, -18, 48, -15]), 80)
// console.log(indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170)
// console.log(indexMultiplier([-21, 30, 20, 6, -16]), 24)
// console.log(indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183)
// console.log(indexMultiplier([]), 0)



// ////////////////////special arrays
// An array is special if every even index contains an even number and every odd index 
// contains an odd number. 
// Create a function that returns true if an array is special, and false otherwise.

// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.


function isSpecialArray(arr){
    // let oResult = []
    // let eResult = []
    // for(let num in arr){
    //     if(num%2===0){
    //         eResult.push(num)
    //     } else {
    //         oResult.push(num)
    //     }
    // }
    // return 'oResult: ' + oResult + '| eResult:' + eResult



    // // solution 1
    // return arr.every((value,index)=> value%2 === index%2)


    // solution 2
//     for (var i = 0; i < arr.length; i++)
//     {
//         if (i % 2 === 0 ) {
//             if (arr[i] % 2 !== 0) return false; 
//         }
//         else
//             if (arr[i] % 2 === 0) return false; 
//     }

// return true

}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true)
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false)
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false)
// console.log(isSpecialArray([1, 1, 1, 2]), false)
// console.log(isSpecialArray([2, 2, 2, 2]), false)
// console.log(isSpecialArray([2, 1, 2, 1]), true)
// console.log(isSpecialArray([4, 5, 6, 7]), true)
// console.log(isSpecialArray([4, 5, 6, 7, 0, 5]), true)



// /////////////////////filter repeating hcaracter strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"]) 
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
// ➞ []
// Notes
// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(arr){
    // /////////////////solution 1///////////////////
    // decalre variable and assign as empty array
    let result = [];
    // iterate over array w/ for loop
    for(let i=0;i<arr.length;i++){
        // convert current string to an array
        let converted = arr[i].split('')
        // iterate over coverted array
        let repeatedChar = true
        for(let j=0;j<converted.length;j++){
            // compare element with converted @ [0] index
            if(converted[0]!==converted[j]){
                repeatedChar = false
                break
            }
        }
        if(repeatedChar){
            result.push(arr[i])
        }
    }
    return result

    // //////////////////solution 2//////////////////////
    // return arr.filter(num => num===num[0].repeat(num.length))



}




// console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']))//,['aaaaaa', 'd', 'eeee'])

// console.log(identicalFilter(['88', '999', '22', '545', '133'])) //['88', '999', '22'])

// console.log(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])) //[])

// console.log(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee'])) //['aa', 'bb', 'cc', 'dd', 'ee'])

// console.log(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee'])) //['eee'])

// console.log(identicalFilter(['1', '2', '3'])) //['1', '2', '3'])

// ////////////////////////////////////////the reverser

// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// Examples
// reverse("Hello World") ➞ "DLROw OLLEh"

// reverse("ReVeRsE") ➞ "eSrEvEr"

// reverse("Radar") ➞ "RADAr"
// Notes
// There will be no punctuation in any of the test cases.

function reversed(str){
    // //////////////////solution 1
    // let convert= str.split('')
    // .reverse()
    // .join('')
    
    // let strings = ''
    
    // for(let letter of convert){
    //     if(letter === letter.toUpperCase()){
    //         strings +=letter.toLowerCase() 
    //     } else if(letter === letter.toLowerCase()){
    //         strings+=letter.toUpperCase()
    //     }
    // }
    // return strings



    // //////////////solution 2

    // return str.split('')
    // .reverse()
    // .map(x => {
    //     if (x === x.toLowerCase()) {
    //     return x.toUpperCase();
    // }else {
    //     return x.toLowerCase();
    // }})
    // .join('');

}

// console.log(reversed("Hello World")) //, "DLROw OLLEh")
// console.log(reversed("ReVeRsE")) //, "eSrEvEr")
// console.log(reversed("")) //, "")
// console.log(reversed("Radar")) //, "RADAr")


// /////////////////////////////////replace Vowel with another Character/////////////

// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples
// replaceVowel("karachi") ➞ "k1r1ch3"
// replaceVowel("chembur") ➞ "ch2mb5r
// replaceVowel("khandbari") ➞ "kh1ndb1r3"
function replaceVowel(word){
    debugger;
    let obj = {
        'a':1,
        'e':2,
        'i':3,
        'o':4,
        'u':5
    }
    let output = ''

// // ///////////////solution 1////////////////////
//     for(let key of word){
//         if(obj[key]){
//             output+=obj[key]
//         } else {
//             output+=key
//         }
//     }
//     return output


///////////////solutino 2//////.//// 
// return word.replace(/[aeiou]/gi, w => obj[w])

//////////////////////////////// solution 3
// return word.split('').map(x => (obj.hasOwnProperty(x) ? obj[x] : x)).join('')

}


// console.log(replaceVowel("karachi"))//, "k1r1ch3")
// console.log(replaceVowel("dang"))//, "d1ng")
// console.log(replaceVowel("aen"))//, "12n")
// console.log(replaceVowel("chembur"))//, "ch2mb5r")
// console.log(replaceVowel("khandbari"))//, "kh1ndb1r3")
// console.log(replaceVowel("thamel"))//, "th1m2l")


// ///////////////////////////multiplying numbers in a string////////////////

// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples
// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20

function multiplyNums(str){
    // ////////////solutin 1
    // let convert = str.split(', ')
    // return convert.reduce((acc,curr)=>acc*+curr,1)

    // //////////////solution 2

    // return str.split(', ')
    // .map(num => Number(num))
    // .reduce((acc,curr)=> acc*curr)


    // ///////////solution 3///////////////
    // let output = 1
    // let convert = str.split(', ')

    // for(let num of convert){
    //     output*=parseInt(num)
    // }
    // return output
}



// console.log(multiplyNums("2, 3"), 6)
// console.log(multiplyNums("1, 2, 3, 4"), 24)
// console.log(multiplyNums("54, 75, 453, 0"), 0)
// console.log(multiplyNums("10, -2"), -20)
// console.log(multiplyNums("-26, 1, -27, -12, -19"), 160056)
// console.log(multiplyNums("16, 8"), 128)
// console.log(multiplyNums("-27, -14, -28, 13, -17"), 2339064)
// console.log(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10"), -4082823360000)
// console.log(multiplyNums("1, 13, 0, -11, 26, -17, 21"), 0)
// console.log(multiplyNums("-25, -19, 7, -26, -26"), 2247700)
// console.log(multiplyNums("-4, -16, -22, -3, -6"), -25344)
// console.log(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29"), 29641926600)
// console.log(multiplyNums("-25, 22"), -550)
// console.log(multiplyNums("-25"), -25)


// //////////////////Censor words longer than 4 characters
// Create a function that takes a string and censors words over four characters with *.

// Examples
// censor("The code is fourty") ➞ "The code is ******"

// censor("Two plus three is five") ➞ "Two plus ***** is five"

// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
// Notes
// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// The amount of * is the same as the length of the word.

function censor(str) {
    // ///////////////solution 1
    // let convert = str.split(' ')
    // let output = ''
    // let star = '*'
    // // return convert

    // for(let i=0;i<convert.length;i++){
    //     if(convert[i].length>4){
    //         convert[i] = '*'.repeat(convert[i].length)

    //     } 
    // }
    // return convert.join(' ')


    /////////////// solution 2
    // return str.split(' ')
    // .map(word => word.length>4 ? '*'.repeat(word.length):word)
    // .join(' ')
    
	
}

// console.log(censor("The code is fourty"))//,"The code is ******", "Example #1")
// console.log(censor("Two plus three is five"))//,"Two plus ***** is five", "Example #2")
// console.log(censor("aaaa aaaaa 1234 12345"))//,"aaaa ***** 1234 *****", "Example #3")
// console.log(censor("abcdefghijklmnop"))//,"****************")
// console.log(censor("a"))//,"a")

// ///////////////////////is the word an isogram?

// Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples
// isIsogram("Algorism") ➞ true

// isIsogram("PasSword") ➞ false
// // Not case sensitive.

// isIsogram("Consecutive") ➞ false
// Notes
// Ignore letter case (should not be case sensitive).
// All test cases contain valid one word strings.


function isIsogram(str){

    ////////////////////////// solution 1
    //  convert = str.toLowerCase().split('').sort()

    // for(let i=1; i<convert.length;i++){
    //     if(convert[i]===convert[i-1]){
    //         return false
    //     }
    // }
    // return true
// /////////////////solution 2

// str = str.toLowerCase();
// return str.split('')
//   .filter((x, index) => str.indexOf(x) === index).length === str.length


////////////////////////////////////////// solution 3

// s1 = str.toLowerCase();
// return !s1.split('').reduce(function(dup, letter, index){
//   return dup || s1.indexOf(letter) !== index;
// }, false);




}


// console.log(isIsogram("Algorism"))//, true)
// console.log(isIsogram("PasSword"))//, false)
// console.log(isIsogram("Dermatoglyphics"))//, true)
// console.log(isIsogram("Cat"))//, true)
// console.log(isIsogram("Filmography"))//, true)
// console.log(isIsogram("Consecutive"))//, false)
// console.log(isIsogram("Bankruptcies"))//, true)
// console.log(isIsogram("Unforgivable"))//, true)
// console.log(isIsogram("Unpredictably"))//, true)
// console.log(isIsogram("Moose"))//, false)






function poyoyotion(str){
    debugger
    let convert = str.split('')
    // console.log(typeof convert)
    let result =[]

    //  convert.splice(3,1,'fuck')
    //  console.log(convert)


    for(let i=0; i<convert.length;i++){
        // console.log(result)
        if(convert[i]==='A'){
            prevNum = parseInt(convert[i-1])
            result.splice(i-1,1,prevNum+1)

             
            // result.push(prevNum+1)
            // result.push(i+1)

        } else if(convert[i-1]==='B'){
            currentNum = parseInt(convert[i])
            result.slice(0,i-1)
            result.splice(i-1,1,currentNum-1)

        } else {
            result.push(convert[i])
        }
    }
    return result.join('');

}

console.log(poyoyotion('432A452B2')) ///4334521
console.log(poyoyotion('012345678'))
console.log(poyoyotion('7545B4B1')) // 754530



function praca(str){
    convert = str.split('')
    return convert.slice(0,6).join('')

}
console.log(praca('433452B1'))

const poyoyotion = value => {
    debugger
  let i = 0;
  const result = [];
  while (i < value.length) {
    if (value[i] === 'A') {
      result[i - 1] = (Number(value[i - 1]) + 1);
      i += 1;
    }
    if (value[i] === 'B') {
      result[i] = (Number(value[i + 1]) - 1);
      i += 1;
    } else {
      result.push(value[i]);
    }
    i += 1;
  }
  return result.join('');
};
console.log(poyoyotion('432A452B2')) ///4334521
console.log(poyoyotion('7545B4B1')) // 754530

