export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'crear un nuevo objeto',
        desc: `Crea un nuevo objeto con el objeto prototipo especificado y las propiedades.<br>
          <br>
          <strong>Nota importante para principiantes!</strong> La forma más común de crear un objeto es como se muestra en la parte de arriba del ejemplo, mediante asignación por medio de una variable.`,
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
        shortDesc: 'hacer una copia de un objeto',
        desc:
          'Copia los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto de destino. Retornará el objeto de destino.',
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
        shortDesc: 'una nueva propiedad o modificar una existente',
        desc: `Agrega la propiedad nombrada descrita por un descriptor dado a un objeto.<br>
          <br>
          <strong>Nota importante para principiantes!</strong> La forma más común de crear una nueva propiedad o modificar una existente es por medio del uso de la notación punto o paréntesis cuadrados. De esta forma: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Esto técnicamente no es un método integrado, es por ello que no se incluye.`,
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
        shortDesc: 'una o más propiedades o modificar las ya exitentes',
        desc: `Agrega una o más propiedades descritas por un descriptor dado a un objeto.<br>
          <br>
          <strong>Nota importante para principiantes!</strong> La forma más común de crear una nueva propiedad o modificar una ya existente es por medio del uso de la notación punto o paréntesis cuadrados. De esta forma: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Esto técnicamente no es un método integrado, es por ello que no se incluye.`,
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
        shortDesc: 'si más propiedades se pueden añadir',
        desc: 'Determina si extender un objeto es permitido.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'si dos referencias apuntan al mismo objeto',
        desc:
          'Compara si dos referencias apuntan al mismo objeto. Equipara todos los valores NaN (lo que difiere de ambas, la Comparación de Igualdad Abstracta y, la Comparación de Igualdad Estricta). Esta última es un poco rara, y la documntación en MDN es un poco confusa.',
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
        desc: 'Determina si un objeto está congelado.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `si un objeto no puede ser modificado (aunque sus propiedades si se pueden modificar)`,
        desc: 'Determina si un objeto o sus propiedades están selladas.',
        example: `Object.defineProperty(obj, 'a', {<br>
        <span>&nbsp;&nbsp;</span>configurable: false<br>
        })<br>
        <br>
        console.log(Object.isSealed(obj));<br>
        console.log(Object.isSealed(obj.a));`,
        output: `false<br>
        true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `si el objeto está en la cadena prototipo.`,
        desc: `Retorna un booleano indicando si el objeto sobre el que se llama a este método está en la cadena prototipo del objeto especificado.`,
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
        shortDesc: `asegurar que no se pueden agregar o borrar propiedades`,
        desc:
          'Previene que otro código borre propiedades de un objeto. Las propiedades existentes aún pueden ser modificadas.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `asegurar que no se pueden agregar, borrar, o modificar propiedades`,
        desc: `Congela un objeto: otro código no puede borrar o cambiar cualquier propiedad.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `asegurar que no se pueden agregar propiedades.`,
        desc: `Previene cualquier extensión de un objeto. Aún se pueden borrar propiedades, pero no se pueden agregar nuevas.`,
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
        shortDesc: `representación del objeto en una cadena de texto.`,
        desc: `El método <code>toString()</code> retorna una cadena de texto representando el objeto.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `representación localizada del objeto.`,
        desc: `El método <code>toLocaleString()</code> retorna una cadena de texto representando el objeto. Este método está diseñado para ser sobrecargado por objetos derivados para propósitos específicos de localización. En términos humanos: esto significa que si se tiene algo que posee datos diferentes basados en la ubicación, tales como métodos de fecha, retornará con un formato de tiempo diferente.`,
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
          shortDesc: `detalles de una propiedad`,
          desc:
            'Retorna un descriptor de una propiedad para una propiedad nombrada en un objeto.',
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
          shortDesc: `detalles de todas la propiedades en un objeto`,
          desc:
            'Retorna un objeto que contiene todos los descriptores de propiedades que pertenecen a un objeto.',
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
          shortDesc: `si una propiedad puede ser recorrida con un ciclo for...in`,
          desc:
            'Retorna un booleano indicando si el atributo interno ECMAScript [[Enumerable]] está configurado. Esto puede ser usado para ver si algo es un método incorporado o definido por el usuario porque las propiedades incorporadas tienden a ser no enumerables',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `si una propiedad existe como una propiedad directa del objeto`,
          desc:
            'Retorna un booleano indicando si un objeto contiene la propiedad especificada como una propiedad directa de ese objeto y no heredada a través de la cadena prototipo.',
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
          shortDesc: `llaves`,
          desc: `Retorna un arreglo que contiene los nombres de todas las llaves del objeto por las que se puede iterar, en el orden en las que ellas se pueden iterar.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `valores`,
          desc: `Retorna un arreglo que contiene los nombres de todos los valores del objeto por los que se puede iterar, en el orden en los que ellos se pueden iterar.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `llaves y valores`,
          desc: `Retorna un arreglo anidado que contiene los nombres de todos los pares llave/valor del objeto por los que se puede iterar, en el orden en los que ellos se pueden iterar.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `llaves, incluso si no se pueden iterar`,
          desc: `Retorna un arreglo que contiene los nombres de todas las propiedades enumerables y no enumerables que pertenecen a un objeto dado. Hace lo mismo que <code>Object.keys()</code>, entrega las llaves en el objeto, pero <code>getOwnPropertyNames()</code> incluirá propiedades que no se pueden iterar.`,
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
        shortDesc: `obtener un prototipo de un objeto.`,
        desc: `Retorna el prototipo del objeto especificado (el valor de la propiedad interna [[Prototype]] del objeto especificado).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `establecer el prototipo de un objeto.`,
        desc: `Cuidado: este método es realmente lento. Usar con precaución, o reemplazar con <code>Object.create()</code>. Establece el prototipo (la propiedad interna [[Prototype]]).`,
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
        shortDesc: `encontrar si el objeto está en la cadena prototipo.`,
        desc: `Retorna un booleano indicando si el objeto sobre el que se llama este método está en la cadena prototipo del objeto especificado.`,
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
