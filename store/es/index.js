export default {
  state: {
    selectedMethod: '',
    createObj: [{
        name: 'create',
        shortDesc: 'crear un nuevo objeto',
        desc: `Crea un nuevo objeto con el objeto y propiedades del prototipo especificado.<br>
          <br>
          <strong>¡Nota importante para los principiantes! </strong> Es más común crear un objeto de la manera que se muestra en la parte superior del ejemplo, como sigue <code>let obj = { a: 1 }; </code>.`,
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
        shortDesc: 'realizar una copia de un objeto',
        desc: 'Copiar los valores de todas la propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino. Aunque no es técnicamente un método de objeto incorporado, es más común cuando se usa ES6 para hacer uso de <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator" target="_blank">Operador de propagación</a>, usando <code>...</code>.',
        example: `const copy = Object.assign({}, obj);<br>
        console.log(copy);`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        }`
      }
    ],
    createProp: [{
        name: 'defineProperty',
        shortDesc: 'una nueva propiedad o modificar una existente',
        desc: `Define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.<br>
          <br>
          <strong>¡Nota importante para los principiantes! </strong> Es más común usar notación de punto o de corchete para crear una nueva propiedad o modificar una existente. Así: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Esto no es técnicamente un método incorporado, por eso no está incluido.`,
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
        shortDesc: 'una o mas propiedades o modificar propiedades existentes',
        desc: `Añade una o mas propiedades o modifica propiedades existentes directamente en el objeto, retornando el objeto.<br>
          <br>
          <strong>Nota importante para los principiantes! </strong> Es más común utilizar notación de punto o de corchete para crear una nueva propiedad o modificar una existente. Así: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Técnicamente no es un método incorporado, por eso no está incluido.`,
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
    infoObj: [{
        name: 'isExtensible',
        shortDesc: 'si mas propiedades pueden ser agregadas',
        desc: 'Determina si un objeto puede tener propiedades nuevas agregadas.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'si dos referencias apuntan al mismo objeto',
        desc: 'Compara si dos referencias apuntan al mismo objeto. Iguala todos los valores NaN (que difiere tanto de la Comparación de igualdad abstracta como de la Comparación de igualdad estricta). Éste es un poco raro, y los documentos de los MDN son un poco engañosos. Esta opción es <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparations_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">más útil a utilizar triple igualdad <code>====</code></a> para las comprobaciones.',
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
        shortDesc: `si un objeto y sus propiedades no pueden ser modificadas`,
        desc: 'Determina si un objeto esta congelado',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `si un objeto no puede ser modificado (aunque sus propiedades pueden serlo)`,
        desc: 'Determina si el descriptor de sus propiedades no se puede cambiar y no se pueden crear nuevas propiedades.',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `comprobar si un objeto se encuentra en la cadena de prototipado de otro.`,
        desc: `Devuelve un booleano indicando si el objeto al que se llama este método está en la cadena de prototipos del objeto especificado.`,
        example: `function Rect() {}<br>  
        <br>
        var rect = new Rect();<br>
        <br>
        console.log(Rect.prototype.isPrototypeOf(rect));`,
        output: `true`,
        useExample: 'newExample'
      }
    ],
    noChange: [{
        name: 'seal',
        shortDesc: `asegurarse de que las propiedades no se pueden añadir o eliminar`,
        desc: 'Impide que otro código borre las propiedades de un objeto. Las propiedades existentes todavía pueden ser modificadas.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c no se elimina`
      },
      {
        name: 'freeze',
        shortDesc: `asegurarse de que las propiedades no se pueden añadir, eliminar o modificar`,
        desc: `Congela un objeto: otro código no puede borrar o cambiar ninguna propiedad.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//el valor no se actualiza a 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `asegurarse de que no se pueden añadir propiedades.`,
        desc: `Previene cualquier extensión de un objeto. Todavía se pueden eliminar propiedades pero no se puede añadir ninguna nueva.`,
        example: `Object.preventExtensions(obj);<br>
        obj.d = 4;<br>
        <br>
        console.log(obj.d);`,
        output: `undefined`
      }
    ],
    createString: [{
        name: 'toString',
        shortDesc: `cadena de caracteres representando al objeto`,
        desc: `El método <code>toString()</code> devuelve una cadena de caracteres que representa el objeto. Aunque este es el método incorporado disponible, normalmente es más útil usar <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `devolver la representación del objeto como una cadena utilizando la configuración regional.`,
        desc: `El método <code>toLocaleString()</code> devuelve una cadena que representa el objeto. Este método debe ser sustituido por objetos derivados para fines específicos de la configuración regional. En términos humanos: esto significa que si tienes algo que tiene datos diferentes basados en la ubicación, como métodos de fecha, te dará un formato de hora diferente.`,
        example: `obj.d = new Date();<br>
        <br>
        console.log(obj.d);<br>
        console.log(obj.d.toLocaleString());`,
        output: `Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>
        12/29/2017, 8:57:35 PM`
      }
    ],
    infoProp: {
      details: [{
          name: 'getOwnPropertyDescriptor',
          shortDesc: `detalles sobre una propiedad`,
          desc: 'Devuelve un descriptor para una propiedad en un objeto.',
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
          shortDesc: `detalles sobre todas las propiedades de un objeto`,
          desc: 'Devuelve un objeto que contiene todos las descripciones de propiedad propias de un objeto.',
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
          shortDesc: `si una propiedad puede ser recorrida con un bucle for... in`,
          desc: 'Devuelve un booleano que indica si el atributo interno ECMAScript [[Enumerable]] está configurado. Esto se puede utilizar para ver si algo es un método incorporado o definido por el usuario porque las propiedades incorporadas tienden a no ser enumerables.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `si existe una propiedad como propiedad directa del objeto`,
          desc: 'Devuelve un booleano indicando si un objeto contiene la propiedad especificada como una propiedad directa de ese objeto y no heredada a través de la cadena del prototipo.',
          example: `console.log(obj.hasOwnProperty('a'));<br>
          delete obj.a;<br>
          console.log(obj.hasOwnProperty('a'));`,
          output: `true<br>
          false`
        }
      ],
      list: [{
          name: 'keys',
          shortDesc: `claves`,
          desc: `Devuelve un array que contiene los nombres de todas las claves del objeto por las que se puede hacer un bucle, en el orden en que se harían.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `valores`,
          desc: `Devuelve un array que contiene los nombres de todos los valores del objeto por los que se puede hacer un bucle, en el orden en que se harían.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `claves y valores`,
          desc: `Devuelve un array anidado que contiene los nombres de todos los pares clave/valor del objeto a través de los que se puede hacer un bucle, en el orden en que se harían.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `claves, incluso si no puedes pasar a través de ellas`,
          desc: `Devuelve un array que contiene los nombres de todas las propiedades enumerables y no numerables del objeto en cuestión. Hace lo mismo que <code>Object.keys()</code>, recuperando las claves del objeto, pero <code>getOwnPropertyNames()</code> incluye propiedades que no pueden ser enlazadas.`,
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
    prototype: [{
        name: 'getPrototypeOf',
        shortDesc: `conseguir un prototipo del objeto.`,
        desc: `Devuelve el prototipo del objeto especificado. (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `asigna un prototipo al objeto.`,
        desc: `Advertencia: este método es realmente lento. Utilizar con precaución, o sustituir por <code>Object.create ()</code>. Establece el prototipo (es decir, la propiedad interna [[Prototype]]).`,
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
        shortDesc: `averiguar si el objeto está en la cadena del prototipo.`,
        desc: `Devuelve un booleano indicando si el objeto al que se llama este método está en la cadena de prototipos del objeto especificado.`,
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