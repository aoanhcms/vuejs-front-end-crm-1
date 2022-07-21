<template>
  <div>
    <b-container
      fluid
    >
      <b-card>
        <b-card-header>
          <b-card-title>Trạng thái kết nối giữa TUHA và đơn vị Vận chuyển</b-card-title>
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
import { BContainer, BCardTitle, BCard, BBadge, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'flatpickr'

import ColAction from '@core/components/datatable/ColAction.vue'
import ColStatus from '@core/components/datatable/ColStatus.vue'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'


export default {
  components: {
    ColAction,
    ColStatus,
    BCardHeader,
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
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Id',
          },
        },
        {
          label: 'Mã đơn hàng',
          field: 'order_code',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Mã đơn hàng',
          },
        },
        {
          label: 'Mã vận đơn',
          sortable: true,
          field: 'shipping_code',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Mã vận đơn',
            trigger: 'enter',
          },
        },
        {
          label: 'Hãng vận chuyển',
          sortable: true,
          field: 'company_shipping',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Hãng',
            trigger: 'enter',
          },
        },
        {
          label: 'Trạng thái',
          sortable: true,
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm trạng thái',
            filterDropdownItems: [
              { value: '1', text: 'Đang xử lý'},
              { value: '1', text: 'Thành công'},
              { value: '1', text: 'Thất bại'},
            ],
          },
        },
        {
          label: 'Nội dung',
          sortable: true,
          field: 'content',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Id',
            trigger: 'enter',
          },
        },
        {
          label: 'Ngày tạo',
          sortable: true,
          field: 'created_at',
          filterOptions: {
            enabled: true,
            placeholder: 'Search date',
            trigger: 'enter',
          },
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
      {id: 1, order_code: '11111', shipping_code: '1111', status: '1', },
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