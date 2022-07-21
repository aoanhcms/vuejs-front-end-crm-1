<template>
  <b-card-right-action
    :title="title"
  >
    <template slot="navbar">
      <b-button
        variant="success"
        @click="buttonSave"
      >
        <feather-icon icon="SaveIcon" /> {{ buttonTitle ? buttonTitle : 'Lưu' }}
      </b-button>
    </template>
    <template slot="body">
      <slot />
    </template>
  </b-card-right-action>
</template>
<script>
import { BButton } from 'bootstrap-vue'

import BCardRightAction from './BCardRightAction.vue'

export default {
  methods: {
    buttonSave() {
      this.$emit('button-save')
    },
  },
  props: ['title', 'navbar-button-variant', 'button-title'],
  components: {
    BCardRightAction,
    BButton,
  },

}
</script>

<style>
.card-body .card-header .card-subtitle {
  font-size: 2em;
}
</style>