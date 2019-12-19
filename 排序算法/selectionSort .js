ArrayList.prototype.selectionSort = function() {
    // 1.获取数组的长度
    let length = this.array.length

    // 2.外层循环: 从0位置开始取出数据, 直到length-2位置
    for (let i = 0; i < length - 1; i++) {
        // 3.内层循环: 从i+1位置开始, 和后面的内容比较
        let min = i
        for (let j = min + 1; j < length; j++) {
            // 4.如果i位置的数据大于j位置的数据, 那么记录最小的位置
            if (this.array[min] > this.array[j]) {
                min = j
            }
        }
        // 5.交换min和i位置的数据
        this.swap(min, i)
    }
}