<template>
  <div>
    <vue-good-table
      :columns="columnsL"
      :rows="rowsL"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >
        <span v-if="props.column.field === 'act'">
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
              <b-dropdown-item @click="onEdit(props.row.id)">
                <feather-icon
                  icon="Edit2Icon"
                  class="mr-50"
                />
                <span>Edit</span>
              </b-dropdown-item>
              <b-dropdown-item @click="onDelete(props.row.id)">
                <feather-icon
                  icon="TrashIcon"
                  class="mr-50"
                />
                <span>Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </span>
        </span>
      </template>
    </vue-good-table>
    <b-modal
      :visible="editVisible"
      @change="editVisible = !editVisible"
      title="Edit"
    >
      <slot name="modal-body-edit" />
    </b-modal>
  </div>
</template>

<script>
import BCardSaveAction from '@/@core/components/global/BCardSaveAction.vue';
import { BModal, BCol, BRow, BDropdown, BDropdownItem } from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import BCardTableAction from '@/@core/components/global/BCardTableAction.vue';

export default {
  data() {
    return {
      editVisible: false,
      columnsL: this.columns,
      rowsL: this.rows,
    }
  },
  props: ['columns', 'rows'],
  components: {
    VueGoodTable,
    BCardSaveAction,
    BCardTableAction,
    BCol,
    BModal,
    BRow,
    BDropdown,
    BDropdownItem,
  },
  methods: {
    onEdit(id) {
      // open modal
      this.editVisible = !this.editVisible
      // this.$emit('on-edit', id)
    },
    onDelete(id) {
      this.showMsgBoxConfirmDelete(id)
        .then(value => {
          if (value === true) {
            // xóa dòng
            this.rowsL = this.rowsL.filter(r => r.id !== id)
            this.$emit('on-delete', id)
          }
        })
    },
    showMsgBoxConfirmDelete(id) {
      // delete row
      return this.$bvModal
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
