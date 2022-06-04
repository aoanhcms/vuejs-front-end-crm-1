<template>
  <span>
    <b-dropdown
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
    >
      <template v-slot:button-content>
        <feather-icon
          icon="MoreVerticalIcon"
          size="16"
          class="text-body align-middle mr-25"
        />
      </template>
      <b-dropdown-item
        :to="to"
      >
        <feather-icon
          icon="Edit2Icon"
          class="mr-50"
        />
        <span>Edit</span>
      </b-dropdown-item>
      <b-dropdown-item @click="this.delete">
        <feather-icon
          icon="TrashIcon"
          class="mr-50"
        />
        <span>Delete</span>
      </b-dropdown-item>
    </b-dropdown>
  </span>
</template>
<script>

import { BDropdownItem, BDropdown } from 'bootstrap-vue'

import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'

export default {
  props: ['to', 'row'],
  components: {
    BDropdownItem,
    BDropdown,
    FeatherIcon,
  },
  methods: {
    delete() {
      this.$emit('delete', this.row)
    },
  },
}
</script>
