<template>
  <b-modal
    id="modal-2"
    size="xl"
    title="Tạo phiếu thanh toán"
    hide-footer
  >
    <b-container fluid>
      <div>
        <b-form
          ref="form"
          :style="{height: trHeight}"
          class="repeater-form"
          @submit.prevent="repeateAgain"
        >
        <!-- Row Loop -->
          <b-row
            v-for="(item, index) in items"
            :id="item.id"
            :key="item.id"
            ref="row"
          >

            <!-- Item Name -->
            <b-col md="4">
              <b-form-group
                label="Item Name"
                label-for="item-name"
              >
                <b-form-select>
                  <b-form-select-option>
                    Tiền mặt
                  </b-form-select-option>
                  <b-form-select-option>
                    Thẻ
                  </b-form-select-option>
                  <b-form-select-option>
                    Chuyển khoảng
                  </b-form-select-option>
                </b-form-select>
              </b-form-group>
            </b-col>

            <!-- Cost -->
            <b-col md="2">
              <b-form-group
                label="Số tiền"
                label-for="cost"
              >
                <b-form-input
                  id="cost"
                  type="number"
                />
              </b-form-group>
            </b-col>

            <!-- Quantity -->
            <b-col md="2">
              <b-form-group
                label="Ghi chú"
                label-for="note"
              >
                <b-form-input
                  id="note"
                />
              </b-form-group>
            </b-col>

            <!-- Remove Button -->
            <b-col
              lg="2"
              md="3"
              class="mb-50"
            >
              <b-button
                v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                variant="outline-danger"
                class="mt-0 mt-md-2"
                @click="removeItem(index)"
              >
                <feather-icon
                  icon="XIcon"
                  class="mr-25"
                />
                <span>Delete</span>
              </b-button>
            </b-col>
            <b-col cols="12">
              <hr>
            </b-col>
          </b-row>
        </b-form>
      </div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="repeateAgain"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-25"
        />
        <span>Add New</span>
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="success"
      >
        <feather-icon
          icon="SaveIcon"
          class="mr-25"
        />
        <span>Save</span>
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { BFormSelect, BFormSelectOption, BContainer, BForm, BRow, BCol, BModal, BButton, BFormGroup, BFormInput } from 'bootstrap-vue'
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue'

import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormSelect,
    BFormSelectOption,
    BContainer,
    FeatherIcon,
    BModal,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      nextTodoId: 2,
    }
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
}
</script>

<style>
</style>
