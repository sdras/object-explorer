export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: '새로운 객체 생성하기',
        desc: `지정된 프로토타입 객체 및 프로퍼티를 사용하여 새로운 객체를 생성합니다.<br>
          <br>
          <strong>초보자를 위한 중요사항!</strong> <code>let obj = { a: 1 };</code>와 같이 예제의 맨 위에 표시되는 방식으로 객체를 만드는 것이 더 일반적입니다. `,
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
        shortDesc: '객체의 복사본 만들기',
        desc: `한가지 이상의 원본 객체에서 대상 객체로 열거할 수 있는 모든 프로퍼티 값을 복사합니다. 기술적으로 객체 메서드에 내장된 것은 아니지만 ES6를 사용하는 경우 <code>...</code>을 사용하여 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">전개 연산자</a>를 활용하는 것이 더 일반적입니다.`,
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
        shortDesc: '새로운 프로퍼티 또는 기존 프로퍼티 수정하기',
        desc: `객체에 지정된 기술자로 설명된 이름이 지정된 프로퍼티를 추가합니다.<br>
          <br>
          <strong>초보자를 위한 중요사항!</strong> 새 프로퍼티를 만들거나 기존 프로퍼티를 수정하려면 점 또는 대괄호 표기법을 사용하는 것이 더 일반적입니다. 이와 같이: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. 이것은 기술적으로 내장 메서드가 아니기 때문에 포함되지 않습니다.`,
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
        shortDesc: '한 가지 이상의 프로퍼티 또는 기존 프로퍼티 수정하기',
        desc: `객체에 지정된 기술자에 설명된 프로퍼티를 하나 이상 추가합니다.<br>
          <br>
          <strong>초보자를 위한 중요사항!</strong> 새 프로퍼티를 만들거나 기존 프로퍼티를 수정하려면 점 또는 대괄호 표기법을 사용하는 것이 더 일반적입니다. 이와 같이: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. 이것은 기술적으로 내장 메서드가 아니기 때문에 포함되지 않습니다.`,
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
        shortDesc: '프로퍼티를 더 추가할 수 있는지',
        desc: '객체의 확장이 허용되는지 여부를 판정합니다.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: '두 개의 참조가 같은 객체를 가리키는 경우',
        desc: `두 참조가 동일한 객체를 가리키는지를 비교합니다. 모든 NaN 값과 같습니다. (추상적 같음 비교와 엄격한 같음 비교 둘 다와는 다르다) 이건 좀 이상하지만 MDN 문서에 오해의 소지가 있습니다. 같음을 확인하기 위해 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">엄격한 같음 <code>===</code>를 사용하는 것이 더 유용합니다</a>.`,
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
        shortDesc: `객체와 객체의 프로퍼티를 수정할 수 없는 경우`,
        desc: '객체가 고정되어 있는지 판별합니다.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `객체를 수정할 수 없는 경우 (프로퍼티는 될 수 있지만)`,
        desc: `해당 프로퍼티의 기술자를 변경할 수 없고 새 프로퍼티를 생성할 수 없는지 여부를 판별합니다.`,
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `객체가 프로토타입 체인에 있는 경우`,
        desc: `이 메서드가 호출된 객체가 지정된 객체의 프로토타입 체인에 있는지 여부를 부울로 반환합니다.`,
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
        shortDesc: `프로퍼티를 추가하거나 삭제할 수 없도록 만들기`,
        desc:
          '다른 코드가 객체의 프로퍼티를 추가하거나 삭제하지 못하도록 합니다. 기존 프로퍼티는 여전히 수정할 수 있습니다.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `프로퍼티를 추가, 삭제 또는 수정할 수 없도록 만들기`,
        desc: `객체를 얼려버립니다: 다른 코드는 프로퍼티를 추가 또는 삭제하거나 수정할 수 없습니다.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">// 값이 10으로 업데이트되지 않았습니다.</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `프로퍼티를 추가할 수 없도록 만들기`,
        desc: `객체의 확장을 차단합니다. 속성을 삭제할 수는 있지만 추가할 수는 없습니다.`,
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
        shortDesc: `객체의 문자열 표현`,
        desc: `<code>toString()</code> 메서드는 객체를 나타내는 문자열을 반환합니다. 내장 메서드이지만 일반적으로 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>를 사용하는 것이 더 유용합니다.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `객체의 지역화된 문자열 표현`,
        desc: `<code>toLocaleString()</code>메서드는 객체를 나타내는 문자열을 반환합니다. 이 방법은 지역별 목적으로 파생된 개체에 의해 재정의됩니다. 인간적인 관점에서: 이것은 date 메서드와 같이 위치에 따라 다른 데이터가 있는 경우 다른 시간 포맷을 제공한다는 의미입니다`,
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
          shortDesc: `프로퍼티에 대한 세부 정보`,
          desc:
            '객체의 이름이 지정된 프로퍼티에 대한 프로퍼티 기술자를 반환합니다.',
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
          shortDesc: `객체의 모든 프로퍼티에 대한 세부 정보`,
          desc:
            '객체에 대한 모든 고유한 프로퍼티 기술자를 포함하는 객체를 반환합니다.',
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
          shortDesc: `for...in 루프를 사용하여 프로퍼티를 탐색할 수있는 경우`,
          desc:
            '내부에 ECMAScript [[Enumerable]] 속성이 설정되어 있는지를 나타내는 부울을 반환합니다. 내장 프로퍼티는 열거되지 않기 때문에 프로퍼티가 내장된 것인지 사용자 정의 메서드인지 확인하는 데 사용할 수 있습니다.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `프로퍼티가 오브젝트의 직접적인 프로퍼티로서 존재하는 경우`,
          desc:
            '객체가 지정된 프로퍼티를 객체의 직접적인 프로퍼티로 포함하며 프로토타입 체인을 통해 상속되는지를 부울로 반환합니다.',
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
          shortDesc: `키`,
          desc: `반복할 수 있는 객체의 모든 키가 포함된 배열을 순서대로 반환합니다.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `값`,
          desc: `반복할 수 있는 객체의 모든 값이 포함된 배열을 순서대로 반환합니다.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `키와 값`,
          desc: `반복할 수 있는 모든 객체의 키 / 값 쌍을 포함하는 중첩된 배열을 반환합니다.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `키, 하지만 열거할 수 없는 경우`,
          desc: `지정된 객체 자신의 열거 가능 및 열거 불가한 프로퍼티의 이름 모두를 포함한 배열로 반환합니다. 객체의 키를 검색하는 <code>Object.keys()</code>와 동일한 작업을 수행하지만 <code>getOwnPropertyNames()</code>는 반복할 수 없는 프로퍼티를 포함합니다.`,
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
        shortDesc: `객체의 프로토타입을 가져오기.`,
        desc: `지정된 객체의 프로토타입을 반환합니다. (즉 지정된 객체의 (내부 [[Prototype]] 프로퍼티 값).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `객체의 프로토타입을 설정하기.`,
        desc: `경고: 이 메서드는 정말 느립니다. 주의하여 사용하거나 <code>Object.create()</code>로 교체합니다. 프로토타입(즉 내부의 [[Prototype]] 프로퍼티)을 설정합니다.`,
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
        shortDesc: `프로토타입 체인에 객체가 있는지 찾아보기.`,
        desc: `이 메서드를 호출한 객체가 지정된 객체의 프로토타입 체인에 있는지를 부울로 반환합니다.`,
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
