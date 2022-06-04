<template>
  <div>
    <b-badge
      v-if="gender === 'Male'"
      variant="light-success"
    >
      Nam
    </b-badge>
    <b-badge
      v-else-if="gender === 'Female'"
      variant="light-danger"
    >
      Nữ
    </b-badge>
  </div>
</template>
<script>

import { BBadge } from 'bootstrap-vue'

export default {
  props: ['gender'],
  components: {
    BBadge,
  },
}
</script>
