<template>
  <b-card>
    <validation-observer ref="createUser">
      <b-form>
        <b-row style="text-align: center">
          <!--  Full name-->
          <b-col cols="12">
            <b-form-group
              label="Tên Doanh Nghiệp"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Full Name"
              >
                <b-col cols="6">
                  <b-form-input
                    v-model="form.business"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Full Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Số Điện Thoại"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="PhoneNumber"
              >
                <b-col cols="6">
                  <b-form-input
                    v-model="form.phone_number"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Số điện thoại"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Email"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required|email"
                name="Email"
              >
                <b-col cols="6">
                  <b-form-input
                    v-model="form.email"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Email của doanh nghiệp"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Địa chỉ"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Address"
              >
                <b-col cols="6">
                  <b-form-input
                    v-model="form.address"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Địa chỉ của doanh nghiệp"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Thông tin chi tiết"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Infomation"
              >
                <b-col cols="6">
                  <b-form-textarea
                    v-model="form.infomation"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Thông tin doanh nghiệp"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- submit button -->
          <b-col cols="8" style="text-align: right">
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
import {
  BFormInput, BFormTextarea, BFormGroup, BForm, BRow, BCol, BButton, BCard,
} from 'bootstrap-vue'
import { required, email } from '@validations'

import fakeData from '@core/fakeData/business.js'

export default {
  created() {
    if (typeof this.id !== 'undefined') {
      // edit
      const data = fakeData.find(u => u.id === Number(this.id))
      this.form = { ...data }
    }
  },
  props: ['id'],
  components: {
    BFormTextarea,
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
  data() {
    return {
      form: {
        business: '',
        address: '',
        phone_number: '',
        email: '',
        infomation: '',
      },
      required,
      email,
    }
  },
  methods: {
    validationForm() {
      this.$refs.createUser.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>