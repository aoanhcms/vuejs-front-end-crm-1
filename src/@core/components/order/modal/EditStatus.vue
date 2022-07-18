<template>
  <b-modal
    id="modal-1"
    size="xl"
    title="Chọn trạng thái đơn hàng"
    hide-footer
  >
    <b-container fluid>
      <b-row>
        <b-col
          v-for="level in levels"
          :key="level.level"
          cols="2"
          lg="2"
          md="3"
          sm="6"
          class="col-item-level"
        >
          <b-card class="iitem">
            <div class="name">Level {{ level.level }}</div>
            <div
              v-for="lvOrder in level.data"
              :key="lvOrder.id"
              style="padding-top: 30px;"
            >
              <div
                class="item"
                @click="lvFunc(lvOrder)"
                :value="lvOrder.id"
              ><span><feather-icon icon="CheckIcon" size="30" />{{ lvOrder.name }}</span></div>
            </div>
          </b-card>
        </b-col>
    </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import { BContainer, BRow, BCol, BModal, BCard } from 'bootstrap-vue'
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'

export default {
  watch: {
  },
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
    BContainer,
    BRow,
    BCol,
    BModal,
    FeatherIcon,
    BCard,
  },
}
</script>

<style>
.modal-title {
  font-size: 30px;
}
.modal-body {
  padding-bottom: 30px;
}
.item:hover {
  background-color: blueviolet;
  color: white;
}
.item {
  cursor: pointer; padding: 5px;
}
.iitem {
  border: 2px solid green;
  height: 100%;
  font-size: 20px;
  padding-bottom: 10px;
  text-align: center;
}
.col-item-level {
  padding-left: 2px;padding-right: 2px;
}
.iitem .name {
  font-size: 30px;
}
</style>
