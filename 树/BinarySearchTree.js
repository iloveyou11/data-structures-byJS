class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    toString() {
        const arr = []
        this.midOrderTraversal(val => {
            arr.push(val)
        })
        return arr.join(',')
    }
    insert(val) {
        // 1、根据val创建节点
        let newNode = new Node(val)

        // 2、判断root是否存在
        if (this.root == null) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode)
        }
    }
    preOrderTraversal(handler) {
        this._preOrderTraversalNode(this.root, handler)
    }
    midOrderTraversal(handler) {
        this._midOrderTraversalNode(this.root, handler)
    }
    backOrderTraversal(handler) {
        this._backOrderTraversalNode(this.root, handler)
    }
    getMax() {
        let node = this.root
        while (node.right !== null) {
            node = node.right
        }
        return node.val
    }
    getMin() {
        let node = this.root
        while (node.left !== null) {
            node = node.left
        }
        return node.val
    }
    search(val) {
        return this._searchNode(this.root, val)
    }

    // 删除节点
    remove(val) {
        // 1、先找到要删除的节点
        let current = this.root
        let parent = null
        let isLeft = true

        while (current.val !== val) {
            parent = current
            if (val < current.val) {
                isLeft = true
                current = current.left
            } else {
                isLeft = false
                current = current.right
            }
            // 没找到
            if (current == null) return false
        }

        // 2、删除节点，找到了节点current
        // 1）删除的节点是叶子节点（没有子节点）
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null
            } else {
                isLeft ? parent.left = null : parent.right = null
            }
        }
        // 2）删除的节点有一个子结点
        else if (current.right == null) {
            if (current === this.root) this.root = current.left
            isLeft ? parent.left = current.left : parent.right = current.left
        } else if (current.left == null) {
            if (current === this.root) this.root = current.right
            isLeft ? parent.left = current.right : parent.right = current.right
        }
        // 3）删除的节点有两个子结点
        // 找前驱和后继
        // 前驱：比current小一点点的节点
        // 后继：比current大一点点的节点
        else {
            let successor = this._getSuccessor(current)
            if (current == this.root) {
                this.root = successor
            } else {
                isLeft ? parent.left = successor : parent.right = successor
            }
            successor.left = current.left
        }
    }


    _insertNode(oldNode, newNode) {
        if (newNode.val < oldNode.val) {
            oldNode.left == null ? oldNode.left = newNode : this._insertNode(oldNode.left, newNode)
        } else {
            oldNode.right == null ? oldNode.right = newNode : this._insertNode(oldNode.right, newNode)
        }
    }
    _preOrderTraversalNode(node, handler) {
        if (node) {
            handler(node.val)
            this._preOrderTraversalNode(node.left, handler)
            this._preOrderTraversalNode(node.right, handler)
        }
    }
    _midOrderTraversalNode(node, handler) {
        if (node) {
            this._midOrderTraversalNode(node.left, handler)
            handler(node.val)
            this._midOrderTraversalNode(node.right, handler)
        }
    }
    _backOrderTraversalNode(node, handler) {
        if (node) {
            this._backOrderTraversalNode(node.left, handler)
            this._backOrderTraversalNode(node.right, handler)
            handler(node.val)
        }
    }
    _searchNode(node, val) {
        if (node == null) return false
        if (node.val > val) {
            return this._searchNode(node.left, val)
        } else if (node.val < val) {
            return this._searchNode(node.right, val)
        } else {
            return true
        }
    }

    // 找后继（在右子树中找到比此节点大一点点的节点）
    _getSuccessor(delNode) {
        // 1、定义变量，保存后继
        let successor = delNode
        let current = delNode.right
        let successorParent = delNode

        // 2、循环查找
        while (current != null) {
            successorParent = successor
            successor = current
            current = current.left
        }

        // 3、判断寻找的后继节点是否直接就是delNode的right节点
        if (successor != delNode.right) {
            successorParent.left = successor.right
            successor.right = delNode.right
        }
        return successor
    }
}

module.exports = BinarySearchTree


// // 开始测试
// let bst = new BinarySearchTree()

// bst.insert(11)
// bst.insert(7)
// bst.insert(15)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)

// const preArr = [],
//     midArr = [],
//     backArr = []

// bst.preOrderTraversal(val => {
//     preArr.push(val)
// })
// bst.midOrderTraversal(val => {
//     midArr.push(val)
// })
// bst.backOrderTraversal(val => {
//     backArr.push(val)
// })

// let min = bst.getMin()
// let max = bst.getMax()

// console.log('前序遍历：', preArr);
// console.log('中序遍历：', midArr);
// console.log('后序遍历：', backArr);
// console.log('最小值：', min);
// console.log('最大值：', max);
// console.log('9是否存在：', bst.search(9));
// console.log('100是否存在：', bst.search(100));
// console.log('打印二叉树：', bst.toString());