<template>
  <div>
    <b-container
      fluid
    >
      <b-card title="Danh sách đơn hàng">
        <nav-filter @filterDone="navFilterFetch" />
        <date-filter @filterDone="dateFilterFetch"/>
        <status-filter @filterDone="statusFilterFetch"/>
        <form-filter @filterDone="formFilterFetch" />
        <vue-good-table
          mode="remote"
          :columns="columnFilterEnabled"
          :rows="rows"
          :search-options="{
            enabled: true,
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
          <div slot="emptystate">
            <img :src="require('@/assets/images/loading.gif')" />
          </div>
          <div slot="table-actions">
            <nav-table
              :to="{ name: 'orders-create'}"
              name="Thêm đơn mới"
              :exports="exports_row"
              :selectedChanged="selectedProductItems"
              @confirmDeleteSelected="confirmDeleteSelected"
            />
          </div>
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
                :to="{ name: 'orders-edit', params: { id: props.row.id}}"
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
        <sort-column-table
          :list-data="orders_columns"
          @FilterFetch="filterFetch"
        />
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BPagination, BFormSelect, BCard, BBadge,} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'

import flatPickr from 'flatpickr'

import fakeData from '@core/fakeData/fakeOrder'
import NavTable from '@core/components/datatable/NavTable.vue'
import ColStatus from '@core/components/datatable/ColStatus.vue'
import ColAction from '@core/components/datatable/ColAction.vue'
import DateFilter from './filter/date.vue'
import FormFilter from './filter/form.vue'
import NavFilter from './filter/nav.vue'

import StatusFilter from './filter/status.vue'
import SortColumnTable from '../modal/sortColumnTable.vue'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_blue.css'


