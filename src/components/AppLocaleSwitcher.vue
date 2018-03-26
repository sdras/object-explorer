<template>
  <div class="localization-dropdown">
    <a href="https://devJang.github.io/array-explorer/"><em>배열 탐색기</em></a>
    <br>
    언어:
    <select v-model="selectedLanguage">
      <option v-for="(val, key) in languages" :value="key">{{val.long}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: this.$store.state.curLanguage,
      languages: this.$store.state.languages
    }
  },
  watch: {
    selectedLanguage(newLang) {
      this.$store.commit('changeLanguage', newLang)
      this.$store.commit('resetSelection')
    }
  }
}
</script>

<style scoped>
select {
  margin-top: 8px;
}

.localization-dropdown {
  position: absolute;
  right: 8%;
  top: 35px;
  text-align: right;
}
</style>
