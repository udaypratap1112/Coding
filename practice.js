// /**
//  * @param {string} mainString
//  * @param {string} subStr
//  * @return {number}
//  */
// var strStr = function (mainString, subStr) {

//     const mLen = mainString.length;
//     const sLen = subStr.length;

//     if (sLen > mLen) return -1;

//     for (let i = 0; i <= mLen - sLen; i++) {
//         let match = true;

//         for (let j = 0; j < sLen; j++) {
//             if (mainString[i + j] != subStr[j]) {
//                 match = false;
//                 break;
//             };
//         }

//         if (match) return i


//     }

//     return -1

// };

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(a, b) {
    if (a === 0)
        return 0;

    // The sign will be negative only if sign of 
    // divisor and dividend are different
    const sign = ((a < 0) ^ (b < 0)) ? -1 : 1;

    // Convert divisor and dividend to positive numbers
    a = Math.abs(a);
    b = Math.abs(b);

    // Initialize the quotient
    let quotient = 0;

    // Perform repeated subtraction till dividend
    // is greater than divisor
    while (a >= b) {
        a -= b;
        ++quotient;
    }
    quotient = quotient * sign;

    if (quotient > 2 ** 31 - 1) {
        return 2 ** 31 - 1
    }else if(quotient < -(2**31)){
        return -(2**31)
    }


    return quotient;

}


console.log(divide(2147483749, -1))