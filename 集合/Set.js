// 封装集合的构造函数
class Set {
    constructor() {
        // 使用一个对象来保存集合的元素
        this.items = {}
    }

    // 集合的操作方法
    // 判断集合中是否有某个元素
    has(value) {
        return this.items.hasOwnProperty(value)
    }

    // 向集合中添加元素
    add(value) {
        // 1.判断集合中是否已经包含了该元素
        if (this.has(value)) return false

        // 2.将元素添加到集合中
        this.items[value] = value
        return true
    }

    // 从集合中删除某个元素
    remove(value) {
        // 1.判断集合中是否包含该元素
        if (!this.has(value)) return false

        // 2.包含该元素, 那么将元素删除
        delete this.items[value]
        return true
    }

    // 清空集合中所有的元素
    clear() {
        this.items = {}
    }

    // 获取集合的大小
    size() {
        return Object.keys(this.items).length

        /*
        考虑兼容性问题, 使用下面的代码
        let count = 0
        for (let value in this.items) {
            if (this.items.hasOwnProperty(value)) {
                count++
            }
        }
        return count
        */
    }

    // 获取集合中所有的值
    values() {
        return Object.keys(this.items)

        /*
        考虑兼容性问题, 使用下面的代码
        let keys = []
        for (let value in this.items) {
            keys.push(value)
        }
        return keys
        */
    }
}

module.exports = Set

// // 测试和使用集合类
// let set = new Set()
// console.log();

// // 添加元素
// set.add(1)
// console.log(set.values()) // 1
// set.add(1)
// console.log(set.values()) // 1

// set.add(100)
// set.add(200)
// console.log(set.values()) // 1,100,200

// // 判断是否包含元素
// console.log(set.has(100)) // true

// // 删除元素
// set.remove(100)
// console.log(set.values()) // 1, 200

// // 获取集合的大小
// console.log(set.size()) // 2
// set.clear()
// console.log(set.size()) // 0