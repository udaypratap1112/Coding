// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//     let hasMap = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     }
//     let stack = []
//     // (){()}
//     for (let i = 0; i < s.length; i++) {
//         const current = s[i];

//         if (current == '(' || current == '{' || current == '[') {
//             stack.push(current);
//         }

//         if (current == ')' || current == '}' || current == ']') {
//             if (stack.pop() !== hasMap[current]) {
//                 return false;
//             }
//         }
// }


//     return stack.length === 0;

// };


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
//     const hasMap={
//         ')':'('
//     }
//     const stack=[];
//     let starCount=0;
//     let closingCount=0;

//     for(let char of s){
//         if(char=='*'){
//             starCount++
//             continue;
//         }

//        if(char=='('){
//         stack.push(char)
//        }
//        if(char==')'){
//             if(stack[stack.length-1]==hasMap[char]){
//                 stack.pop()
//             }else{
//                 closingCount++;
//             }
//        }
//     }

//     console.log(stack);
//     console.log('startCount: '+starCount+ '   closingBracket Count: '+closingCount);

//     if(starCount>=closingCount&&stack.length<starCount-closingCount){
//         return true
//     }



// return false

// };

// console.log(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"));


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     let converted=s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
//     console.log(converted);
//     let low=0;
//     let high=converted.length-1;

//     while(low<high){
//         if(converted[low]!==converted[high]){
//             return false;

//         }
//     }

//     return true;


// };

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//    let freq =new Uint16Array(26)

//     for(let i=0;i<s.length;i++){
//         freq[s.charCodeAt(i)-97]++
//     }

//     for(let i=0;i<t.length;i++){
//         if(freq[t.charCodeAt(i)-97]-- ===0) return false
//     }


//     return freq.every(val=>val==0)

// };


// var myPow = function (x, n) {
//     if (x == 0) return 0
//     if (n == 0) return 1
//     let absPow = Math.abs(n)


//     let result = x;

//     for (let i = 1; i < absPow; i++) {
//         result *= x
//     }


//     if (n < 0) return (1 / result);
//     return result
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
// //nums = [-2,1,-3,4,-1,2,1,-5,4]
//     let currentSum = nums[0];
//     let maxSum = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         currentSum+=nums[i];
//         if(currentSum<nums[i]){
//             currentSum=nums[i]
//         }
//         if(currentSum>maxSum) {
//             maxSum=currentSum
//         }
//     }

//     console.log(maxSum);


// };

// let nums = [-2,1,-3,4,-1,2,1,-5,4]

// console.log(maxSubArray(nums));

// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (matrix) {
//     let n = matrix[0].length;
//     let m = matrix.length

//     const res = [];
//     let cycle = 0;
//     isColTransver = true;
//     let row = 0;
//     let col = 0;
//     let direction = 1

//     for (let i = 0; i < m * n; i++) {

//         console.log(row, col);
//         let curr = matrix[row][col]
//         if (!curr) break
//         res.push(curr)

//         if (isColTransver) {
//             if (direction == 1 && col + 1 > n - 1 - cycle) {
//                 console.log("changing dirrection: "+row+":"+col);
//                 isColTransver = false
//                 row += direction;
//             } else if (direction == -1 && col - 1 < 0 + cycle) {
//                 console.log("changing dirrection: "+row+":"+col);
//                 isColTransver = false;
//                 cycle += 1
//                 row += direction
//             }
//             else {
//                 col += direction;
//             }
//         } else {

//             if (direction == 1 && row + 1 > m - 1 - cycle) {
//                 console.log("changing dirrection: "+row+":"+col);
//                 isColTransver = true;
//                 direction = -1;
//                 col += direction;
//             } else if (direction == -1 && row - 1 < 0 + cycle) {
//                 console.log("changing dirrection: "+row+":"+col);
//                 isColTransver = true;
//                 direction = 1
//                 col += direction
//             } else {
//                 row += direction
//             }


//         }


//     }

//     return res


// };

// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]]));

