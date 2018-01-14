export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'créer un nouvel objet',
        desc: `Crée un nouvel objet avec un prototype et des propriétés spécifiques.<br>
          <br>
          <strong>Remarque importante pour les débutants !</strong> Il est plus courant de créer un objet de la façon donnée en exemple en haut, en l'assignant à une variable.`,
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
        shortDesc: "faire une copie d'un objet",
        desc: `Copie les valeurs de toutes les propriétés énumérables d'un ou plusieurs objet(s) vers un objet cible, qui sera retourné.`,
        example: `const copie = Object.assign({}, obj);<br>
        console.log(copie);`,
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
        shortDesc: 'une nouvelle propriété ou modifier une propriété existante',
        desc: `Ajoute une propriété à un objet ou modifie une propiété existante.<br>
          <br>
          <strong>Remarque importante pour les débutants !</strong> Il est plus courant d'utiliser les notations avec point ou crochets pour créer une nouvelle propriété ou modifier une propriété existante, comme ceci : <code>obj.a = 1</code> ou <code>obj[a] = 1</code>.`,
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
          'une ou plusieurs propriétés ou modifier des propriétés existantes',
        desc: `Ajoute une ou plusieurs propriétés à un objet ou modifie des propriétés existantes.<br>
          <br>
          <strong>Remarque importante pour les débutants !</strong> Il est plus courant d'utiliser les notations avec point ou crochets pour créer une nouvelle propriété ou modifier une propriété existante, comme ceci : <code>obj.a = 1</code> ou <code>obj[a] = 1</code>.`,
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
        shortDesc: 'si plus de propriétés peuvent être ajoutées',
        desc: `Détermine si un objet est extensible (c'est-à-dire qu'on peut lui ajouter de nouvelles propriétés).`,
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'si deux références pointent vers le même objet',
        desc: `Vérifie que deux références pointent vers le même objet. Diffère des comparaisons abstraite (Abstract Equality Comparison) et stricte (Strict Equality Comparison). Celle-ci est un peu bizarre, et la documentation MDN est trompeuse.`,
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
        shortDesc: `si un objet et ses propriétés ne peuvent pas être modifiés`,
        desc: `Détermine si un objet est gelé, c'est-à-dire si qu'on empêche d'ajouter de nouvelles propriétés, de supprimer ou d'éditer des propriétés existantes.`,
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `si un objet ne peut pas être modifié (mais ses propriétés oui)`,
        desc: `Détermine si un objet ou ses propriétés sont scellés : on ne peut ni ajouter ni retirer de propriétés, mais on peut modifier des propriétés existantes.`,
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `si l'objet est dans la chaîne de prototype.`,
        desc: `Retourne un booléen indiquant si un objet fait partie de la chaîne de prototypes d'un autre objet.`,
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
        shortDesc: `empêcher l'ajout ou la suppression de propriétés`,
        desc: `Scelle un objet, ce qui empêche l'ajout ou la suppression de propriétés. Les propriétés existantes peuvent toujours être modifiées.`,
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c n'est pas supprimé`
      },
      {
        name: 'freeze',
        shortDesc: `empêcher l'ajout, la suppression ou la modification de propriétés`,
        desc: `Gèle un objet, ce qui empêche l'ajout, la suppression ou la modification de propriétés.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `empêcher l'ajout de propriétés`,
        desc: `Empêche l'extention d'un objet. Les propriétés peuvent être supprimées ou modifiées mais on ne peut pas en ajouter de nouvelles.`,
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
        shortDesc: `la représentation en chaîne de caractères d'un objet`,
        desc: `La méthode <code>toString()</code> retourne une chaîne de caractère représentant l'objet.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `la représentation en chaîne de caractères localisée d'un objet`,
        desc: `La méthode <code>toLocaleString()</code> retourne une représentation en chaîne de caractères localisée d'un objet. Cette méthode utilise des objets dérivés permettant de personnaliser le comportement de la fonction, notamment en fonction de la locale.`,
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
          shortDesc: `des détails sur une propriété`,
          desc: `Renvoie un descripteur de la propriété propre d'un objet (c'est-à-dire une propriété directement présente et pas héritée via la chaîne de prototypes).`,
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
          shortDesc: `des détails sur toutes les propritétés d'un objet`,
          desc: `Retourne un objet contenant les descripteurs de toutes les propriétés d'un objet.`,
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
          shortDesc: `si une propriété peut être parcourue par une boucle for...in`,
          desc: `Retourne un booléen indiquant si l'attribut interne ECMAScript [[Enumerable]] est défini. Cela peut être utilisé pour savoir si une méthode est native ou non, car les propriétés natives ne sont générallement pas énumérables.`,
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `si une propriété existe comme propriété directe d'un objet`,
          desc: `Retourne une booléen indiquant si un objet contient une propriété directe et non pas héritée d'une chaîne de prototypes.`,
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
          shortDesc: `propriétés`,
          desc: `Retourne un tableau contenant les noms de toutes les propriétés d'un objet qui peuvent être parcourues.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `valeurs`,
          desc: `Retourne un tableau contenant les noms de toutes les valeurs d'un objet qui peuvent être parcourues.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `propriétés et valeurs`,
          desc: `Retourne un tableau contenant les noms de toutes les paires propriété/valeur d'un objet qui peuvent être parcourues.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `propriétés, même non-énumérables`,
          desc: `Retourne un tableau contenant les noms de toutes les propriétés d'un objet, qu'elles soient énumérables ou non. Fait la même chose que <code>Object.keys()</code> (retourne les propriétés d'un objet), mais <code>getOwnPropertyNames()</code> inclut les propriétés non-énumérables.`,
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
        shortDesc: `obtenir un prototype de cet objet.`,
        desc: `Retourne un protoype de l'objet spécifié, c'est-à-dire la valeur de la propriété interne [[Prototype]].`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `définir un protoype de cet objet.`,
        desc: `Attention : cette méthode est très lente. Utilisez avec précaution, ou remplacez par <code>Object.create()</code>. Définit le prototype, c'est-à-dire la propriété interne [[Prototype]].`,
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
        shortDesc: `savoir si cet objet est dans la chaîne de prototypes.`,
        desc: `Retourne un booléen indiquant si un objet fait partie de la chaîne de prototypes de l'objet spécifié.`,
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
