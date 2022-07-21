<template>
  <b-card-save-action title="Quản lý hình thức giao hàng">
    <b-row>
      <b-col cols="6">
        <b-card-table-action>
          <table-action :columns="columns" :rows="rows"/>
        </b-card-table-action>
      </b-col>
    </b-row>
    <b-modal />
  </b-card-save-action>
</template>

<script>
import BCardSaveAction from '@/@core/components/global/BCardSaveAction.vue';
import { BModal, BCol, BRow, BFormInput, BDropdown, BDropdownItem } from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import BCardTableAction from '@/@core/components/global/BCardTableAction.vue';
import TableAction from '@/@core/components/global/TableAction.vue';

export default {
  data() {
    return {
      rows: [
        {
          id: 1, name: 'Dickerson',
        },
        {
          id: 2, name: 'Dickerson',
        },
        {
          id: 3, name: 'Dickerson',
        },
      ],
      columns: [
        {
          label: 'Id',
          field: 'id',
        },
        {
          label: 'Hình thức giao hàng',
          field: 'name',
        },
        {
          label: '',
          sortable: false,
          field: 'act',
        },
      ],
    }
  },
  components: {
    VueGoodTable,
    BCardSaveAction,
    BCardTableAction,
    BCol,
    BModal,
    BRow,
    BFormInput,
    BDropdown,
    BDropdownItem,
    TableAction
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
</style>
