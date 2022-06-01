<template>
  <validation-observer ref="createOrder">
    <b-form>
      <b-row>
        <b-col cols="6">
          <b-card title="Create Order" style="height: 95%">
            <b-tabs>
              <b-tab>
                <template #title>
                  <feather-icon icon="PlusIcon"/>
                  Thêm Khách mới
                </template>
                <b-row>
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
                          <b-form-select v-model="form.gender" placeholder="Chon giới tính">
                            <b-form-select-option disabled :selected="true">Chọn giới tính</b-form-select-option>
                            <b-form-select-option value="male">Nam</b-form-select-option>
                            <b-form-select-option value="female">Nữ</b-form-select-option>
                            <b-form-select-option value="none">Không xác định</b-form-select-option>
                          </b-form-select>
                        </b-col>
                      </b-row>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Email"
                      label-cols-md="3"
                    ><b-form-input v-model="form.email" /></b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Địa chỉ"
                      label-cols-md="3"
                    ><b-form-input v-model="form.address"/></b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Tên tuổi, của trẻ"
                      label-cols-md="3"
                    >
                      <b-row>
                        <b-col cols="9">
                          <b-form-input placeholder="Tên" v-model="form.children_name" />
                        </b-col>
                        <b-col cols="3">
                          <b-form-input placeholder="Tuổi" v-model="form.children_age" type="number" />
                        </b-col>
                      </b-row>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Quốc gia"
                      label-cols-md="3"
                    >
                      <b-form-select v-model="form.country">
                        <b-form-select-option value="VN">Việt Nam</b-form-select-option>
                        <b-form-select-option value="THA">Thái Lan</b-form-select-option>
                        <b-form-select-option value="SIN">Singapo</b-form-select-option>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Ghi chú"
                      label-cols-md="3"
                    ><b-form-input v-model="form.note" /></b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Id bài post, id fan page"
                      label-cols-md="3"
                    >
                      <b-row>
                        <b-col cols="6">
                          <b-form-input v-model="form.id_post" placeholder="Id bài post" />
                        </b-col>
                        <b-col cols="6">
                          <b-form-input v-model="form.id_fanpage" placeholder="id fan page" />
                        </b-col>
                      </b-row>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      label="Id fb khách"
                      label-cols-md="3"
                    ><b-form-input v-model="form.id_fb" /></b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab>
                <template #title>
                  <feather-icon icon="SearchIcon"/>
                  Tìm khách cũ
                </template>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Tìm khách hàng"
                      label-cols-md="4"
                    ><b-form-input /></b-form-group>
                  </b-col>
                </b-row>
              </b-tab>

            </b-tabs>
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card title="Thông tin đơn hàng">
            <b-row>
              <b-col cols="12">
                <b-form-group
                  label="Trạng thái"
                  label-for="status"
                  label-cols-md="4"
                >
                  <b-button size="sm" variant="danger">{{ form.status }}</b-button><br/>
                  <b-button size="sm" v-b-modal.modal-1 variant="primary">
                    <feather-icon
                    icon="EditIcon"
                    class="mr-50"
                  />Thay đổi</b-button>
                </b-form-group>
                <b-form-group
                  label="Người tạo đơn"
                  label-for="sale"
                  label-cols-md="4"
                >
                  <b-form-select v-model="form.creater_order">
                    <b-form-select-option
                      v-for="user in users"
                      :key="user.id"
                      :value="user.id"
                    >{{ user.name }}</b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  label="Người Quản Lý Đơn"
                  label-for="addamount"
                  label-cols-md="4"
                >
                  <b-form-select v-model="form.manager_order">
                    <b-form-select-option
                      v-for="user in users"
                      :key="user.id"
                      :value="user.id"
                    >{{ user.name }}</b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  label="Đơn Từ Marketer"
                  label-for="total"
                  label-cols-md="4"
                >
                  <b-form-select>
                    <b-form-select-option>No selected</b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  label="Lý Do Hủy / Xem Xét Lại"
                  label-for="note_cancel"
                  label-cols-md="4"
                >
                  <b-form-textarea
                    id="note_cancel"
                  />
                </b-form-group>
                <b-form-group
                  label="Ghi Chú"
                  label-for="note"
                  label-cols-md="4"
                >
                  <b-form-textarea
                    id="note"
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card title="Chi phí">
            <b-row>
              <b-col cols="12">
                <b-form-group
                  label="Thành Tiền"
                  label-for="amount"
                  label-cols-md="4"
                >
                  <b-form-input
                    type="number"
                    id="amount"
                    placeholder="amount"
                  />
                </b-form-group>
                <b-form-group
                  label="Giảm giá"
                  label-for="sale"
                  label-cols-md="4"
                >
                  <b-form-input
                    type="number"
                    id="sale"
                    placeholder="sale"
                  />
                </b-form-group>
                <b-form-group
                  label="Phụ thu"
                  label-for="addamount"
                  label-cols-md="4"
                >
                  <b-form-input
                    type="number"
                    id="addamount"
                    placeholder="addamount"
                  />
                </b-form-group>
                <b-form-group
                  label="Cần thanh toán"
                  label-for="total"
                  label-cols-md="4"
                >
                  <b-form-input
                    type="number"
                    id="total"
                    placeholder="total"
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>
          <b-card>
            <b-card-header>
              <b-card-title>Phiếu Thu</b-card-title>
              <b-card-sub-title>
                <b-button
                  v-b-modal.modal-2
                  size="sm"
                  variant="outline-primary"
                  style="margin-right: 10px;"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Thanh toán</span>
                </b-button>
              </b-card-sub-title>
          </b-card-header>
            <b-row>
              <b-col cols="12">
                <b-form-group
                  label="Tiền Đã Thu"
                  label-for="money_received"
                  label-cols-md="4"
                >
                  <b-form-input
                    type="number"
                    id="money_received"
                    placeholder="tiền đã thu"
                  />
                </b-form-group>
                <b-form-group
                  label="Số Tiền Thiếu"
                  label-for="sale"
                  label-cols-md="4"
                >
                  <b-form-input
                    type="number"
                    id="sale"
                    placeholder="sale"
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="9">
          <b-card >
            <b-card-header>
              <b-card-title>Thông Tin Lớp Học</b-card-title>
              <b-card-sub-title>
                <b-button
                  variant="outline-primary"
                  style="margin-right: 10px;"
                  :to="{name: 'orders-create'}"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-50"
                  />
                  <span class="align-middle">Thêm lớp học</span>
                </b-button>
              </b-card-sub-title>
          </b-card-header>
            <b-row>
              <b-col md="6">
                <b-form-group
                  label="Chọn Lớp"
                  label-for="choose-class"
                >
                  <b-form-select
                    id="choose-class"
                  >
                    <b-form-select-option>1</b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Học Phí"
                  label-for="mc-fee"
                >
                  <b-form-input
                    id="mc-fee"
                    placeholder="Học Phí"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Giá Khuyến Mại"
                  label-for="mc-sale"
                >
                  <b-form-input
                    id="mc-sale"
                    placeholder="Giá Khuyến Mại"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Số Tháng"
                  label-for="mc-month"
                >
                  <b-form-input
                    id="mc-month"
                    placeholder="số tháng"
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Thành Tiền"
                  label-for="mc-price"
                >
                  <div class="form-label-group">
                    <b-form-input
                      id="mc-price"
                      placeholder="tiền"
                    />
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label-for="mc-choose-student"
                  label="Chọn Học Sinh"
                >
                  <div class="form-label-group">
                    <b-form-select
                      id="mc-choose-student"
                    >
                      <b-form-select-option>1</b-form-select-option>
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group
                  label-for="mc-name-student"
                  label="Tên Bé"
                >
                  <div class="form-label-group">
                    <b-form-input
                      id="mc-price"
                      placeholder="Họ tên đầy đủ"
                    />
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label-for="mc-age-student"
                  label="Tuổi của Bé"
                >
                  <div class="form-label-group">
                    <b-form-input
                      id="mc-age-student"
                      placeholder="Tuổi"
                    />
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label-for="mc-gender-student"
                  label="Giới tính của Bé"
                >
                  <div class="form-label-group">
                    <b-form-select v-model="form.class_gender">
                      <b-form-select-option value="male">Name</b-form-select-option>
                      <b-form-select-option value="female">Nữ</b-form-select-option>
                      <b-form-select-option value="none">Không xác định</b-form-select-option>
                    </b-form-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label-for="mc-gender-student"
                  label="Ghi chú"
                >
                  <div class="form-label-group">
                    <b-form-textarea v-model="form.class_note"/>
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card title="Đặt lịch">
            <b-row>
              <b-col cols="12">
                <b-form-group
                  label="Chọn ngày"
                  label-for="Appointment"
                  label-cols-md="4"
                >
                  <b-form-datepicker
                    id="Appointment"
                    v-model="form.appointment"
                    class="mb-1"
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card style="text-align: right">
            <b-button
              type="submit"
              variant="primary"
              class="mr-1"
              @click.prevent="submitCreateOrder"
            >
              Submit
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-form>
    <edit-status @onChooseLevel="onChooseLevel" />
    <pay-bill />
  </validation-observer>
