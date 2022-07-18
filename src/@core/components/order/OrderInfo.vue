<template>
  <b-card
    header="Thông tin đơn hàng"
    border-variant="primary"
    header-bg-variant="primary"
    header-text-variant="white"
  >
    <b-row>
      <b-col cols="12">
        <b-form-group style="padding-top: 10px">
          <b-row>
            <b-col>
              <b-form-checkbox>Nội thành</b-form-checkbox>
            </b-col>
            <b-col>
              <b-form-checkbox>Nội bộ</b-form-checkbox>
            </b-col>
            <b-col>
              <b-form-checkbox>Khuyến mãi</b-form-checkbox>
            </b-col>
          </b-row>
        </b-form-group>
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
          label="Giao hàng"
          label-for="sale"
          label-cols-md="4"
        >
          <b-form-select v-model="form.giao_hang" :options="[{ text: 'Chọn', value: null}]"/>
        </b-form-group>
        <hr/>
        <b-form-group
          label="Phân loại sản phẩm"
          label-for="sale"
          label-cols-md="4"
        >
          <b-form-select v-model="form.phan_loai_sp"  :options="[{ text: 'Chọn', value:null}]"/>
        </b-form-group>
        <hr/>
        <b-row>
          <b-col>
            <b-form-group
              label="Nguồn MKT"
              label-for="sale"
              label-cols-md="4"
            >
              <b-form-select v-model="form.mkt_source" :options="Option.orderSourceOptions" />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Loại đơn"
              label-for="sale"
              label-cols-md="4"
            >
              <b-form-select v-model="form.type_order" :options="Option.typeOrderOptions" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          label="Người tạo đơn"
          label-for="sale"
          label-cols-md="4"
        >
          <b-form-select v-model="form.creater_order" :options="[{text: 'Chọn người tạo', value: null}]" />
        </b-form-group>
        <b-form-group
          label="Chia đơn cho"
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
          label="Nguồn Up Sale"
          label-for="total"
          label-cols-md="4"
        >
          <b-form-select>
            <b-form-select-option>No selected</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <div>Bổ sung các trường UCA</div>
        <b-form-group
          label="Nguồn Shop"
          label-for="note_cancel"
          label-cols-md="4"
        >
          <b-form-input
            id="shop_source"  disabled
          />
        </b-form-group>
        <b-form-group
          label="Người tạo"
          label-for="note"
          label-cols-md="4"
        >
          <b-form-input
            id="note" disabled
          />
        </b-form-group>
        <b-form-group
          label="Nguồn người UpSale"
          label-for="note"
          label-cols-md="4"
        >
          <b-form-input
            id="note" disabled
          />
        </b-form-group>
        <b-form-group
          label="Lý Do Hủy / xem xét lại"
          label-for="note_cancel"
        >
          <b-form-textarea
            id="note_cancel"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <edit-status @onChooseLevel="onChooseLevel" />
  </b-card>
</template>

<script>

import { BFormInput, BFormCheckbox, BRow, BCol, BCard, BFormGroup, BButton, BFormTextarea, BFormSelect, BFormSelectOption } from 'bootstrap-vue'
import constants from '@core/app-config/constants'

import EditStatus from './modal/EditStatus.vue'
export default {
  methods: {
    onChooseLevel(e) {
      this.form.status = e.name
      console.log('chosse', e)
    },
  },
  data() {
    return {
      form: {
        manager_order: '',
        status: '',
        creater_order: null,
        mkt_source: null,
        type_order: null,
        phan_loai_sp: null,
        giao_hang: null,
      },
    }
  },
  computed: {
    Option() {
      return constants
    },
  },
  components: {
    EditStatus,
    BFormInput,
    BFormCheckbox,
    BFormTextarea,
    BFormSelect,
    BFormSelectOption,
    BRow,
    BCol,
    BCard,
    BFormGroup,
    BButton,
  },
}
</script>

<style>

</style>