<template>
  <b-row>
    <b-col cols="6">
      <b-card title="Create Order" style="height: 95%">
        <b-tabs>
          <b-tab>
            <template #title>
              <feather-icon icon="PlusIcon"/>
              Thêm Khách mới
            </template>
            <b-form>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    label="Họ tên khách hàng"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Điện thoại"
                    label-cols-md="3"
                  >
                    <b-col cols="9">
                      <b-form-input />
                    </b-col>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Ngày sinh"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Email"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Địa chỉ"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Tên tuổi, của trẻ"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Quốc gia"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Ghi chú"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Id bài post, id fan page"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    label="Id fb khách"
                    label-cols-md="3"
                  ><b-form-input /></b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-tab>
          <b-tab>
            <template #title>
              <feather-icon icon="SearchIcon"/>
                Tìm khách cũ
              </template>
              <b-form>
                <b-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Tìm khách hàng"
                      label-cols-md="4"
                    ><b-form-input /></b-form-group>
                  </b-col>
                </b-row>
              </b-form>
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
              label="Người tạo đơn"
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
              label="Người Quản Lý Đơn"
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
              label="Đơn Từ Marketer"
              label-for="total"
              label-cols-md="4"
            >
              <b-form-input
                type="number"
                id="total"
                placeholder="total"
              />
            </b-form-group>
            <b-form-group
              label="Lý Do Hủy / Xem Xét Lại"
              label-for="total"
              label-cols-md="4"
            >
              <b-form-textarea
                id="total"
                placeholder="total"
              />
            </b-form-group>
            <b-form-group
              label="Ghi Chú"
              label-for="total"
              label-cols-md="4"
            >
              <b-form-textarea
                id="total"
                placeholder="total"
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
      <b-card title="Phiếu thu">
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
      <b-card title="Thông tin lớp học">
        <b-form>
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
                  <b-form-select>
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
                  <b-form-textarea />
                </div>
              </b-form-group>
            </b-col>
            <!-- submit and reset -->
            <b-col>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                type="submit"
                variant="primary"
                class="mr-1"
              >
                Submit
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </b-col>
    <b-col cols="3">
      <b-card title="Đặt lịch">
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Chọn ngày"
              label-for="date"
              label-cols-md="4"
            >
              <b-form-datepicker
                id="date"
                v-model="date"
                class="mb-1"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>

import { BFormDatepicker, BFormSelect, BFormSelectOption, BRow, BCol, BTab, BTabs, BCard, BFormGroup, BFormInput, BFormTextarea, BButton } from 'bootstrap-vue'

import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'

export default {
  methods: {
  },
  components: {
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
  props: {
  },

}
</script>

<style>

</style>
