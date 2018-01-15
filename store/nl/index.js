export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'een nieuw object aanmaken',
        desc: `Maakt een nieuw object aan met het gekozen prototype object en properties.<br>
          <br>
          <strong>Belangrijke opmerking voor beginners!</strong> Het is gewoonlijk om een object te maken op de manier die boveaan gebruikt wordt, door een object aan een variabele toe te wijzen.`,
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
        shortDesc: 'een kopie van een object maken',
        desc:
          'Kopieert de waardes van alle eigen telbare properties van een of meerdere source objecten naar een aangewezen object. Het geeft het aangewezen object terug.',
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
        shortDesc: 'een nieuwe property of het aanpassen van een bestaande',
        desc: `Voegt een benoemde property, beschreven door een gegeven descriptor, toe aan een object .<br>
          <br>
          <strong>Belangrijke opmerking voor beginners!</strong> Het is gebruikelijk om dot of square brackets notatie te gebruiken bij het aanmaken van een nieuwe of bij het bewerken van een bestaande property. Zoals: <code>obj.a = 1</code> of <code>obj[a] = 1</code>. Dit is technisch gezien geen ingebouwde methode, daarom staat dit ook niet beschreven.`,
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
          'een of meerdere properties of aanpassen van bestaande properties',
        desc: `Voegt een of meerdere properties, beschreven door een gegeven descriptor, toe aan een object <br>
          <br>
          <strong> Belangrijke opmerking voor beginners!</strong > Het is gebruikelijk om dot of square brackets notatie te gebruiken bij het aanmaken van een nieuwe of bij het bewerken van een bestaande property. Zoals: <code>obj.a = 1</code> of <code> obj[a] = 1</code>. Dit is technisch gezien geen ingebouwde methode, daarom staat dit ook niet beschreven.`,
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
        shortDesc: 'of er meer properties toegevoegd kunnen worden',
        desc: 'Bepaald of uitbreiding van een object toegestaan is.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'of twee referenties naar hetzelfde object wijzen',
        desc:
          'Vergelijkt of twee referenties naar hetzelfde object wijzen. Het staat gelijk aan NaN waardes (Welke verschillen van zowel Abstract Equality Comparison en Strict Equality Comparison). Dit is een gekke, ook is de MDN documentatie een beetje misleidend.',
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
        shortDesc: `of een object en de properties niet bewerkt kunnen worden`,
        desc: 'Bepaald of een object bevroren is.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `of een object niet bewerkt kan worden (maar de properties wel)`,
        desc: 'Bepaald of een object of de properties zijn afgesloten.',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `of een object onder een prototype valt`,
        desc: `Geeft een boolean terug die aangeeft of de object die in de methode aangeroepen wordt onder de prototype valt van het gespecificeerde object.`,
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
        shortDesc: `zeker weten dat properties niet toegevoegd of verwijderd kunnen worden`,
        desc:
          'Voorkomt dat andere code properties van een object kan verwijderen. Bestaande properties kunnen nog steeds bewerkt worden.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `zeker weten dat properties niet toegevoegd, verwijderd of bewerkt kunnen worden`,
        desc: `Bevriesd een object: andere code kan geen properties bewerken of verwijderen.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `zeker weten dat properties niet toegevoegd kunnen worden`,
        desc: `Voorkomt uitbreiding van een object. Ik kan nog steeds properties verwijderen maar ik kan geen nieuwe toevoegen.`,
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
        shortDesc: `een object in de vorm van een string`,
        desc: `de <code>toString()</code> methode rgeeft een object terug in de vorm van een string.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `een object in de vorm van een taalstring`,
        desc: `De <code>toLocaleString()</code> methode geeft een object terug in de vorm van een string. Deze methode is bedoeld om overschreven te worden bij een afgeleid object voor taal-specifieke doeleinde. In mensen taal: dit betekent dat als je iets hebt dat andere data heeft op basis van locatie, zoals een data methode, het jou een ander tijd format geeft.`,
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
          shortDesc: `details over een property`,
          desc:
            'Geeft een property descriptor voor een benoemde property van een object.',
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
          shortDesc: `details over alle properties van een object`,
          desc:
            'Geeft een object terug bestaande uit alle eigen property descriptors van een object',
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
          shortDesc: `of een property doorlopen kan worden met een for...in loop `,
          desc:
            'Geeft een boolean terug die aangeeft of de interne ECMAScript [[Enumerable]] attribute actief is. Dit kan gebruikt worden of iets een standaard methode is of een gebruikers methode is, omdat standaard properties normaal gesproken niet telbaar zijn.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `of een property bestaat als een directe property van het object`,
          desc:
            'Geeft een boolean terug die aangeeft of een object bestaat uit een specifieke property als een directe property van dat object en dus niet geërfd is van de overkoepelende prototype.',
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
          shortDesc: `sleutels`,
          desc: `Geeft een array terug bestaande uit alle namen van alle object sleutels waar doorheen gelooped kan worden, in de volgorde dat deze doorgeloopt zou worden.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `waardes`,
          desc: `Geeft een array terug bestaande uit alle namen van alle object waardes waar doorheen gelooped kan worden, in de volgorde dat deze doorgeloopt zou worden.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `sleutels en waardes`,
          desc: `Geeft een genestelde array terug bestaande uit alle namen van alle object sleutel/waarde paren waar doorheen gelooped kan worden, in de volgorde dat deze doorgeloopt zou worden.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `sleutels, ookal kan je er niet doorheen loopen`,
          desc: `Geeft een array terug bestaande uit alle namen van alle object properties, zowel telbaar als niet telbaar. Doet het zelfde als <code>Object.keys()</code>, verkrijgen van de sleutels in het object, maar <code>getOwnPropertyNames()</code> bevat ook properties waar niet doorheen gelooped kan worden.`,
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
        shortDesc: `een prototype van een object verkrijgen`,
        desc: `Geeft de prototype terug van het gespecificeerde object. Dat is de waarde van de interne [[Prototype]] property van het gespecificeerde object.`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `een prototype voor het object toewijzen`,
        desc: `Waarschuwing: deze methode is erg sloom. Gebruik dit voorzichtig, of vervang door <code>Object.create()</code>. Het wijst een prototype (dat is de interne[[Prototype]] property) toe.`,
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
        shortDesc: `uitzoeken of een object onder een prototype valt`,
        desc: `Geeft een boolean terug die aangeeft of het object van deze methode die aangeroepen wordt onder de prototype valt van het gespecificeerde object.`,
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
