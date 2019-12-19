// 交换位置
Array.prototype.swap = function(arr, m, n) {
    let temp = arr[m]
    arr[m] = arr[n]
    arr[n] = temp
}

// 1、冒泡排序
// 基本思路（假设数组有n个元素，以正序排列为例）：
// 1）从第1个元素开始，依次向后两两元素比较，如果前面比后面大，则两两交换位置，直到比较到倒数第1个元素（比较了n-1次）
// 2）从第1个元素开始，依次向后两两元素比较，如果前面比后面大，则两两交换位置，直到比较到倒数第2个元素（比较了n-2次）
// 3）从第1个元素开始，依次向后两两元素比较，如果前面比后面大，则两两交换位置，直到比较到倒数第3个元素（比较了n-3次）
// 依此类推……
Array.prototype.bubbleSort = function() {
    // 1.获取数组的长度
    let length = this.length
        // 2.循环
    for (let i = 0; i < length - 1; i++) {
        // 3.根据i的次数, 比较循环到i位置
        for (let j = 0; j < length - 1 - i; j++) {
            // 4.如果j位置比j+1位置的数据大, 那么就交换
            if (this[j] > this[j + 1]) {
                // 交换
                this.swap(this, j, j + 1)
            }
        }
    }
    return this
}

// 2、选择排序
// 基本思路（假设数组有n个元素，以正序排列为例）：
// 1）从第1个元素到倒数第1个元素，选出最小的元素，与第1个元素交换
// 2）从第2个元素到倒数第1个元素，选出最小的元素，与第2个元素交换
// 2）从第3个元素到倒数第1个元素，选出最小的元素，与第3个元素交换
// 依此类推……
Array.prototype.selectionSort = function() {
    let length = this.length
        // 2.外层循环: 从0位置开始取出数据, 直到length-2位置
    for (let i = 0; i < length - 1; i++) {
        // 3.内层循环: 从i+1位置开始, 和后面的内容比较
        let min = i
        for (let j = min + 1; j < length; j++) {
            // 4.如果i位置的数据大于j位置的数据, 那么记录最小的位置
            if (this[min] > this[j]) {
                min = j
            }
        }
        // 5.交换min和i位置的数据
        this.swap(this, min, i)
    }
    return this
}

// 3、插入排序
// 基本思路（假设数组有n个元素，以正序排列为例）：
// 1）第2个元素与前面所有元素比较，插入到合适位置
// 2）第3个元素与前面所有元素比较，插入到合适位置
// 3）第4个元素与前面所有元素比较，插入到合适位置
// 依此类推……
Array.prototype.insertionSort = function() {
    // 1.获取数组的长度
    let length = this.length

    // 2.外层循环: 外层循环是从1位置开始, 依次遍历到最后
    for (let i = 1; i < length; i++) {
        // 3.记录选出的元素, 放在变量temp中
        let j = i
        let temp = this[i]

        // 4.内层循环: 内层循环不确定循环的次数, 最好使用while循环
        while (j > 0 && this[j - 1] > temp) {
            this[j] = this[j - 1]
            j--
        }

        // 5.将选出的j位置, 放入temp元素
        this[j] = temp
    }
    return this
}

// 4、希尔排序
// 基本思路（假设数组有n个元素，以正序排列为例）：
// 1）取初始间隔gap=Math.floor(length / 2)，从第一个元素开始，每隔gap的元素依次排好序
// 2）重新取间隔gap = Math.floor(gap / 2)，从第一个元素开始，每隔gap的元素依次排好序
// 3）重新取间隔gap = Math.floor(gap / 2)，从第一个元素开始，每隔gap的元素依次排好序
// ……依此类推……（直到gap小于零停止）
// n）最后肯定会到达gap=1，此时就是插入排序了
Array.prototype.shellSort = function() {
    // 1.获取数组的长度
    let length = this.length

    // 2.根据长度计算增量
    let gap = Math.floor(length / 2)

    // 3.增量不断变量小, 大于0就继续排序
    while (gap > 0) {
        // 4.实现插入排序
        for (let i = gap; i < length; i++) {
            // 4.1.保存临时变量
            let j = i
            let temp = this[i]

            // 4.2.插入排序的内层循环
            while (j > gap - 1 && this[j - gap] > temp) {
                this[j] = this[j - gap]
                j -= gap
            }

            // 4.3.将选出的j位置设置为temp
            this[j] = temp
        }

        // 5.重新计算新的间隔
        gap = Math.floor(gap / 2)
    }
    return this
}

