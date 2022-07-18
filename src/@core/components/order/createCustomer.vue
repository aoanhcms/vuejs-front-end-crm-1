<template>
  <div>
    <b-card
      header="Tạo khách hàng"
      header-bg-variant="info"
      header-text-variant="white"
      body-border-variant="info"
    >
      <b-card-body style="padding-top:5px">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Mã vận chuyển"
              label-cols-md="3"
            >
              <b-row>
                <b-col>
                  <b-form-input
                    v-model="form.ship_code"
                    placeholder="Mã đơn hàng AUTO"
                    disabled
                  />
                </b-col>
                <b-col>
                  <b-form-input
                    v-model="form.ship_code"
                    placeholder="Mã vận chuyển"
                  />
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Họ tên khách hàng"
              label-cols-md="3"
            >
              <validation-provider
                #default="{ errors }"
                name="fullname"
                rules="required"
              >
                <b-form-input
                  v-model="form.full_name"
                  :state="errors.length > 0 ? false:null"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Điện thoại"
              label-cols-md="3"
            >
              <b-row>
                <b-col cols="6">
                  <validation-provider
                    #default="{ errors }"
                    name="phone_number"
                    rules="required"
                  >
                    <b-input-group class="input-group-merge">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="SmartphoneIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="hi-number"
                        v-model="form.phone_number"
                        type="number"
                        placeholder="Số điện thoại chính"
                        :state="errors.length > 0 ? false:null"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-col>
                <b-col cols="6">
                  <validation-provider
                    #default="{ errors }"
                    name="phone_number2"
                    rules="required"
                  >
                    <b-input-group class="input-group-merge">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="SmartphoneIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="hi-number"
                        v-model="form.phone_number2"
                        type="number"
                        placeholder="Số điện thoại phụ"
                        :state="errors.length > 0 ? false:null"
                      />
                    </b-input-group>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Ngày sinh"
              label-cols-md="3"
            >
              <b-row>
                <b-col cols="6">
                  <b-form-datepicker placeholder="Ngày sinh" v-model="form.birthday" />
                </b-col>
                <b-col cols="6">
                  <b-form-select v-model="form.gender" :options="genderOptions">
                  </b-form-select>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Email"
              label-cols-md="3"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              ><b-form-input
                v-model="form.email"
                placeholder="Email của khách hàng"
                :state="errors.length > 0 ? false:null"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
              </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Nhóm khách hàng"
              label-cols-md="3"
            >
              <b-row>
                <b-col>
                  <b-form-select v-model="form.customer_group" :options="[{text: 'Chọn nhóm khách hàng', value: null}]" />
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col>
                <b-form-group
                  label="Địa chỉ"
                  label-cols-md="3"
                >
                  <b-row>
                    <b-col>
                      <b-form-select
                        v-model="form.address.province"
                        :options="getProvinces"
                        @change="selectedProvince"
                      />
                    </b-col>
                    <b-col>
                      <b-form-select
                        v-model="form.address.district"
                        :options="address.districts"
                        @change="selectedDistrict" />
                    </b-col>
                    <b-col>
                      <b-form-select
                        v-model="form.address.ward"
                        :options="address.wards"
                      />
                    </b-col>
                  </b-row>
                  <b-row style="padding-top: 10px">
                    <b-col>
                      <b-form-textarea v-model="form.street" placeholder="Đường, ngõ, xóm thôn..."/>
                    </b-col>
                  </b-row>
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Ghi chú"
              label-cols-md="3"
            >
              <b-row>
                <b-col>
                  <b-form-textarea v-model="form.note" placeholder="Ghi chú chung" />
                </b-col>
                <b-col>
                  <b-form-textarea v-model="form.note" placeholder="Ghi chú 2"/>
                </b-col>
            </b-row>
            </b-form-group>
          </b-col><b-col cols="12">
            <b-form-group
              label="Ghi chú giao hàng"
              label-cols-md="3"
            >
              <b-form-textarea v-model="form.note" />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="ID FB"
              label-cols-md="3"
            >
              <b-row>
                <b-col>
                  <b-form-input v-model="form.id_post" placeholder="Id bài post" />
                </b-col>
                <b-col>
                  <b-form-input v-model="form.id_fanpage" placeholder="id fan page" />
                </b-col>
                <b-col>
                  <b-form-input v-model="form.id_fb" placeholder="Id facebook khách" />
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PcVn from 'pc-vn'
import { BCardBody, BInputGroupPrepend, BInputGroup, BFormDatepicker, BFormSelect, BFormTextarea, BRow, BCol, BCard, BFormGroup, BFormInput, } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
// eslint-disable-next-line import/extensions
import constants from '@/@core/app-config/constants'

export default {
  data() {
    return {
      required,
      email,
      address: {
        provinces: [{ text: 'Tỉnh / Thành', value: '' }],
        districts: [{ text: 'Quận / Huyện', value: '' }],
        wards: [{ text: 'Thị xã', value: '' }],
      },
      form: {
        ship_code: '',
        class_note: '',
        appointment: '',
        full_name: '',
        phone_number: '',
        phone_number2: '',
        creater_order: 1,
        manager_order: 1,
        birthday: '',
        gender: '',
        email: '',
        address: {
          province: '',
          district: '',
          ward: '',
          street: '',
        },
        country: '',
        status: '',
        note: '',
        children_name: '',
        children_age: 1,
        customer_group: null,
      },
    }
  },
  components: {
    BCardBody,
    BFormTextarea,
    ValidationProvider,
    BInputGroupPrepend,
    BInputGroup,
    BFormDatepicker,
    BFormSelect,
    BRow,
    BCol,
    BCard,
    BFormGroup,
    BFormInput,
  },
  computed: {
    getProvinces() {
      const provinces = PcVn.getProvinces()
      return [this.address.provinces[0], ...provinces.map(p => {
        return {
          value: p.code,
          text: p.name,
        }
      })]
    },
    genderOptions() {
      return constants.genderOptions
    },
  },
  methods: {
    selectedProvince(e) {
      const list = PcVn.getDistrictsByProvinceCode(e)
      this.form.address.district = ''// về mặc đinh
      this.address.districts = [this.address.districts[0], ...list.map(p => {
        return {
          value: p.code,
          text: p.name,
        }
      })]
    },
    selectedDistrict(e) {
      const list = PcVn.getWardsByDistrictCode(e)
      this.form.address.ward = ''// về mặc đinh
      this.address.wards = [this.address.wards[0], ...list.map(p => {
        return {
          value: p.code,
          text: p.name,
        }
      })]
    },
  },
}
</script>

<style>

</style>