export default {
  watch: {
  },
  components: {
    SortColumnTable,
    NavFilter,
    FormFilter,
    StatusFilter,
    DateFilter,
    ColAction,
    ColStatus,
    NavTable,
    flatPickr,
    BPagination,
    BFormSelect,
    BContainer,
    VueGoodTable,
    BCard,
    BBadge,
  },
  directives: {
    Ripple,
  },
  mounted() {
    flatPickr('input[placeholder="Search"]', {
      dateFormat: 'd-m-Y',
      allowInput: true,
    })
  },
  data() {
    return {
      pageLength: 10,
      dir: false,
      form: {
        term_sdt: '',
        term_order_id: '',
        term_ship_id: '',
        c_n: '',
        customer_id: '',
        page_id: '',
        fb_post_id: '',
        source_id: 3,
        source_shop_id: 0,
        type: 10,
        page_no: 1,
        bundle_id: -1,
        customer_group_id: 4,
        warehouse_id_filter: 1,
        product_code: '',
        product_barcode: '',
        search_account_id: '',
        mkt_account_id: '',
        upsale_account_id: '',
        assigned_account_id: '',
        confirmed_account_id: '',
        account_group_id: '',
        telecom_operator: [
          "VIETTEL","VINAPHONE","MOBIFONE","VIETNAMOBILE",'GMOBILE','ITELECOM','KHAC',
        ],
        search_group_id: '',
        item_per_page: 15,
        printed: 1,
        duplicate: 1,
        block_id: 73112,
        total: 0,
        total_amount: 0,
        shipping_price: 0,
        total_prepaid: 0,
        total_owed: 0,
        min_price: 1110000,
        max_price: 2222000,
        ngay_chia_to: '15/06/2022',
        ngay_chia_from: '12/06/2022',
        ngay_xn_from: '12/06/2022',
        ngay_xn_to: '15/06/2022',
        ngay_chuyen_kt_from: '12/06/2022',
        ngay_chuyen_kt_to: '15/06/2022',
        ngay_chuyen_from: '12/06/2022',
        ngay_chuyen_to: '15/06/2022',
        ngay_thanh_cong_from: '12/06/2022',
        ngay_thanh_cong_to: '15/06/2022',
        ngay_thu_tien_from: '12/06/2022',
        ngay_thu_tien_to: '15/06/2022',
        ngay_chuyen_hoan_from: '12/06/2022',
        ngay_chuyen_hoan_to: '15/06/2022',
        ngay_tra_hang_from: '12/06/2022',
        ngay_tra_hang_to: '15/06/2022',
        ngay_huy_from: '12/06/2022',
        ngay_huy_to: '15/06/2022',
        shipping_services: '',
        status: '10,4,9,96,3,7,8,6,1,2,5',
        city_id: 0,
        is_inner_city: 1,
        internal: 1,
        sale_order: 1,
        order_by_dir: 'ASC',
      },
      orders_columns: [
        {
          label: 'Tác vụ',
          field: 'act',
          enabled: true,
          width: '100px',
        },
        {
          label: 'STT',
          field: 'stt',
          width: '100px',
          enabled: true,
        },
        {
          label: 'Địa chỉ',
          field: 'dia_chi',
          sortable: true,
          enabled: true,
        },
        {
          label: 'NV được chia',
          field: 'nv_duoc_chia',
          sortable: true,
          width: '100px',
          enabled: true,
        },
        {
          label: 'Mã VĐ',
          sortable: true,
          field: 'ma_vd',
          enabled: true,
        },
        {
          label: 'Số DT',
          sortable: true,
          field: 'so_dt',
          enabled: true,
        },
        {
          label: 'Nguồn',
          sortable: true,
          field: 'nguon',
          enabled: true,
        },
        {
          label: 'Sản phẩm',
          sortable: true,
          field: 'san_pham',
          enabled: true,
        },
        {
          label: 'Tên KH',
          sortable: true,
          field: 'ten_kh',
          enabled: true,
        },
        {
          label: 'FB KH',
          sortable: true,
          field: 'fb_kh',
          enabled: true,
        },
        {
          label: 'Tỉnh/Thành',
          sortable: true,
          field: 'tinh_thanh',
          enabled: true,
        },
        {
          label: 'Mã',
          sortable: true,
          field: 'ma',
          enabled: true,
        },
        {
          label: 'Bài Post',
          sortable: true,
          field: 'bai_post',
          enabled: true,
        },
        {
          label: 'Page',
          sortable: true,
          field: 'page',
          enabled: true,
        },
        {
          label: 'Note Chung',
          sortable: true,
          field: 'note_chung',
          enabled: true,
        },
        {
          label: 'Note 2',
          sortable: true,
          field: 'note_2',
          enabled: true,
        },
        {
          label: 'Ngày Tạo',
          sortable: true,
          field: 'ngay_tao',
          enabled: true,
        },
        {
          label: 'Trạng thái',
          sortable: true,
          field: 'trang_thai',
          enabled: true,
        },
        {
          label: 'Tổng tiền',
          sortable: true,
          field: 'tong_tien',
          enabled: true,
        },
        {
          label: 'Trùng đơn',
          sortable: true,
          field: 'trung_don',
          enabled: true,
        },
        {
          label: 'NV Xác Nhận',
          sortable: true,
          field: 'nv_xac_nhan',
          enabled: true,
        },
        {
          label: 'Ngày XN',
          sortable: true,
          field: 'ngay_xn',
          enabled: true,
        },
        {
          label: 'Ngày Chuyển',
          sortable: true,
          field: 'ngay_chuyen',
          enabled: true,
        },
        {
          label: 'Người Chuyển',
          sortable: true,
          field: 'nguoi_chuyen',
          enabled: true,
        },
        {
          label: 'Người Tạo',
          sortable: true,
          field: 'nguoi_tao',
          enabled: true,
        },
        {
          label: 'Mã Bưu điện',
          sortable: true,
          field: 'ma_buu_dien',
          enabled: true,
        },
        {
          label: 'Note Giao hàng',
          sortable: true,
          field: 'note_giao_hang',
          enabled: true,
        },
        {
          label: 'Công ty',
          sortable: true,
          field: 'cong_ty',
          enabled: true,
        },
        {
          label: 'Nguồn Up Sale',
          sortable: true,
          field: 'nguon_up_sale',
          enabled: true,
        },
        {
          label: 'Email KH',
          sortable: true,
          field: 'email_kh',
          enabled: true,
        },
        {
          label: 'Thành Tiền',
          sortable: true,
          field: 'thanh_tien',
          enabled: true,
        },
        {
          label: 'NV đã trả hàng về Kho',
          sortable: true,
          field: 'nv_da_tra_hang_ve_kho',
          enabled: true,
        },
        {
          label: 'Ngày đã trả hàng về Kho',
          sortable: true,
          field: 'ngay_da_tra_hang_ve_kho',
          enabled: true,
        },
        {
          label: 'NV kế toán mặc định',
          sortable: true,
          field: 'nv_ke_toan_mac_dinh',
          enabled: true,
        },
        {
          label: 'Ngày kế toán mặc định',
          sortable: true,
          field: 'ngay_ke_toan_mac_dinh',
          enabled: true,
        },
        {
          label: 'Ngày chuyển hoàn',
          sortable: true,
          field: 'ngay_chuyen_hoan',
          enabled: true,
        },
        {
          label: 'NV đã thu tiền',
          sortable: true,
          field: 'nv_da_thu_tien',
          enabled: true,
        },
        {
          label: 'Ngày đã thu tiền',
          sortable: true,
          field: 'ngay_da_thu_tien',
          enabled: true,
        },
        {
          label: 'NV thành công',
          sortable: true,
          field: 'nv_thanh_cong',
          enabled: true,
        },
        {
          label: 'Ngày thành công',
          sortable: true,
          field: 'ngay_thanh_cong',
          enabled: true,
        },
        {
          label: 'Phí VC',
          sortable: true,
          field: 'phi_vc',
          enabled: true,
        },
        {
          label: 'Phụ Thu',
          sortable: true,
          field: 'phu_thu',
          enabled: true,
        },
        {
          label: 'Mã KH',
          sortable: true,
          field: 'ma_kh',
          enabled: true,
        },
        {
          label: 'Nhóm KH',
          sortable: true,
          field: 'nhom_kh',
          enabled: true,
        },
        {
          label: 'Lý Do Hủy',
          sortable: true,
          field: 'ly_do_huy',
          enabled: true,
        },
        {
          label: 'SĐT phụ',
          sortable: true,
          field: 'sdt_phu',
          enabled: true,
        },
        {
          label: 'Trả trước',
          sortable: true,
          field: 'tra_truoc',
          enabled: true,
        },
        {
          label: 'Còn Nợ',
          sortable: true,
          field: 'con_no',
          enabled: true,
        },
        {
          label: 'SĐT Chính/Phụ',
          sortable: true,
          field: 'sdt_chinh_phu',
          enabled: true,
        },
        {
          label: 'Giao hàng',
          sortable: true,
          field: 'giao_hang',
          enabled: true,
        },
        {
          label: 'Phân Loại sản phẩm',
          sortable: true,
          field: 'phan_loai_san_pham',
          enabled: true,
        },
        {
          label: 'Loại đơn',
          sortable: true,
          field: 'loai_don',
          enabled: true,
        },
        {
          label: 'Nguồn Shop',
          sortable: true,
          field: 'nguon_shop',
          enabled: true,
        },
        {
          label: 'Nguồn Người Tạo',
          sortable: true,
          field: 'nguon_nguoi_tao',
          enabled: true,
        },
        {
          label: 'Nguồn Người UpSale',
          sortable: true,
          field: 'nguon_nguoi_upsale',
          enabled: true,
        },
        {
          label: 'Mã Sản phẩm',
          sortable: true,
          field: 'ma_san_pham',
          enabled: true,
        },
        {
          label: 'Nhà Mạng',
          sortable: true,
          field: 'nha_mang',
          enabled: true,
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
    columnFilterEnabled() {
      return this.orders_columns.filter(item => item.enabled)
    },
  },
  created() {
    this.rows = fakeData
  },
  methods: {
    navFilterFetch(form) {
      console.log('navFilterFetch', form)
      this.filterFetch()
    },
    statusFilterFetch(form) {
      console.log('statusFilterFetch', form)
      this.filterFetch()
    },
    formFilterFetch(form) {
      console.log('formFilterFetch', form)
      this.filterFetch()
    },
    dateFilterFetch(form) {
      console.log('dateFilterFetch', form)
      this.filterFetch()
    },
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
    filterFetch() {
      this.rows = []
    },
    sortColumn() {
      // sort column
    },
  },
}
</script>
<style lang="scss" >
  @import '@core/scss/vue/libs/vue-good-table.scss';
</style>
