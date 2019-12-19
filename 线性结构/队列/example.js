// 击鼓传花的实现
const Queue = require('./Queue')

// 实现击鼓传花的函数
function passGame(nameList, num) {
    // 1.创建一个队列, 并且将所有的人放在队列中
    // 1.1.创建队列
    let queue = new Queue()

    // 1.2.通过for循环, 将nameList中的人放在队列中
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    // 2.寻找最后剩下的人
    while (queue.size() > 1) {
        // 将前num-1中的人, 都从队列的前端取出放在队列的后端
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }

        // 将第num个人, 从队列中移除
        queue.dequeue()
    }

    // 3.获取剩下的一个人
    let endName = queue.dequeue()

    // 4.获取该人在队列中的位置
    return {
        name: endName,
        index: nameList.indexOf(endName)
    }
}

// 验证结果
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const {
    name,
    index
} = passGame(names, 7) // 数到8的人淘汰
console.log("最终留下来的人:" + name)