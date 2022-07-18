<template>
  <b-modal id="modal-1" title="Sắp xếp cột" ok-only>
    <sortable
      v-for="(item, index) in listData"
      :key="index"
      v-model="dragData"
      :index="index"
      drag-direction="vertical"
      replace-direction="vertical"
      @sortend="sortend"
      @sort="sorting"
    >
      <div class="item">
        <FeatherIconVue icon="MoveIcon" />
        <FeatherIconVue icon="MenuIcon" />
        <b-form-checkbox v-model="item.enabled" @change="click"/>
        {{ item.label }}
      </div>
    </sortable>
  </b-modal>
</template>

<script>

import { BModal, BFormCheckbox } from 'bootstrap-vue'
import Sortable from 'vue-drag-sortable'
import FeatherIconVue from '@/@core/components/feather-icon/FeatherIcon.vue'

export default {
  props: {
    listData: {
      required: true,
      type: Array,
    },
  },
  components: {
    BFormCheckbox,
    FeatherIconVue,
    BModal,
    Sortable,
  },
  data() {
    return {
      dragData: {},
    }
  },
  methods: {
    click() {
      // Todo
      console.log('click', this.listData)
    },
    sorting() {
      // const { oldIndex, newIndex } = e
      // console.log(oldIndex, newIndex)
    },
    sortend(e) {
      const { oldIndex, newIndex } = e
      this.rearrange(this.listData, oldIndex, newIndex)
    },
    rearrange(array, oldIndex, newIndex) {
      if (oldIndex > newIndex) {
        array.splice(newIndex, 0, array[oldIndex])
        array.splice(oldIndex + 1, 1)
      } else {
        array.splice(newIndex + 1, 0, array[oldIndex])
        array.splice(oldIndex, 1)
      }
      // this.$emit('FilterFetch', array)
    },
  },
}
</script>

<style>
  .item {
    font-size: 20px;
  }
  .item .custom-checkbox {
    display: inline;
  }
.list {
  position: relative; /* position of list container must be set to `relative` */
}
/* dragging item will be added with a `dragging` class */
/* so you can use this class to define the appearance of it */
.list > *.dragging {
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
}
.checkboxSelect {
  width: 20px; height: 20px;
}
#modal-1___BV_modal_body_ {
  height: 500px;
  overflow: scroll;
}
</style>
