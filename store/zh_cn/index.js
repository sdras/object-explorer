export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: '创建一个新对象',
        desc: `创建一个带指定原型和属性的新对象。<br>
          <br>
          <strong>初学者请注意！</strong> 一般来说创建一个对象会像例子的上方那样做，就是直接赋值给一个变量。`,
        example: `const obj2 = Object.create(obj);<br>
        console.log(obj2);`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        }`
      },
      {
        name: 'assign',
        shortDesc: '创建一个对象的副本',
        desc:
          '从一个或多个源对象中复制它们的所有可枚举属性的值到一个目标对象中。并返回目标对象。',
        example: `const copy = Object.assign({}, obj);<br>
        console.log(copy);`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        }`
      }
    ],
    createProp: [
      {
        name: 'defineProperty',
        shortDesc: '一个新属性或修改现有的一个属性',
        desc: `向对象中添加一个带给定属性描述符的已命名的属性。<br>
          <br>
          <strong>初学者请注意！</strong> 通常会使用小数点或方括号来创建一个新属性或修改现有属性。像这样：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。从技术上来说这不是一个内置的方法，所以没有包含进去。`,
        example: `Object.defineProperty(obj, 'd', {<br>
        <span>&nbsp;&nbsp;</span>enumerable: true,<br>
        <span>&nbsp;&nbsp;</span>configurable: true,<br>
        <span>&nbsp;&nbsp;</span>writable: true,<br>
        <span>&nbsp;&nbsp;</span>value: 4<br>
        });<br>
        <br>
        console.log(obj.d);`,
        output: `4`
      },
      {
        name: 'defineProperties',
        shortDesc: '一个或多个属性或修改现有的属性',
        desc: `向对象中添加一个或多个带给定属性描述符的属性。<br>
          <br>
          <strong>初学者请注意！</strong> 通常会使用小数点或方括号来创建一个新属性或修改现有属性。像这样：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。从技术上来说这不是一个内置的方法，所以没有包含进去。`,
        example: `Object.defineProperties(obj, {<br>
        <span>&nbsp;&nbsp;</span>d: {<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>
        <span>&nbsp;&nbsp;</span>},<br>
        <span>&nbsp;&nbsp;</span>e: {<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>
        <span>&nbsp;&nbsp;</span>}<br>
        });<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3, d: 4, e: 5}`
      }
    ],
    infoObj: [
      {
        name: 'isExtensible',
        shortDesc: '是否可以添加更多的属性',
        desc: '检查是否允许扩展对象。',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: '两个引用是否指向同一对象',
        desc:
          '对比两个引用是否指向同一对象。NaN 与 NaN 比较会返回 true (与抽象等价比较和严格等价比较不同)（译者注：「抽象等价比较」就是带类型自动转换的比较，即“==”；「严格等价比较」则会比较两个变量的类型，即“===”）。这个有点奇怪，MDN 文档有点误导。',
        example: `let obj2 = {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        };<br>
        <br>
        console.log(Object.is(obj, obj2));<br>
        console.log(Object.is(obj, obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isFrozen',
        shortDesc: `对象及其属性是否不能被修改`,
        desc: '检查一个对象是否被冻结。',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `一个对象是否不能被修改（但属性可以）`,
        desc:
          '检查一个对象的属性的属性描述符是否不能被修改以及不能增加新的属性。',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `对象是否在原型链里`,
        desc: `返回表示一个对象是否在另一指定对象的原型链上的布尔值。`,
        example: `function Rect() {}<br>
        <br>
        var rect = new Rect();<br>
        <br>
        console.log(Rect.prototype.isPrototypeOf(rect));`,
        output: `true`,
        useExample: 'newExample'
      }
    ],
    noChange: [
      {
        name: 'seal',
        shortDesc: `让它不能添加或删除属性`,
        desc: '阻止删除一个对象的属性。现有的属性仍然能被修改。',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `让它不能添加、删除或修改属性`,
        desc: `冻结一个对象，使得它的属性不能被更改或删除。`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `让它不能添加属性`,
        desc: `阻止对象的扩展。仍然可以删除属性但不能添加属性。`,
        example: `Object.preventExtensions(obj);<br>
        obj.d = 4;<br>
        <br>
        console.log(obj.d);`,
        output: `undefined`
      }
    ],
    createString: [
      {
        name: 'toString',
        shortDesc: `表示这个对象的字符串`,
        desc: `<code>toString()</code> 方法返回表示这个对象的字符串。`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `表示这个对象的本地化的字符串`,
        desc: `<code>toLocaleString()</code> 方法返回表示这个对象的字符串。这个方法可以根据按不同地域需要在派生对象中被重写。例如：您有一些因地域不同而不同的数据，如日期的方法，您可以得到不同的时间格式。`,
        example: `obj.d = new Date();<br>
        <br>
        console.log(obj.d);<br>
        console.log(obj.d.toLocaleString());`,
        output: `Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>
        12/29/2017, 8:57:35 PM`
      }
    ],
    infoProp: {
      details: [
        {
          name: 'getOwnPropertyDescriptor',
          shortDesc: `关于属性的详细信息`,
          desc: '返回一个对象上已命名的属性的属性描述符。',
          example: `const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>
          <br>
          console.log(o);`,
          output: `Object {<br>
          <span>&nbsp;&nbsp;</span>configurable: true,<br>
          <span>&nbsp;&nbsp;</span>enumerable: true,<br>
          <span>&nbsp;&nbsp;</span>value: 1,<br>
          <span>&nbsp;&nbsp;</span>writable: true<br>
          }`
        },
        {
          name: 'getOwnPropertyDescriptors',
          shortDesc: `一个对象上所有属性的详细信息`,
          desc: '返回一个包含对象上所有属性描述符的对象。',
          example: `console.log(Object.getOwnPropertyDescriptors(obj))`,
          output: `Object {<br>
          <span>&nbsp;&nbsp;</span>a: Object {<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>
          <span>&nbsp;&nbsp;</span>},<br>
          <span>&nbsp;&nbsp;</span>b: Object {<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>
          <span>&nbsp;&nbsp;</span>},<br>
          <span>&nbsp;&nbsp;</span>c: Object {<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>
          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>
          <span>&nbsp;&nbsp;</span>},<br>
          }`
        },
        {
          name: 'propertyIsEnumerable',
          shortDesc: `一个属性是否可以在 for...in 循环中遍历`,
          desc:
            '返回表示内部的 ECMAScript [[Enumerable]] 属性是否已设置的布尔值。这个可以用来检查一个方法是内置的还是用户定义的，因为内置属性更偏向于不可被枚举。',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `一个属性是否直接存在于对象上`,
          desc:
            '返回表示对象是否包含指定属性并且直接存在于对象上而不是通过原型链继承得到。',
          example: `console.log(obj.hasOwnProperty('a'));<br>
          delete obj.a;<br>
          console.log(obj.hasOwnProperty('a'));`,
          output: `true<br>
          false`
        }
      ],
      list: [
        {
          name: 'keys',
          shortDesc: `键`,
          desc: `返回包含对象上所有可被循环的键的名称的数组，并按照它们被循环的顺序来排序。`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `值`,
          desc: `返回包含对象上所有可被循环的值的数组，并按照它们被循环的顺序来排序。`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `键和值`,
          desc: `返回包含对象上所有可被循环的键值对的嵌套数组，并按照它们被循环的顺序来排序。`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `键，即使您不能循环它们`,
          desc: `返回包含对象上所有可枚举和不可枚举的属性的名称的数组，跟 <code>Object.keys()</code> 一样，可以得到对象的键，但 <code>getOwnPropertyNames()</code> 会包含不能通过循环来得到的属性。`,
          example: `Object.defineProperty(obj, 'a', {<br>
          <span>&nbsp;&nbsp;</span>enumerable: false<br>
          });<br>
          <br>
          console.log(Object.keys(obj));<br>
          console.log(Object.getOwnPropertyNames(obj));`,
          output: `["b", "c"]<br>
          ["a", "b", "c"]`
        }
      ]
    },
    prototype: [
      {
        name: 'getPrototypeOf',
        shortDesc: `获取对象的原型`,
        desc: `返回指定对象的原型。（例如指定对象的内部 [[Prototype]] 属性的值）`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `设置对象的原型`,
        desc: `警告：这个方法真的很慢。使用时要小心，或者用 <code>Object.create()</code> 带代替设置原型（例如内部的 [[Prototype]] 属性）。`,
        example: `const dict = Object.setPrototypeOf({}, obj);<br>
        <br>
        console.log(dict);`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        }`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `知道一个对象是否在原型链上`,
        desc: `返回表示一个对象是否在另一指定对象的原型链上的布尔值。`,
        example: `function Rect() {}<br>
        <br>
        var rect = new Rect();<br>
        <br>
        console.log(Rect.prototype.isPrototypeOf(rect));`,
        output: `true`
      }
    ]
  }
}
