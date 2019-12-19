// 创建字典的构造函数
class Dictionay {
    constructor() {
        // 字典属性
        this.items = {}
    }

    // 字典操作方法
    // 在字典中添加键值对
    set(key, value) {
        this.items[key] = value
    }

    // 判断字典中是否有某个key
    has(key) {
        return this.items.hasOwnProperty(key)
    }

    // 从字典中移除元素
    remove(key) {
        // 1.判断字典中是否有这个key
        if (!this.has(key)) return false

        // 2.从字典中删除key
        delete this.items[key]
        return true
    }

    // 根据key去获取value
    get(key) {
        return this.has(key) ? this.items[key] : undefined
    }

    // 获取所有的keys
    keys() {
        return Object.keys(this.items)
    }

    // 获取所有的value
    values() {
        return Object.values(this.items)
    }

    // size方法
    size() {
        return this.keys().length
    }

    // clear方法
    clear() {
        this.items = {}
    }
}

module.exports = Dictionay

// 创建字典对象
// let dict = new Dictionay()

// // 在字典中添加元素
// dict.set("age", 18)
// dict.set("name", "Coderwhy")
// dict.set("height", 1.88)
// dict.set("address", "广州市")

// // 获取字典的信息
// console.log(dict.keys()) // age,name,height,address
// console.log(dict.values()) // 18,Coderwhy,1.88,广州市
// console.log(dict.size()) // 4
// console.log(dict.get("name")) // Coderwhy

// // 字典的删除方法
// dict.remove("height")
// console.log(dict.keys()) // age,name,address

// // 清空字典
// dict.clear()
// console.log(dict.keys())