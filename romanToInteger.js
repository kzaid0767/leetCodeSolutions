function romanTo(s) {
    let val = 0;
    for (let letter of s) {
        if (letter === 'M') { val += 1000 }

        if (letter === 'D') { val += 500 }
        if (letter === 'C') { val += 100 }
        if (letter === 'L') { val += 50 }
        if (letter === 'X') { val += 10 }
        if (letter === 'V') { val += 5 }
        if (letter === 'I') { val += 1 }
        console.log(letter, val)
    }
    if (s.includes('CM')) { val -= 200 }
    if (s.includes('CD')) { val -= 200 }

    if (s.includes('XC')) { val -= 20 }
    if (s.includes('XL')) { val -= 20 }

    if (s.includes('IV')) { val -= 2 }
    if (s.includes('IX')) { val -= 2 }

    return val

};