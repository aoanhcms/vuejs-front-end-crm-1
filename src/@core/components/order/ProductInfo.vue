<template>
  <b-card
    border-variant="danger"
    id="product-info"
  >
    <b-card-header
      header-bg-variant="danger"
    >
      <b-card-title style="color: white">Sản phẩm hàng Hóa</b-card-title>
      <b-card-sub-title>
        <b-button
          variant="primary"
          size="sm"
          style="margin-right: 10px;"
          @click="addProduct"
        >
          <feather-icon
            icon="PlusIcon"
            class="mr-50"
          />
          <span class="align-middle">Thêm Sản phẩm</span>
        </b-button>
      </b-card-sub-title>
    </b-card-header>
    <b-row>
      <b-col md="12" id="product-info-list">
        <div
          class="item-product"
          v-for="(product, i) in products"
          :key="i"
        >
          <b-row no-gutters>
            <b-col>
              <b-form-input placeholder="Tên sản phẩm" disabled />
            </b-col>
            <b-col>
              <b-form-select />
            </b-col>
            <b-col cols="1" style="text-align: right">
              <b-button variant="danger" @click="Delete(i)"><feather-icon icon="DeleteIcon" /></b-button>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col>
              <b-form-group label="Kho">
                <b-form-select />
              </b-form-group>
            </b-col>
            <b-col >
              <b-form-group label="Trọng lượng (g)">
                <b-form-input />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Giá bán">
                <b-form-input disabled/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Giảm giá">
                <b-form-input />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Giảm còn">
                <b-form-input />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Số lượng">
                <b-form-input />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Thành tiền">
                <b-form-input disabled />
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BFormSelect, BCardTitle, BCardSubTitle, BCardHeader, BRow, BCol, BCard, BFormGroup, BFormInput, BButton } from 'bootstrap-vue'
import FeatherIcon from '../feather-icon/FeatherIcon.vue'

export default {
  methods: {
    addProduct() {
      this.products.push({})
    },
    Delete(k) {
      this.products = this.products.filter((p, kk) => kk !== k)
    },
  },
  data() {
    return {
      products: [],
    }
  },
  components: {
    BFormSelect,
    BCardTitle,
    BCardSubTitle,
    BCardHeader,
    BRow,
    BCol,
    BCard,
    BFormGroup,
    BFormInput,
    BButton,
    FeatherIcon,
  },
}
</script>

<style>
  #product-info .card-body {
    padding: unset
  }
  #product-info-list > .item-product {
    border: 1px solid rgb(185, 180, 180);
    margin: 6px;
    padding: 10px 5px 0px 10px;
    border-radius: 5px;
    background-color: beige;
    box-shadow: 1px 1px 1px rgb(116, 114, 114);
  }
</style>