<template>
  <b-container fluid class="custom-search">
    <!-- advance search input -->
    <b-row>
      <b-col cols="8">
        <b-row no-gutters>
          <b-col>
            <b-form-group> <b-form-input size="md" placeholder="Số đt (tối thiểu 4 số)" v-model="form.phone_filter" @change="formFilter"/></b-form-group>
          </b-col>
          <b-col>
            <b-form-group> <b-form-input size="md" placeholder="Mã đơn hàng" v-model="form.order_code_filter" @change="formFilter"/></b-form-group>
          </b-col>
          <b-col>
            <b-form-group> <b-form-input size="md" placeholder="Mã vận đơn" v-model="form.order_code_filter" @change="formFilter"/></b-form-group>
          </b-col>
          <b-col>
            <b-form-group> <b-form-input size="md" placeholder="Họ tên khách hàng" v-model="form.fullname_filter" @change="formFilter"/></b-form-group>
          </b-col>
          <b-col>
            <b-form-group> <b-form-input size="md" placeholder="Mã khách hàng" v-model="form.fullname_code_filter" @change="formFilter"/></b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" offset="1" style="text-align: right">
        <b-button size="md" variant="info">Chia đơn nhanh</b-button>
        <b-button size="md" variant="success" v-b-modal.modal-1 >Sắp xếp cột</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import { BFormGroup, BFormInput, BRow, BCol, BButton, BContainer } from 'bootstrap-vue'

export default {
  components: {
    BFormGroup, BFormInput, BRow, BCol, BButton, BContainer,
  },
  data() {
    return {
      form: {
        phone_filter: '',
        order_code_filter: '',
        fullname_filter: '',
        fullname_code_filter: '',
        ship_code_filter: '',
      },
    }
  },
  methods: {
    formFilter() {
      this.$emit('filterDone', this.form)
    },
  },

}
</script>
<style>

</style>
