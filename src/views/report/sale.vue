<template>
  <div>
    <b-row cols="12">
      <b-col cols="12">
        <b-card title="Báo Quản Lý CarePage">
          <vue-good-table
            :columns="columns"
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
              enabled: true,
              perPage:pageLength
            }"
            @on-selected-rows-change="selectionChanged"
          >
            <template
              slot="table-row"
              slot-scope="props"
            >
              <!-- Column: Common -->
              <span>
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
      </b-col>
    </b-row>
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
      columns: [
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
          field: 'created_at',
        },
      ],
      rows: [],
      orders: [],
      searchTermOrder: ''
    }
  },
  created() {
    this.rows = [{
      manager: 'Sinh Danh', order_count: 0, data_count: 0, created_at: '20-02-2022',
    },{
      manager: 'Sinh Danh', order_count: 0, data_count: 0, created_at: '20-02-2022',
    },{
      manager: 'Sinh Danh', order_count: 0, data_count: 0, created_at: '20-02-2022',
    },{
      manager: 'Sinh Danh', order_count: 0, data_count: 0, created_at: '20-02-2022',
    },]
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
