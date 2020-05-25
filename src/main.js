console.log("hello")
    //const div = dom.create("div")只能创建一个div不能直接创建子元素

//const div1 = dom.create("<div><span>1<span></div>") //只能创建常规的， 不能创建单独的表格内元素
//const div2 = dom.create("<tr><td>hejiajin</td></tr>") //万能创建HTML公式
const div3 = dom.create("hejiajin2")
const div4 = dom.create("caokun")
const div5 = dom.create('<div id ="parent"></div>')



//console.log(div1)
//console.log(div2)
//console.log(div3)




dom.after(hejiajin, div3) //在上一个节点之后插入一个节点
dom.before(hejiajin, div4) //在上一个节点之前插入一个节点
dom.wrap(hejiajin, div5) //在包含一个节点



//删除全部节点
const nodes = dom.empty(window.empty)
console.log(nodes)
    //dom.empty(empty)


//增加标题
dom.attr(hejiajin, 'title', 'hejiajin666')

//JS 中一个函数可以获取多个参数

const title = dom.attr(hejiajin, 'title')
console.log(`title: ${title}`) //数据打出来

//加文本
dom.text(hejiajin, '你好，我是何加劲')



//加边框
dom.style(hejiajin, { border: '1px solid pink', color: 'red' })
console.log(dom.style(hejiajin, 'border'))
dom.style(hejiajin, 'border', '1px solid black')



// 添加class
dom.class.add(hejiajin, 'red')
dom.class.add(hejiajin, 'pink')
dom.class.remove(hejiajin, 'red')
console.log(dom.class.contains(hejiajin, 'red'))



//调用一个函数
const fn = () => {
    console.log('爱你！')
}
dom.on(hejiajin, 'click', fn)
dom.off(hejiajin, 'click', fn)



//find查找

const hejiajin2 = dom.find(`#hejiajin2`)[0] //red在hejiajin2里不同的位置都有
console.log(dom.find(`#hejiajin2`)[0])

//查找兄弟姐妹
console.log(dom.siblings(dom.find(`#s2`)[0]))



const s2 = dom.find(`#s2`)[0]
    //找弟弟
console.log(dom.next(s2))
    //找自己
console.log(dom.siblings(s2))
    //找哥哥
console.log(dom.previous(s2))


//遍历元素
const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))


//排行老几
console.log(dom.index(s2))