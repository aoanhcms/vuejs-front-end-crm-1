<template>
  <b-row>
    <b-col cols="6">
      <b-card title="Create Order">
        <b-tabs>
          <b-tab>
            <template #title>
              <feather-icon icon="PlusIcon"/>
              Thêm thông tin
            </template>
          </b-tab>
          <b-tab>
            <template #title>
              <feather-icon icon="SearchIcon"/>
              Tìm khách cũ
            </template>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
    <b-col cols="3">
      <b-card title="Thông tin đơn hàng">
        Status
      </b-card>
    </b-col>
    <b-col cols="3">
      <b-card title="Chi phí">
        sss
      </b-card>
      <b-card title="Phiếu thu">
        sss
      </b-card>
    </b-col>
    <b-col cols="9">
      <b-card title="Thông tin lớp học">
        sss
      </b-card>
    </b-col>
    <b-col cols="3">
      <b-card title="Đặt lịch">
        sss
      </b-card>
    </b-col>
  </b-row>
</template>

<script>

import { BRow, BCol, BTab,BTabs, BCard } from 'bootstrap-vue'
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'

export default {
  methods: {
  },
  components: {
    BRow, BCol, BTab, BCard, BTabs,
    FeatherIcon,
  },
  props: {
  },

}
</script>

<style>

</style>