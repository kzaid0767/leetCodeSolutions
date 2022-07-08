let head = []

function reversed(head){
    let arr = []
    for(let e of head ) {
        arr.unshift(e)
    }
    return arr
}

console.log(reversed(head))

// head.map(element => arr.unshift(element))