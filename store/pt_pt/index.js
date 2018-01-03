export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'cria um novo objecto',
        desc: `Cria um novo objecto com o objecto e propriedades do protótipo especificado.<br>
          <br>
          <strong>Nota importante para iniciantes!</strong> È mais comum criar um objecto da maneira demonstrada na parte de cima do exemplo, atribuindo-o a uma variável`,
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
        shortDesc: 'fazer uma cópia do objecto',
        desc:
          'Copia os valores de todas as propriedades de um ou mais objectos para um objecto novo. Retorna esse novo objecto.',
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
        shortDesc: 'uma nova propriadade ou mudar uma existente',
        desc: `Adiciona a propriadade descrita pelo descritor a um objecto<br>
          <br>
          <strong>Nota importante para iniciantes!</strong> È mais comum usar pontos finais ou parênteses rectos para criar uma nova propriadade num objecto ou modificar uma ja existente.  Assim: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Mas tecnicamente isto não é um metodo incluido nos objectos por isso nao esta incluido`,
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
        shortDesc: 'uma ou mais novas propriedades ou mudar uma ou mais propriedades existentes',
        desc: `Adiciona uma ou mais propriedades descritas pelo descritor a um objecto<br>
          <br>
          <strong>Nota importante para iniciantes!</strong> È mais comum usar pontos finais ou parênteses rectos para criar uma nova propriadade num objecto ou modificar uma ja existente.  Assim: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Mas tecnicamente isto não é um metodo incluido nos objectos por isso nao esta incluido`,
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
        shortDesc: 'se mais propriedades podem ser adicionadas',
        desc: 'Determina se mais propriedades podem ser adicionadas a um objecto.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'se duas referências apontam para o mesmo obejcto',
        desc:
          'Compara duas refereências e vê se ambas apontam para o mesmo objecto. Iguala todos os valores NaN também. Esta é um bocado estranha e a documentação da Mozilla é um bocado enganadora.',
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
        shortDesc: `se um objecto e as suas propriedades não podem ser modificadas`,
        desc: 'Determina se um objecto está congelado',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `se um objecto não pode ser modificado (mas as suas propriedades podem)`,
        desc: 'Determina se um objecto ou as suas propriedades estão seladas',
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
        shortDesc: `se o objecto está na cadeia de protótipos.`,
        desc: `Retorna verdadeiro ou falso dependendo de este método ser chamado ou não na cadeia de protótipos do objecto especificado.`,
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
        shortDesc: `definir que não se pode adicionar ou remover propriedades deste objecto`,
        desc:
          'Evita que outro código apague propriedades a um objecto. Propriedades já existentes podem ser modificadas normalmente.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c não foi apagado`
      },
      {
        name: 'freeze',
        shortDesc: `definir que não se pode adicionar, remover ou modificar propriedades deste objecto`,
        desc: `Congela um objecto: outro código não pode apagar ou modificar as propriedades deste objecto.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">// o valor nao mudou para 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `definir que não se pode adicionar propriedades a este objecto.`,
        desc: `Previne que se adicionem novas propriedades a um objecto. Continuas a poder apagar ou modificar as já existem.`,
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
        shortDesc: `representação do objecto em texto.`,
        desc: `O método <code>toString()</code> retorna a representação em texto do objecto.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `representação do objecto em texto localizado.`,
        desc: `O método <code>toLocaleString()</code> retorna a representação em texto localizado do objecto. Esté metodo é suposto retornar coisas diferentes em ocasiões diferentes. Por exemplo se tiveres uma data guardada este método vai te retornar um formato de data diferente dependendo da tua localização.`,
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
          shortDesc: `detalhes sobre uma propriedade`,
          desc: 'Retorna a descrição e caracteristicas da propriedade passada á função.',
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
          shortDesc: `detalhes sobre todas as propriedades num objecto`,
          desc:
            'Retorna um objecto que contêm a descrião e caracteristicas de todas as propriedades de um objecto',
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
          shortDesc: `se um propriadade pode ser enumerada através de um for...in loop`,
          desc:
            'Retorna verdadeiro ou falso indicando se a propriadade interna do ECMAScript [[Enumerable]] está definida. Isto pode ser usado para ver se o objecto é algo da linguagem ou definido pelo utilizador porque propriedades definidas pela linguagem tendem a não ser enumeráveis.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `se uma propriadade existe num objecto `,
          desc:
            'Retorna verdadeiro ou falso dependendo se o objecto contêm a propriadade especificada como filho directo.',
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
          shortDesc: `keys`,
          desc: `Retorna uma array com os nomes das keys que pode ser enumerada.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `valores`,
          desc: `Retorna uma array com os valores que pode ser enumerada.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `keys e valores`,
          desc:
            'Retorna uma array com arrays e dentro de cada uma temos a key e o valor de uma das propriedades do objecto.',
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `keys, mesmo que não as consigas enumerar`,
          desc: `Retorna uma array que contêem os nomes de todas as propriedades de um objecto mesmo que estas não sejam enumeráveis. Faz o mesmo que <code>Object.keys()</code>, devolvendo todas as keys de um objecto mas <code>getOwnPropertyNames()</code> inclui propriedades que nao podem ser enumeradas em loops.`,
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
        shortDesc: `retornar o protótipo de um objecto.`,
        desc: `Retorna o protótipo de um objecto especificado. (o valor da propriadade interna [[Prototype]]).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `definir o protótipo do objecto.`,
        desc: `Atenção: este método é muito lento. Usar com caução ou substituir por <code>Object.create()</code>. Define o protótipo (o valor da propriadade interna [[Prototype]]).`,
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
        shortDesc: `descobre se o objecto está na cadeia de prototipos.`,
        desc: `Retorna verdadeiro ou falso indicando se o objecto que é usado neste método faz parte da cadeia de prototipos do objecto especificado.`,
        example: `function Rect() {}<br>
        <br>
        var rect = new Rect();<br>
        <br>
        console.log(Rect.prototype.isPrototypeOf(rect));`,
        output: `true`
      }
    ]
  }
};
