<template>
  <b-card>
    <validation-observer ref="create">
      <b-form>
        <b-row>
          <b-col md="12">
            <b-form-group
              label="Email"
              label-for="h-email"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required|email"
                name="Email"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-email"
                    v-model="form.email"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Mật khẩu"
              label-for="h-password"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Password"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-password"
                    type="password"
                    v-model="form.password"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Họ và Tên"
              label-for="h-full-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="FullName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-full-name"
                    v-model="form.full_name"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Tên Giáo Viên"
              label-for="h-teacher-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="TeacherName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-teacher-name"
                    v-model="form.teacher_name"
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
                name="PhoneNumber"
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
                    v-model="form.gender"
                    :state="errors.length > 0 ? false:null"
                  >
                    <b-form-select-option value="male">
                      Nam
                    </b-form-select-option>
                    <b-form-select-option value="female">
                      Nữ
                    </b-form-select-option>
                    <b-form-select-option value="none">
                      None
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Giới thiệu"
              label-for="h-description"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Description"
              >
                <b-col sm="6">
                  <b-form-textarea 
                    v-model="form.description"
                    :state="errors.length > 0 ? false:null"
                  />
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
import { required, email, password } from '@validations'
import {
  BFormTextarea, BFormInput, BFormDatepicker, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect, BFormSelectOption
} from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
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
        email: '',
        password: '',
        full_name: '',
        teacter_name: '',
        phone_number: '',
        birthday: '',
        address: '',
        gender: '',
        description: '',
      },
      required,
      email,
      password,
    }
  },
}
</script>
<style>
  .color-input{
    width: 50%
  }
</style>
