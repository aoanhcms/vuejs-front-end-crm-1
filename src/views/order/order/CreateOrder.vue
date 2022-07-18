<template>
  <b-card>
    <b-card-header>
      <b-card-title>Tạo đơn hàng</b-card-title>
      <b-card-sub-title>
        <b-button variant="success" ><feather-icon icon="SaveIcon" />Lưu Lại</b-button>
      </b-card-sub-title>
    </b-card-header>
    <validation-observer ref="createOrder">
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col cols="8">
              <create-customer-vue />
            </b-col>
            <b-col cols="4">
              <order-info-vue />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <product-info-vue />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <cost-vue />
          <pre-pay />
          <book />
        </b-col>
      </b-row>
      <pay-bill />
    </validation-observer>
  </b-card>
</template>

<script>

import { BRow, BCol, BCard, BCardHeader, BCardTitle, BCardSubTitle, BButton } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import OrderInfoVue from '@/@core/components/order/OrderInfo.vue'
import ProductInfoVue from '@core/components/order/ProductInfo.vue'
import CostVue from '@/@core/components/order/Cost.vue'
import PrePay from '@/@core/components/order/PrePay.vue'
import Book from '@/@core/components/order/Book.vue'
import { required, email } from '@validations'
import CreateCustomerVue from '@core/components/order/createCustomer.vue'
import dataFake from './fakeDataCreateOrder'
import PayBill from '../modal/PayBill.vue'

export default {
  created() {
    this.form.status = 'Thay đổi trạng thái'
  },
  data() {
    return {
      form: {
        class_note: '',
        appointment: '',
        full_name: '',
        phone_number: '',
        phone_number2: '',
        creater_order: 1,
        manager_order: 1,
        birthday: '',
        gender: '',
        email: '',
        address: '',
        country: '',
        status: '',
        note: '',
        children_name: '',
        children_age: 1,
      },
      required,
      email,
      users: dataFake.users,
    }
  },
  components: {
    BButton,
    BCard,
    PrePay,
    Book,
    CostVue,
    OrderInfoVue,
    ProductInfoVue,
    CreateCustomerVue,
    PayBill,
    ValidationObserver,
    BRow,
    BCol,
    BCardHeader,
    BCardTitle,
    BCardSubTitle,
  },
  methods: {
    submitCreateOrder() {
      this.$refs.createOrder.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>

<style>

</style>
