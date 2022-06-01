<template>
  <b-card>
    <validation-observer ref="createUserGroup">
      <b-form>
        <b-row>
          <!--  Full name-->
          <b-col md="12">
            <b-form-group
              label="Tên Trạng Thái"
              label-for="h-status-name"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="StatusName"
              >
                <b-col sm="6">
                  <b-form-input
                    id="h-status-name"
                    v-model="status_name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Status Name"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
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
                  <colour-picker
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
              label="Level"
              label-for="level"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                name="Level"
                rules="required"
              >
                <b-col cols="6">
                  <b-form-input
                    id="level"
                    v-model="level"
                    type="number"
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

import ColourPicker from 'vue-colour-picker'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect, BFormSelectOption, BFormCheckbox 
} from 'bootstrap-vue'

export default {
  props: ['id'],
  components: {
    'colour-picker': ColourPicker,
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
      status_name: '',
      colour: '#000000',
      level: 1,
      location: 1,
      status: true,
      SetDefault: false,
      required,
    }
  },
}
</script>

<style>
.color-input {
  width: 50%;
}
</style>
