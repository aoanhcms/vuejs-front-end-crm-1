<template>
  <div>
    <b-row>
      <b-col cols="6">
        <b-form-group>
          <b-form-select
            v-model="selected"
            :options="options"
            @change="changePrint"
          />
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <div style="font-size: 20px">PREVIEW</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <quill-editor
          v-model="content"
          :options="editorOption"
        />
      </b-col>
      <b-col cols="6">
        <div v-if="content != ''" style="border: 2px solid #000; padding: 10px">
          <div v-html="content"></div>
        </div>
        <b-alert variant="primary" show style="padding: 30px">
          <div><b>Chú ý:</b></div>
          <div>- Màn hình bên trái là nội dung mẫu in quý khách có thể thay đổi (Theo khổ giấy cần in: Khổ A4|A5, Khổ A4|A5 (khổ ngang), Mẫu 8 đơn hàng 1 trang (Khổ dọc), Mẫu 6 đơn hàng 1 trang (Khổ ngang)).</div>
          <div>- Màn hình bên phải là màn hình xem trước mẫu in sau khi thay đổi.</div>
          <div>- Nút <b>"Đăt làm mặc định"</b>, nếu quý khách muốn sử dụng mẫu in này làm mặc định chọn khi in.</div>
          <div>- Sau khi chỉnh sửa hoàn tất, quý khách nhấn <b>"Lưu cài đặt"</b> để lưu lại nội dung đã chỉnh sửa.</div>
          <div><b>Giải thích thuật ngữ:</b></div>
          <div>- <b>"Từ khóa cho mẫu in"</b>: Là tất cả các từ khóa quý khách có thể sử dụng cho mẫu in này. Từ khóa của mẫu in được xác định bên trong ký tự {__ __}, ví dụ: {__MA_DH__} là mã đơn hàng.</div>
          <div>- Khi quý khách sử dụng từ khóa này, hệ thống sẽ thay thế từ khóa đó bằng dữ liệu đã được xác định của đơn hàng. Ví dụ: trên màn hình từ khóa <b>"{__MA_DH__}"</b> sẽ được thay thế bằng mã đơn hàng <b>4193531</b> khi in.</div>
          <div>- Quý khách có thể lựa chọn nhiều từ khóa mẫu in, bằng cách click vào biểu tượng <b>"Từ khóa cho mẫu in"</b>.</div>
          <div><b>Lưu ý:</b></div>
          <div>- Nội dung xem trước mẫu in chỉ là một nội dung mẫu, không phải là một đơn hàng cụ thể.</div>
        </b-alert>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// eslint-disable-next-line
import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'

import quillTable from 'quill-table'
import { BRow, BCol, BFormGroup, BFormSelect, BAlert, } from 'bootstrap-vue'
import { quillEditor } from 'vue-quill-editor'
import Quill from 'quill'

Quill.register(quillTable.TableCell)
Quill.register(quillTable.TableRow)
Quill.register(quillTable.Table)
Quill.register(quillTable.Contain)
Quill.register('modules/table', quillTable.TableModule);
export default {
  watch: {
  },
  methods: {
    changePrint() {
      switch (this.selected) {
        case 1: {
          this.content = 'Khổ A4';
        }
        break;
        case 2: {
          this.content = 'Khổ A4| A5 New';
        }
        break;
        default: this.content = '';
      }
    },
  },
  components: {
    quillEditor, BRow, BCol, BFormGroup, BFormSelect, BAlert,
  },
  data: () => ({
    content: '',
    selected: null,
    editorOption: {
      theme: 'snow',
      modules: {
        table: true,
      },
    },
    options: [
      { value: null, text: 'Chọn khổ In' },
      { value: 1, text: 'Khổ A4| A5' },
      { value: 2, text: 'Khổ A4| A5 New' },
      { value: 3, text: 'Khổ A4| A5 Khổ Ngang' },
      { value: 4, text: 'Khổ A4| A5 (Khổ Ngang) New' },
      { value: 5, text: '4 Đơn Hàng Trên 1 Trang A4 (Khổ Ngang)' },
      { value: 6, text: '4 Đơn Hàng Trên 1 Trang A4 (Viettel Khổ Dọc)' },
      { value: 7, text: '6 Đơn Hàng Trên 1 Trang (Khổ Dọc)' },
      { value: 8, text: '6 Đơn Hàng Trên 1 Trang (Khổ Ngang)' },
      { value: 9, text: '8 Đơn Hàng Trên 1 Trang (Khổ Dọc)' },
      { value: 10, text: 'Khổ K80' },
    ],
  }),
}
</script>
