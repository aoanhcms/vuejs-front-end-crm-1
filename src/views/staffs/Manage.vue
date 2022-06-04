<template>
  <div>
    <b-container
      fluid
    >
      <b-card>
        <b-card-header>
          <b-card-title>Quản lý nhân viên</b-card-title>
          <b-card-sub-title>
            <nav-table
              :to="{ name: 'staffs-create'}"
              name="Thêm nhân viên mới"
              :exports="[]"
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
            <span v-if="props.column.field === 'gender'">
              <row-gender :gender="props.row.gender" />
            </span>
            <span v-else-if="props.column.field === 'created_at' && props.row.created_at && props.row.updated_at">
              <div><feather-icon icon="ClockIcon" /> {{ props.row.created_at }}</div>
              <div><feather-icon icon="ClockIcon" /> {{ props.row.updated_at }}</div>
            </span>
            <!-- Column: Action -->
            <span v-else-if="props.column.field === 'act'">
              <col-action
                :row="props.row.id"
                :to="{ name: 'classes-edit', params: { id: props.row.id}}"
                @click="this.delete(props.row.id)"
              />
              <!-- Column: Common -->
            </span>
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
                  :options="['10', '20']"
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
  BCardSubTitle, BContainer, BCardTitle, BPagination, BFormSelect, BCard, BBadge, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import NavTable from '@core/components/datatable/NavTable.vue'
import ColAction from '@core/components/datatable/ColAction.vue'
import RowGender from '@core/components/datatable/RowGender.vue'

import flatPickr from 'flatpickr'

import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'

import fakeData from '@core/fakeData/staffs.js'

export default {
  components: {
    RowGender,
    ColAction,
    NavTable,
    BCardSubTitle,
    BCardHeader,
    flatPickr,
    BPagination,
    BFormSelect,
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
    flatPickr('input[placeholder="Tìm ngày kích hoạt"]', {
      dateFormat: 'd-m-Y',
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
            sortable: true,
          },
        },
        {
          label: 'Tên Nhân Viên',
          field: 'staff_name',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Tên nhân viên',
          },
        },
        {
          label: 'Số Điện Thoại',
          field: 'phone_number',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Số điện thoại',
          },
        },
        {
          label: 'Ngày Sinh',
          sortable: true,
          field: 'birthday',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Sinh nhật',
          },
        },
        {
          label: 'Giới tính',
          sortable: true,
          field: 'gender',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm Giới tinh',
            filterDropdownItems: [{
              value: 'male',
              text: 'Nam',
            },
            {
              value: 'female',
              text: 'Nữ',
            }],
          },
        },
        {
          label: 'Phân loại',
          width: '100px',
          sortable: true,
          field: 'type',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm loại',
            filterDropdownItems: [{
              value: 'staff',
              text: 'Nhân Viên',
            },
            {
              value: 'teacher',
              text: 'Giáo Viên',
            }],
          },
        },
        {
          label: 'Ngày kích hoạt',
          field: 'date_active',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm ngày kích hoạt',
            filterFn: this.dateRangeFilter,
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
    delete(id) {
      // delete row
      console.log('delete', id)
    },
    dateRangeFilter(data, filterString) {
      const dateRange = filterString.split('to')
      const startDate = Date.parse(dateRange[0])
      const endDate = Date.parse(dateRange[1])
      const dataOut = Date.parse(data) >= startDate && Date.parse(data) <= endDate
      return dataOut
    },
    selectionChanged(rows) {
      // neu thong tin thừa lấy cái đầu tiên
      this.selectedProductItems = rows.selectedRows
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
</style>