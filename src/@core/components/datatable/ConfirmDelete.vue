<template>
  <b-modal id="modal-1" title="Delete">
    <p class="my-4">Delete item!</p>
  </b-modal>
</template>

<script>
import { BModal } from 'bootstrap-vue'

export default {
  components: {
    BModal,
  },
  props: ['msg'],
  methods: {
  },
}
</script>
