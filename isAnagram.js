/* let s = "rat"
let t = "car" */

let s = "mnagram"
let t = "nagaram"


function anagram(s, t) {
    if (s.length !== t.length) return false
    for (letter of s) {
        if (t.includes(letter)) {
            t = t.replace(letter, '')
        }
    }

    return !Boolean(t.length)
}

console.log(anagram(s, t))