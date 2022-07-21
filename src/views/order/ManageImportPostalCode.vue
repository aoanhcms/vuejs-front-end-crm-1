<template>
  <div>
    <b-row>
      <b-col cols="4">
        <!-- Styled -->
        <b-form-file v-model="file2" plain style="width: 250px;display: inline;"></b-form-file>
        <b-button variant="warning">Bước 1: Tải lên xử lý</b-button>
      </b-col>
      <b-col cols="4">
        <b-button variant="info">Bước 2 Import mã bưu điện</b-button>
      </b-col>
      <b-col cols="4">
        <b-row>
          <b-col cols="6" style="padding-bottom: 20px">
            <b-button variant="primary">Thành Công</b-button> hoặc</b-col>
          <b-col cols="6">
            <b-button variant="success">Đã Thu Tiền</b-button> hoặc</b-col>
          <b-col cols="6">
            <b-button variant="danger">Chuyển Hoàn</b-button>  hoặc</b-col>
          <b-col cols="6" >
            <b-button>Trả Hàng Về Kho</b-button></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row  style="padding-top: 20px">
      <b-col cols="7">
        <div>
          Nhấn vào ảnh để tải File mẫu (Mẫu mới cập nhật, Quý khách vui lòng tải lại):
        <br/>
          <img :src="require('@/assets/images/mau_import_buu_dien.png')" />
        </div>
      </b-col>
      <b-col cols="5">
        <b-alert variant="primary" class="box" show>
          <div class="alert alert-warning-custom" style="height: auto;">
            Bước 1: Tải file excel đã được <strong>chỉnh thứ tự cột theo file mẫu</strong> (rất quan trọng)<br>
            Bước 2: Import Mã bưu điện để khớp Mã đơn hàng và Mã bưu điện<br>
            Bước 3: Sau khi Bưu điện trả về kết quả, quý khách tải file excle lên và import Thành công hoặc Chuyển hoàn.<br>
            Bước 4: Sau khi đơn đã thành công, bạn có thể import đã thu tiền hay chưa.<br>
            Lưu ý:
            <br>
            - Cột Trị giá phải điền thông tin đúng bằng tổng tiền của đơn hàng
            <br>
            - Đơn phải trải qua trạng thái Xác nhận chốt đơn thì mới import chuyển trạng thái.
            <br>
            - Đơn phải trải qua trạng thái Thành công/ Đã thu tiền thì không được chuyển sang trạng thái Chuyển hoàn và ngược lại.
            <br>
            - Để import đơn hàng tại trạng thái Đã thu tiền, đơn hàng cần được import mã bưu điện trước và phải trải qua trạng thái Thành công.
            <br>
            - Khi import chuyển trạng thái đơn hàng:
            <ul>
              <li style="list-style: none;">+   Nếu trong file không điền cột trị giá và phí vận chuyển, đơn hàng vẫn giữ nguyên giá trị. </li>
              <li style="list-style: none;">+   Nếu trong file điền cột trị giá và phí vận chuyển, đơn hàng sẽ được update theo giá trị đã điền trong file. </li>
            </ul>
          </div>
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <table class="table table-bordered">
        <tbody><tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><strong>Tổng</strong></td>
          <td align="right"><strong>0</strong></td>
          <td align="right"><strong>0</strong></td>
          <td align="right"><strong>0</strong></td>
        </tr>
        </tbody>
      </table>
    </b-row>
  </div>
</template>

<script>
import { BFormFile, BRow, BCol, BButton, BAlert } from 'bootstrap-vue'

export default {
  components: {
    BFormFile, BRow, BCol, BButton, BAlert,
  },
  data() {
    return {
      file1: null,
      file2: null,
    }
  },
}
</script>
<style>
.box {
  padding: 10px;
  border-radius: 10px;
}
</style>
