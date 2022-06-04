<template>
  <div>Comming Soon
  </div>
</template>

<script>
import { BCol, BRow, BCard } from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'

import EChart from '@core/components/charts/echart/AppEchartStackedArea.vue'

export default {
  components: {
    VueGoodTable,
    BCard,
    BCol,
    BRow,
    EChart,
  },
  data() {
    return {
      pageLength: 10,
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: '100px',
        },
        {
          label: 'Nhân Viên Quản lý',
          field: 'manager',
          sortable: true,
        },
        {
          label: 'Số Đơn Hàng',
          field: 'order_count',
          sortable: true,
        },
        {
          label: 'Số Data',
          field: 'data_count',
          sortable: true,
        },
        {
          label: 'Ngày Tạo',
          sortable: true,
          field: 'date_create',
        },
      ],
      rows: [],
      orders: [],
      searchTermOrder: '',
    }
  },
  created() {
    this.rows = []
  },
  methods: {
    selectionChanged(rows) {
      // neu thong tin thừa lấy cái đầu tiên
      this.selectedProductItems = rows.selectedRows
    },
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-good-table.scss';

</style>
