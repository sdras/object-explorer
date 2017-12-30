<template>
  <div>
    <label for="firstmethod">{{$t('firstMethod', 'I have an object, I would like to')}}</label>
    <select id="firstmethod" name="select" v-model="selectedFilter">
      <option value="" disabled selected>...</option>
      <option v-for="option in options" :key="option.name" :value="option">
        {{ option }}
      </option>
    </select>
    <div v-if="selectedFilter === options[0]">
      <method-choice :options="createObj"/>
    </div>
    <div v-else-if="selectedFilter === options[1]">
      <method-choice :options="createProp" methodType="create" />
    </div>
    <div v-else-if="selectedFilter === options[2]">
      <method-choice :options="infoObj" methodType="determine" />
    </div>
    <div v-else-if="selectedFilter === options[3]">

      <p>
        <label for="infoProperty">{{$t('infoPropMethod', "I need to get")}}</label>
        <select id="infoProperty" name="select" v-model="selectInfoProperty">
          <option value="" disabled selected>...</option>
          <option value="details">{{$t('details', 'details about the property')}}</option>
          <option value="list">{{$t('list', 'a list of all of the keys and/or values')}}</option>
        </select>
      </p>

      <div v-if="selectInfoProperty === 'details'">
        <method-choice :options="infoProp.details" methodType="find out"/>
      </div>
      <div v-else-if="selectInfoProperty === 'list'">
        <method-choice :options="infoProp.list" methodType="get an array of all of the"/>
      </div>

    </div><!--options3- infoProperties-->
    <div v-else-if="selectedFilter === options[4]">
      <method-choice :options="noChange"/>
    </div>
    <div v-else-if="selectedFilter === options[5]">
      <method-choice :options="createString" methodType="return a"/>
    </div>
    <div v-else-if="selectedFilter === options[6]">
      <method-choice :options="prototype" />
    </div>
  </div>
</template>

<script>
import { store } from '../../store/index'
import { mapState } from 'vuex'
import MethodChoice from './methods/MethodChoice.vue'

function mapLocalizedState(props) {
  let res = {}
  props.forEach(
    prop =>
      (res[prop] = state => {
        const { curLanguage } = state.$store.state
        return state.$store.state[curLanguage][prop]
      })
  )
  return res
}

export default {
  components: {
    MethodChoice
  },
  data() {
    return {
      selectedFilter: '',
      selectInfoProperty: ''
    }
  },
  computed: {
    ...mapLocalizedState([
      'createObj', //: state => localizedState(state, 'adding'),
      'createProp',
      'infoObj',
      'infoProp',
      'noChange',
      'createString',
      'prototype'
    ]),
    options: function() {
      return this.$t('primaryOptions')
    }
  },
  watch: {
    selectedFilter() {
      this.$store.commit('resetSelection')
    },
    selectInfoProperty() {
      this.$store.commit('resetSelection')
    }
  }
}
</script>

<style scoped>

</style>
