// 自定义队列
class Queue {
    constructor() {
        this.items = []
    }

    // 队列操作的方法
    // enter queue方法
    enqueue(element) {
        this.items.push(element)
    }

    // delete queue方法
    dequeue() {
        return this.items.shift()
    }

    // 查看前端的元素
    front() {
        return this.items[0]
    }

    // 查看队列是否为空
    isEmpty() {
        return this.items.length == 0
    }

    // 查看队列中元素的个数
    size() {
        return this.items.length
    }
}

module.exports = Queue

// 测试
// let queue = new Queue()

// // 在队列中添加元素
// queue.enqueue("abc")
// queue.enqueue("cba")
// queue.enqueue("nba")

// // 查看一下队列前端元素
// console.log(queue.front())

// // 查看队列是否为空和元素个数
// console.log(queue.isEmpty())
// console.log(queue.size())

// // 从队列中删除元素
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())