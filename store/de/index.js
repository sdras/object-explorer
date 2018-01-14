export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'ein Objekt erstellen',
        desc: `Erstellt ein neues Objekt mit dem vorgegebenen Prototypen und dessen Eigenschaften.<br>
          <br>
          <strong>Wichtiger Hinweis für Anfänger!</strong> Es ist üblicher, ein Objekt wie im obigen Beispiel zu erstellen, indem es direkt einer Variable zugewiesen wird.`,
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
        shortDesc: 'eine Kopie eines Objektes erstellen',
        desc:
          'Kopiert die Werte aller eigenen aufzählbaren Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt. Zurückgegeben wird das Zielobjekt.',
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
        shortDesc: 'eine neue Eingeschaft oder eine existierende bearbeiten',
        desc: `Fügt die Eigenschaft anhand des Beschreibers dem Objekt hinzu.<br>
          <br>
          <strong>Wichtiger Hinweis für Anfänger!</strong> Es ist üblicher, die Punkt- oder Klammer-Notation zu verwenden, um neue Eigenschaften zu erstellen oder existierende zu bearbeiten. Beispiel: <code>obj.a = 1</code> oder <code>obj[a] = 1</code>.`,
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
          'eine oder mehrere neue Eigenschaften oder existierende bearbeiten',
        desc: `Fügt eine oder mehrere Eigenschaften definiert durch einen gegebenen Beschreiber einem Objekt hinzu.<br>
          <br>
          <strong>Wichtiger Hinweis für Anfänger!</strong> Es ist üblicher, die Punkt- oder Klammer-Notation zu verwenden, um neue Eigenschaften zu erstellen oder existierende zu bearbeiten. Beispiel: <code>obj.a = 1</code> oder <code>obj[a] = 1</code>.`,
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
        shortDesc: 'ob mehrere Eigenschaften hinzugefügt werden können',
        desc: 'Findet heraus, ob das Erweitern des Objektes erlaubt ist.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'ob zwei Referenzen auf das gleiche Objekt verweisen',
        desc:
          'Vergleicht, ob zwei Referenzen auf das gleiche Objekt verweisen. Setzt alle NaN-Werte gleich (was sich von der losen Gleichheit (Abstract Equality Comparison) und der strikten Gleichheit (Strict Equality Comparison) unterscheidet. Diese Tatsache ist ein wenig seltsam und die MDN-Dokumentation dazu ein bisschen irreführend.',
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
        shortDesc: `ob ein Objekt und dessen Eigenschaften nicht bearbeitet werden können`,
        desc: 'Stellt fest, ob ein Objekt "gefroren" ist.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `ob ein Objekt nicht bearbeitet werden kann (dessen Eigeschaften jedoch schon)`,
        desc:
          'Stellt fest, ob ein Objekt oder dessen Eingeschaften "versiegelt" sind.',
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `ob sich das Objekt in der Prototypenkette befindet.`,
        desc: `Gibt einen boolschen Wert zurück, der angibt, ob das Objekt, auf dem die Methode aufgerufen wird, sich in der Prototypenkette befindet.`,
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
        shortDesc: `sicherstellen, dass Eigenschaften nicht hinzugefügt oder gelöscht werden`,
        desc:
          'Verhindert das Löschen von Objekt-Eigenschaften. Bestehende Eigenschaften können weiterhin bearbeitet werden. ',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `sicherstellen, dass Eigenschaften nicht hinzugefügt, gelöscht oder bearbeitet werden`,
        desc: `Friert ein Objekt ein: Eigenschaften können danach weder gelöscht noch bearbeitet werden.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `sicherstellen, dass Eigenschaften nicht hinzugefügt werden können.`,
        desc: `Verhindert jegliche Erweiterung des Objektes. Bestehende Eigenschaften können jedoch entfernt werden.`,
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
        shortDesc: `eine String-Repräsentation des Objektes.`,
        desc: `Die <code>toString()</code>-Methode gibt einen String zurück, der das Objekt als Zeichenkette darstellt.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `eine String-Repräsentation des Objektes in sprachabhängiger Formatierung.`,
        desc: `Die <code>toLocaleString()</code>-Methode gibt einen String zurück, der das Objekt als Zeichenkette darstellt. Diese Methode ist dazu gedacht, um von abgeleitetn Objekten zur sprachabhängigen Formattierung überladen zu werden. In anderen Worten: Die Daten sind abhängig vom Ort, wie z.B. bei Datumsmethoden, welche dir ein anderes Format liefern.`,
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
          shortDesc: `Details über eine Eigenschaft`,
          desc: 'Liefert eine Beschreibung für eine Objekt-Eigenschaft zurück.',
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
          shortDesc: `Details über alle Eingeschaften auf dem Objekt`,
          desc: 'Liefert ein Objekt mit allen Eigenschaftsdetails zurück.',
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
          shortDesc: `ob eine Eigenschaft mit einer "for...in"-Schleife durchlaufen werden kann`,
          desc:
            'Liefert einen boolschen Wert zurück, der angibt, ob das interne ECMAScript [[Enumerable]]-Attribut gesetzt ist. Dies kann zur Bestimmung, ob es sich um eine integrierte oder vom Benutzer definierte Methode handelt, verwendet werden, da integrierte Eigenschaften nicht aufgezählt werden.',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `ob eine Eigenschaft direkt auf dem Objekt existiert`,
          desc:
            'Liefert einen boolschen Wert zurück, der angibt, ob ein Objekt die gegebene Eigenschaft als direkte Eingeschaft auf dem Objekt besitzt und nicht durch Prototypen vererbt wurde.',
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
          shortDesc: `Eigenschaftsnamen`,
          desc: `Liefert ein Array mit allen Eigenschaftsnamen, die auf dem Objekt definiert sind.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `Eigenschaftswerten`,
          desc: `Liefert ein Array mit allen Eigenschaftswerten vom Objekt.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `Eigenschaftsnamen und -Werten`,
          desc: `Liefert ein verschachteltes Array mit allen Eigenschaftsnamen und Werten vom Objekt.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `Namen, auch wenn sie nicht durchlaufen werden können`,
          desc: `Liefert ein Array mit allen aufzählbaren und nicht aufzählbaren Eigenschaften zurück. Liefert alle Namen wie <code>Object.keys()</code>, jedoch beinhaltet <code>getOwnPropertyNames()</code> zusätzlich noch Eigenschaften, die nicht mit einer Schleife durchlauft werden können.`,
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
        shortDesc: `den Prototypen des Objektes erhalten.`,
        desc: `Liefert den Prototypen des Objektes zurück (den Wert der internen [[Prototype]]-Eigenschaft)).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `den Prototypen des Objektes setzen.`,
        desc: `Achtung: Diese Methode ist ziemlich langsam. Verwende es mit Vorsicht oder setze <code>Object.create()</code> ein. Setzt die interne [[Prototype]]-Eigenschaft).`,
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
        shortDesc: `herausfinden, ob sich das Objekt in der Protoypenkette befindet.`,
        desc: `Liefert einen boolschen Wert zurück, der angibt, ob sich das Objekt, auf dem die Methode aufgerufen wird, sich ind der Prototypenkette befindet`,
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
