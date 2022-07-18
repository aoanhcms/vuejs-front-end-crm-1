<template>
  <div>
    <b-container
      fluid
    >
      <b-card>
        <b-card-header>
          <b-card-title>Quản lý nhóm khách hàng</b-card-title>
          <b-card-sub-title>
            <nav-table
              :to="{ name: 'users-group-create'}"
              name="Thêm Nhóm khách hàng mới"
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
            enabled: true,
            selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
          }"
          :pagination-options="{
            enabled: true,
            perPage:pageLength
          }"
          @on-selected-rows-change="selectionChanged"
        >
          <template
            slot="table-row"
            slot-scope="props"
          >
            <span v-if="props.column.field === 'status'">
              <col-status :status="props.row.status" />
            </span>
            <span v-else-if="props.column.field === 'creater'">
              <b-badge :variant="roleVariant(props.row.creater.role)">
                {{ props.row.creater.name }}
              </b-badge>
            </span>
            <span v-else-if="props.column.field === 'created_at'">
              <div><feather-icon icon="ClockIcon" /> {{ props.row.created_at }}</div>
              <div><feather-icon icon="ClockIcon" /> {{ props.row.updated_at }}</div>
            </span>
            <!-- Column: Action -->
            <span v-else-if="props.column.field === 'act'">
              <col-action
                :row="props.row.id"
                :to="{ name: 'users-group-edit', params: { id: props.row.id}}"
                @delete="showMsgBoxConfirmDelete"
              />
            </span>
            <!-- Column: Common -->
            <span v-else>
              {{ props.formattedRow[props.column.field] }}
            </span>
          </template>
          <!-- pagination -->
          <template
            slot="pagination-bottom"
            slot-scope="props"
          >
            <div class="d-flex justify-content-between flex-wrap">
              <div class="d-flex align-items-center mb-0 mt-1">
                <span class="text-nowrap">
                  Showing 1 to
                </span>
                <b-form-select
                  v-model="pageLength"
                  :options="['3','5','10']"
                  class="mx-1"
                  @input="(value)=>props.perPageChanged({currentPerPage:value})"
                />
                <span class="text-nowrap "> of {{ props.total }} entries </span>
              </div>
              <div>
                <b-pagination
                  :value="1"
                  :total-rows="props.total"
                  :per-page="pageLength"
                  first-number
                  last-number
                  align="right"
                  prev-class="prev-item"
                  next-class="next-item"
                  class="mt-1 mb-0"
                  @input="(value)=>props.pageChanged({currentPage:value})"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
              </div>
            </div>
          </template>
          <!--<template slot="column-filter" slot-scope="props">
          </template>-->
        </vue-good-table>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import {
  BContainer, BCardSubTitle, BCardTitle, BPagination, BFormSelect, BCard, BBadge, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'flatpickr'

import NavTable from '@core/components/datatable/NavTable.vue'
import ColStatus from '@core/components/datatable/ColStatus.vue'
import ColAction from '@core/components/datatable/ColAction.vue'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'

import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'
import fakeData from '@core/fakeData/fakeUserGroup'

export default {
  components: {
    ColAction,
    ColStatus,
    NavTable,
    BCardSubTitle,
    BPagination,
    BFormSelect,
    BCardHeader,
    flatPickr,
    BCardTitle,
    BContainer,
    VueGoodTable,
    BCard,
    BBadge,
    FeatherIcon,
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
            placeholder: 'Search Id',
            sortable: true,
          },
        },
        {
          label: 'Doanh nghiệp',
          field: 'company',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Search Id',
          },
        },
        {
          label: 'Nhóm Khách hàng',
          sortable: true,
          field: 'customer_group',
          filterOptions: {
            enabled: true,
            placeholder: 'Search customer group',
          },
        },
        {
          label: 'Danh mục gốc',
          sortable: true,
          field: 'customer_group_root',
          filterOptions: {
            enabled: true,
            placeholder: 'Search root group',
          },
        },
        {
          label: 'Vị trí',
          sortable: true,
          field: 'location',
          filterOptions: {
            enabled: true,
            placeholder: 'Search location',
          },
        },
        {
          label: 'Trạng thái',
          width: '100px',
          sortable: true,
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Select status',
            filterDropdownItems: [{
              value: true, text: 'Đang chạy',
            },
            {
              value: false, text: 'Đang dừng',
            }], // dropdown (with selected values) instead of text input
          },
        },
        {
          label: 'Ngày tạo',
          field: 'created_at',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Search date',
            filterFn: this.dateRangeFilter,
          },
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
    this.rows = fakeData
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