<template>
  <div>
    <h3 class="usage-title">Next Example</h3>
    <div class="usage-code usage1">
      <p>
        <span v-if="selectedUsage"
          class="exampleoutput"
          ref="ex3"
          v-html="selectedUsage.example2">
        </span>
      </p>
    </div>
    <h3 class="usage-title">Next Output</h3>
    <div class="usage-code">
      <p>
        <span
          class="exampleoutput"
          ref="ex4"
          v-html="selectedUsage.output2">
        </span>
      </p>
    </div><!--usage-code-->
  </div>
</template>

<script>
import { TweenLite, TimelineMax, Back, Power4 } from 'gsap'

export default {
  props: {
    selectedUsage: {
      type: Object,
      required: true
    }
  },
  methods: {
    typeSecond() {
      let split = new SplitText(this.$refs.ex3, { type: 'chars' }),
        split2 = new SplitText(this.$refs.ex4, { type: 'chars' }),
        tl = new TimelineMax()

      tl.add('start')
      tl.to(this.$refs.ex3, 0.1, {
        opacity: 1
      })
      tl.staggerFromTo(
        split.chars,
        0.1,
        {
          opacity: 0,
          scale: 0,
          color: '#aeded4',
          transformOrigin: '50% 50%'
        },
        {
          opacity: 1,
          scale: 1,
          color: '#fff',
          transformOrigin: '50% 50%',
          ease: Power4.easeOut
        },
        0.03,
        'start+=0'
      )
      tl.staggerTo(
        split.chars,
        0.1,
        {
          color: '#aeded4',
          ease: Back.easeIn
        },
        0.03,
        'start+=0.1'
      )

      tl.to(this.$refs.ex4, 0.1, {
        opacity: 1
      })
      tl.staggerFromTo(
        split2.chars,
        0.1,
        {
          opacity: 0,
          scale: 0,
          color: '#aeded4',
          transformOrigin: '50% 50%'
        },
        {
          opacity: 1,
          scale: 1,
          color: '#fff',
          transformOrigin: '50% 50%',
          ease: Power4.easeOut
        },
        0.03,
        'start1+=0'
      )
      tl.staggerTo(
        split2.chars,
        0.1,
        {
          color: '#ecc2a4',
          ease: Back.easeIn
        },
        0.03,
        'start1+=0.1'
      )
    }
  },
  mounted() {
    if (this.selectedUsage) {
      TweenMax.set([this.$refs.ex3, this.$refs.ex4], {
        opacity: 0
      })
      setTimeout(() => {
        this.typeSecond()
      }, 500)
    }
  }
}
</script>