</template>

<script>

import { BForm,BCardTitle, BCardSubTitle, BCardHeader, BInputGroupPrepend, BInputGroup, BFormDatepicker, BFormSelect, BFormSelectOption, BRow, BCol, BTab, BTabs, BCard, BFormGroup, BFormInput, BFormTextarea, BButton } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import { required, email } from '@validations'

import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'

import dataFake from './fakeDataCreateOrder'
import EditStatus from './modal/EditStatus.vue'
import PayBill from './modal/PayBill.vue'

export default {
  created () {
    this.form.status = 'Thay đổi trạng thái'
  },
  data() {
    return {
      form: {
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
        address: '',
        country: '',
        status: '',
        note: '',
        children_name: '',
        children_age: 1,
      },
      required,
      email,
      users: dataFake.users,
    }
  },
  components: {
    PayBill,
    BForm,
    BCardTitle,
    BCardSubTitle,
    EditStatus,
    BCardHeader,
    BInputGroupPrepend,
    BInputGroup,
    ValidationProvider,
    ValidationObserver,
    BButton,
    BFormSelect,
    BFormSelectOption,
    BFormDatepicker,
    BFormTextarea,
    BFormInput,
    BRow,
    BCol,
    BTab,
    BCard,
    BTabs,
    BFormGroup,
    FeatherIcon,
  },
  methods: {
    onChooseLevel(e) {
      this.form.status = e.name
      console.log('chosse', e)
    },
    submitCreateOrder() {
      this.$refs.createOrder.validate().then(success => {
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

</style>
