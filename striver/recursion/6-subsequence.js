
// A subsequence is an array that can be derived from another array by deleting
// some or no elements without changing the order of the remaining elements.

function printSubSequence(index, nums, result, n) {
    if (index >= n) {
        console.log(result);
        return;
    }
    
    // not pick , or not take condition, this element is not added to your subsequence
    printSubSequence(index + 1, nums, result, n)

    // take or pick particalur index into the subsequnce 
    result.push(nums[index])
    printSubSequence(index + 1, nums, result, n)
    result.pop()

}


let nums = [3, 1, 2]
let n = nums.length

printSubSequence(0, nums, [], n)


