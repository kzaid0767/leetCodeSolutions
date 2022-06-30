function med(nums1, nums2) {
    let nums3 = nums1.concat(nums2);
    mysort = (a, b) => (a - b);
    nums3 = nums3.sort(mysort);
    let median = 0;
    let a = nums3.length;
    if (a % 2 === 1) {
        median = nums3[Math.ceil(a / 2) - 1];
    }
    else {
        median = (nums3[a / 2] + nums3[a / 2 - 1]) / 2;
    }
    return median;

};