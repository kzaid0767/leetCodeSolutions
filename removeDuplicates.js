let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5]

function remove(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j of nums) {
            if (nums[i] === j) {
                nums.splice(i, 1)
            }
        }
    }
    return nums
}


console.log(remove(nums))