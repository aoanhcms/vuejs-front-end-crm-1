<template>
  <b-card
    header-html="<b>Chi Phí</b>"
    border-variant="success"
    bg-variant="success"
    text-variant="white"
  >
    <b-row>
      <b-col cols="12">
        <b-form-group
          label="Thành Tiền"
          label-cols-md="4"
        >
          <b-form-input
            type="number"
          />
        </b-form-group>
        <b-form-group
          label="Giảm giá"
          label-cols-md="4"
        >
          <b-form-input
            type="number"
            id="sale"
          />
        </b-form-group>
        <b-form-group
          label="Phụ thu"
          label-cols-md="4"
        >
          <b-form-input
            type="number"
          />
        </b-form-group>
        <b-form-group
          label="Khai Giá"
          label-cols-md="4"
        >
          <b-form-input
            type="number"
          />
        </b-form-group>
        <hr/>
        <b-form-group
          label="Cần thanh toán"
          label-cols-md="4"
        >
          <b-form-input
            type="number"
            disabled
          />
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BFormGroup,
    BFormInput,
  },
}
</script>

<style>

</style>