/* let nums = [3, 2, 2, 3]
let val = 3 */

let nums = [0, 1, 2, 2, 3, 0, 4, 2]

let val = 7

function outer(nums, val) {
    function remove(nums, val) {
        let b = nums.findIndex(element => element === val)
        if (b === -1) return
        nums.splice(b, 1)
        if (nums.includes(val)) {
            remove(nums, val)
        }

    }

    remove(nums, val)
    return nums
}

console.log(outer(nums, val))