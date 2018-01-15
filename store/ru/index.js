export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'создать новый объект',
        desc: `Создает новый объект с указанным значением прототипа и свойствами объекта.<br>
          <br>
          <strong>Важное замечание для начинающих!</strong> Более часто используемый путь создания объекта представлен в начале примера, например так <br><code>let obj = { a: 1 };</code>.`,
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
        shortDesc: 'сделать копию существующего объекта',
        desc: `Копирует значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект. Не смотря на то что <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Оператор расширения (Spread Operator)</a> не является встроеным методом объекта, чаще всего в es6 синтаксисе используют его, для использования достаточно написать <code>...</code>`,
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
        shortDesc: 'добавить новое свойство или изменить существующее',
        desc: `Определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.<br>
          <br>
          <strong>Важное замечание для начинающих!</strong> Чаще всего использую нотацию записи через точку или квадратные скобки для создания нового свойства или изменения существующего. К примеру: <code>obj.a = 1</code> или <code>obj[a] = 1</code>. Это технически не встроеный метод языка поэтому здесь не рассмотрен.`,
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
        shortDesc: 'добавить или изменить существующие свойства объекта',
        desc: `Добавляет одно или несколько свойств, описываемых данным дескриптором объекта.<br>
          <br>
          <strong>Важное замечание для начинающих!</strong> Чаще всего использую нотацию записи через точку или квадратные скобки для создания нового свойства или изменения существующего. К примеру: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Это технически не встроеный метод языка поэтому здесь не рассмотрен.`,
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
        shortDesc: 'могут ли быть добавлены еще свойства',
        desc:
          'Определяет, является ли объект расширяемым (то есть, можно ли к нему добавлять новые свойства).',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'являются ли два значения одинаковыми значениями',
        desc:
          `Сравнивает, если два значения указывают на один и тот же объект. Обозначает все значения NaN (которые отличаются как от сравнения абстрактного равенства, так и от строгого равенства). Это немного странно, и документация MDN вводит в заблуждение. Более правильный путь сравнивать два значения это <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness#%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0_%D0%B6%D0%B5_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C_Object.is" target="_blank">использовать тройной знак равенства <code>===</code></a>`,
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
        shortDesc: `что объект и его свойства не могут быть изменены`,
        desc:
          'Определяет заморожен ли объект. Объект является замороженным только в том случае, если он не расширяем, все его свойства являются не настраиваемыми и все его свойства данных являются не записываемыми.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `что объект не может быть изменен (хотя его свойства могут быть)`,
        desc:
          'Определяет, является ли объект и его свойства запечатанными. Объект является запечатанным, если он является не расширяемым и если все его свойства являются не настраиваемыми и, следовательно, не удаляемыми (но не обязательно не записываемыми).',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `входит ли объект в цепочку прототипов другого объекта.`,
        desc: `Возвращает логическое значение, указывающее, входит ли объект, вызываемый этим методом, в цепочку прототипов указанного объекта.`,
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
        shortDesc: `быть уверенным что свойства не будет добавленны или удалены`,
        desc:
          'Предотвращает добавление новых свойств к объекту и делая все существующие свойства не настраиваемыми. Значения представленных свойств всё ещё могут изменяться, поскольку они остаются записываемыми.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `быть уверенным что свойства не будут добавленны, удалены или модифицированны`,
        desc: `Замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `быть уверенным что свойства не будут добавленны`,
        desc: `Предотврашает расширение объекта. По прежнему можно удалять свойства, но нельзя добавить ни одно.`,
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
        shortDesc: `строковое представление объекта.`,
        desc: `Метод <code>toString()</code> возвращает строку, представляющую объект. Не смотря на то что существует встроенный метод, на практике обычно используют <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `локализованное строковое представление объекта.`,
        desc: `Метод <code>toLocaleString()</code> возвращает строку, представляющую объект. Этот метод предназначен для переопределения унаследованными объектами в целях поддержки зависимости от локали.`,
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
          shortDesc: `информацию о свойстве объекта`,
          desc:
            'Метод возвращает дескриптор свойства для собственного свойства переданного объекта',
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
          shortDesc: `информацию о всех свойствах объекта`,
          desc:
            'Возвращает объект, содержащий все собственные дескрипторы свойств для объекта.',
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
          shortDesc: `можно ли обойти содержимое свойства при помоши цикла for...in`,
          desc:
            'Возврашает логичское значение идентифицируешее что выставлен внутренний атрибут (ECMAScript) [[Enumerable]]. Этот атрибут можно использовать, чтобы определить, является ли свойство объекта встроенным или методом определенным пользователем, так как встроенные свойства, как правило, не могут быть перечисляемыми.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `что свойство существует как непосредственное свойство объекта`,
          desc:
            'Возврашет логическое значение, указывающее, содержит ли объект указанное свойство и не наследует данное свойство через цепочку прототипов.',
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
          shortDesc: `ключей`,
          desc: `Возврашает массив из собственных перечисляемых свойств объекта, в том же порядке, в котором они бы обходились циклом for...in.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `значений`,
          desc: `Возврашает массив из значений собственных перечисляемых свойств объекта, в том же порядке, в котором они бы обходились циклом for...in.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `ключей и значений`,
          desc: `Возвращает вложенный массив, содержащий имена всех пар собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `ключи, в том числе не перечисляемые`,
          desc: `Возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте. такое же извлечение ключей в объект, что и <code>Object.keys()</code>, но <code>getOwnPropertyNames()</code> будет включать не перечисляемые свойства.`,
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
        shortDesc: `получить прототип объекта.`,
        desc: `Возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `установить прототип объекта.`,
        desc: `Внимание: этот метод ужасно медленный. Используйте с осторожностью, или замените на <code>Object.create()</code>. Задает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.`,
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
        shortDesc: `определить, входит ли объект в цепочку прототипов другого объекта.`,
        desc: `Возврашает логическое значение, указывающее, входит ли объект, вызываемый этим методом, в цепочку прототипов указанного объекта.`,
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
