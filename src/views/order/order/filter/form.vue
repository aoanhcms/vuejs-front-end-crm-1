<template>
  <div>
    <b-row>
    <!--left-->
      <b-col>
        <!--hang 1 left-->
        <b-row no-gutters>
          <b-col cols="3">
            <b-form-group
              label="Nguồn Shop"
            >
              <b-form-select
                v-model="form.source_options.selected"
                :options="form.source_options.options"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>

          <b-col cols="3">
            <b-form-group
              label="Nguồn đơn hàng"
              label-class="labelNguonDonHang"
            >
              <b-form-select
                v-model="form.order_options.selected"
                :options="constantOptions.orderSourceOptions"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>

          <b-col cols="3">
            <b-form-group
              label="Giao hàng"
            >
              <b-form-select
                v-model="form.ship_options.selected"
                :options="form.ship_options.options"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>

          <b-col cols="3">
            <b-form-group>
              <b-dropdown id="dropdown-form" text="Tỉnh thành" ref="dropdown" style="padding-top: 27px;">
                <div class="tinh_thanh_dropdown">
                  <b-form-group>
                    <b-form-select
                      :options="getProvinces"
                    />
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox>Nội Thành</b-form-checkbox>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox>Nội Bộ</b-form-checkbox>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox>Khuyến Mãi</b-form-checkbox>
                  </b-form-group>
                </div>
              </b-dropdown>
            </b-form-group>
          </b-col>

        </b-row>
        <!--hang 2 left-->

        <b-row no-gutters>
          <b-col cols="3">
            <b-form-group
              label="Mã Vạch"
            >
              <b-form-input
                v-model="form.codebar_options.selected"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Phân loại"
            >
              <b-form-select
                v-model="form.category_options.selected"
                :options="constantOptions.CategoryOptions"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Nhóm KH"
            >
              <b-form-select
                v-model="form.group_customer_options.selected"
                :options="constantOptions.groupCustomerOptions"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <!-- hang 3 left-->
        <b-row no-gutters>
          <b-col cols="3">
            <b-form-group
              label="In đơn hàng"
            >
              <b-form-select
                v-model="form.print_options.selected"
                :options="constantOptions.PrintOptions"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Đơn trùng"
            >
              <b-form-select
                v-model="form.match_options.selected"
                :options="constantOptions.MatchOptions"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Nhà Mạng"
            >
              <v-select multiple v-model="form.telco_options.selected" :options="constantOptions.TelcoOptions">
                <template v-slot:option="option">
                  {{ option.text }}
                </template>
                <template v-slot:selected-option="option">
                  {{ option.text }}
                </template>
              </v-select>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- hang 4 left-->
        <b-row>
          <b-col>
            <b-row no-gutters>
              <b-col cols="3">
                <b-form-group label="Khoảng giá từ ">
                  <cleave
                    id="number"
                    v-model="form.price_from"
                    class="form-control"
                    :raw="false"
                    placeholder="10,000"
                    :options="{
                      numeral: true,
                      numeralThousandsGroupStyle: 'thousand',
                    }"
                    @change="filterDone"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="3">
                <b-form-group label="đến">
                  <cleave
                    id="number"
                    v-model="form.price_to"
                    class="form-control"
                    :raw="false"
                    placeholder="10,000"
                    :options="{
                      numeral: true,
                      numeralThousandsGroupStyle: 'thousand',
                    }"
                    @change="filterDone"
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <!--right-->
      <b-col>
        <!-- hang 1-->
        <b-row no-gutters>
          <b-col>
            <b-form-group
              label="Loại đơn"
            >
              <b-form-select
                v-model="form.type_order_options.selected"
                :options="constantOptions.typeOrderOptions"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Mã Hàng"
            >
              <b-form-input
                v-model="form.product_code_options.selected"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Nhân Viên"
            >
              <b-form-select
                v-model="form.staff_options.selected"
                :options="form.staff_options.options"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Marketing"
            >
              <b-form-select
                v-model="form.marketing_options.selected"
                :options="form.marketing_options.options"
                class="select_filter"
                @change="filterDone"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-row no-gutters>
              <b-col>
                <b-form-group
                  label="Sale"
                >
                  <b-form-select
                    v-model="form.sale_options.selected"
                    :options="form.sale_options.options"
                    class="select_filter"
                    @change="filterDone"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label="NV Chốt"
                >
                  <b-form-select
                    v-model="form.staff_confirmed_options.selected"
                    :options="form.staff_confirmed_options.options"
                    class="select_filter"
                    @change="filterDone"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label="Nguồn Upsale"
                >
                  <b-form-select
                    v-model="form.upsale_options.selected"
                    :options="constantOptions.UpSaleOptions"
                    class="select_filter"
                    @change="filterDone"
                  />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group
                  label="Chọn Kho"
                >
                  <b-form-select
                    v-model="form.upsale_options.selected"
                    :options="form.upsale_options.options"
                    @change="filterDone"
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!--hang 2-->
        <b-row>
          <b-col></b-col>
        </b-row>
        <!--hang 3-->
        <b-row no-gutters>
          <b-col cols="3">
            <b-form-group
              label="Tùy Chọn Hiển Thị"
            >
              <b-form-checkbox
                switch
                v-model="form.staff_allow_all"
                @change="filterDone">Hiển thị toàn bộ NV</b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col cols="3" offset="3">
            <b-form-group label="ID facebook">
              <b-form-input />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group label="Chọn Page">
              <b-form-select :options="['Tất cả page']" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import PcVn from 'pc-vn'
