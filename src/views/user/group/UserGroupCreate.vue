<template>
  <b-card>
    <validation-observer ref="createUserGroup">
      <b-form>
        <b-row>
          <!--  Full name-->
          <b-col md="12">
            <b-form-group
              label="Group Name"
              label-for="h-group-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="GroupName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-group-name"
                    v-model="group_name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Group Name"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Chọn thư mục gốc"
              label-for="h-choose-group"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Group"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-choose-group"
                    v-model="group"
                  >
                    <b-form-select-option value="">Không chọn</b-form-select-option>
                    <b-form-select-option value="1">Nhóm test</b-form-select-option>
                    <b-form-select-option value="2">--- Nhóm test con</b-form-select-option>
                  </b-form-select>
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Tùy Chỉnh Icon"
              label-for="h-icon"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Icon"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-icon"
                    v-model="icon"
                    placeholder="Chọn icon đại diện"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Tùy chỉnh màu"
              label-for="h-color"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Colour"
              >
                <b-col sm="6">
                  <color-picker
                    v-model="colour"
                    :value="colour"
                    picker="chrome"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Vị trí"
              label-for="location"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                name="Location"
                rules="required"
              >
                <b-col cols="6">
                  <b-form-input
                    id="location"
                    v-model="location"
                    type="number"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Đặt làm mặc định"
              label-for="setdefault"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                name="SetDefault"
                rules="required"
              >
                <b-col cols="6">
                  <b-form-checkbox
                    id="setdefault"
                    v-model="SetDefault"
                    checked="true"
                    switch
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Trạng thái"
              label-for="status"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                name="Status"
                rules="required"
              >
                <b-col cols="6">
                  <b-form-checkbox
                    id="status"
                    v-model="status"
                    switch
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-col>
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
import { required } from '@validations'
import {
  BFormInput, BFormDatepicker, BPagination, BFormTextarea, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect, BFormSelectOption, BFormCheckbox 
} from 'bootstrap-vue'
import ColorPicker from 'vue-colour-picker'

export default {
  components: {
    BPagination,
    ColorPicker,
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
  methods: {
    validationForm() {
      console.log('submit')
    },
  },
  data() {
    return {
      group: '',
      group_name: '',
      colour: '#000000',
      icon: '',
      location: 1,
      status: true,
      SetDefault: false,
      required,
    }
  },
}
</script>

<style>

</style>
