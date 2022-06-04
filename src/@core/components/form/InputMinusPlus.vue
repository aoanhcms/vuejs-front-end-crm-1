<template>
  <div class="quantity">
    <b-input-group>
      <b-input-group-prepend>
        <b-button
          variant="info"
          @click="decrement()">-</b-button>
      </b-input-group-prepend>

      <b-form-input
        type="number"
        min="0" v-model="value"
      />

      <b-input-group-append>
        <b-button
          variant="info"
          @click="increment()">+</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
import { BInputGroup, BButton, BInputGroupPrepend, BInputGroupAppend, BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BInputGroup, BButton, BInputGroupPrepend, BInputGroupAppend, BFormInput,
  },
  props: ['value'],
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    increment() {
      this.inputVal += 1
    },
    decrement() {
      if (this.inputVal < 1) this.inputVal = 0
      else this.inputVal -= 1
    },
  },
}
</script>
<style>
.quantity {
  max-width: 150px;
  width: 100%;
}

.quantity input {
  text-align: center;
}
</style>
