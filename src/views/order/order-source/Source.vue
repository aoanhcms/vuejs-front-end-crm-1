<template>
  <div>
    <b-container
      fluid
    >
      <b-card>
        <b-card-header>
          <b-card-title>Quản lý nguồn đơn hàng</b-card-title>
          <b-card-sub-title>
            <nav-table
              :to="{ name: 'orders-source-create'}"
              name="Thêm Nguồn đơn mới"
              :exports="exports_row"
              :selectedChanged="selectedProductItems"
              @confirmDeleteSelected="confirmDeleteSelected"
            />
          </b-card-sub-title>
        </b-card-header>
        <vue-good-table
          :columns="orders_columns"
          :rows="rows"
          :search-options="{
            enabled: false,
            externalQuery: searchTermOrder,
          }"
          :select-options="{
            enabled: false,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          }"
          :pagination-options="{
            enabled: false,
            perPage:pageLength
          }"
          @on-selected-rows-change="selectionChanged"
        >
          <template
            slot="table-row"
            slot-scope="props"
          >
            <span v-if="props.column.field === 'default'">
              <col-status :status="props.row.status" />
            </span>
            <span v-else-if="props.column.field === 'created_at'">
              <div><FeatherIcon icon="ClockIcon" /> {{ props.row.created_at }}</div>
              <div><FeatherIcon icon="ClockIcon" /> {{ props.row.updated_at }}</div>
            </span>
            <!-- Column: Action -->
            <span v-else-if="props.column.field === 'act'">
              <col-action
                :row="props.row.id"
                :to="{ name: 'orders-source-edit', params: { id: props.row.id}}"
                @delete="showMsgBoxConfirmDelete"
              />
            </span>
            <!-- Column: Common -->
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template>
          <!-- pagination -->
          <!--<template slot="column-filter" slot-scope="props">
          </template>-->
        </vue-good-table>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import {
  BCardSubTitle, BContainer, BCardTitle, BPagination, BFormSelect, BCard, BBadge, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'flatpickr'

import NavTable from '@core/components/datatable/NavTable.vue'
import ColAction from '@core/components/datatable/ColAction.vue'
import ColStatus from '@core/components/datatable/ColStatus.vue'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'


export default {
  components: {
    ColAction,
    ColStatus,
    NavTable,
    BCardSubTitle,
    BCardHeader,
    BPagination,
    BFormSelect,
    flatPickr,
    BCardTitle,
    BContainer,
    VueGoodTable,
    BCard,
    BBadge,
  },
  directives: {
    Ripple,
  },
  mounted() {
    flatPickr('input[placeholder="Search date"]', {
      dateFormat: 'd-m-Y',
      mode: 'range',
      allowInput: true,
    })
  },
  data() {
    return {
      pageLength: 10,
      dir: false,
      orders_columns: [
        {
          label: 'ID',
          field: 'id',
          width: '100px',
        },
        {
          label: 'Tên Nguồn đơn',
          field: 'name',
          sortable: true,
        },
        {
          label: 'Mặc định',
          sortable: true,
          field: 'default',
        },
        {
          label: 'Tác vụ',
          field: 'act',
        },
      ],
      rows: [],
      orders: [],
      searchTermOrder: '',
      selectedProductItems: [],
      exports_row: [{
        name: 'PRINT',
        fn: this.exportPrint,
      },
      {
        name: 'CSV',
        fn: this.exportPrint,
      },
      {
        name: 'EXCEL',
        fn: this.exportPrint,
      },
      {
        name: 'PDF',
        fn: this.exportPrint,
      }],
    }
  },
  computed: {
    roleVariant() {
      const roleColor = {
        /* eslint-disable key-spacing */
        Admin  : 'light-success',
        Member : 'light-info',
        /* eslint-enable key-spacing */
      }
      return role => roleColor[role]
    },
  },
  created() {
    this.rows = [
      { name: 'FB Comment', default: true },
      { name: 'FB inbox', default: true },
    ]
  },
  methods: {
    dateRangeFilter(data, filterString) {
      const dateRange = filterString.split('to')
      const startDate = Date.parse(dateRange[0])
      const endDate = Date.parse(dateRange[1])
      const dataOut = Date.parse(data) >= startDate && Date.parse(data) <= endDate
      return dataOut
    },
    
    exportPrint(t) {
      console.log('type', t)
    },
    showMsgBoxConfirmDelete(id) {
      // delete row
      this.$bvModal
        .msgBoxConfirm(`Có phải bạn muốn xóa dòng ${id} không?`, {
          title: 'Xác nhận',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Yes',
          cancelTitle: 'No',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        })
        .then(value => {
          if (value === true) {
            // xóa dòng
            this.rows = this.rows.filter(r => r.id !== id)
          }
        })
    },
    selectionChanged(rows) {
      // neu thong tin thừa lấy cái đầu tiên
      this.selectedProductItems = rows.selectedRows.map(row => row.id)
    },
    confirmDeleteSelected(rows) {
      this.$bvModal
        .msgBoxConfirm(`Có phải bạn muốn xóa dòng ${rows.length} không?`, {
          title: 'Xác nhận',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Yes',
          cancelTitle: 'No',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        })
        .then(value => {
          if (value === true) {
            // xóa c dòng
            this.rows = this.rows.filter(item => !rows.includes(item.id))
          }
        })
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>