<template>
  <div>
    <b-badge
      v-if="status === true"
      variant="light-success"
    >
      Đang chạy
    </b-badge>
    <b-badge
      v-else
      variant="light-danger">
      Đang dừng
    </b-badge>
  </div>
</template>
<script>

import { BBadge } from 'bootstrap-vue'

export default {
  props: ['status'],
  components: {
    BBadge,
  },
}
</script>
