function isPalindrome(x) {
    if (x < -(2 ** 31) || x > 2 ** 31 - 1) return false;
    let a = x.toString();
    let b = '';
    for (let i = a.length - 1; i > -1; i--) {
        b += a[i];
    }
    return +a === +b
};