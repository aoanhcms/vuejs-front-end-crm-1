<template>
  <b-card 
    border-variant="warning"
    id="product-info">
    <b-card-header header-bg-variant="warning">
      <b-card-title  style="color: white">Phiếu Thu</b-card-title>
      <b-card-sub-title>
        <b-button
          v-b-modal.modal-2
          size="sm"
          variant="primary"
          style="margin-right: 10px;"
        >
          <feather-icon
            icon="PlusIcon"
            class="mr-50"
          />
          <span class="align-middle">Thanh toán</span>
        </b-button>
      </b-card-sub-title>
    </b-card-header>
    <b-card-body style="padding: 10px">
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Tiền Đã Thu"
            label-for="money_received"
            label-cols-md="4"
          >
            <b-form-input
              type="number"
              id="money_received"
              placeholder="tiền đã thu"
            />
          </b-form-group>
          <b-form-group
            label="Số Tiền Thiếu"
            label-for="sale"
            label-cols-md="4"
          >
            <b-form-input
              type="number"
              id="sale"
              placeholder="sale"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>

import { BRow, BCol, BCard, BFormGroup, BFormInput, BButton, BCardHeader, BCardSubTitle, BCardTitle, BCardBody, } from 'bootstrap-vue'


export default {
  components: {
    BRow, BCol, BCard, BFormGroup, BFormInput, BButton, BCardHeader, BCardSubTitle, BCardTitle, BCardBody,
  },
}
</script>

<style>

</style>