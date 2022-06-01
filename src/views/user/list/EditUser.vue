<template>
  <b-card>
    <validation-observer ref="createUser">
      <b-form>
        <b-row>
          <!--  Full name-->
          <b-col md="6">
            <b-form-group>
              <label>Họ và tên Khách hàng</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Full Name"
              >
                <b-form-input
                  v-model="form.customer"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Full Name"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- group -->
          <b-col md="6">
            <b-form-group>
              <label>Nhóm khách hàng</label>
              <b-form-checkbox>Nhóm Group</b-form-checkbox>
              <b-form-checkbox>--- Nhóm Group con</b-form-checkbox>
            </b-form-group>
          </b-col>

          <!-- Phone -->
          <b-col md="6">
            <b-form-group>
              <label>Điện thoại</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Phone"
              >
                <b-form-input
                  v-model="form.phone_number"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Nhập số điện thoại"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
<!-- Order phone-->
          <b-col md="6">
            <b-form-group>
              <label>Điện thoại phụ</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="OrderPhone"
              >
                <b-form-input
                  v-model="form.orderphone"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Enter phone number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- birthday -->
          <b-col md="6">
            <b-form-group>
              <label>Ngày sinh</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Birthday"
              >
                <b-form-datepicker
                  id="datepicker-full-width"
                  v-model="form.birthday"
                  menu-class="w-100"
                  calendar-width="100%"
                  :state="errors.length > 0 ? false:null"
                  class="mb-2"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- Gender -->
          <b-col md="6">
            <b-form-group>
              <label>Giới Tính</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Gender"
              >
                <b-form-select
                  v-model="form.gender"
                  :state="errors.length > 0 ? false:null"
                >
                  <b-form-select-option value="male">Nam</b-form-select-option>
                  <b-form-select-option value="female">Nữ</b-form-select-option>
                  <b-form-select-option value="none">Không xác định</b-form-select-option>
                </b-form-select>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Email -->
          <b-col md="6">
            <b-form-group>
              <label>Email</label>
              <validation-provider
                #default="{ errors }"
                rules="required|email"
                name="Email"
              >
                <b-form-input
                  v-model="form.user_email"
                  type="email"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Email"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Address -->
          <b-col md="6">
            <b-form-group>
              <label>Địa Chỉ</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Address"
              >
                <b-form-input
                  v-model="form.address"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Nhập địa chỉ"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Country  -->
          <b-col md="6">
            <b-form-group>
              <label>Quốc Gia</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Country"
              >
                <b-form-input
                  v-model="form.country"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Quốc gia lãnh thổ"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!--Uid -->
          <b-col md="6">
            <b-form-group>
              <label>UID</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Uid"
              >
                <b-form-input
                  v-model="form.uid"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Nhập thông tin UID"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
<!-- status -->
          <b-col md="6">
            <b-form-group>
              <b-form-checkbox
                v-model="form.status"
                style="padding-top: 30px;"
                checked="true"
                switch
                inline
              >
                Bật tắt trạng thái
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <!-- note -->
          <b-col md="6">
            <b-form-group>
              <label>Ghi Chú</label>
              <validation-provider
                #default="{ errors }"
                name="Note"
                rules="required"
              >
                <b-form-textarea
                  v-model="form.note"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Note"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- submit button -->
          <b-col cols="12">
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
  BFormInput, BFormDatepicker, BFormTextarea, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect, BFormSelectOption, BFormCheckbox 
} from 'bootstrap-vue'
import { required, email } from '@validations'
import fakeUser from '../fakeUser'

export default {
  created() {
    if (typeof this.id !== 'undefined') {
      // edit
      const data = fakeUser.find(u => u.id === Number(this.id))
      this.form = { ...data }
    }
  },
  props: ['id'],
  components: {
    BFormTextarea,
    BFormDatepicker,
    BFormSelect,
    BFormSelectOption,
    BFormCheckbox,
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
        full_name: '',
        address: '',
        gender: '',
        phone_number: '',
        orderphone: '',
        birthday: '',
        user_email: '',
        country: '',
        uid: '',
        note: '',
        groups: [],
        status: true, // trang thái
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