const arr = [98, 42, 25, 54, 15, 55, 3, 25, 72, 41, 10, 121];



// 方法1，直接写函数，正常
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0]; //从数组中取出我们的"基准"元素
    const left = [],
        right = [];
    arr.forEach(item => {
        if (item < pivot) { //left 存放比 pivot 小的元素
            left.push(item);
        } else { //right 存放大于或等于 pivot 的元素
            right.push(item);
        }
    });
    //至此，我们将数组分成了left和right两个部分
    return quickSort(left).concat(pivot, quickSort(right)); //分而治之
}
// 测试
// console.log(quickSort(arr));





// 方法2，挂载到原型上，直接调用，不正常
Array.prototype.quickSort = function() {
    if (this.length <= 1) {
        return this;
    }
    const pivotIndex = Math.floor(this.length / 2);
    const pivot = this.splice(pivotIndex, 1)[0]; //从数组中取出我们的"基准"元素
    const left = [],
        right = [];
    this.forEach(item => {
        if (item < pivot) { //left 存放比 pivot 小的元素
            left.push(item);
        } else { //right 存放大于或等于 pivot 的元素
            right.push(item);
        }
    });
    //至此，我们将数组分成了left和right两个部分
    return (left.quickSort()).concat(pivot, (right.quickSort())); //分而治之
}

// 测试
// arr.quickSort()
// console.log(arr);



// 方法3：结果同方法2 -.-，不正确
Array.prototype.quickSort = function() {
    this.quickSortRec(0, this.length - 1)
}
Array.prototype.quickSortRec = function(left, right) {
    // 0.递归结束条件
    if (left >= right) return

    // 1.获取枢纽
    var pivot = this.median(left, right)

    // 2.开始进行交换
    var i = left
    var j = right - 1
    while (true) {
        while (this[++i] < pivot) {}
        while (this[--j] > pivot) {}
        if (i < j) {
            this.swap(i, j)
        } else {
            break
        }
    }

    // 3.将枢纽放在正确的位置
    this.swap(i, right - 1)

    // 4.递归调用左边
    this.quickSortRec(left, i - 1)
    this.quickSortRec(i + 1, right)
}
Array.prototype.median = function(left, right) {
    // 1.求出中间的位置
    var center = Math.floor((left + right) / 2)

    // 2.判断并且进行交换
    if (this[left] > this[center]) {
        this.swap(left, center)
    }
    if (this[center] > this[right]) {
        this.swap(center, right)
    }
    if (this[left] > this[right]) {
        this.swap(left, right)
    }

    // 3. 将center移动到right - 1的位置
    this.swap(center, right - 1)

    // 4.返回pivot
    return this[right - 1]
}
Array.prototype.swap = function(arr, m, n) {
    let temp = arr[m]
    arr[m] = arr[n]
    arr[n] = temp
}

// 测试
// arr.quickSort()
// console.log(arr);