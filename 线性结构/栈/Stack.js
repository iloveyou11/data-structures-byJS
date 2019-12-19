// 栈类
class Stack {
    // 栈中的属性
    constructor() {
        this.items = []
    }

    // 栈相关的方法

    // 压栈操作
    push(item) {
        this.items.push(item)
    }

    // 出栈操作
    pop() {
        return this.items.pop()
    }

    // peek操作
    peek() {
        return this.items[this.items.length - 1]
    }

    // 判断栈中的元素是否为空
    isEmpty() {
        return this.items.length == 0
    }

    // 获取栈中元素的个数
    size() {
        return this.items.length
    }

    // 清空栈
    clear() {
        this.items = []
    }
}

module.exports = Stack

// 测试

// let stack = new Stack()
// stack.push(6)
// stack.push(5)
// console.log(stack.pop()) // 5
// stack.push(4)
// console.log(stack.pop()) // 4
// stack.push(3)
// console.log(stack.pop()) // 3
// console.log(stack.pop()) // 6
// stack.push(2)
// stack.push(1)
// console.log(stack.pop()) // 1
// console.log(stack.pop()) // 2