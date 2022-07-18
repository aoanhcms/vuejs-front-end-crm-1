<template>
  <div class="order-status-card">
    <b-row class="status-bar">
      <b-col>
        Trạng thái đơn hàng <span @click="StatusSelect('tat_ca')">Chọn tất cả</span>| <span @click="StatusSelect('reset')">Bỏ chọn</span>| <span @click="StatusSelect('doanh_thu')">Tính doanh thu</span>| <span @click="StatusSelect('khong_tinh_doanh_thu')">Không tính doanh thu</span>
      </b-col>
    </b-row>
    <b-row class="status-content">
      <b-col
        v-for="st in status"
        :key="st.id"
        cols="2"
        :style="{borderLeft: '10px solid' + st.color, borderRadius: '10px', marginBottom: '10px'}"
      >
        <b-form-checkbox
          v-model="st.tiep_can"
          @change="filterStatus"
        >
          <span :style="{color: st.color}">{{ st.name }}</span>
        </b-form-checkbox>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { BRow, BCol, BFormCheckbox } from 'bootstrap-vue'

export default {
  methods: {
    filterStatus() {
      this.$emit('filterDone', this.status)
    },
    StatusSelect(t) {
      this.status = this.status.map((item, k) => {
        if (t === 'tat_ca') {
          return { ...item, tiep_can: true }
        } else if ( t === 'reset' ) {
          return { ...item, tiep_can: false }
        } else if (t === 'khong_tinh_doanh_thu'){
          if([1, 2, 3, 4, 5, 6].includes(item.id))
            return { ...item, tiep_can: true }
          else return { ...item, tiep_can: false }
        }
        else if(t === 'doanh_thu') {
          if([7, 8, 9, 10, 11, 12].includes(item.id))
            return { ...item, tiep_can: true }
          else return { ...item, tiep_can: false }
        }else {
          return item;
        }
      })
    }
  },
  data() {
    return {
      status: [
        {
          name: 'Chưa Xác nhận',
          id: 1,
          tiep_can: true,
          tinh_doanh_thu: false,
          location: 1,
          color: '#76ec39',
          level: 1,
        },
        {
          name: 'Khai thác lại',
          id: 2,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '',
          level: 1,
        },
        {
          name: 'Không nghe điện',
          id: 3,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#337ab7',
          level: 1,
        },
        {
          name: 'Hủy',
          id: 4,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#7a7980',
          level: 1,
        },
        {
          name: 'Gọi Máy Bận',
          id: 5,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#dabc51',
          level: 1,
        },
        {
          name: 'Kế Toán mặc định',
          id: 6,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#ff0099',
          level: 1,
        },
        {
          name: 'Xác nhận chốt đơn',
          id: 7,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#cc6633',
          level: 1,
        },
        {
          name: 'Chuyển Hàng',
          id: 8,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#FF0000',
          level: 1,
        },
        {
          name: 'Chuyển Hoàn',
          id: 9,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#000000',
          level: 1,
        },
        {
          name: 'Thành công',
          id: 10,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#996699',
          level: 1,
        },
        {
          name: 'Đã thu Tiền',
          id: 11,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#00a65a',
          level: 1,
        },
        {
          name: 'Trả hàng về Kho',
          id: 12,
          tiep_can: false,
          tinh_doanh_thu: false,
          location: 1,
          color: '#331211',
          level: 1,
        },
      ],
    }
  },
  components: {
    BRow,
    BCol,
    BFormCheckbox,
  },
}
</script>
<style>
  .order-status-card {
    padding: 30px 0 30px 0;
  }
  .status-bar {
    padding-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .status-content span {
    font-size: 16px
  }
  .status-bar .col span {
    background-color: rgb(94, 136, 59);
    color: #fff !important;
    padding: 0px 2px 0px 2px;
    cursor: pointer;
  }
</style>
