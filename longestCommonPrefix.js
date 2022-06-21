//let strs = ["flower", "flow", "flight"]
//let strs = ["flowerr", "flowr", "fliwhtr"]
//let strs = ["dog","racecar","car"]
//let strs = ["aa","aa"]
//let strs = ["aa","ab"]
function checking(val) {
    let str = ""

    for (let i = 0; i < val[0].length; i++) {
        //let T = val.every(member => member.includes(val[0][i]))
       
        let U = val.every(member => member[i] === val[0][i])
        if(!U) break
        if (U) {
            str = str.concat(val[0][i])
        }
    }
    return str
}
//checking(strs)
console.log(checking(strs))
