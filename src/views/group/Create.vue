<template>
  <b-card>
    <validation-observer ref="createUser">
      <b-form>
        <b-row style="text-align: center">
          <!--  Full name-->
          <b-col cols="12">
            <b-form-group
              label="Tên Đội Nhóm"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="GroupName"
              >
                <b-col cols="6">
                  <b-form-input
                    v-model="form.group_name"
                    :state="errors.length > 0 ? false:null"
                    placeholder=""
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Icon tùy Chỉnh"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Icon"
              >
                <b-col cols="6">
                  <b-form-input
                    v-model="form.icon"
                    :state="errors.length > 0 ? false:null"
                    placeholder=""
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col><b-col cols="12">
            <b-form-group
              label="Màu tùy Chỉnh"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Color"
              >
                <b-col cols="4">
                  <colour-picker
                    v-model="form.color"
                    :state="errors.length > 0 ? false:null"
                    placeholder=""
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Cấp Độ"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Level"
              >
                <b-col cols="6">
                  <input-minus-plus
                    v-model="form.level"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Cấp độ"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Location"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Location"
              >
                <b-col cols="6">
                  <input-minus-plus
                    v-model="form.location"
                    :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Đặt làm Group mặc định"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="GroupDefault"
              >
                <b-col cols="1">
                  <b-form-checkbox
                    v-model="form.group_default"
                    switch
                    size="xl"
                    :state="errors.length > 0 ? false:null"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Trạng thái"
              label-cols-md="4"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Status"
              >
                <b-col cols="1">
                  <b-form-checkbox
                    v-model="form.status"
                    switch
                    size="xl"
                    :state="errors.length > 0 ? false:null"
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
  BFormCheckbox, BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCard,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import ColourPicker from 'vue-colour-picker'

import InputMinusPlus from '@core/components/form/InputMinusPlus.vue'

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
    ColourPicker,
    BFormCheckbox,
    InputMinusPlus,
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
        group_name: '',
        icon: '',
        color: '',
        level: 1,
        location: 1,
        status: true,
        group_default: false,
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
<style>
  .color-input{
    width: 50%
  }
</style>