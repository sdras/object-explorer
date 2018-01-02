import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

// import languages (only state translations)
import en from './en/index'
import nl from './nl/index'

// import translations of labels
import translationsEn from '../src/locale/en/index'
import translationsNl from '../src/locale/nl/index'

// create info about langauges
const languages = (ctx => {
  let keys = ctx.keys()
  let values = keys.map(ctx)
  // return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
  const metaFiles = keys.filter((key, val) => key.endsWith('json'))
  let res = {}
  metaFiles.forEach(key => {
    const index = keys.indexOf(key)
    const meta = values[index]
    res[meta.short] = {
      long: meta.long
    }
  })
  return res
})(require.context('./', true, /[a-z]{2}/))

Vue.use(Vuex)

const mutations = {
  selectionMethod(state, selected) {
    state.selectedMethod = selected
  },
  resetSelection(state) {
    state.selectedMethod = ''
  },
  changeLanguage(state, newLang) {
    state.curLanguage = newLang
    Vue.i18n.set(newLang)
  }
}

export const store = new Vuex.Store({
  modules: {
    en,
    nl
  },
  state: {
    selectedMethod: undefined,
    curLanguage: 'nl',
    languages
  },
  mutations
})

Vue.use(vuexI18n.plugin, store)

// add translations directly to the application
Vue.i18n.add('en', translationsEn)
Vue.i18n.add('nl', translationsNl)

Vue.i18n.set(store.state.curLanguage)

// registering only the current language
// would be also possible but unloading & loading would be required
// at language change --> can be added later (for now load all langauges)
// store.registerModule('de', de);
