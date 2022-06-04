<template>
  <b-card>
    <validation-observer ref="create">
      <b-form>
        <b-row>
          <!--  Full name-->
          <b-col md="12">
            <b-form-group
              label="Tên Lớp"
              label-for="h-class-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="ClassName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-class-name"
                    v-model="form.class_name"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Ngày Mở Lớp"
              label-for="h-start-date"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="StartDate"
              >
                <b-col sm="6">
                  <b-form-datepicker
                    id="h-start-date"
                    v-model="form.start_date"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Ngày Kết thúc"
              label-for="h-end-date"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="EndDate"
              >
                <b-col sm="6">
                  <b-form-datepicker
                    id="h-end-date"
                    v-model="form.end_date"
                    :state="errors.length > 0 ? false:null"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Quản lý lớp"
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
                  >
                    <b-form-select-option value="1">
                      Nam baaaa@gmail.com
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Giáo viên lớp"
              label-for="h-teacher"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Teacher"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-gender"
                    v-model="form.teacher"
                    :state="errors.length > 0 ? false:null"
                  >
                    <b-form-select-option value="1">
                      Nam baaaa@gmail.com
                    </b-form-select-option>
                  </b-form-select>
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
        teacher: '',
        manager: '',
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
