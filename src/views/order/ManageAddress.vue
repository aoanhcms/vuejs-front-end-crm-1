<template>
  <div>
    <b-card-table-action>
      <table-action
        :columns="columns"
        :rows="rows"
      >
      
      </table-action>
    </b-card-table-action>
    
  </div>
</template>

<script>
import TableAction from '@/@core/components/global/TableAction.vue'
import BCardTableAction from '@/@core/components/global/BCardTableAction.vue'

export default {
  data() {
    return {
      columns: [
        {
          field: 'id',
          label: 'Họ Tên',
        },
        {
          field: 'id',
          label: 'Số Điện Thoại',
        },
        {
          field: 'id',
          label: 'Địa chỉ',
        },
        {
          field: 'id',
          label: 'Tỉnh/Thành',
        },
        {
          field: 'id',
          label: 'Quận/Huyện',
        },
        {
          field: 'id',
          label: 'Phường/Xã',
        },
        {
          field: 'act',
        },
      ],
      rows: [],
    }
  },
  components: { TableAction, BCardTableAction },
}
</script>

<style>

</style>