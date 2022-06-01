<template>
  <b-modal
    id="modal-1"
    size="xl"
    title="Chọn trạng thái đơn hàng"
    hide-footer
  >
    <b-container fluid>
      <b-row style="height: 200px">
        <b-col
          v-for="level in levels"
          :key="level.level"
          cols="2"
          lg="2"
          md="3"
          sm="6"
          class="col-item-level"
        >
          <div class="iitem">
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
              ><span><feather-icon icon="CheckIcon" />{{ lvOrder.name }}</span></div>
            </div>
          </div>
        </b-col>
    </b-row>
    </b-container>
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
  #modal-1 .row {
      display: table;
  }
  #modal-1 [class*="col-"] {
    float: none;
    display: table-cell;
    vertical-align: top;
}
.iitem {
  border: 2px solid green;
  height: 100%;
  width: 208px;
  font-size: 26px;
  text-align: center;
}
.col-item-level {
  padding-left: 2px;padding-right: 2px;
}
.iitem .name {
  font-size: 30px;
}
@media screen and (max-width: 990px) {
  .iitem {
    width: 100%;
    font-size: 10px;
  }
  .iitem .name {
    font-size: 15px;
  }
}
@media screen and (max-width: 760px) {
  .iitem {
    width: 100%;
    font-size: 13px;
  }
  .iitem .name {
    font-size: 12px;
  }
}
@media screen and (max-width: 460px) {
  .iitem {
    width: 100%;
    font-size: 9px;
  }
  .iitem .name {
    font-size: 10px;
  }
}
</style>
