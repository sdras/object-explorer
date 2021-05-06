export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'নতুন একটা অবজেক্ট তৈরি করা',
        desc: `উল্লেখকৃত prototype অবজেক্টের সাহায্যে, উল্লেখকৃত properties সহ নতুন একটা অবজেক্ট তৈরি করে<br>
          <br>
          <strong>নতুনদের জন্য গুরুত্বপূর্ণ তথ্য!</strong> সাধারণতঃ এখানে দেখানো উদাহরণের চাইতে সহজভাবে নতুন অবজেক্ট তৈরি করা হয়, এভাবে <code>let obj = { a: 1 };</code>`,
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
        shortDesc: 'একটা অবজেক্টের একটা কপি তৈরি করা',
        desc:
          `এক বা একাধিক অবজেক্ট থেকে সবগুলো enumerable properties নিয়ে একটি টার্গেট অবজেক্টে কপি করে। এই method টি সগুলো properties সহ নতুন অবজেক্টটিকে return করে। তবে ES6 ব্যবহার করার সময় সাধারণতঃ <code>...</code> এর মাধ্যমে <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a> ব্যবহার করাটাই বেশি প্রচলিত, যদিও এটা অবজেক্টের কোনও built-in method নয়`,
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
        shortDesc: 'নতুন একটি property তৈরি করা অথবা একটা বিদ্যমান property তে পরিবর্তন আনা',
        desc: `একটা বিদ্যমান অবজেক্টে উল্লেখকৃত বিবরণ(descriptor)-সহ একটা property যোগ করে।<br>
          <br>
          <strong>নতুনদের জন্য গুরুত্বপূর্ণ তথ্য!</strong>প্রচলিতভাবে, ডট(.) বা square ব্রাকেট([]) ব্যবহার করে একটা property নতুনভাবে যোগ করা বা পরিবর্তন করা হয়। এভাবে: <code>obj.a = 1</code> or <code>obj[a] = 1</code>.  এটা অবজেক্টের কোনও built-in method নয়, এজন্য এটা এখানে অন্তর্ভুক্ত করা হয়না।`,
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
        shortDesc: 'নতুন এক বা একাধিক property তৈরি করা অথবা বিদ্যমান property তে পরিবর্তন আনা',
        desc: `একটা বিদ্যমান অবজেক্টে উল্লেখকৃত বিবরণ(descriptor)-সহ এক বা একাধিক property যোগ বা পরিবর্তন করে।<br>
          <br>
          <strong>নতুনদের জন্য গুরুত্বপূর্ণ তথ্য!</strong> প্রচলিতভাবে, ডট(.) বা square ব্রাকেট([]) ব্যবহার করে একটা property নতুনভাবে যোগ করা বা পরিবর্তন করা হয়। এভাবে: <code>obj.a = 1</code> or <code>obj[a] = 1</code>.  এটা অবজেক্টের কোনও built-in method নয়, এজন্য এটা এখানে অন্তর্ভুক্ত করা হয়না।`,
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
        shortDesc: 'নতুন কোনো property যোগ করা যাবে কিনা।',
        desc: 'এই অবজেক্টে নতুন কোনো property যোগ করা যাবে কিনা, তা জানা যায়।',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'দুইটি reference কি একই অবজেক্টের',
        desc: `দুইটি reference এর মধ্যে তুলনা করে তারা একই অবজেক্টের কিনা। তবে এটার আচরণ একটু বিদঘুটে; সব NaN ভ্যালুকে একই দেখায়। আর এটা নিয়ে MDN এর ডকুমেন্টও কিছুটা বিভ্রান্তিকর। এজন্য <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">"triple equals" <code>===</code></a> ব্যবহার করে দুটি রেফারেন্স একই অবজেক্টের কিনা যাচাই করাটাই বেশি নিরাপদ।`,
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
        shortDesc: `একটা অবজেক্ট বা তার কোনও property পরিবর্তনযোগ্য কিনা`,
        desc: 'জানা যায় একটি অবজেক্টে কোনও পরিবর্তন করা যাবে নাকি এটা "ফ্রোজেন"(frozen)',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `একটা অবজেক্ট অপরিবর্তনযোগ্য কিনা  (তবে property গুলো পরিবর্তনযোগ্য হতে পারে)`,
        desc: `জানা যায় একটা বিদ্যমান অবজেক্টের বিবরণ(descriptor) অপরিবর্তনযোগ্য কিনা বা নতুন কোন property যোগ করা অসম্ভব কিনা`,
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `একটা অবজেক্ট একটা উল্লেখকৃত prototype chain এ বিদ্যমান কিনা `,
        desc: `একটা অবজেক্ট একটা উল্লেখকৃত prototype chain এ বিদ্যমান কিনা, এর উপরে ভিত্তি করে একটা Boolean value রিটার্ন করে।`,
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
        shortDesc: `অবজেক্টকে সিল(seal) করে অপরিবর্তনযোগ্য করা`,
        desc:
          'অবজেক্টকে সিল করে অপরিবর্তনযোগ্য করে ফেলা যাতে অন্য কোনও কোড কোনও property যোগ করে বা মুছে ফেলে এই অবজেক্টের স্ট্রাকচার বদলাতে না পারে। তবে, বিদ্যমান property আগের মতোই পরিবর্তনযোগ্য থাকে।',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `অবজেক্টকে ফ্রিজ (freeze) করে সম্পূর্ণভাবে অপরিবর্তনযোগ্য করা`,
        desc: `অবজেক্টকে ফ্রিজ করে একেবাররেই অপরিবর্তনযোগ্য করে ফেলা যাতে অন্য কোনও কোড কোনও property যোগ করে, মুছে ফেলে বা বদলাতে না পারে। বিদ্যমান সমস্ত property গুলো সম্পূর্ণভাবে অপরিবর্তনযোগ্য হয়ে যাবে।`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `অবজেক্টে নতুন কোনও property যোগ করা বন্ধ করে দেয়া`,
        desc: `কেবলমাত্র অবজেক্টে নতুন কোনও property যোগ করতে বাধা দেয়। তবে বিদ্যমান যে কোনও property স্বাভাবিক ভাবে মুছে ফেলা যাবে।`,
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
        shortDesc: `অবজেক্টকে string আকারে প্রকাশ করা`,
        desc: `<code>toString()</code> method অবজেক্টকে string আকারে দেখায়। তবে যদিও এই method টা built-in,  তবে সাধারণতঃ প্রকৃত কাজের জন্য <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a> টাই বেশি প্রচলিত।`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `অবজেক্টকে আঞ্চলিক ভাষায় string আকারে প্রকাশ করা`,
        desc: `<code>toLocaleString()</code> method অবজেক্টকে আঞ্চলিক ভাষার string আকারে দেখায়। এই method এর উদ্দেশ্য মূলতঃ override করে আঞ্চলিক-ভাষা সম্পর্কিত বিভিন্ন কাজে লাগানো । তবে সহজভাবে বললে, যদি কোন ডাটা ব্যবহারকারীর অঞ্চলের উপর নির্ভরশীল হয়, যেমনঃ তারিখ ইত্যাদি, এই method টি কাজে লাগিয়ে বিভিন্ন অঞ্চলের ব্যবহারকারীকে বিভিন্ন ভাবে দেখান যায়।`,
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
          shortDesc: `অবজেক্টের বিশেষ একটা property এর বিস্তারিত`,
          desc:
            'কোন একটা অবজেক্টের উল্লেখকৃত একটা property-এর একান্ত নিজস্ব, বিস্তারিত (descriptor) configuration একটা অবজেক্ট আকারে রিটার্ন করে।',
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
          shortDesc: `অবজেক্টের সবগুলো properties এর বিস্তারিত`,
          desc:
            'কোন একটা অবজেক্টের সবগুলো properties এর বিস্তারিত configuration (descriptor) একসাথে একটা অবজেক্ট আকারে রিটার্ন করে।',
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
          shortDesc: `অবজেক্টের উল্লেখিত property কি একটা for...in লুপ চালানোর উপযোগী`,
          desc:
            'অবজেক্টের উল্লেখিত property কি একটা for...in লুপের উপযোগী কিনা, এর উপরে ভিত্তি করে একটা Boolean value রিটার্ন করে। এটা চেক করে যে property টার `ECMAScript [[Enumerable]]` attribute টা set কিনা । এই বিশেষত্বটা ব্যবহার করে চেক করে জানা যায় যে একটা অবজেক্টের কোনও একটা property কি built-in নাকি user-defined method । কেননা, built-in properties সাধারণতঃ enumerable হয় না।',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `অবজেক্টের উল্লেখিত property কি একটা একান্ত(direct) নিজস্ব property`,
          desc:
            'অবজেক্টের উল্লেখিত property কি একটা একান্ত(direct) নিজস্ব property কিনা, এর উপরে ভিত্তি করে একটা Boolean value রিটার্ন করে। Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.',
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
          shortDesc: `নামসমূহ (keys)`,
          desc: `একটা অবজেক্টের সবগুলো properties এর নামগুলো (keys) একটা array আকারে রিটার্ন করে। key গুলোর ক্রমানুসার(order) অবজেক্টের properties এ লুপ চালালে যেভাবে হতো সেভাবেই থাকে।`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `মান সমূহ (values)`,
          desc: `একটা অবজেক্টের সবগুলো নিজস্ব properties এর ভ্যালুগুলো (values) একটা array আকারে রিটার্ন করে। value-গুলোর ক্রমানুসার(order) অবজেক্টের properties এ লুপ চালালে যে ক্রমানুসারে হতো, সেভাবেই থাকে।`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `একসাথে নাম(keys) আর ভ্যালুগুলো (values)`,
          desc: `লুপ করে পাওয়া যায় অর্থাৎ Iterable সবগুলো key-value pair একটা nested array আকারে রিটার্ন করে । array-গুলোর ক্রমানুসার(order) অবজেক্টের properties এ লুপ চালালে যে ক্রমানুসারে হতো, সেভাবেই থাকে। `,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `নামসমূহ (keys), enumerable না এরকম সহ`,
          desc: `একটা অবজেক্টের সবগুলো (enumerable এবং non-enumerable) properties এর নামগুলো (keys) একটা array আকারে রিটার্ন করে। অনেকটাই <code>Object.keys()</code>-র মতন, তবে <code>getOwnPropertyNames()</code>  যেসব property enumerable না সেগুলার key-গুলোকেও অন্তর্ভুক্ত করে।`,
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
        shortDesc: `একটা অবজেক্টের prototype কে`,
        desc: `একটা অবজেক্টের prototype কে রিটার্ন করে। (আসলে অবজেক্টের Prototype নামে থাকা একটা অভ্যন্তরীণ property এর ভ্যালুকে রিটার্ন করে)`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `একটা অবজেক্টের prototype সেট করে`,
        desc: `সতর্কবাণী: এই method টি খুবই ধীরগতির. সতর্কতার সাথে ব্যবহার করুন, অথবা <code>Object.create()</code> ব্যবহার করাই ভালো। এই method টি আসলে অবজেক্টের Prototype নামে থাকা একটা অভ্যন্তরীণ property এর ভ্যালুকে সেট করে).`,
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
        shortDesc: `খুঁজে বের করা যে একটা অবজেক্ট কি একটা prototype chain এ কিনা`,
        desc: `Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.`,
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
