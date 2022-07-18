<template>
  <div>
    <b-button
      v-if="selectedChanged.length > 0"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="danger"
      style="margin-right: 10px;"
      @click="deleteRows"
    >
      <feather-icon
        icon="DeleteIcon"
        class="mr-50"
      />
      <span class="align-middle">Xóa {{ selectedChanged.length }} dòng</span>
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      style="margin-right: 10px;"
      :to="to"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-50"
      />
      <span class="align-middle">{{ name }}</span>
    </b-button>
    <b-dropdown
      text="Xuất ra"
      variant="primary"
    >
      <b-dropdown-item
        v-for="ep in exports"
        :key="ep.id"
        :to="ep.to"
        @click="ep.fn(ep.name)"
      >
        {{ ep.name }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
import Ripple from 'vue-ripple-directive'
import { BButton, BDropdownItem, BDropdown } from 'bootstrap-vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'

export default {
  props: ['to', 'name', 'exports', 'selectedChanged'],
  components: {
    FeatherIcon,
    BButton,
    BDropdown,
    BDropdownItem,
  },
  directives: {
    Ripple,
  },
  methods: {
    deleteRows() {
      this.$emit('confirmDeleteSelected', this.selectedChanged)
    },
  },
}

</script>
