// 选择枢纽
ArrayList.prototype.quickSort = function(left, right) {
    // 1.求出中间的位置
    let center = Math.floor((left + right) / 2)

    // 2.判断并且进行交换
    if (this.array[left] > this.array[center]) {
        this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
        this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
        this.swap(left, right)
    }

    // 3.巧妙的操作: 将center移动到right - 1的位置.
    this.swap(center, right - 1)

    // 4.返回pivot
    return this.array[right - 1]
}