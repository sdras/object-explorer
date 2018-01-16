export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'membuat sebuah objek baru',
        desc: `Membuat sebuah objek baru dengan objek prototipe dan properti yang ditentukan.<br>
          <br>
          <strong>Catatan penting untuk para pemula!</strong> Cara yang lebih umum untuk membuat objek adalah dengan cara yang ditunjukkan pada bagian atas dari contoh, seperti ini <code>let obj = { a: 1 };</code>.`,
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
        shortDesc: 'membuat salinan dari sebuah objek',
        desc:
          'Menyalin seluruh nilai dari seluruh properti yang <em>enumerable</em> dari satu atau lebih objek sumber ke sebuah objek target. Metode ini akan mengembalikan objek target. Meskipun metode ini bukanlah metode objek yang built-in, biasanya pada ES6 lebih umum untuk menggunakan <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a>, dengan <code>...</code>',
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
        shortDesc:
          'sebuah properti baru atau memodifikasi properti yang sudah ada',
        desc: `Menambahkan properti yang diberikan oleh deskriptor ke sebuah objek.<br>
          <br>
          <strong>Catatan penting untuk para pemula!</strong> Cara yang lebih umum adalah dengan menggunakan notasi dot atau kurung siku untuk membuat sebuah properti baru atau memodifikasi yang sudah ada. Seperti ini: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Secara teknis, ini bukanlah sebuah metode yang <em>built-in</em>, sehingga tidak diikutsertakan.`,
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
        shortDesc:
          'satu atau lebih properti atau memodifikasi lebih dari satu properti yang sudah ada',
        desc: `Menambahkan satu atau lebih properti yang dijelaskan oleh deskriptor yang diberikan ke sebuah objek.<br>
          <br>
          <strong>Catatan penting untuk para pemula!</strong> Cara yang lebih umum adalah dengan menggunakan notasi dot atau kurung siku untuk membuat sebuah properti baru atau memodifikasi yang sudah ada. Seperti ini: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Secara teknis, ini bukanlah sebuah metode yang <em>built-in</em>, sehingga tidak diikutsertakan.`,
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
        shortDesc: 'apakah saya dapat menambahkan lebih banyak properti',
        desc:
          'Menentukan apakah melakukan ekstensi terhadap suatu objek diperbolehkan.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'apakah dua titik referensi menunjuk ke objek yang sama',
        desc:
          `Membandingkan apakah dua titik referensi menunjuk ke objek yang sama. Seluruh nilai NaN akan dianggap sama (di mana hal ini berbeda dari Abstract Equality Comparison dan Strict Equality Comparison). Metode ini agak sedikit aneh, dan dokumentasi MDN yang terkait agak sedikit menyesatkan. Sebaiknya, gunakanlah <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">triple equals <code>===</code></a> untuk mengecek kesetaraan.`,
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
        shortDesc: `apakah sebuah objek dan properti-propertinya tidak dapat dimodifikasi`,
        desc:
          'Menentukan apakah sebuah objek merupakan objek yang beku (tidak dapat dimodifikasi).',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `apakah sebuah objek tidak dapat dimodifikasi (meskipun properti-properti terkait bisa dimodifikasi)`,
        desc:
          'Menentukan apakah sebuah objek dan properti-propertinya disegel (<em>sealed</em>).',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `apakah objek tersebut merupakan bagian dari sebuah rantai prototipe`,
        desc: `Mengembalikan sebuah boolean yang mengindikasikan apakah objek di mana metode ini dipanggil merupakan bagian dari rantai prototipe (<em>prototype chain</em>) objek yang ditentukan.`,
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
        shortDesc: `memastikan bahwa properti-properti tidak dapat ditambah atau dihapus`,
        desc:
          'Menghindari kode lain untuk menghapus properti-properti dari sebuah objek. Properti yang sudah ada sekarang masih dapat dimodifikasi.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c tidak dapat dihapus`
      },
      {
        name: 'freeze',
        shortDesc: `memastikan bahwa properti-properti tidak dapat ditambah, dihapus, atau dimodifikasi`,
        desc: `Membekukan sebuah objek: kode lain tidak dapat menghapus atau mengubah properti apapun.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//nilai tidak diubah menjadi 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `memastikan bahwa properti-properti tidak dapat ditambah`,
        desc: `Menghindari ekstensi dari sebuah objek. Properti-properti tetap dapat dihapus, namun tidak bisa ditambah.`,
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
        shortDesc: `representasi string dari sebuah objek`,
        desc: `Metode <code>toString()</code> mengembalikan sebuah string yang merepresentasikan objek tersebut. Meskipun metode ini adalah metode built-in yang tersedia, biasanya akan lebih berguna apabila Anda menggunakan <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `representasi string yang telah dilokalisasi dari sebuah objek`,
        desc: `Metode <code>toLocaleString()</code> representasi string yang telah dilokalisasi dari sebuah objek. Metode ini dimaksudkan untuk di-<em>override</em> oleh objek turunan untuk tujuan yang spesifik pada lokal. Dalam bahasa manusia: ini berarti bahwa apabila Anda mempunyai sesuatu yang memiliki data berbeda berdasarkan lokasi, seperti metode tanggal, maka metode ini akan memberikan Anda format waktu yang berbeda`,
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
          shortDesc: `detil-detil terkait sebuah properti`,
          desc:
            'Mengembalikan sebuah deskriptor properti untuk sebuah properti yang diberikan pada sebuah objek.',
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
          shortDesc: `detil-detil mengenai seluruh properti pada sebuah objek`,
          desc:
            'Mengembalikan sebuah objek yang berisi seluruh deskriptor properti untuk sebuah objek.',
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
          shortDesc: `apakah sebuah properti dapat dilintasi dengan sebuah for...in loop`,
          desc:
            'Mengembalikan sebuah boolean yang mengindikasikan apakah atribut internal ECMAScript [[Enumerable]] ditentukan. Metode ini dapat digunakan untuk melihat apakah suatu metode merupakan metode <em>built-in</em> atau <em>user-defined</em>, karena properti-properti <em>built-in</em> cenderung tidak <em>enumerable</em>.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `apakah sebuah properti ada sebagai properti langsung dari sebuah objek`,
          desc:
            'Mengembalikan sebuah boolean yang mengindikasikan apakah sebuah objek mengandung properti yang ditentukan sebagai suatu properti langsung dari objek tersebut dan tidak diwariskan melalui rantai prototipe (<em>prototype chain</em>).',
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
          shortDesc: `kunci`,
          desc: `Mengembalikan sebuah array yang berisi nama-nama dari seluruh kunci milik objek yang dapat ditelusuri, dalam urutan ketika kunci-kunci tersebut ditelusuri.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `nilai`,
          desc: `Mengembalikan sebuah array yang berisi nama-nama dari seluruh nilai milik objek yang dapat ditelusuri, dalam urutan ketika nilai-nilai tersebut ditelusuri.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `kunci dan nilai`,
          desc: `Mengembalikan sebuah nested array berisi nama-nama seluruh pasangan kunci/nilai dari objek yang dapat ditelusuri, dalam urutan ketika pasangan-pasangan tersebut ditelusuri.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `kunci, meskipun Anda tidak dapat menelusuri kunci-kunci tersebut`,
          desc: `Mengembalikan sebuah array berisi nama-nama seluruh properti objek yang diberikan yang bersifat <em>enumerable</em> maupun <em>non-enumerable</em>. Metode ini melakukan hal yang sama seperti <code>Object.keys()</code>, yaitu mengambil seluruh kunci-kunci di objek, namun <code>getOwnPropertyNames()</code> juga mengikutsertakan properti-properti yang tidak bisa ditelusuri.`,
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
        shortDesc: `mendapatkan sebuah prototipe dari objek`,
        desc: `Mengembalikan prototipe dari objek yang ditentukan (nilai dari properti internal [[Prototype]]) dari objek yang ditentukan).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `menentukan prototipe dari objek`,
        desc: `Peringatan: metode ini sangatlah. Gunakan dengan hati-hati, atau ganti dengan  <code>Object.create()</code>. Metode ini menentukan the prototipe (properti internal [[Prototype]]).`,
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
        shortDesc: `menemukan apakah sebuah objek ada pada rantai prototipe`,
        desc: `Mengembalikan sebuah boolean yang mengindikasikan apakah objek di mana metode ini dipanggil ada pada sebuah rantai prototipe (<em>prototype chain</em>) dari objek yang ditentukan.`,
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
