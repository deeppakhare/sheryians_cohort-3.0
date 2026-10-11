var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) return;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];        
        start++;
        end--;
    }
}