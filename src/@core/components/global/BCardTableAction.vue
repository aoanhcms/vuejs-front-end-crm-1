<template>
  <b-card-right-action
    :title="title"
  >
    <template slot="navbar">
      <div>
        <b-button
          variant="info"
          @click="$emit('button-add')"
        >
          <feather-icon icon="PlusIcon" /> Add
        </b-button>
        <b-button
          variant="primary"
          @click="$emit('button-export')">
          <feather-icon icon="LogOutIcon" /> Export
        </b-button>
        <b-button
          variant="danger"
          @click="$emit('button-remove')"
        >
          <feather-icon icon="DeleteIcon" /> Remove
        </b-button>
      </div>
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