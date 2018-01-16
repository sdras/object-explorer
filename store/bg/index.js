export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'създам нов обект',
        desc: `Създава нов обект със зададения прототип и свойства.<br>
          <br>
          <strong>Важно за начинаещи!</strong> Създаването на обект по начина показан в началото на примера е по-често срещано, например така: <code>let obj = { a: 1 };</code>`,
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
        shortDesc: 'направя копие на обект',
        desc:
          'Копира стойностите на всички изброени свойства на един или повече обекти към друг обект. Връща новия обект като стойност. Въпреки, че чисто технически не е вътрешен метод, по-често когато се използва ES6 се среща <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a> ето така: <code>...</code>',
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
        shortDesc: 'ново свойство или да променя съществуващо',
        desc: `Добавя свойство с даденото име, определено с подадените параметри.<br>
          <br>
          <strong>Важно за начинаещи!</strong> По-чесно се използват точка или квадратни скоби, когато се създава ново свойство или се променя съществуващо такова. Например: <code>obj.a = 1</code> или <code>obj[a] = 1</code>. Технически, това не е вграден метод и затова не е включен.`,
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
        shortDesc: 'едно или повече свойства или да променя съществуващи',
        desc: `Добавя едно или повече свойства към обекта, определени от параметрите.<br>
          <br>
          <strong>Важно за начинаещи!</strong> По-чесно се използват точка или квадратни скоби, когато се създава ново свойство или се променя съществуващо такова. Например: <code>obj.a = 1</code> или <code>obj[a] = 1</code>. Технически, това не е вграден метод и затова не е включен.`,
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
        shortDesc: 'дали повече свойства могат да бъдат добавени',
        desc: 'Определя дали удължаването на обекта е разрешено.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'дали две референции водят към същия обект',
        desc:
          'Проверява дали две референции водят към същия обект. Приравнява всички NaN стойности (което се отличава от Abstract Equality Comparison и Strict Equality Comparison). Това е малко странно и MDN документите са малко подвеждащи. По-полезно е да се използва <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">три пъти равно <code>===</code></a> за проверка на равенство.',
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
        shortDesc: `дали обектът и свойствата му не могат да бъдат променяни`,
        desc: 'Проверява дали обектът е замръзен.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `дали обектът не може да бъде променян (свойствата могат)`,
        desc: 'Определя дали обектът или свойствата му са запечатани.',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `дали обектът е в прототипната верига`,
        desc: `Връща булева стойност за това дали обектът е в прототипната верига.`,
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
        shortDesc: `забраня добавяне или премахване на свойства`,
        desc:
          'Предпазва свойствата на обект да бъдат изтрити от друг код. Съществуващите свойства могат да бъдат променени.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `забраня добавяне, премахване или промяна на свойства`,
        desc: `Замръзява обекта: свойствата не могат да бъдат премахнати или променени.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `забраня добавяне на свойства`,
        desc: `Предпазва обекта от удължаване. Свойства могат да бъдат изтрити, но нови не могат да бъдат добавени.`,
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
        shortDesc: `обекта представен като низ`,
        desc: `Методът <code>toString()</code> връща низ от предоставения обект. Въпреки, че това е достъпния вътрешен метод, обикновено е по-полезно да се използва <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `локализиран низ от предоставения обект`,
        desc: `Методът <code>toLocaleString()</code> връща низ от предоставения обект. Този метод е предоставен за работа с локализации и може да бъде презаписан от производни обекти. Това означава, че ако имате обект съдържащ разнични данни в зависимост от локацията, например методи за дати, те ще продоставят различен формат.`,
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
          shortDesc: `детайли за свойство`,
          desc: 'Връща описание на свойство от обекта за свойство с това име.',
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
          shortDesc: `детайли за всички свойства на обекта`,
          desc:
            'Връща обект съдържащ всички описания на собствени свойства на обект.',
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
          shortDesc: `дали свойство може да бъде обходено с for...in цикъл`,
          desc:
            'Връща булева стойност в зависимост дали вътрешния ECMAScript [[Enumerable]] атрибут е зададен. Това може да бъде използвано за проверка дали метод е зададен по подразбиране или е зададен от потребителя, защото зададените по подразбиране свойства обикновено не са Enumerable.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `дали свойство съществува като директно свойство на обекта`,
          desc:
            'Връща булева стойност в зависимост дали обекта съдържа определеното свойство като директно свойство на този обект, а не наследено чрез прототипната верига.',
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
          shortDesc: `ключове`,
          desc: `Връща масив съдържащ имената на всички ключове на обекта. Масива може да бъде обходен в последователността, в която ключовете биха били обходени.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `стойности`,
          desc: `Връща масив съдържащ имената на всички стойности на обекта. Масива може да бъде обходен в последователността, в която стойностите биха били обходени.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `ключове и стойности`,
          desc: `Връща масив от масиви от съдържащи всички двойки ключове и стойности на обекта. Масива може да бъде обходен в последователността, в която ключовете и стойностите биха били обходени.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `ключове дори и да не могат да бъдат обходени`,
          desc: `Връща масив съдържащ всички имена на свойства на обект без значение дали могат да бъдат обходени. Прави същото като <code>Object.keys()</code> връщайки ключовете на обекта, но <code>getOwnPropertyNames()</code> също съдържа свойства който не могат да бъдат обходени.`,
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
        shortDesc: `получа прототип на обекта`,
        desc: `Връща прототипа на подадения обект (тоест, стойността на вътрешното <code>[[Prototype]]</code> свойство).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `задам прототип на обекта`,
        desc: `Внимание: този метод е много бавен. Използвайте внимателно или заменете с <code>Object.create()</code>. Задава прототипа (тоест, стойността на вътрешното <code>[[Prototype]]</code> свойство).`,
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
        shortDesc: `разбера дали обекта е в прототипната верига`,
        desc: `Връща булева стойност в зависимост дали обекта е в прототипната верига на подадения в метода обект.`,
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
