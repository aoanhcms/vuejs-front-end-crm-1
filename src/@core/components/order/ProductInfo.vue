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
              <b-form-input placeholder="Tên sản phẩm" disabled v-model="product.name" />
            </b-col>
            <b-col>
              <b-form-select v-model="product_select" :options="products_list" @change="updateProduct($event, i)" />
            </b-col>
            <b-col cols="1" style="text-align: right">
              <b-button variant="danger" @click="Delete(i)"><feather-icon icon="DeleteIcon" /></b-button>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col>
              <b-form-group label="Kho">
                <b-form-select v-model="product.kho" :options="[{text: 'Kho Tổng', value: 'kho_tong'}]"/>
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
                <b-form-input v-model="product.so_luong" />
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
    updateProduct(v, i) {
      this.$set(this.products, i, { ...v })
    },
    addProduct() {
      this.products.push({
        kho: 'kho_tong',
        so_luong: 1,
        name: '',
      })
    },
    Delete(k) {
      this.products = this.products.filter((p, kk) => kk !== k)
    },
  },
  data() {
    return {
      products: [],
      product_select: null,
      products_list: [
        {
          text: 'Chọn sản phẩm',
          value: null,
          disabled: true,
        },
        {
          text: 'Tên sản phẩm 1',
          value: { kho: 'kho_tong', so_luong: 2, name: 'Tên sản phẩm 1' },
        },
        {
          text: 'Tên sản phẩm 2',
          value: { kho: 'kho_tong', so_luong: 3, name: 'Tên sản phẩm 2' },
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log('nextTick')
      // The whole view is rendered,
      // so I can safely access or query the DOM. ¯\_(ツ)_/¯
    })
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