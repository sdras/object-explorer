export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'vytvořit nový objekt',
        desc: `Vytvoří nový objekt s daným objektovým prototypem a vlastnostmi.<br>
          <br>
          <strong>Důležitá poznámka pro začátečníky!</strong> Častější je tvorba objektů tak, jako v horním případě, že přiřadíme objekt do proměnné.`,
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
        shortDesc: 'udělat kopii objektu',
        desc:
          'Zkopíruje vlastní hodnoty, které lze vyčíst, z jednoho nebo více zdrojových objektů do cílového objektu. Vrácen je cílový objekt.',
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
        shortDesc: 'novou vlastnost nebo upravit existující vlastnost',
        desc: `Přidá pojmenovanou vlastnost dle daného deskriptoru.<br>
          <br>
          <strong>Důležitá poznámka pro začátečníky!</strong> Častější je použití tečkové notace nebo hranatých závorek pro vytvoření nebo úpravu vlastnosti. Např. <code>obj.a = 1</code> nebo <code>obj[a] = 1</code>. Protože to není vlastní metoda, tak to není ukázáno samostatně.`,
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
        shortDesc: 'jednu nebo více vlastností nebo je upravovat',
        desc: `Přidá jednu nebo více vlastností dle daného deskriptoru<br>
          <br>
          <strong>Důležitá poznámka pro začátečníky!</strong> Častější je použití tečkové notace nebo hranatých závorek pro vytvoření nebo úpravu vlastnosti. Např. <code>obj.a = 1</code> nebo <code>obj[a] = 1</code>. Protože to není vlastní metoda, tak to není ukázáno samostatně.`,
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
        shortDesc: 'jestli je možné přidat vlastnosti',
        desc: 'Zjistí jestli je objekt rozšiřitelný.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'jestli dvě reference odkazují na stejný objekt',
        desc:
          'Porovná jestli dvě reference odkazují na stejný objekt. Všechny NaN hodnoty považuje jako ekvivalentní, tím se liší od Abstraktního (==) i Přísného (===) Porovnání. Tato funkce je trochu podivná a MDN dokumentace je krapet zavádějící.',
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
        shortDesc: `jestli objekt a jeho vlastnosti jsou neupravitelné`,
        desc: 'Zjistí jestli objekt je neměnný (frozen).',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `jestli objekt je neupravitelný, ale jeho vlastnosti jsou upravitelné`,
        desc: 'Zjistí jestli objekt nebo jeho vlastnosti jsou neupravitelné (sealed).',
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
        shortDesc: `jestli je objekt v prototypovém řetězu.`,
        desc: `Vrátí boolean, který říká, jestli je objekt v prototypovém řetězu jiného objektu.`,
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
        shortDesc: `zajisti, že vlastnosti nemohou být smazány ani přidány`,
        desc:
          'Zabrání jinému kódu smazání vlastností objektu. Existující vlastnosti mohou být upraveny.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `zajistí, že vlastnosti nemohou být smazány,přidány ani upravovány`,
        desc: `Zmrazí objekt tak, že jiný kód nemůže změnit nebo upravit jakoukoli vlastnost.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `zajistí, že další vlastnosti nemohou být přidány.`,
        desc: `Zabrání všem rozšířením objektu, ale nezabrání jejich smazání.`,
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
        shortDesc: `řetězec reprezentující objekt.`,
        desc: `<code>toString()</code> metoda vrací řetězec reprezentující objekt.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `localized string representation of the object.`,
        desc: `The <code>toLocaleString()</code> method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes. In human terms: this means if you have something that has differnt data based on location, such as date methods, it will give you a different time format`,
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
          shortDesc: `details about a property`,
          desc:
            'Returns a property descriptor for a named property on an object.',
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
          shortDesc: `details about all the properties on an object`,
          desc:
            'Returns an object containing all own property descriptors for an object.',
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
          shortDesc: `if a property can be traversed with a for...in loop`,
          desc:
            'Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set. This can be used to see if something is a built-in or user-defined method because built-in properties tend to not be enumerable',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `if a property exists as a direct property of the object`,
          desc:
            'Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.',
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
          desc: `Returns an array containing the names of all of of the object's keys that can be looped through, in the order that they would be looped through.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `values`,
          desc: `Returns an array containing the names of all of of the object's values that can be looped through, in the order that they would be looped through.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `keys and values`,
          desc: `Returns a nested array containing the names of all of of the object's key/value pairs that can be looped through, in the order that they would be looped through.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `keys, even if you can't loop through them`,
          desc: `Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties. Does the same thing as <code>Object.keys()</code>, retrieving the keys in the object, but <code>getOwnPropertyNames()</code> will include properties that can't be looped through.`,
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
        shortDesc: `get a prototype of the object.`,
        desc: `Returns the prototype of the specified object. (i.e. the value of the internal [[Prototype]] property) of the specified object).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `set a prototype of the object.`,
        desc: `Warning: this method is really slow. Use with caution, or replace with <code>Object.create()</code>. Sets the prototype (i.e., the internal [[Prototype]] property).`,
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
        shortDesc: `find out if the object is in the prototype chain.`,
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
