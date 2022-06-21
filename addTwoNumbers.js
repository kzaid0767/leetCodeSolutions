/* let l1 = [2,4,3]
let  l2 = [5,6,4] */
let l1 = [9,9,9,9,9,9,9]
let  l2 = [9,9,9,9]
/* let l1 = [0]
let l2 = [0] */

function addTwoNumber(l1,l2) {
    let l3 = []
    l1 = l1.reverse()
    l2 = l2.reverse()
    let num1 = ''
    let num2 = ''
    for (const element of l1) {
        num1 = num1.concat(element)
        
    }
    for (const element of l2) {
        num2 = num2.concat(element)
        
    }
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let num3 = num1+num2
    num3 = num3.toString()
    for (const element of num3) {
        l3.unshift(parseInt( element))
    }
    return (l3)
}

console.log(addTwoNumber(l1,l2))