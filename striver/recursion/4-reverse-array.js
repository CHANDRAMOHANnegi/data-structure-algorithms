
function reverseArray(index, nums, res) {
    const n = nums.length
    if (index >= nums.length) {
        console.log(res)
        return;
    }
    res[n - index - 1] = nums[index]
    reverseArray(index + 1, nums, res)
}


function reverseArrayTwoPointer(start, nums, end) {
    if (start >= end) {
        console.log(nums)
        return;
    }
    const temp = nums[end];
    nums[end] = nums[start]
    nums[start] = temp
    reverseArrayTwoPointer(start + 1, nums, end - 1)
}

function reverseArraySinglePointer(start, nums) {
    if (start >= nums.length / 2) {
        console.log(nums)
        return;
    }
    const temp = nums[nums.length - 1 - start];
    nums[nums.length - 1 - start] = nums[start]
    nums[start] = temp
    reverseArraySinglePointer(start + 1, nums)
}

const nums = [1, 2, 3, 4, 5]
reverseArraySinglePointer(0, nums)

// reverseArrayTwoPointer(0, nums, nums.length - 1)
