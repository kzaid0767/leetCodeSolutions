let s = "   fly me   to   the moon  "

function lengthLastW(s) {
    let arr = (s.trim().split(' '))
    return arr[arr.length -1].length
}

console.log(lengthLastW(s))