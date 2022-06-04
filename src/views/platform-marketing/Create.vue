<template>
  <b-card>
    <validation-observer ref="create">
      <b-form>
        <b-row>
          <b-col md="12">
            <b-form-group
              label="Nguồn dữ Liệu"
              label-for="h-source"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Source"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-source"
                    v-model="form.source"
                    :state="errors.length > 0 ? false:null"
                    :options="form.source"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Người Quản lý"
              label-for="h-manager"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Manager"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-manager"
                    v-model="form.manager"
                    :state="errors.length > 0 ? false:null"
                    :options="form.manager"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Nhân viên marketer"
              label-for="h-marketer"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Marketer"
              >
                <b-col sm="6">
                  <b-form-select
                    id="h-marketer"
                    v-model="form.marketer"
                    :state="errors.length > 0 ? false:null"
                    :options="form.marketer"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Tổng số Tin nhắn"
              label-for="h-inbox-count"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="InboxCount"
              >
                <b-col sm="6">
                  <input-minus-plus
                    id="h-inbox-count"
                    v-model="form.inbox_count"
                    :state="errors.length > 0 ? false:null"
                    :options="form.inbox_count"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Tổng số Bình Luận"
              label-for="h-comment-count"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="CommentCount"
              >
                <b-col sm="6">
                  <input-minus-plus
                    id="h-comment-count"
                    v-model="form.comment_count"
                    :state="errors.length > 0 ? false:null"
                    :options="form.comment_count"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Tổng số CMT+INBOX"
              label-for="h-comment-inbox-count"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="CommentInboxCount"
              >
                <b-col sm="6">
                  <input-minus-plus
                    id="h-comment-inbox-count"
                    v-model="form.comment_inbox_count"
                    :state="errors.length > 0 ? false:null"
                    :options="form.comment_inbox_count"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Tổng số Học Viên"
              label-for="h-comment-inbox-count"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="StudentCount"
              >
                <b-col sm="6">
                  <input-minus-plus
                    id="h-student-count"
                    v-model="form.student_count"
                    :state="errors.length > 0 ? false:null"
                    :options="form.student_count"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Ngày Báo Cáo"
              label-for="h-date-report"
              label-cols-md="2"
            >
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="DateReport"
              >
                <b-col sm="6">
                  <b-form-datepicker
                    id="h-date-report"
                    v-model="form.date_report"
                    :state="errors.length > 0 ? false:null"
                    :options="form.date_report"
                  />
                </b-col>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- submit button -->
          <b-col cols="7" style="text-align: right">
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
import { required} from '@validations'
import {
   BFormDatepicker, BFormGroup, BForm, BRow, BCol, BButton, BCard, BFormSelect
} from 'bootstrap-vue'
import InputMinusPlus from '@core/components/form/InputMinusPlus.vue'

export default {
  components: {
    InputMinusPlus,
    BFormDatepicker,
    BFormSelect,
    ValidationProvider,
    ValidationObserver,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
    BCard,
  },
  methods: {
    validationForm() {
      this.$refs.create.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
  data() {
    return {
      form: {
        source: [
          { value: 'google', text: 'Google' },
          { value: 'facebook', text: 'Facebook' },
          { value: 'instagram', text: 'Instagram' },
        ],
        manager: [
          { value: '1', text: 'Danh Sinh' },
        ],
        marketer: [
          { value: '1', text: 'Danh Sinh' },
        ],
        inbox_count: 0,
        comment_count: 0,
        comment_inbox_count: 0,
        student_count: 0,
        date_report: '',
      },
      required,
    }
  },
}
</script>
<style>
  .color-input{
    width: 50%
  }
</style>
