<template>
  <div class="custom-search">
    <b-row>
      <b-col cols="12" class="date-option">
        <b-row>
          <b-col v-for="(td, k) in date_filter" :key="k" >
            <b-card class="filter-card">
              <b-card-header class="filter-card-header">
                <b-form-group>
                  <b-form-checkbox v-model="td.allow" @change="filteDone">{{ td.label }}</b-form-checkbox>
                </b-form-group>
              </b-card-header>
              <b-card-body>
                <b-form-group>
                  <b-form-input placeholder="Search" v-model="td.filter_date_from" @change="filteDone"/>
                  <b-form-input placeholder="Search" v-model="td.filter_date_to" @change="filteDone"/>
                </b-form-group>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

  </div>
</template>

<script>

import {BCard, BCardHeader, BCardText, BCardBody, BCardTitle, BFormGroup, BFormInput, BRow, BCol, BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormGroup, BFormInput, BRow, BCol, BFormCheckbox, BCard, BCardHeader, BCardText, BCardBody, BCardTitle,
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
    margin-right: 10px;
    background-color: antiquewhite;
    border: 1px solid rgb(199, 197, 197);
    padding: 3px;
    width: 10%;
  }
  .table-form-date {
    width: 100%;
  }
  .date_filter_td {
    border: 1px solid rgb(236, 233, 230);
    padding: 3px;
  }
  .table-scroll {
      overflow-x:auto;
    }
  .filter-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
  }
  .filter-card .card-header {
    padding:0.5rem;
  }
  .filter-card .card-body {
    padding:0;
  }
  .filter-card-header {
    background-color: #f5f5f5!important;
  }
</style>
