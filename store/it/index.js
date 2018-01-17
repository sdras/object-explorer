export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'creare un nuovo oggetto',
        desc: `Crea un nuovo oggetto a partire dal prototipo e dalle proprietà specificate.<br>
          <br>
          <strong>Nota per i principianti!</strong> Solitamente gli oggetti si creano com'è mostrato all'inizio dell'esempio, così: <code>let obj = { a: 1 };</code>.`,
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
        shortDesc: 'copiare un oggetto',
        desc:
          `Copia i valori di tutte le proprietà enumerabili direttamente appartenenti a uno o più oggetti verso un oggetto di destinazione (il primo parametro). Restituisce l'oggetto di destinazione.<br>
          Anche se tecnicamente non è una funzione degli oggetti, quando si usa ES6 è più comune usare lo <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a>, con l'operatore <code>...</code>.`,
        example: `const copia = Object.assign({}, obj);<br>
        console.log(copia);`,
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
        shortDesc: 'una nuova proprietà o modificarne una esistente',
        desc: `Aggiunge la proprietà specificata descritta dalle opzioni specificate a un oggetto.<br>
          <br>
          <strong>Nota per i principianti!</strong> Solitamente si usano il punto o le parentesi quadre per creare o modificare una proprietà, così: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Tecnicamente questa non è una funzione, quindi non è includa nella lista.`,
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
        shortDesc: 'una o più nuova proprietà o modificarne di esistenti',
        desc: `Aggiunge le proprietà specificate descritta dalle opzioni specificate a un oggetto.<br>
          <br>
          <strong>Nota per i principianti!</strong> Solitamente si usano il punto o le parentesi quadre per creare o modificare una proprietà, così: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Tecnicamente questa non è una funzione, quindi non è includa nella lista.`,
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
        shortDesc: 'possono essere aggiunte nuove proprietà',
        desc:
          "Determina se è possibile estendere l'oggetto, ossia definirne nuove propretà.",
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'due riferimenti rappresentano lo stesso oggetto',
        desc:
          `Determina se due riferimenti rappresentano lo stesso oggetto. Considera uguali tutti i valori <code>NaN</code> (che vengono considerati diversi sia dall'operatore <code>==</code> che <code>===</code>). Questo è leggermente unusuale, e la documentazione su MDN è poco chiara. &Egrave; più comodo utilizzare <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">tre uguali <code>===</code></a> per controllare l'ugualianza tra oggetti.`,
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
        shortDesc: `un oggetto e le sue proprietà non possono essere modificati`,
        desc: 'Determina se un oggetto è congelato.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `un oggetto non può essere modificato (ma le sue proprietà si)`,
        desc:
          'Determina se non si possono aggiungere o togliere proprietà a un oggetto, e le descrizioni di quelle già esistenti non possono essere modificate.',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `un oggetto è prototipo di un altro`,
        desc: `Restituisce <code>true</code> o <code>false</code> per indicare se l'oggetto del quale viene richiamato questo metodo + nella catena dei prorotipi dell'oggetto specificato.`,
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
        shortDesc: `evitare che vengano aggiunte o eliminate delle proprietà`,
        desc:
          "Evita che altro codice aggiunga o tolga proprietà all'oggetto specificato. Le proprietà già esistenti possono essere modificate ma non può essere modificata la loro descrizione.",
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c non viene cancellata`
      },
      {
        name: 'freeze',
        shortDesc: `evitare che vengano aggiunte, eliminate o modificate delle proprietà`,
        desc: `Congela un oggetto: non vi si possono più aggiungere, eliminare o modificare proprietà.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">// il valore non è diventato 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `evitare che vengano aggiunte nuove proprietà.`,
        desc: `Evita che un oggetto venga esteso. &Egrave; comunque possibile cancellare proprietà esistenti.`,
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
        shortDesc: `una stringa che rappresenti l'oggetto.`,
        desc: `La funzione <code>toString()</code> restiuisce una stringa che rappresenta l'oggetto.<br>
          Anche se questo è il metodo specifico di <code>Object</code>, è più utile usare <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `una stringa localizzata che rappresenti l'oggetto.`,
        desc: `La funzione <code>toLocaleString()</code> restiuisce una stringa localizzata che rappresenta l'oggetto.
        Questo metodo solitamente viene sovrascritto dagli oggetti per comportarsi in base alla lingua. In parole povere: se si lavora con qualcosa che contiene dati diversi in base alla lingua, come le date, genererà un output diverso.`,
        example: `obj.d = new Date();<br>
        <br>
        console.log(obj.d);<br>
        console.log(obj.d.toLocaleString());`,
        output: `Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>
        3/1/2018, 14:54:33`
      }
    ],
    infoProp: {
      details: [
        {
          name: 'getOwnPropertyDescriptor',
          shortDesc: `dettagli riguardo una proprietà di un oggetto`,
          desc:
            'Restituisce un oggetto che descive una proprietà di un oggetto, dato il suo nome.',
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
          shortDesc: `dettagli riguardo tutte le proprietà di un oggetto`,
          desc:
            "Restituisce un oggetto contenente le descrizioni di tutte le proprietà dell'oggetto specificato.",
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
          shortDesc: `se una proprietà viene visitata con un ciclo for...in`,
          desc:
            "Restituisce <code>true</code> o <code>false</code> per indicare se l'attributo interno di ECMAScript <code>[[Enumerable]]</code> è imopstato a <code>true</code>. Questa funzione può essere usata per sapere se una proprietà e predefinita o no, perché solitamente le proprietà predefinite non sono enumerabili.",
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `se un ogetto ha direttamente una proprietà`,
          desc:
            'Restituisce <code>true</code> o <code>false</code> per indicare se un oggetto contiene la proprietà specificata direttamente, e non tamite il suo prototipo.',
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
          shortDesc: `le chiavi`,
          desc: `Restituisce un array che contiene i nomi di tutte le proprietà dell'oggetto che verrebbero visitate da un ciclo, nell'ordine in cui verrebbero visitate.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `i valori`,
          desc: `Restituisce un array che contiene i valori di tutte le proprietà dell'oggetto che verrebbero visitate da un ciclo, nell'ordine in cui verrebbero visitate.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `le chiavi e i valori`,
          desc: `Restituisce un array che contiene le coppie nome/valore di tutte le proprietà dell'oggetto che verrebbero visitate da un ciclo, nell'ordine in cui verrebbero visitate.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `le chiavi, anche se non verrebbero visitate da un ciclo`,
          desc: `Restituisce un array che contiene i nomi di <em>tutte</em> le proprietà dell'oggetto specificato. &Egrave; simile a <code>Object.keys()</code>, ma <code>Object.getOwnPropertyNames()</code> restituisce anche le proprietà che non verrebero visitate da un ciclo <code>for...in</code>.`,
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
        shortDesc: `leggere il prototipo di un oggetto.`,
        desc: `Restituisce il prototipo dell'oggetto specificato (quindi il valore della proprietà interna <code>[[Prototype]]</code>).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `impostare il prototipo di un oggetto.`,
        desc: `<strong>Attenzione</strong>: questa funzione è molto lenta. Se possibile, utilizzare <code>Object.create()</code>.<br>
        <br>Imposta il prototipo di un oggetto (la sua proprietà interna <code>[[Prototype]]</code>).`,
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
        shortDesc: `sapere se un oggetto è prototipo di un altro.`,
        desc: `Restituisce <code>true</code> o <code>false</code> per indicare se l'oggetto del quale viene richiamato questo metodo è nella catena dei prorotipi dell'oggetto specificato.`,
        example: `function Rect() {}<br>  
        <br>
        var rect = new Rect();<br>
        <br>
        console.log(Rect.prototype.isPrototypeOf(rect));`,
        output: `true`,
        useExample: 'newExample'
      }
    ]
  }
}
