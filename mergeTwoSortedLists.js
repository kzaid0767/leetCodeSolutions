/* let list1 = [1,2,4]
let  list2 = [1,3,4] */
let list1 = [1,2,-3]
let  list2 = [-100,3,4]
function mergeTwo(list1,list2){
    let list3 = []
    for (const el of list1) {
        list3.push(el)
    }
    for (const el of list2) {
        list3.push(el)
    }
    list3 = list3.sort((a,b) => (a-b))
    return list3
}
//mergeTwo(list1,list2)
console.log(mergeTwo(list1,list2))