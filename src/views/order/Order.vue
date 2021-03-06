<template>
  <div>
    <b-container
      fluid
    >
      <b-card
      >
        <b-card-header>
          <b-card-title>Danh sách đơn hàng</b-card-title>
          <b-card-sub-title>
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
              style="margin-right: 10px;"
              :to="{name: 'orders-create'}"
            >
              <feather-icon
                icon="PlusIcon"
                class="mr-50"
              />
              <span class="align-middle">Đơn hàng mới</span>
            </b-button>
             <b-dropdown text="Xuất ra" variant="primary">
              <b-dropdown-item>In</b-dropdown-item>
              <b-dropdown-item>Excel</b-dropdown-item>
              <b-dropdown-item>CSV</b-dropdown-item>
              <b-dropdown-item>PDF</b-dropdown-item>
            </b-dropdown>
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

            <!-- Column: Name -->
            <span
              v-if="props.column.field === 'fullName'"
              class="text-nowrap"
            >
              <span class="text-nowrap">{{ props.row.fullName }}</span>
            </span>
            <span v-else-if="props.column.field === 'status'">
              <b-badge
                v-if="props.row.status === true"
                variant="light-success"
              >
                Đang chạy
              </b-badge>
              <b-badge
                v-else
                variant="light-danger">
                Đang dừng
              </b-badge>
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
              <span>
                <b-dropdown
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template v-slot:button-content>
                    <feather-icon
                      icon="MoreVerticalIcon"
                      size="16"
                      class="text-body align-middle mr-25"
                    />
                  </template>
                  <b-dropdown-item
                    :to="{name: 'orders-edit', params: { id: props.row.id}}">
                    <feather-icon
                      icon="Edit2Icon"
                      class="mr-50"
                    />
                    <span>Edit</span>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <feather-icon
                      icon="TrashIcon"
                      class="mr-50"
                    />
                    <span>Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
              </span>
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
  BCardSubTitle, BContainer, BCardTitle, BPagination, BFormSelect, BButton, BCard, BBadge, BDropdown, BDropdownItem, BCardHeader,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'flatpickr'

import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'

import fakeData from '@core/fakeData/fakeOrder'

export default {
  components: {
    BCardSubTitle,
    BButton,
    BCardHeader,
    flatPickr,
    BPagination,
    BFormSelect,
    BCardTitle,
    BDropdownItem,
    BDropdown,
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
            placeholder: 'Search Id',
            sortable: true,
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
          label: 'Doanh nghiệp',
          field: 'company',
          sortable: true,
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm công ty',
          },
        },
        {
          label: 'Nguồn đơn',
          field: 'order_source',
          sortable: true,
          width: '100px',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm nguồn đơn',
          },
        },
        {
          label: 'Khách hàng',
          sortable: true,
          field: 'customer',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm khách hàng',
          },
        },
        {
          label: 'Điện thoại',
          sortable: true,
          field: 'phone_number',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm số điện thoại',
          },
        },
        {
          label: 'Người tạo',
          sortable: true,
          field: 'creater',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm người tạo',
          },
        },
        {
          label: 'Quốc gia',
          width: '100px',
          sortable: true,
          field: 'country',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm quốc gia',
            filterDropdownItems: [{
              value: 'VN', text: 'Việt Nam',
            },
            {
              value: 'THA', text: 'Thái Lan',
            }],
          },
        },
        {
          label: 'Trạng thái',
          width: '100px',
          sortable: true,
          field: 'status',
          filterOptions: {
            enabled: true,
            placeholder: 'Tìm trạng thái',
            filterDropdownItems: [{
              value: true,
              text: 'Đang chạy',
            },
            {
              value: false,
              text: 'Đang dừng',
            }],
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