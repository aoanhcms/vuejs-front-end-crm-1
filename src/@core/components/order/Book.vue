<template>
  <b-card 
    border-variant="success"
    id="product-info">
    <b-card-header
      header-bg-variant="success"
    >
      <b-card-title style="color: white">Lịch hẹn</b-card-title>
      <b-card-sub-title>
        <b-button
          size="sm"
          variant="primary"
          style="margin-right: 10px;"
          @click="addAppointment"
        >
          <feather-icon
            icon="PlusIcon"
            class="mr-50"
          />
          <span class="align-middle">Thêm lịch</span>
        </b-button>
      </b-card-sub-title>
    </b-card-header>
    <b-card-body style="padding: 10px" id="cart-body-appointment">
      <b-row v-for="(appointment, k) in form.appointment" :key="k" class="item-appointment">
        <b-col cols="12">
          <b-row no-gutters>
            <b-col>
              <b-form-group
                label="Chọn ngày"
                label-for="ChooseDay"
                label-cols-md="3"
              >
                <b-form-datepicker
                  id="ChooseDay"
                />
              </b-form-group>
            </b-col>
            <b-col cols="2">
              <b-button variant="danger" @click="Delete(k)">
                <feather-icon icon="DeleteIcon" />
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <b-row no-gutters>
            <b-col>
              <b-form-group
                label="Ghi chú"
                label-for="NoteDay"
              >
                <b-form-textarea
                  id="NoteDay"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>

import { BButton, BRow, BCol, BCard, BFormGroup, BFormDatepicker, BFormTextarea, BCardBody, BCardTitle, BCardSubTitle, BCardHeader, } from 'bootstrap-vue'
import FeatherIcon from '../feather-icon/FeatherIcon.vue'

export default {
  methods: {
    Delete(k) {
      this.form.appointment = this.form.appointment.filter((a, kk) => kk !== k)
    },
    addAppointment() {
      this.form.appointment.push({})
    },
  },
  data() {
    return {
      form: {
        appointment: [],
      },
    }
  },
  components: {
    BButton,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    BCardHeader,
    BFormTextarea,
    BRow,
    BCol,
    BCard,
    BFormGroup,
    BFormDatepicker,
    FeatherIcon,
  },
}
</script>

<style>
  #cart-body-appointment > .item-appointment {
    border: 1px solid rgb(209, 216, 209); margin: 2px; padding: 5px;
    box-shadow: 1px 1px 1px rgb(122, 118, 118);
    background: rgb(231, 230, 228);
    border-radius: 4px;
  }
</style>