export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'φτιάξω ένα αντικείμενο',
        desc: `Φτιάχνει ένα αντικείμενο με συγκεκριμένο πρότυπο και ιδιότητες (properties).<br>
          <br>
          <strong>Σημαντική σημείωση για αρχάρειους!</strong> Συνηθίζεται να φτιάχνετε ένα αντικείμενο όπως στο παραπάνω παράδειγμα, ετσι <code>let obj = { a: 1 };</code>`,
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
        shortDesc: 'φτιάξω ένα αντίγραφο του αντικειμένου',
        desc: `Αντιγράφει τις τιμές απο ένα ή περισσότερα αντικείμενα στο τελικό αντικείμενο. Επιστρέφει το τελικό αντικείμενο. Όταν γίνεται χρήση της ES6 συνηθίζεται η χρήση του τελεστή <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a>, χρησιμοποιώντας <code>...</code>, παρόλο που δεν είναι μέθοδος αντικειμένων.`,
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
        shortDesc: 'μια νέα ιδιότητα ή να αλλάξω υπάρχουσα',
        desc: `Προσθέτει μια νέα ιδιότητα στο αντικείμενο όπως περιγράφεται.<br>
          <br>
          <strong>Σημαντική σημείωση για αρχάρειους!</strong> Είναι πιο συνηθισμένη η χρήση τελείας ή αγκύλης για την δημιουργία καινούργιας ιδότητας ή την αλλαγή μια υπάρχουσας.  Παραδείγματος χάριν: <code>obj.a = 1</code> ή <code>obj[a] = 1</code>. Τεχνικά δεν αποτελεί κάποια μέθοδο που παρέχετε απο την γλώσσα, γι'αυτό και δεν συμπεριλαμβάνεται.`,
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
        shortDesc: 'μια ή περισσότερες νέες ιδιότητες ή να αλλάξω υπάρχουσες',
        desc: `Προσθέτει μια ή περισσότερες νέες ιδιότητες στο αντικείμενο όπως περιγράφονται.<br>
          <br>
          <strong>Σημαντική σημείωση για αρχάρειους!</strong> Είναι πιο συνηθισμένη η χρήση τελείας ή αγκύλης για την δημιουργία καινούργιας ιδότητας ή την αλλαγή μια υπάρχουσας.  Παραδείγματος χάριν: <code>obj.a = 1</code> ή <code>obj[a] = 1</code>. Τεχνικά δεν αποτελεί κάποια μέθοδο που παρέχετε απο την γλώσσα, γι'αυτό και δεν συμπεριλαμβάνεται.`,
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
        shortDesc: 'αν μπορώ να προσθέσω ιδιότητες',
        desc: 'Υπολογίζει αν επιτρέπεται η επέκταση του αντικειμένου.',
        example: `console.log(Object.isExtensible(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isExtensible(obj));`,
        output: `true<br>
        false`
      },
      {
        name: 'is',
        shortDesc: 'αν δύο αναφορές μνήμης δείχνουν το ίδιο αντικείμενο',
        desc: `Υπολογίζει αν δύο αναφορές μνήμης δείχνουν το ίδιο αντικείμενο. Εξισώνει όλες τις τιμές NaN (διαφορετικά απο τα Abstract Equality Comparison και Strict Equality Comparison). Αυτό είναι λίγο περιέργο, και τα MDN κείμενα παραπλανούν. Είναι <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">προτιμότερη η χρήση του τελεστή τριπλής ισότητας <code>===</code></a> για να ελέγξετε την ισότητα`,
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
        shortDesc: `αν ένα αντικείμενο και οι ιδιότητές του δεν μπορούν να μεταβληθούν`,
        desc: 'Υπολογίζει αν το αντικείνο είναι παγωμένο.',
        example: `console.log(Object.isFrozen(obj));<br>
        Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isSealed',
        shortDesc: `αν ένα αντικείμενο δεν μπορεί να μεταβληθεί (αλλά οι ιδιότητές του μπορούν)`,
        desc: `Υπολογίζει αν μπορούν να δημιουργηθούν νέες ιδιότητες και αν μπορούν να μεταβληθούν οι ιδότητες ένος αντικειμένου.`,
        example: `Object.seal(obj);<br>
        <br>
        console.log(Object.isSealed(obj));`,
        output: `true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `αν ένα αντικείμενο ειναι στην αλληλουχία πρωτότυπου (prototype chain).`,
        desc: `Επιστρέφει αληθής αν το αντικείμενο στο οποίο κλήθηκε η μέθοδος αυτή, είναι στην αλλη αλληλουχία πρωτότυπου (prototype chain).`,
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
        shortDesc: `βεβαιώθω ότι ιδιότητες δεν μπορούν να προστεθούν ή να σβηστούν`,
        desc:
          'Αποτρέπει την διαγραφή ιδιοτήτων του αντικειμένου. Υπάρχουσες ιδιότητες μπορούν να μεταβληθούν.',
        example: `Object.seal(obj);<br>
        delete obj.c;<br>
        <br>
        console.log(obj);`,
        output: `{a: 1, b: 2, c: 3} // obj.c doesn't get deleted`
      },
      {
        name: 'freeze',
        shortDesc: `βεβαιώθω ότι ιδιότητες δεν μπορούν να προστεθούν, να σβηστούν ή να μεταβληθούν`,
        desc: `Παγώνει ένα αντικείμενο: οι ιδιότητές του δεν μπορεί να μεταβληθούν ή να διαγραφούν.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `βεβαιώθω ότι ιδιότητες δεν μπορούν να προστεθούν`,
        desc: `Αποτρέπει οποιαδήποτε επέκταση του αντικειμένου. Μπορώ να διαγάψω ιδιότητες αλλά δεν μπορώ να προσθέσω νέες.`,
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
        shortDesc: `αλφαριθμητική αναπαράσταση του αντικειμένου.`,
        desc: `Η μέθοδος <code>toString()</code> επιστρέφει μια αλφαριθμητική αναπαράσταση του αντικειμένου. Αν και η μέθοδος είναι διαθέσιμη στο αντικείμενο, συχνά είναι χρησιμότερη η χρήση της μεθόδου <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `μεταφρασμένη αλφαρηθμητική αναπαράσταση του αντικειμένου.`,
        desc: `Η μέθοδος <code>toLocaleString()</code> επιστρέφει μια μεταφρασμένη αλφαριθμητική αναπαράσταση του αντικειμένου. Ο σκοπός της μεθόδου είναι να αντικαθίσταται (override) από παράγωγα αντικείμενα (derived objects) για τοπικές μεταφράσεις. Πιο απλά: αν έχετε δεδομένα που αλλάζουν ανάλογα την τοποθεσία, όπως ημερομηνίες και ώρα, θα σας δώσει τα δεδομένα αυτά σε διαφορετική μορφή`,
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
          shortDesc: `λεπτομέριες για μία ιδιότητα`,
          desc:
            'Επιστρέφει την περιγραφή μιας ιδιότητας ένος αντικειμένου.',
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
          shortDesc: `λεπτομέριες για όλες τις ιδιότητες`,
          desc:
            'Επιστρέφει ένα αντικείμενο που περιέχει περιγραφές για όλες τις ιδιότητες ενός αντικειμένου.',
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
          shortDesc: `αν μία ιδιότητα μπορεί να προσπελαστεί με έναν for...in βρόγχο`,
          desc:
            'Επιστρέφει αληθής αν υπάρχει το ECMAScript [[Enumerable]] χαρακτηριστικό. Βοηθά για να δώ αν μια μέθοδος είναι ενσωματομένη (built-in) ή όχι, μιάς και οι ενσωματομένες δέν έχουν το χαρακτηριστικό enumerable',
          example: `console.log(obj.propertyIsEnumerable('a'));<br>
          console.log(Math.propertyIsEnumerable('random'));`,
          output: `true<br>
          false`
        },
        {
          name: 'hasOwnProperty',
          shortDesc: `αν η ιδιότητα είναι άμεση ιδιότητα του αντικειμένου`,
          desc:
            'Επιστρέφει αληθής αν ένα αντικείμενο έχει την συγκεκριμένη ιδιότητα σαν άμεση ιδιότητα και όχι απο κληρονομιά της αλληλουχίας προτότυπων.',
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
          shortDesc: `τα κλειδιά`,
          desc: `Επιστρέφει έναν πίνακα που περιέχει όλα τα ονόματα από τα κλειδιά του αντικειμένου, τα οποία μπορούν προσπελαστούν με βρόγχο, στην ίδια σειρά με την οποία θα προσπελαστούν.`,
          example: `console.log(Object.keys(obj));`,
          output: `["a", "b", "c"]`
        },
        {
          name: 'values',
          shortDesc: `τις τιμές`,
          desc: `Επιστρέφει έναν πίνακα που περιέχει όλες τις τιμές του αντικειμένου, οι οποιές μπορούν προσπελαστούν με βρόγχο, στην ίδια σειρά με την οποία θα προσπελαστούν.`,
          example: `console.log(Object.values(obj));`,
          output: `[1, 2, 3]`
        },
        {
          name: 'entries',
          shortDesc: `τα κλειδιά και τις τιμές`,
          desc: `Επιστρέφει έναν δυσδιάστατο πίνακα που περιέχει όλα τα ζεύγη ονόμα/κλειδί του αντικειμένου, τα οποία μπορούν προσπελαστούν με βρόγχο, στην ίδια σειρά με την οποία θα προσπελαστούν.`,
          example: `console.log(Object.entries(obj));`,
          output: `[["a", 1], ["b", 2], ["c", 3]]`
        },
        {
          name: 'getOwnPropertyNames',
          shortDesc: `τα κλειδιά, ακόμη και τα απροσπέλαστα με βρόγχο`,
          desc: `Επιστρέφει έναν πίνακα που περιέχει όλες τις ιδιότητες του αντικειμένου, είτε μπορούν να απαριθμήθουν είτε όχι. Κάνει το ίδιο με το  <code>Object.keys()</code>, πέρνοντας τα κλειδιά του αντικειμένου, αλλά το <code>getOwnPropertyNames()</code> θα περιέχει και ιδιότητες οι οποίες δεν μπορούν να προσπελαστούν απο βρόγχο.`,
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
        shortDesc: `πάρω ένα προτότυπο του αντικειμένου.`,
        desc: `Επιστρέφει το προτότυπο του αντικειμένου. (δλδ. την τιμή της εσωτερικής [[Prototype]] ιδιότητας του αντικειμένου).`,
        example: `const proto = Object.create(obj);<br>
        console.log(Object.getPrototypeOf(proto) === obj);`,
        output: `true`
      },
      {
        name: 'setPrototypeOf',
        shortDesc: `θέσω το προτοτότυπο του αντικειμένου.`,
        desc: `Προσοχή: Η μέθοδος είναι πολυ αργή. Χρησιμοποιήστε την με προσοχή, ή χρησιμοποιήστε την <code>Object.create()</code>. Θέτει το προτότυπο (δλδ., την εσωτερική [[Prototype]] ιδιότητα).`,
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
        shortDesc: `βρώ αν το αντικείμενο είναι στην αλληλουχία προτοτύπων (prototype chain).`,
        desc: `Επιστρέφει αληθής αν το αντικείμενο για το οποίο καλείτε η μέθοδος είναι στην αλληλουχία προτύπων του αντικειμένου.`,
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
