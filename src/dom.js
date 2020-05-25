/*window.dom = {
    create(tagName) {
        return document.createElement(tagName);
        //将原生API封装起来，由简短的函数调用
        //创建文件
    }
};*/

//万能的创建HTML语言
window.dom = {
    create(string) {
        const container = document.createElement("template");
        //template 是可以容纳任意元素的。
        container.innerHTML = string.trim();
        //trim是为了把两边的空格去掉
        return container.content.firstChild;
    },
    //在节点后边插入一个节点
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
        //找到这个节点的爸爸，在这个爸爸之前插入一个节点
    },
    //在节点前边插入一个节点
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    //给节点加个一个爸爸
    append(parent, node) {
        parent.appendChild(node)
    },
    //包含中包含节点
    wrap(node, parent) {
        dom.before(node, parent) //先在节点之前放个爸爸
        dom.append(parent, node) //在爸爸里面创建一个节点
    },

    //删除节点
    remove(node) {
        node.parentNode.removeChild(node)
        return (node)
    },
    //删除全部（也有剪切之后要加点东西之后再使用）
    empty(node) {
        //const { childNodes } = node //直接从node获得节点
        const array = []
        let x = node.firstChild //第一个大儿子
        while (x) {
            array.push(dom.remove(node.firstChild)) //删除第一个大儿子
            x = node.firstChild //获取最新的大儿子
        }
        return array

    },
    //修改节点的ID名称
    //重载：根据长度不同写不同的代码
    attr(node, name, value) {
        if (arguments.length === 3) { //如果长度为三就实现写的功能
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name) //如果长度为二就实现读的功能
        }

    },

    //写和读文本(这种写代码的方式即为适配（根据不同的需求来选择 ）
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string //IE
            } else {
                node.textContent = string //chrome/firefox
            }
        } else if (arguments === 1) {
            if ('innerText' in node) {
                return node.innerText //IE
            } else {
                return node.textContent //chrome/firefox
            }
        }




    },

    //写和读网页
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string

        } else if (arguments === 1) {
            return node.innerHTML
        }


    },
    // 加边框(写和读)
    style(node, name, value) {

        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(div,{color：'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key] //key可以是color border等
                }
            }
        }

    },


    //添加类
    class: {
        add(node, className) { //增加
            node.classList.add(className)
        },
        remove(node, className) { //删除
            node.classList.remove(className)

        },
        contains(node, className) { //查找
            return node.classList.contains(className)
        }
    },


    //点击添加或者是删除
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },

    //给一个ID返回它的信息
    find(selector, scope) { //选取的范围
        return (scope || document).querySelectorAll(selector)
    },


    //找父元素
    parent(node) {
        return node.parentNode
    },
    //找子元素
    children(node) {
        return node.children
    },

    //找到兄弟姐妹

    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },

    //找弟弟
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) { //判断是不是文本
            x = x.nextSibling
        }
        return x
    },


    //找哥哥
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x


    },



    //遍历数组更改颜色

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },



    //排行老几
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i


    }

};