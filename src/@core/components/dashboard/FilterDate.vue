<template>
  <b-row>
    <b-col cols="2">
      <b-form-input />
    </b-col>
    <b-col cols="2">
      <b-form-input />
    </b-col>
    <b-col cols="2">
      <b-button>Submit</b-button>
      <b-button>Refresh</b-button>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormInput, BButton, } from 'bootstrap-vue'

export default {
  methods: {
  },
  data() {
    return {
    }
  },
  components: {
    BRow, BCol, BFormInput, BButton,
  },
}
</script>

<style>

</style>