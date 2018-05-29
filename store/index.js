import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

// import languages (only state translations)
import de from './de/index'
import en from './en/index'
import bg from './bg/index'
import cz from './cz/index'
import es from './es/index'
import it from './it/index'
import nl from './nl/index'
import ru from './ru/index'
import pt_pt from './pt_pt/index'
import zh_cn from './zh_cn/index'
import zh_hk from './zh_hk/index'
import fr from './fr/index'
import id from './id/index'
import el from './el/index'

// import translations of labels
import translationsDe from '../src/locale/de/index'
import translationsEn from '../src/locale/en/index'
import translationsBg from '../src/locale/bg/index'
import translationsCz from '../src/locale/cz/index'
import translationsEs from '../src/locale/es/index'
import translationsIt from '../src/locale/it/index'
import translationsNl from '../src/locale/nl/index'
import translationsRU from '../src/locale/ru/index'
import translationsPtPt from '../src/locale/pt_pt/index'
import translationsZhCn from '../src/locale/zh_cn/index'
import translationsZhHk from '../src/locale/zh_hk/index'
import translationsFr from '../src/locale/fr/index'
import translationsId from '../src/locale/id/index'
import translationsEl from '../src/locale/el/index'

// create info about languages
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
    console.log(newLang)
    state.curLanguage = newLang
    Vue.i18n.set(newLang)
  }
}

export const store = new Vuex.Store({
  modules: {
    en,
    bg,
    cz,
    de,
    es,
    it,
    nl,
    ru,
    pt_pt,
    zh_cn,
    id,
    zh_hk,
    fr,
    el
  },
  state: {
    selectedMethod: undefined,
    curLanguage: 'en',
    languages
  },
  mutations
})

Vue.use(vuexI18n.plugin, store)

// add translations directly to the application
Vue.i18n.add('bg', translationsBg)
Vue.i18n.add('de', translationsDe)
Vue.i18n.add('en', translationsEn)
Vue.i18n.add('cz', translationsCz)
Vue.i18n.add('es', translationsEs)
Vue.i18n.add('it', translationsIt)
Vue.i18n.add('nl', translationsNl)
Vue.i18n.add('ru', translationsRU)
Vue.i18n.add('pt_pt', translationsPtPt)
Vue.i18n.add('zh_cn', translationsZhCn)
Vue.i18n.add('zh_hk', translationsZhHk)
Vue.i18n.add('fr', translationsFr)
Vue.i18n.add('id', translationsId)
Vue.i18n.add('el', translationsEl)

Vue.i18n.set(store.state.curLanguage)

// registering only the current language
// would be also possible but unloading & loading would be required
// at language change --> can be added later (for now load all langauges)
// store.registerModule('de', de)