import vSelect from 'vue-select'
import { BDropdown, BRow, BCol, BFormInput, BFormSelect, BFormGroup, BFormCheckbox } from 'bootstrap-vue'
import Cleave from 'vue-cleave-component'
import constants from '@/@core/app-config/constants'

export default {
  data() {
    return {
      selected: { name: 'Square', id: 1 },
      options: [{ name: 'Square', id: 1 }],
      form: {
        price_from: 0,
        price_to: 0,
        staff_allow_all: true,
        source_options: {
          selected: null,
          options: [{
            value: null, text: 'Nguồn shop', selected: true, disabled: true,
          }],
        },
        order_options: {
          selected: 1,
        },
        ship_options: {
          selected: 1,
        },
        province_options: {
          selected: null,
        },
        type_order_options: {
          selected: null,
        },
        product_code_options: {
          selected: '',
        },
        staff_options: {
          selected: 1,
          options: [{
            value: 1, text: 'Tất cả NV',
          }],
        },
        marketing_options: {
          selected: 1,
          options: [{
            value: 1, text: 'Tất cả MKT',
          }],
        },
        sale_options: {
          selected: 1,
          options: [{
            value: 1, text: 'Tất cả Sale',
          }],
        },
        staff_confirmed_options: {
          selected: 1,
          options: [{
            value: 1, text: 'Tất cả NV',
          }],
        },
        upsale_options: {
          selected: 1,
          options: [{
            value: null, text: 'Chọn Kho',
          },
          {
            value: 1, text: 'Kho Tổng',
          }],
        },
        codebar_options: {
          selected: '',
        },
        category_options: {
          selected: 1,
        },
        group_customer_options: {
          selected: 1,
        },
        print_options: {
          selected: 1,
        },
        match_options: {
          selected: 1,
        },
        telco_options: {
          selected: null,
          options: [
            { text: 'Tất cả nhà mạng' },
            { text: 'Viettel' },
            { text: 'Mobifone' },
            { text: 'Tất cả nhà mạng' },
          ],
        },
      },
    }
  },
  components: {
    vSelect,
    Cleave,
    BDropdown,
    BFormCheckbox,
    BFormGroup,
    BRow,
    BCol,
    BFormInput,
    BFormSelect,
  },
  computed: {
    constantOptions() {
      return constants
    },
    getProvinces() {
      return PcVn.getProvinces().map(p => {
        return {
          text: p.name.replace('Tỉnh ', '').replace('Thành phố ', ''),
          value: p.code,
        }
      })
    },
  },
  methods: {
    filterDone() {
      this.$emit('filterDone', this.form)
    },
  },
}
</script>
<style>
@import "~vue-select/dist/vue-select.css";
</style>
<style>
  .select_filter {
    width: 100%
  }
  .labelNguonDonHang {
    font-size: 13px;
  }
  .tinh_thanh_dropdown {
    padding: 10px;
  }
  .vs__dropdown-toggle {
    min-height: 37px;
  }
  #dropdown-form {
    margin-left: 10px;
  }
</style>