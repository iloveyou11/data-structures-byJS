ArrayList.prototype.insertionSort = function() {
    // 1.获取数组的长度
    let length = this.array.length

    // 2.外层循环: 外层循环是从1位置开始, 依次遍历到最后
    for (let i = 1; i < length; i++) {
        // 3.记录选出的元素, 放在变量temp中
        let j = i
        let temp = this.array[i]

        // 4.内层循环: 内层循环不确定循环的次数, 最好使用while循环
        while (j > 0 && this.array[j - 1] > temp) {
            this.array[j] = this.array[j - 1]
            j--
        }

        // 5.将选出的j位置, 放入temp元素
        this.array[j] = temp
    }
}