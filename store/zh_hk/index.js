export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: '建立一個新的物件',
        desc: `建立一個帶有指定原型和屬性的新物件。<br>
          <br>
          <strong>初學者請注意！</strong> 一般來說建立一個物件就像上方例子那樣直接賦予變數一個值 <code>let obj = { a: 1 };</code>。`,
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
        shortDesc: '建立一個物件複本',
        desc: `複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。縱使在技術層面這不是一個物件的內置方法，當使用 ES6 時常見的做法是利用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">展開運算子</a> <code>...</code>`,
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
        shortDesc: '定義一個新屬性或修改一個現有的屬性',
        desc: `直接對一個物件定義一個屬性，或是修改現有的屬性。<br>
          <br>
          <strong>初學者請注意！</strong> 常見的做法是使用小數點或方括號來定義一個新屬性或修改現有屬性。範例：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。從技術上來說這不是一個內置的函數，所以不包括在內。`,
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
        shortDesc: '定義一個或多個新屬性或修改一個或多個現有的屬性',
        desc: `直接對一個物件定義一個或多個屬性，或是修改現有的屬性。<br>
          <br>
          <strong>初學者請注意！</strong> 常見的做法是使用小數點或方括號來定義一個新屬性或修改現有屬性。範例：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。從技術上來說這不是一個內置的函數，所以不包括在內。`,
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
        shortDesc: '是否可以添加更多的屬性',
        desc: '檢查是否允許擴展物件。',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: '兩個引用是否指向同一物件',
        desc: `對比兩個引用是否指向同一物件。NaN 與 NaN 比較會返回 true (與抽像相等比較和嚴格相等比較不同)（譯者註：「抽像相等比較」就是將型別一致化後比較，即“==”；「嚴格相等比較」則會比較兩個值和型別，即“===”）。這個有點奇怪，MDN 文檔有點誤導。使用<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">三個等號 <code>===</code></a> 來比較物件是否相同會更有效。`,
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
        shortDesc: `物件及其屬性是否不能被修改`,
        desc: '檢查一個物件是否被凍結。',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `一個物件是否不能被修改（但屬性可以）`,
        desc: '檢查一個物件及其屬性是否被封存。',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `物件是否在原型鏈裡`,
        desc: `返回表示一個物件是否在另一指定物件的原型鏈上的布林值。`,
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
        shortDesc: `讓它不能添加或刪除屬性`,
        desc: '阻止刪除一個物件的屬性。現有的屬性仍然能被修改。',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `讓它不能添加、刪除或修改屬性`,
        desc: `凍結一個物件，使得它的屬性不能被更改或刪除。`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `讓它不能添加屬性`,
        desc: `阻止物件的擴展。仍然可以刪除屬性但不能添加屬性。`,
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
        shortDesc: `表示這個物件的字符串`,
        desc: `<code>toString()</code> 方法返回表示這個物件的字符串。縱使這是一個內置的方法，更有效的方法是 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `表示這個物件的本地化的字符串`,
        desc: `<code>toLocaleString()</code> 方法返回表示這個對象的字符串。這個方法可以根據按不同地域需要在派生物件中被重寫。例如：您有一些因地域不同而不同的數據，如日期的方法，您可以得到不同的時間格式。`,
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
          shortDesc: `關於屬性的詳細信息`,
          desc: '返回一個物件上已命名的屬性的屬性描述器。',
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
          shortDesc: `一個物件上所有屬性的詳細信息`,
          desc: '返回一個包含物件上所有屬性描述器的物件。',
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
          shortDesc: `一個屬性是否可以在 for...in 循環中遍歷`,
          desc:
            '返回表示內部的 ECMAScript [[Enumerable]] 屬性是否已設置的布林值。這個可以用來檢查一個方法是內置的還是用戶定義的，因為內置屬性更偏向於不可被枚舉。',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `一個屬性是否直接存在於物件上`,
          desc:
            '返回表示物件是否包含指定屬性並且直接存在於物件上而不是通過原型鏈繼承得到。',
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
          shortDesc: `鍵`,
          desc: `返回包含物件上所有可被循環的鍵的名稱的數組，並按照它們被循環的順序來排序。`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `值`,
          desc: `返回包含物件上所有可被循環的值的數組，並按照它們被循環的順序來排序。`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `鍵和值`,
          desc: `返回包含物件上所有可被循環的鍵值對的嵌套數組，並按照它們被循環的順序來排序。`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `鍵，即使您不能循環它們`,
          desc: `返回包含物件上所有可枚舉和不可枚舉的屬性的名稱的數組，跟 <code>Object.keys()</code> 一樣，可以得到物件的鍵，但 <code>getOwnPropertyNames()</code> 會包含不能通過循環來得到的屬性。`,
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
        shortDesc: `獲取物件的原型`,
        desc: `返回指定物件的原型。 （例如指定物件的內部 [[Prototype]] 屬性的值）`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `設置物件的原型`,
        desc: `警告：這個方法真的很慢。使用時要小心，或者用 <code>Object.create()</code> 來代替設置原型（例如內部的 [[Prototype]] 屬性）。`,
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
        shortDesc: `知道一個物件是否在原型鏈上`,
        desc: `返回表示一個物件是否在另一指定物件的原型鏈上的布林值。`,
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
