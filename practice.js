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

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     const hasMap={};
//      const result=[]
//      for(let num of nums){
//          if(!hasMap[num]){
//              result.push(num)
//          }

//          hasMap[num]=true

//      }
//     //  console.log(hasMap

//      return result

//  };

// console.log(removeDuplicates([0,0,12,3,4,3]));

// function permute(nums) {
//   let result = [];

//   function backtrack(current) {
//     console.log(current);if (current.length == nums.length) {
//       result.push([...current]);
//       return;
//     }

//     for (let num of nums) {
//       if (current.includes(num)) {
//         continue;
//       }

//       current.push(num);
//       backtrack(current);
//       current.pop();
//     }
//   }

//   backtrack([])

//   return result
// }

// function permuteString(s) {
//     let result = [];

//     function backtrack(current) {
//       console.log(current);
//       if (current.length == s.length) {
//         result.push(current);
//         return;
//       }

//       for (let str of s) {
//         if (current.includes(str)) {
//           continue;
//         }
//         const newCurrent=current+str

//         backtrack(newCurrent);

//       }
//     }

//     backtrack("")

//     return result
//   }

// function subsequence(s) {
//     let result = [""];  // Start with the empty subsequence

//     function backtrack(index) {
//         // Base case: if index exceeds the length of the string, stop recursion
//         if (index >= s.length) {
//             return;
//         }

//         // Make a copy of the current result to add new subsequences
//         let newSubsequences = [];

//         // Iterate through the current subsequences in result
//         for (let word of result) {
//             newSubsequences.push(word + s[index]);  // Create new subsequences by adding the current character
//         }

//         // Merge new subsequences into result
//         result = result.concat(newSubsequences);

//         // Recurse with the next character
//         backtrack(index + 1);
//     }

//     // Start the backtracking process
//     backtrack(0);

//     return result;
// }
// let nums = [1,2,3,4,5,6,7], k = 3
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// z

// console.log(rotate(nums,k));

// /**
//  * @param {string} s
//  * @param {string} goal
//  * @return {boolean}
//  */
// var rotateString = function(s, goal) {
//     if(s==goal) return true

//     for(let i=s.length-1;i>0;i--){
//         const newStr=s.substring(i)+s.substring(0,i)
//         if(newStr==goal) return true
//     }

//     return false

// };

// rotateString('abcde')

/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   let matrix = new Array(n).fill(null).map(val=>[]);

//   let row = 0,
//     col = 0;
//   let direction = 1;
//   let cycle = 0;
//   let isColTransverse = true;
//   let num = 1;

//   for (let i = 0; i < n * n; i++) {
//     matrix[row][col] = num;

//     if (isColTransverse) {
//       if (direction == 1 && col + 1 > n - 1-cycle) {
//         isColTransverse = false;
//       } else if (direction == -1 && col - 1 < 0+cycle) {
//         isColTransverse = false;
//         direction = -1;
//         cycle++
//       }
//     } else {
//         if(direction==1&&row+1>n-1-cycle){
//             isColTransverse=true;
//             direction=-1
//         }else if(direction == -1 && row - 1 < 0+cycle){
//             isColTransverse=true
//             direction=1
//         }

//     }

//     console.log('Row: '+row+"  " +"Col: "+col);

//     col = isColTransverse ? col + direction : col;
//     row = isColTransverse ? row : row + direction;
//     num++;

//   }

// return matrix

// };

// generateMatrix(4)

// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {string}
//  */
// var getPermutation = function (n, k) {
//   let stri = new Array(n)
//     .fill()
//     .map((v, i) => i + 1)
//     .join("");
//   let result = [];

//   function backtrack(current, remaining) {
//     if (current.length >= stri.length) {
//       result.push(current);
//       return;
//     }

//     for (let i = 0; i < remaining.length; i++) {
//       backtrack(
//         current + remaining[i],
//         remaining.substring(0, i) + remaining.substring(i + 1)
//       );
//     }
//   }

//   backtrack("", stri);

//   return result[k];
// };
// getPermutation(3);


// var uniquePaths = function(m, n) {
//     let paths=0;

//     function backtrack(row,col){
//        if(row==m-1&&col==n-1){
//         paths++
//         return
//        }

//        if(row+1<=m-1) backtrack(row+1,col)
//        if(col+1<=n-1) backtrack(row,col+1)

       
       

        

//     }

//     backtrack(0,0)
//     console.log(paths);

// };
// uniquePaths(3,7)


/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {

//     let m= grid.length
//     let n= grid[0].length
//     console.log(m,n);

//     let  minimumSum=Number.POSITIVE_INFINITY;

//     function backtrack(current,row,col){
//       console.log("row:"+row+"  "+"col: "+col);
//         if(row==m-1&&col==n-1){
//            if(current<minimumSum){
//                 minimumSum=current
//             }
//             return
//         }

//         if(row+1<m) backtrack(current+grid[row+1][col],row+1,col)    
//         if(col+1<n) backtrack(current+grid[row][col+1],row,col+1)    

//     }
// backtrack(grid[0][0],0,0)

// return minimumSum
    
// };

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function(nums) {
//     let result=[[]];

//     function backtrack(index){
//         if(index>=nums.length){
//             return
//         }
        

//         let subsequence=[];

//         for(let i=0;i<result.length;i++){
//             subsequence.push([...result[i],nums[index]])
//         } 

//         result=[...result,...subsequence]
//         backtrack(index+1)

//     }

//     backtrack(0)

//     console.log(result)
//     return result

// };

// subsets([0])



/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
};