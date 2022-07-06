//let digits = [1, 2, 3]
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
let figits = [9,9]
let migits = [1,1,9]

function plusOne(digits) {
    let n = digits.length
    if (digits[n - 1] < 9) {
        digits[n - 1] += 1
        return digits
    } else {
        let i = n - 1
        while (i >= 0) {
            if (digits[i - 1] < 9) {  //digits[n-1] = 9
                digits[i - 1] += 1
                digits[i] = 0
                return digits
            } else {
                digits[i] = 0
            }
            i--

        }

    }
    if (digits[0] === 0) {
        digits.splice(0, 0, 1)
    }
    return digits
}

console.log(plusOne(migits))