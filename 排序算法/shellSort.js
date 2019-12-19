ArrayList.prototype.shellSort = function() {
    // 1.获取数组的长度
    let length = this.array.length

    // 2.根据长度计算增量
    let gap = Math.floor(length / 2)

    // 3.增量不断变量小, 大于0就继续排序
    while (gap > 0) {
        // 4.实现插入排序
        for (let i = gap; i < length; i++) {
            // 4.1.保存临时变量
            let j = i
            let temp = this.array[i]

            // 4.2.插入排序的内层循环
            while (j > gap - 1 && this.array[j - gap] > temp) {
                this.array[j] = this.array[j - gap]
                j -= gap
            }

            // 4.3.将选出的j位置设置为temp
            this.array[j] = temp
        }

        // 5.重新计算新的间隔
        gap = Math.floor(gap / 2)
    }
}