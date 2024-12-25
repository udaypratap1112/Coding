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


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    
};