<template>
  <aside>

    <div class="code-block-wrapper" ref="ex">
        <div class="code-block-bg"></div>
        <div class="code-block usage1" >
          <p v-if="!selectedUsage || (selectedUsage && selectedUsage.name !== 'isPrototypeOf')">
            <span>let obj = {<br>
            <span>&nbsp;&nbsp;</span>a: 1,<br>
            <span>&nbsp;&nbsp;</span>b: 2,<br>
            <span>&nbsp;&nbsp;</span>c: 3<br>
            };</span>
          </p>
          <p >
            <span v-if="selectedUsage"
              class="exampleoutput"
              v-html="selectedUsage.example">
            </span>
          </p>
        </div>
    </div>

    <div  class="usage2">
      <h3 class="usage-title">Output</h3>
      <div class="code-block-wrapper" ref="ex2">
        <div class="code-block-bg"></div>
        <div class="code-block" >
            <p>
              <span
                class="exampleoutput2"
                v-html="selectedUsage ? selectedUsage.output: ''">
              </span>
            </p>
          </div><!--code-block-->
  </div>
    </div>
  </aside>
</template>

<script>
import anime from "animejs";
export default {
  methods: {
    setScale(el, scale, initialHeight) {
      el.style.height = `${initialHeight}px`;
      anime({
        targets: el,
        scaleY: scale,
        elasticity: 50,
        duration: 600
      });
    },
    makeVisible(el) {
      anime({
        targets: el,
        easing: "easeOutSine",
        scaleY: [
          { value: [1.05, 1], duration: 200 },
          { value: 1, duration: 450, delay: 500 }
        ],
        duration: 400
      });
    },

    setHeights() {
      this.refs.forEach(ref => {
        const scale = ref.el.offsetHeight / ref.initH;
        this.setScale(ref.el.firstChild, scale, ref.initH);
        if (ref.initH !== ref.el.getBoundingClientRect().height)
          this.makeVisible(ref.el.lastChild);
      });
    }
  },
  mounted() {
    this.refs = [
      {
        initH: this.$refs.ex.getBoundingClientRect().height,
        el: this.$refs.ex
      },
      {
        initH: this.$refs.ex2
          ? this.$refs.ex2.getBoundingClientRect().height
          : 0,
        el: this.$refs.ex2
      }
    ];

    this.$nextTick(this.setHeights);
  },

  computed: {
    selectedUsage() {
      return this.$store.state.selectedMethod;
    }
  },

  watch: {
    selectedUsage() {
      window.requestAnimationFrame(this.setHeights);
    }
  }
};
</script>

<style>
.code-block-wrapper {
  position: relative;
}

.code-block-bg {
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  transform-origin: 0 0;
  width: 100%;
}

.code-block {
  padding: 20px;
  margin: 20px 0;
  display: block;
  border-radius: 5px;
  line-height: 1.5em;
  font-family: monospace;
  font-size: 17px;
  position: relative;
  z-index: 1;
}

.usage-title {
  margin-top: 50px;
}

.exampleoutput,
.exampleoutput2 {
  display: inline-block;
}

.usage1 {
  color: #aeded4;
}

.usage2 span {
  color: #ecc2a4;
}

.exampleoutput,
.exampleoutput2 {
  display: inline-block;
}
</style>