// 5、快速排序
// 基本思路（假设数组有n个元素，以正序排列为例）：
// 1）创建两数组left和right
// 2）取基准值（以中间位置的元素为例），将小于它的都放入left，大于它的都放入right
// 3）递归调用，对left和right也采用同样的方法
Array.prototype.quickSort = function() {
    if (this.length <= 1) return this
    const pivotIndex = Math.floor(this.length / 2);
    const pivot = this.splice(pivotIndex, 1)[0];
    let left = [],
        right = [];
    this.forEach(item => {
        item < pivot ? left.push(item) : right.push(item)
    });
    return left.quickSort().concat(pivot, right.quickSort()); //分而治之
}


// 6、归并排序
// 基本思路（假设数组有n个元素，以正序排列为例）：
// 将局部排好序，再与其他局部按顺序合并，再与其他局部按顺序合并，再与其他局部按顺序合并，……越扩越大
// 代码实现应该反过来，采用递归思想解决
Array.prototype.mergeSort = function() {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return _merge(mergeSort(left), mergeSort(right));
}

// merge函数将两个数组按顺序合并为一个数组
function _merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// 7、堆排序
// 略

// 8、计数排序
// Array.prototype.countingSort = function(maxValue) {
//     let bucket = new Array(maxValue + 1),
//         sortedIndex = 0,
//         arrLen = this.length,
//         bucketLen = maxValue + 1;

//     for (let i = 0; i < arrLen; i++) {
//         if (!bucket[this[i]]) {
//             bucket[this[i]] = 0;
//         }
//         bucket[this[i]]++;
//     }

//     for (let j = 0; j < bucketLen; j++) {
//         while (bucket[j] > 0) {
//             this[sortedIndex++] = j;
//             bucket[j]--;
//         }
//     }

//     return this;
// }

// 9、桶排序
Array.prototype.bucketSort = function(bucketSize) {
    if (this.length === 0) {
        return this;
    }

    let i;
    let minValue = this[0];
    let maxValue = this[0];
    for (i = 1; i < this.length; i++) {
        if (this[i] < minValue) {
            minValue = this[i]; //输入数据的最小值
        } else if (this[i] > maxValue) {
            maxValue = this[i]; //输入数据的最大值
        }
    }

    //桶的初始化
    let DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < this.length; i++) {
        buckets[Math.floor((this[i] - minValue) / bucketSize)].push(this[i]);
    }

    this.length = 0;
    for (i = 0; i < buckets.length; i++) {
        buckets[i].insertionSort(); //对每个桶进行排序，这里使用了插入排序
        for (let j = 0; j < buckets[i].length; j++) {
            this.push(buckets[i][j]);
        }
    }

    return this;
}

// 10、基数排序
// Array.prototype.radixSort = function(maxDigit) {
//     let mod = 10;
//     let dev = 1;
//     let counter = [];
//     for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
//         for (let j = 0; j < arthisr.length; j++) {
//             let bucket = parseInt((this[j] % mod) / dev);
//             if (counter[bucket] == null) {
//                 counter[bucket] = [];
//             }
//             counter[bucket].push(arr[j]);
//         }
//         let pos = 0;
//         for (let j = 0; j < counter.length; j++) {
//             let value = null;
//             if (counter[j] != null) {
//                 while ((value = counter[j].shift()) != null) {
//                     this[pos++] = value;
//                 }
//             }
//         }
//     }
//     return this;
// }



// 测试
let arr = []
for (let i = 0; i < 20; i++) {
    const n = Math.floor(Math.random() * 100)
    arr.push(n)
}
console.log('原始数组：');
console.log(arr);

// console.log('bubbleSort：');
// arr.bubbleSort()
// console.log(arr);

// console.log('selectionSort：');
// arr.selectionSort()
// console.log(arr);

// console.log('insertionSort：');
// arr.insertionSort()
// console.log(arr);

// console.log('shellSort：');
// arr.shellSort()
// console.log(arr);

// console.log('quickSort：');
// arr.quickSort()
// console.log(arr);

// console.log('countingSort');
// arr.countingSort()
// console.log(arr);

// console.log('bucketSort');
// arr.bucketSort()
// console.log(arr);

// console.log('radixSort');
// arr.radixSort()
// console.log(arr);