export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'yeni obje oluşturmak',
        desc: `Verilen prototip objesinin özelliklerine sahip yeni bir obje oluşturur.<br>
          <br>
          <strong>Yeni başlayanlar için önemli not!</strong> Obje oluştururken, en üstte bulunan örnekteki yöntemi kullanmak daha yaygındır; <code>let obj = { a: 1 };</code>`,
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
        shortDesc: 'objenin kopyasını oluşturmak',
        desc: `Bir veya birden fazla kaynak objenin numaralandırılabilir özelliklerini hedef objeye kopyalar. Hedef objeyi geri döndürür. Teknik olarak yerleşik bir metod olmasa da, ES6'in <code>...</code> şeklinde kullanılan <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a> özelliği ile kullanımı yaygındır.`,
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
        shortDesc: 'yeni bir özellik eklemek veya varolan özelliği değiştirmek',
        desc: `Belirli bir tanımlayıcı tarafından açıklanan adlandırılmış özelliği bir objeye ekler.<br>
          <br>
          <strong>Yeni başlayanlar için önemli not!</strong> Nokta veya köşeli parantez notasyonu ile ekleme veya değiştirme yapmak daha yaygındır: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Bunu dahil etmemizin nedeni, teknik olarak yerleşik bir metod olmamasıdır.`,
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
        shortDesc: 'bir veya birden fazla yeni özellik eklemek veya değiştirmek',
        desc: `Belirli bir tanımlayıcı tarafından açıklanan adlandırılmış bir veya birden fazla özelliği objeye ekler.<br>
          <br>
          <strong>Yeni başlayanlar için önemli not!</strong> Nokta veya köşeli parantez notasyonu ile ekleme veya değiştirme yapmak daha yaygındır: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Bunu dahil etmemizin nedeni, teknik olarak yerleşik bir metod olmamasıdır.`,
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
        shortDesc: 'daha fazla özellik eklenebilir mi?',
        desc: 'Objenin genişletilebilir olup olmadığını belirler.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'iki referans da aynı objeye mi işaret ediyor?',
        desc: `İki referansın da aynı objeye işaret edip etmediğini karşılaştırır. Bütün NaN değerlerini eşitler ("==" ve "===" karşılaştırma işlemlerinden farklı olarak). Bu işlem biraz garip ve MDN'deki bilgiler biraz yanıltıcı olabilir. Eşitliği kontrol etmek için <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">üç eşittir <code>===</code></a> karşılaştırıcısını kullanmak daha faydalıdır.`,
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
        shortDesc: `obje ve özellikleri değiştirilemez mi?`,
        desc: 'Objenin donmuş olup olmadığını belirler.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `obje değiştirilemez (ama özellikleri değiştirilebilir) mi?`,
        desc: `Özelliklerin tanımlayıcılarının değiştirilemeyeceğini ve yeni özelliklerin eklenemeyeceğini belirler.`,
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `obje, prototip zincirinde mi?`,
        desc: `Objenin metodunun, verilen objenin protitipinden gelip gelmediğini belirten bir boolean döndürür.`,
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
        shortDesc: `objeye yeni özellik eklenmesini ve varolan özelliklerin silinmesini engellemek`,
        desc:
          'Başka bir kodun, objenin özelliklerini silmesini ve yeni özellik eklenmesini engeller. Varolan özellikler değiştirilebilir.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c silinmedi`
      },
      {
        name: 'freeze',
        shortDesc: `objeye yeni özellik eklenmesini, varolan özelliklerin silinmesini ve değiştirilmesini engellemek`,
        desc: `Objeyi dondurur: başka bir kod, objenin özelliklerini silemez, değiştiremez ve yeni özellik ekleyemez.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">// a'nın değeri değişmedi</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `objeye yeni özellikler eklenmesini engellemek`,
        desc: `Objenin yeni özellikler ile genişletilesini engeller. Özellikler silinebilir ama yeni özellik eklenemez.`,
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
        shortDesc: `objenin string temsilini döndürmek`,
        desc: `<code>toString()</code> metodu, objenin string temsilini döndürür. Bu bir yerleşik metod olsa da, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a> metodunu kullanmak genellikle daha faydalıdır.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `objenin yerelleştirilmiş string temsilini döndürmek`,
        desc: `<code>toLocaleString()</code> metodu, objenin yerelleştirilmiş metodunu döndürür. Bu yöntemin, yerellere özgü amaçlar için türetilmiş objeler tarafından geçersiz kılınması amaçlanmıştır. Yani: tarih metodları gibi lokasyona göre farklı data verecek bir şeyiniz varsa, size farklı bir tarih formatı döndürecektir.`,
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
          shortDesc: `özellik hakkında detaylar`,
          desc:
            'Objenin, adlandırılmış bir özelliğinin tanımlayıcısını döndürür.',
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
          shortDesc: `objenin bütün özellikleri hakkında detaylar`,
          desc:
            'Objenin, bütün adlandırılmış özelliklerinin tanımlayıcılarını içeren bir obje döndürür.',
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
          shortDesc: `özellik, for...in döngüsünde kullanılabilir mi?`,
          desc:
            'Özelliğin, ECMAScript\'in dahili [[Enumerable]] niteliğine sahip olup olmadığını belirten boolean döndürür. Bu, bir şeyin dahili mi yoksa kullanıcı tarafından tanımlanmış bir metod olduğunu anlamak için kullanılabilir çünkü dahili özellikler genellikle numaralandırılabilir değildir.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `özellik, doğrudan objeye mi ait?`,
          desc:
            'Özelliğin doğrudan objeye mi ait olduğunu ve prototip zincirinden gelmediğini belirten boolean döndürür.',
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
          shortDesc: `anahtarlar`,
          desc: `Objenin, döngülenebilir bütün anahtarlarının adlarını, döngü sırasına göre sıralanmış şekilde içeren bir dizi döndürür.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `değerler`,
          desc: `Objenin, döngülenebilir bütün değerlerinin adlarını, döngü sırasına göre sıralanmış şekilde içeren bir dizi döndürür.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `anahtarlar ve değerler`,
          desc: `Objenin, döngülenebilir bütün anahtar/değer çiftlerinin adlarını, döngü sırasına göre sıralanmış şekilde içeren, iç içe dizi döndürür.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `anahtarlar (döngülenemez olanlar da dahil)`,
          desc: `Objenin, numaralandırılabilir ve numeralandırılamaz bütün anahtarlarının adlarını içeren bir dizi döndürür. <code>Object.keys()</code> ile aynı işlemi yapar ama <code>getOwnPropertyNames()</code>, döngülenemez özellikleri de içerir.`,
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
        shortDesc: `objenin prototipini getirmek`,
        desc: `Belirtilen objenin prototipini (dahili [[Prototype]] özelliğini) döndürür.`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `objenin prototipini belirlemek`,
        desc: `Uyatı: bu metod oldukça yavaştır. Dikkatle kullanın ya da <code>Object.create()</code> metodunu tercih edin. Objenin prototipini (yani dahili [[Prototype]] özelliğini) belirler.`,
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
        shortDesc: `objenin, prototip zincirinde olup olmadığını anlamak`,
        desc: `Objenin metodunun, verilen objenin protitipinden gelip gelmediğini belirten bir boolean döndürür.`,
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
