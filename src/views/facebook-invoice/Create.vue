<template>
  <b-card>
    <validation-observer ref="create">
      <b-form>
        <b-row>
          <!--  Full name-->
          <b-col md="12">
            <b-form-group
              label="Tên Tùy Chỉnh"
              label-for="h-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Name"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-name"
                    v-model="form.name"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col><b-col md="12">
            <b-form-group
              label="FB Tracking Id"
              label-for="h-fb-tracking-id"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="FbTrackingId"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-fb-tracking-id"
                    v-model="form.fb_tracking_id"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Người Phụ Trách"
              label-for="h-manager"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Manager"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-manager"
                    v-model="form.manager"
                    :state="errors.length > 0 ? false:null"
                    :options="form.manager"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Marketer"
              label-for="h-marketer"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="marketer"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-marketer"
                    v-model="form.marketer"
                    :state="errors.length > 0 ? false:null"
                    :options="form.marketer"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          </b-col><b-col md="12">
            <b-form-group 
              label="Số Tiền"
              label-for="h-amount"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Amount"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-amount"
                    v-model="form.amount"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Mã Hóa Đơn"
              label-for="h-payment-code"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="PaymentCode"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-payment-code"
                    v-model="form.payment_code"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          </b-col><b-col md="12">
            <b-form-group
              label="Bốn Số Cuối Thẻ"
              label-for="h-payment-card"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="PaymentCard"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-fb-payment-card"
                    v-model="form.payment_card"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Ngày Lập Hóa Đơn"
              label-for="h-date_create"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="DateCreate"
              >
                <b-col sm="6">
                  <b-form-datepicker
                    id="h-date-create"
                    v-model="form.date_create"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Thông tin lớp"
              label-for="h-description"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Description"
              >
                <b-col sm="6">
                  <b-form-textarea v-model="form.description" />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- submit button -->
          <b-col cols="7" style="text-align: right">
            <b-button
              variant="primary"
              type="submit"
              @click.prevent="validationForm"
            >
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </b-card>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import {
  BInputGroupPrepend, BFormTextarea, BFormInput, BFormDatepicker, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect
} from 'bootstrap-vue'

export default {
  components: {
    BInputGroupPrepend,
    BFormTextarea,
    BFormDatepicker,
    BFormSelect,
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
    BCard,
  },
  methods: {
    validationForm() {
      console.log('submit')
    },
  },
  props: ['id'],
  data() {
    return {
      form: {
        name: '',
        fb_tracking_id: '',
        manager: [{
          value: 1, text: 'Danh Sinh',
        }],
        marketer: [{
          value: 1, text: 'Danh Sinh',
        }],
        amount: 0,
        payment_code: '',
        payment_card: '',
        date_create: '',
        description: '',
      },
      required,
    }
  },
}
</script>
<style>
  .color-input{
    width: 50%
  }
</style>
