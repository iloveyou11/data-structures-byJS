  // 封装一个Node类, 用于保存每个节点信息
  class Node {
      constructor(element) {
          this.element = element
          this.next = null
      }
  }

  // 封装链表的构造函数
  class LinkedList {
      constructor() {
          // 链表中的属性
          this.length = 0 // 链表的长度
          this.head = null // 链表的第一个节点
      }

      // 链表中的方法
      append(element) {
          // 1.根据新元素创建节点
          let newNode = new Node(element)

          // 2.判断原来链表是否为空
          if (this.head === null) { // 链表尾空
              this.head = newNode
          } else { // 链表不为空
              // 2.1.定义变量, 保存当前找到的节点
              let current = this.head
              while (current.next) {
                  current = current.next
              }
              // 2.2.找到最后一项, 将其next赋值为node
              current.next = newNode
          }
          // 3.链表长度增加1
          this.length++
      }

      toString() {
          // 1.定义两个变量
          let current = this.head
          let listString = ""
              // 2.循环获取链表中所有的元素
          while (current) {
              listString += "," + current.element
              current = current.next
          }
          // 3.返回最终结果
          return listString.slice(1)
      }

      insert(position, element) {
          // 1.检测越界问题: 越界插入失败
          if (position < 0 || position > this.length) return false

          // 2.找到正确的位置, 并且插入数据
          let newNode = new Node(element)
          let current = this.head
          let previous = null
          let index = 0

          // 3.判断是否列表是否在第一个位置插入
          if (position == 0) {
              newNode.next = current
              this.head = newNode
          } else {
              while (index++ < position) {
                  previous = current
                  current = current.next
              }

              newNode.next = current
              previous.next = newNode
          }

          // 4.length+1
          this.length++;
          return true
      }

      removeAt(position) {
          // 1.检测越界问题: 越界移除失败, 返回null
          if (position < 0 || position >= this.length) return null

          // 2.定义变量, 保存信息
          let current = this.head
          let previous = null
          let index = 0

          // 3.判断是否是移除第一项
          if (position === 0) {
              this.head = current.next
          } else {
              while (index++ < position) {
                  previous = current
                  current = current.next
              }

              previous.next = current.next
          }

          // 4.length-1
          this.length--

              // 5.返回移除的数据
              return current.element
      }

      indexOf(element) {
          // 1.定义变量, 保存信息
          let current = this.head
          let index = 0

          // 2.找到元素所在的位置
          while (current) {
              if (current.element === element) {
                  return index
              }
              index++
              current = current.next
          }

          // 3.来到这个位置, 说明没有找到, 则返回-1
          return -1
      }

      remove(element) {
          let index = this.indexOf(element)
          return this.removeAt(index)
      }

      // 判断链表是否为空
      isEmpty() {
          return this.length == 0
      }

      // 获取链表的长度
      size() {
          return this.length
      }

      // 获取第一个节点
      getFirst() {
          return this.head.element
      }
  }

  module.exports = LinkedList

  // // 测试链表
  // // 1.创建链表
  // let list = new LinkedList()

  // // 2.追加元素
  // list.append(15)
  // list.append(10)
  // list.append(20)

  // // 3.测试toString方法
  // console.log(list.toString())

  // // 4.测试insert方法
  // list.insert(0, 100)
  // list.insert(4, 200)
  // list.insert(2, 300)
  // console.log(list.toString())

  // // 5.测试removeAt方法
  // list.removeAt(0)
  // list.removeAt(1)
  // list.removeAt(3)
  // console.log(list.toString())

  // // 6.测试indexOf方法
  // console.log(list.indexOf(15)) // 0
  // console.log(list.indexOf(10)) // 1
  // console.log(list.indexOf(20)) // 2
  // console.log(list.indexOf(100)) // -1

  // // 7.测试remove方法
  // list.remove(15)
  // console.log(list.toString())

  // // 8.测试其他方法
  // console.log(list.isEmpty()) // false
  // console.log(list.size()) // 2
  // console.log(list.getFirst()) // 10