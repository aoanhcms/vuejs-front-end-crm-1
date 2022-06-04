<template>
  <b-card>
    <validation-observer ref="createStaff">
      <b-form>
        <b-row>
          <!--  Full name-->
          <b-col md="12">
            <b-form-group
              label="Tên nhân viên"
              label-for="h-staff-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="StaffName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-staff-name"
                    v-model="form.staff_name"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Số Điện Thoại"
              label-for="h-phone-number"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="StaffName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-phone-number"
                    v-model="form.phone_number"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Ngày Sinh"
              label-for="h-birthday"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Birthday"
              >
                <b-col sm="6">
                  <b-form-datepicker
                    id="h-birthday"
                    v-model="form.birthday"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Giới Tính"
              label-for="h-gender"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Gender"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-gender"
                    v-model="form.birthday"
                    :state="errors.length > 0 ? false:null"
                  >
                    <b-form-select-option value="male">
                      Nam
                    </b-form-select-option>
                    <b-form-select-option value="female">
                      Nữ
                    </b-form-select-option>
                    <b-form-select-option value="none">
                      Không xác định
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Phân Loại"
              label-for="h-type"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Type"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-type"
                    v-model="form.type"
                    :state="errors.length > 0 ? false:null"
                  >
                    <b-form-select-option value="staff">
                      Nhân Viên
                    </b-form-select-option>
                    <b-form-select-option value="teacher">
                      Giáo Viên
                    </b-form-select-option>
                  </b-form-select>
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
  BFormInput, BFormDatepicker, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect, BFormSelectOption
} from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
    BFormSelect,
    BFormSelectOption,
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
  data() {
    return {
      form: {
        staff_name: '',
        phone_number: '',
        birthday: '',
        type: '',
        gender: '',
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
