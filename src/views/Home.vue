<template>
  <div>
    <b-row>
      <b-col>
        <filter-date />
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col cols="3">
        <statistic-card
          icon="UsersIcon"
          color="danger"
          statistic="100"
          statistic-title="Số Thành Viên"
        />
      </b-col>
      <b-col cols="3">
        <statistic-card
          icon="ActivityIcon"
          color="danger"
          statistic="12"
          statistic-title="Số Tên Miền"
        />
      </b-col>
      <b-col cols="3">
        <statistic-card
          icon="UsersIcon"
          color="danger"
          statistic="13"
          statistic-title="Số Chiến Dịch"
        />
      </b-col>
      <b-col cols="3">
        <statistic-card
          icon="ActivityIcon"
          color="danger"
          statistic="434.33"
          statistic-title="Số Dư"
        />
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col cols="12">
        <b-card title="Thống kê truy cập">
          <e-chart
            :option-data="option"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow, BCard } from 'bootstrap-vue'
import StatisticCard from '@core/components/statistics-cards/StatisticCardHorizontal.vue'
import FilterDate from '@core/components/dashboard/FilterDate.vue'
import EChart from '@core/components/charts/echart/AppEchartStackedArea.vue'

export default {
  components: 
  {
    FilterDate,
    BCard,
    BCol,
    BRow,
    EChart,
    StatisticCard,
  },
  data() {
    return {
      option: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: [
          {
            name: 'Số lượt truy cập',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            lineStyle: {
              width: 0,
            },
            data: [220, 332, 281, 334, 290, 430, 310, 350, 510, 550, 720, 650, 760, 850],
          },
          {
            name: 'Số lượt bị chặn',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [220, 282, 191, 534, 290, 430, 350, 300, 580, 463, 380, 600, 560, 840],
          },
          {
            name: 'Tổng số',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [750, 232, 601, 154, 390, 330, 410, 510, 420, 320, 580, 690, 650, 800],
          },
        ],
      },
    }
  },
}
</script>

<style>
.echarts {
  width: auto;
}
</style>
