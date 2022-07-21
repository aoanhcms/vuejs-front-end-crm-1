<template>
  <div>
    <b-container
      fluid
    >
      <b-card-save-action
        title="Quản lý trạng thái đơn hàng"
        navbar-button-variant="success"
        button-title="Lưu"
        @buttonSave="onSubmit"
      >
        <b-row>
          <b-col cols="6">
            <vue-good-table
              :columns="orders_columns"
              :rows="rows"
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
                <span
                  v-if="props.column.field === 'order_status_name'"
                  class="text-nowrap"
                >
                  <span class="text-nowrap">{{ props.row.order_status_name }}</span>
                </span>
                <span
                  v-else-if="props.column.field === 'color'"
                  class="text-nowrap"
                >
                  <colour-picker
                    picker="chrome"
                    :color="props.row.color"
                    v-model="props.row.color"
                  />
                </span>
                <span v-else-if="props.column.field === 'status'">
                  <col-status :status="props.row.status" />
                </span>
                <span v-else-if="props.column.field === 'created_at'">
                  <div><feather-icon icon="ClockIcon" /> {{ props.row.created_at }}</div>
                  <div><feather-icon icon="ClockIcon" /> {{ props.row.updated_at }}</div>
                </span>
                <!-- Column: Action -->
                <span v-else-if="props.column.field === 'act'">
                  <col-action
                    :row="props.row.id"
                    :to="{ name: 'orders-status-edit', params: { id: props.row.id}}"
                    @delete="showMsgBoxConfirmDelete"
                  />
                </span>
                <!-- Column: Common -->
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
              <!--<template slot="column-filter" slot-scope="props">
              </template>-->
            </vue-good-table>
          </b-col>
          <b-col cols="6">
            <b-card-header>
              <b-card-sub-title>Chỉnh sửa trạng thái của shop</b-card-sub-title>
              <b-button @click="addStatus">Thêm</b-button>
            </b-card-header>
            <vue-good-table
              :columns="orders_columns"
              :rows="userStatus"
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
                <span
                  v-if="props.column.field === 'order_status_name'"
                  class="text-nowrap"
                >
                  <span class="text-nowrap">{{ props.row.order_status_name }}</span>
                </span>
                <span
                  v-else-if="props.column.field === 'color'"
                  class="text-nowrap"
                >
                  <colour-picker
                    picker="chrome"
                  />
                </span>
                <span v-else-if="props.column.field === 'status'">
                  <col-status :status="props.row.status" />
                </span>
                <span v-else-if="props.column.field === 'created_at'">
                  <div><feather-icon icon="ClockIcon" /> {{ props.row.created_at }}</div>
                  <div><feather-icon icon="ClockIcon" /> {{ props.row.updated_at }}</div>
                </span>
                <!-- Column: Action -->
                <span v-else-if="props.column.field === 'act'">
                  <col-action
                    :row="props.row.id"
                    :to="{ name: 'orders-status-edit', params: { id: props.row.id}}"
                    @delete="showMsgBoxConfirmDelete"
                  />
                </span>
                <!-- Column: Common -->
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
              <!--<template slot="column-filter" slot-scope="props">
              </template>-->
            </vue-good-table>
          </b-col>
        </b-row>
      </b-card-save-action>
    </b-container>
  </div>
</template>

<script>
import { BButton, BRow, BCol, BCardSubTitle, BContainer, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'

import ColAction from '@core/components/datatable/ColAction.vue'
import ColStatus from '@core/components/datatable/ColStatus.vue'
import BCardSaveAction from '@/@core/components/global/BCardSaveAction.vue'

import ColourPicker from 'vue-colour-picker'

export default {
  components: {
    'colour-picker': ColourPicker,
    BRow,
    BCol,
    ColAction,
    ColStatus,
    BCardSubTitle,
    BCardHeader,
    BContainer,
    VueGoodTable,
    BButton,
    BCardSaveAction,
},
  directives: {
    Ripple,
  },
  data() {
    return {
      userStatus: [],
      pageLength: 10,
      dir: false,
      orders_columns: [
        {
          label: 'Tên trạng thái',
          field: 'name',
          sortable: true,
        },
        {
          label: 'Không tiếp cận',
          sortable: true,
          width: '100px',
          field: 'approach',
        },
        {
          label: 'Không tính doanh thu',
          sortable: true,
          width: '100px',
          field: 'tiep_can',
        },
        {
          label: 'Vị trí',
          width: '100px',
          sortable: true,
          field: 'location',
        },
        {
          label: 'Level',
          sortable: true,
          width: '100px',
          field: 'level',
        },
        {
          label: 'Color',
          sortable: true,
          width: '200px',
          field: 'color',
        },
        {
          label: 'Tác vụ',
          width: '100px',
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
  created() {
    this.rows = [
      { name: 'Khai thác lại', approach: false, location: 1, level: 1, color: '#ff0000', status: false },
      { name: 'Chưa xác nhận', approach: false, location: 2, level: 1, color: '#ff0000', status: false },
      { name: 'Hủy', approach: false, location: 4, color: '#ff0000', status: false },
      { name: 'Gọi máy bận', approach: false, location: 3, color: '#ff0000', status: false },
      { name: 'Không nghe điện', approach: false, location: 5, color: '#ff0000', status: false },
      { name: 'Kế toán mặc định', approach: false, location: 6, color: '#ff0000', status: false },
      { name: 'Xác Nhận - Chốt đơn', approach: false, location: 7, color: '#ff0000', status: false },
      { name: 'Chuyển hàng', approach: false, location: 8, color: '#ff0000', status: false },
      { name: 'Chuyển hoàn', approach: false, location: 9, color: '#ff0000', status: false },
      { name: 'Đã thu tiền', approach: false, location: 10, color: '#ff0000', status: false },
      { name: 'Đã trả hàng về kho', approach: false, location: 11, color: '#ff0000', status: false },
      { name: 'Thành công', approach: false, location: 12, color: '#ff0000', status: false },
      
    ]
  },
  methods: {
    onSubmit() {
      console.log('button Save')
    },
    addStatus() {
      this.userStatus.push({})
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
// HTML
.card {
  .card-header .heading-elements {
    position: static;
    background: red;
  }
}
.color-picker > input{
  width: 77%;
  border: 1px solid #f0e2e2;
  height: 40px;
}
</style>