<template>
  <div>
    <b-row cols="12">
      <b-col cols="12">
        <b-card title="Báo Quản Lý Lớp">
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

export default {
  components: {
    VueGoodTable,
    BCard,
    BCol,
    BRow,
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
          label: 'Lớp Học',
          field: 'class',
          sortable: true,
        },
        {
          label: 'Giáo Viên',
          field: 'teacher',
          sortable: true,
        },
        {
          label: 'Số Học Sinh',
          field: 'student_count',
          sortable: true,
        },
        {
          label: 'Quản lý',
          sortable: true,
          field: 'manager',
        },
        {
          label: 'Ngày Tạo',
          sortable: true,
          field: 'created_at',
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
    this.rows = [{
      id: 1, class: 'Lớp A', manager: 'Sinh Danh', created_at: '20-20-2022', student_count: 2, teacher: 'Giáo viên'
    },{
      id: 1, class: 'Lớp A', manager: 'Sinh Danh', created_at: '20-20-2022', student_count: 2, teacher: 'Giáo viên'
    },{
      id: 1, class: 'Lớp A', manager: 'Sinh Danh', created_at: '20-20-2022', student_count: 2, teacher: 'Giáo viên'
    },{
      id: 1, class: 'Lớp A', manager: 'Sinh Danh', created_at: '20-20-2022', student_count: 2, teacher: 'Giáo viên'
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
