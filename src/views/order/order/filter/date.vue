<template>
  <div class="custom-search">
    <!-- advance search input -->
    <b-row>
      <b-col>
        <table>
          <th
            v-for="(th, k) in date_filter"
            :key="k"
            class="date_filter_th"
          >
            <b-form-checkbox v-model="th.allow" @change="filteDone">{{ th.label }}</b-form-checkbox>

          </th>
          <tbody>
            <tr >
              <td v-for="(td, k) in date_filter" :key="k" class="date_filter_td">
                <b-form-group>
                  <b-form-input placeholder="Search" v-model="td.filter_date_from" @change="filteDone"/>
                  <b-form-input placeholder="Search" v-model="td.filter_date_to" @change="filteDone"/>
                </b-form-group>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { BFormGroup, BFormInput, BRow, BCol, BFormCheckbox, } from 'bootstrap-vue'

export default {
  components: {
    BFormGroup, BFormInput, BRow, BCol, BFormCheckbox, 
  },
  data() {
    return {
      date_filter: [{
        allow: false,
        key: 'ngay_tao',
        label: 'Ngày Tạo',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        allow: false,
        key: 'ngay_chia',
        label: 'Ngày Chia',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        allow: false,
        key: 'ngay_chot',
        label: 'Ngày Chốt',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        allow: false,
        key: 'ngay_chuyen_ke_toan',
        label: 'Chuyển kế Toán',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        key: 'ngay_chuyen_hang',
        label: 'Ngày Chuyển hàng',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        allow: false,
        key: 'ngay_chuyen_hoan',
        label: 'Ngày Chuyển Hoàn',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        key: 'ngay_thanh_cong',
        label: 'Ngày Thành công',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        allow: false,
        key: 'ngay_thu_tien',
        label: 'Ngày Thu Tiền',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        key: 'ngay_tra_hang',
        label: 'Ngày T.hàng về Kho',
        filter_date_form: '',
        filter_date_to: '',
      },
      {
        allow: false,
        key: 'ngay_huy',
        label: 'Ngày Hủy',
        filter_date_form: '',
        filter_date_to: '',
      }],
    }
  },
  methods: {
    filteDone() {
      this.$emit('filterDone', this.date_filter)
    },
  },

}
</script>
<style>
  .date_filter_th {
    background-color: antiquewhite;
    border: 1px solid rgb(199, 197, 197);
    padding: 3px;
  }
  .date_filter_td {
    border: 1px solid rgb(236, 233, 230);
    padding: 3px;
  }
</style>
