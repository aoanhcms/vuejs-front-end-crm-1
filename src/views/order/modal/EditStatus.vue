<template>
  <b-modal
    id="modal-1"
    size="xl"
    title="Chọn trạng thái đơn hàng"
    hide-footer
  >
    <b-row style="height: 200px;">
      <b-col
        cols="2"
        v-for="level in levels"
        :key="level.level"
      >
        <b-card body-border-variant="success">
          <template>
            <b-card-sub-title><b>Level {{ level.level }}</b></b-card-sub-title>
          </template>
          <div style="padding-top: 30px;"
            v-for="lvOrder in level.data"
            :key="lvOrder.id"
          >
            <div class="item" @click="lvFunc(lvOrder)" :value="lvOrder.id"><span><feather-icon icon="CheckIcon" />{{ lvOrder.name }}</span></div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { BRow, BCol, BModal, BCard } from 'bootstrap-vue'
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'

export default {
  methods: {
    lvFunc(val) {
      this.$emit('onChooseLevel', val)
      this.$root.$emit('bv::hide::modal', 'modal-1', '#focusThisOnClose')
    },
  },
  data() {
    return {
      lv: 0,
      levels: [{
        level: 0,
        data: [
          {
            id: 1, name: 'Đơn mới', color: '#000000',
          },
        ],
      },
      {
        level: 1,
        data: [
          {
            id: 3, name: 'Xác nhận đơn', color: '#000000',
          },
        ],
      },
      {
        level: 2,
        data: [
          {
            id: 5, name: 'Xếp lớp buổi 1', color: '#000000',
          },
        ],
      },
      {
        level: 3,
        data: [
          {
            id: 7, name: 'Học thử buổi 1', color: '#000000',
          },
          {
            id: 8, name: 'Xếp lớp buổi 2', color: '#000000',
          },
        ],
      },
      {
        level: 4,
        data: [
          {
            id: 9, name: 'Học thử buổi 2', color: '#000000',
          },
          {
            id: 10, name: 'Đã đong tiền', color: '#000000',
          },
        ],
      },
      {
        level: 6,
        data: [
          {
            id: 11, name: 'Hủy lớp', color: '#000000',
          },
        ],
      }],
    }
  },
  components: {
    BRow,
    BCol,
    BModal,
    FeatherIcon,
    BCard,
  },
}
</script>

<style>
  .item:hover {
    background-color: blueviolet;
    color: white;
  }
  .item {
    cursor: pointer; padding: 5px;
  }

</style>
