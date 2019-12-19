   // 封装一个新的构造函数, 用于保存元素和元素的优先级
   class QueueElement {
       constructor(element, priority) {
           this.element = element
           this.priority = priority
       }
   }

   // 封装优先级队列
   class PriorityQueue {
       constructor() {
           this.items = []
       }

       // 添加元素的方法
       enqueue(element, priority) {
           // 1.根据传入的元素, 创建新的QueueElement
           var queueElement = new QueueElement(element, priority)

           // 2.获取传入元素应该在正确的位置
           if (this.isEmpty()) {
               this.items.push(queueElement)
           } else {
               var added = false
               for (var i = 0; i < this.items.length; i++) {
                   // 注意: 我们这里是数字越小, 优先级越高
                   if (queueElement.priority < this.items[i].priority) {
                       this.items.splice(i, 0, queueElement)
                       added = true
                       break
                   }
               }

               // 遍历完所有的元素, 优先级都大于新插入的元素时, 就插入到最后
               if (!added) {
                   this.items.push(queueElement)
               }
           }
       }

       // 删除元素的方法
       dequeue() {
           return this.items.shift()
       }

       // 获取前端的元素
       front() {
           return this.items[0]
       }

       // 查看元素是否为空
       isEmpty() {
           return this.items.length == 0
       }

       // 获取元素的个数
       size() {
           return this.items.length
       }
   }

   module.exports = PriorityQueue

   //  测试
   // 创建优先级队列对象
   //  let pQueue = new PriorityQueue()

   //  // 添加元素
   //  pQueue.enqueue("abc", 10)
   //  pQueue.enqueue("cba", 5)
   //  pQueue.enqueue("nba", 12)
   //  pQueue.enqueue("mba", 3)

   //  // 遍历所有的元素
   //  var size = pQueue.size()
   //  for (var i = 0; i < size; i++) {
   //      var item = pQueue.dequeue()
   //      console.log(item.element + "-" + item.priority)
   //  }