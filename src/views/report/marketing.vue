<template>
  <div>
    <b-row cols="12">
      <b-col cols="12">
        <b-card title="Biểu Đồ Dữ Liệu Marketing">
          <e-chart
            :option-data="option"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col cols="6">
        <b-card title="Biểu Đồ Số Liệu Theo Marketer">
          <e-chart
            :option-data="option"
          />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card title="Số Liệu Theo Marketer">
          <e-chart
            :option-data="option"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col cols="12">
        <b-card title="Số Liệu Marketing theo ngày">
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
      option: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: [
          {
            name: 'Số lead',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            lineStyle: {
              width: 0,
            },
            data: [220, 332, 281, 334, 290, 430, 310, 350, 510, 550, 720, 650, 760, 850],
          },
          {
            name: 'Số data',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [220, 282, 191, 534, 290, 430, 350, 300, 580, 463, 380, 600, 560, 840],
          }
        ],
      },
      pageLength: 10,
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: '100px',
        },
        {
          label: 'Thời gian',
          field: 'created_at',
          sortable: true,
        },
        {
          label: 'Số Tin nhắn',
          field: 'inbox_count',
          sortable: true,
        },
        {
          label: 'Số Bình Luận',
          field: 'comment_count',
          sortable: true,
        },
        {
          label: 'Data',
          sortable: true,
          field: 'data',
        },
        {
          label: 'Lead',
          sortable: true,
          field: 'lead',
        },
        {
          label: 'CR',
          sortable: true,
          field: 'cr',
        },
        {
          label: 'Nguồn dữ liệu',
          sortable: true,
          field: 'source',
        },
      ],
      rows: [],
      orders: [],
      searchTermOrder: '',
    }
  },
  created() {
    this.rows = [{
      id: 1, created_at: '20-03-2018', inbox_count: 1, comment_count: 1, data: 100, lead: 200, cr: '', source: '',
    },{
      id: 1, created_at: '20-03-2018', inbox_count: 1, comment_count: 1, data: 100, lead: 200, cr: '', source: '',
    },{
      id: 1, created_at: '20-03-2018', inbox_count: 1, comment_count: 1, data: 100, lead: 200, cr: '', source: '',
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

.echarts {
  width: auto;
}
</style>
