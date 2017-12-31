<template>
  <div>
    <p>
      <label for="methodoptions">{{$t('methodOptions', 'I need to')}} {{ methodType && $t(`methodTypes.${methodType}`) }}</label>
      <select id="methodoptions" name="select" v-model="selected">
        <option value="" disabled selected>...</option>
        <option v-for="option in options" :key="option.desc" :value="option">
          {{ option.shortDesc }}
        </option>
      </select>
    </p>
    <method-base v-show="isSelected" :urlPath="selected.name">
      <span v-if="selected.name === 'length'" slot="title">Array.{{selected.name}}</span>
      <span v-else slot="title">Object.{{selected.name}}()</span>
      <span slot="desc" v-html="selected.desc"></span>
    </method-base>
  </div>
</template>

<script>
import MethodBase from './MethodBase.vue'
import { mapState } from 'vuex'

export default {
  components: {
    MethodBase
  },
  props: {
    methodType: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  computed: {
    isSelected() {
      return this.$store.state.selectedMethod
    }
  },
  watch: {
    selected() {
      this.$store.commit('selectionMethod', this.selected)
    }
  }
}
</script>

<style>
p.desc code {
  background: #eee;
  font-size: 16px;
  padding: 3px 8px;
  border-radius: 3px;
}
</style>
