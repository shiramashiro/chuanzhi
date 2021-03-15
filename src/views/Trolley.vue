<template>
  <div class="trolley">
    <div class="bread-crumb">
      <div class="bread-crumb-wrapper">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item, index) in breadcrumb"
            :key="index"
            :to="item.href"
            >{{ item.label }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
      <el-image style="width: 100%; border-radius: 3px" :src="img"></el-image>
    </div>
    <div class="tip" v-if="!isLogin">
      <span>您还未登陆</span><br />
      <el-link href="/signin">点击登录</el-link>
    </div>
    <div class="trolley-wrapper" v-else>
      <el-steps
        :active="nextSetpIndex"
        finish-status="success"
        simple
        style="margin-top: 10px"
      >
        <el-step
          v-for="(item, index) in stepItems"
          :key="index"
          :title="item"
        ></el-step>
      </el-steps>
      <div v-if="nextSetpIndex === 1" class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ textAlign: 'center' }"
        >
          <el-table-column type="index" width="55"></el-table-column>
          <el-table-column prop="name" label="商品名称"> </el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="num" label="数量"></el-table-column>
          <el-table-column prop="smallTotal" label="小计"></el-table-column>
          <el-table-column label="操作">
            <el-button type="text" size="small">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div v-else-if="nextSetpIndex === 2" class="settlement">
        <div class="location">
          <template v-for="(item, index) in locationItems">
            <shipping-location
              class="li"
              :key="index"
              :location="item"
              @choose="choose(index)"
            ></shipping-location>
          </template>
        </div>
        <div style="margin-top: 20px; font-size: 16px">
          <span style="font-weight: 600">收货地址：</span
          >{{ locationItems[selectedLocationIndex].acceptedDetails }}
          <span style="font-weight: 600">收货人：</span
          >{{ locationItems[selectedLocationIndex].acceptedName }}
        </div>
        <div class="settlement-footer">
          <div class="new-button">
            <el-button size="mini" @click="$router.push('/new/address')"
              >使用新地址</el-button
            >
          </div>
          <div class="management">
            <el-button
              type="text"
              size="mini"
              @click="$router.push('/manage/address')"
              >管理收货地址</el-button
            >
          </div>
        </div>
        <h3 style="margin: 0 0 20px 0">确认订单信息</h3>
        <table-details
          :tableTitle="tableTitle"
          :tableData="tableData"
        ></table-details>
      </div>
      <div v-else-if="nextSetpIndex === 3" class="identification">
        <div class="payway">
          <h3>选择支付方式：</h3>
          <el-radio-group v-model="radio">
            <el-radio-button label="支付宝"></el-radio-button>
            <el-radio-button label="微信"></el-radio-button>
            <el-radio-button label="银联"></el-radio-button>
          </el-radio-group>
        </div>
        <el-button @click="payBills()">确认支付</el-button>
      </div>
      <div class="step-button">
        <el-button size="mini" @click="goLastStep()">上一步</el-button>
        <el-button size="mini" @click="goNextStep()">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ShippingLocation from '@/components/ShippingLocation.vue'
import TableDetails from '@/components/TableDetails.vue'

import { Trolley } from '@/entity/trolley.js'

export default {
  components: { ShippingLocation, TableDetails },
  data() {
    return {
      img: require('@/assets/img/page_ad.jpg'),
      breadcrumb: [
        {
          href: '/',
          label: '首页'
        },
        {
          href: '/cart',
          label: '购物车'
        }
      ],
      // ！！！购物车书籍，异步数据！！！
      tableData: [
        {
          name: 'Java Web程序开发进阶',
          price: 39.5,
          num: 1,
          smallTotal: 39.5
        },
        {
          name: 'Java基础入门',
          price: 44.5,
          num: 1,
          smallTotal: 44.5
        }
      ],
      // ！！！地址信息，异步数据！！！
      locationItems: [
        {
          acceptedName: '郑人滏',
          acceptedDetails: '涪城区 科创园 园兴西街2号西南财经大学天府学院',
          phone: '18508153489'
        },
        {
          acceptedName: '郑人滏',
          acceptedDetails: '岳池县 九龙镇 东湖路天羿荣耀城',
          phone: '18508153489'
        }
      ],
      selectedLocationIndex: 0,
      tableTitle: ['商品名', '单价', '数量', '小计'],
      // ！！！用户登录状态，提取到vuex！！！
      isLogin: true,
      nextSetpIndex: 1,
      stepItems: ['购物车', '确认订单', '支付订单'],
      radio: '支付宝'
    }
  },
  methods: {
    goNextStep() {
      if (this.nextSetpIndex === 3) {
        this.$message({
          type: 'error',
          message: '已经是最后一步了！'
        })
      } else {
        this.nextSetpIndex += 1
      }
    },
    goLastStep() {
      if (this.nextSetpIndex === 1) {
        this.$message({
          type: 'error',
          message: '已经回退到第一步了！'
        })
      } else {
        this.nextSetpIndex -= 1
      }
    },
    choose(index) {
      this.selectedLocationIndex = index
    },
    // 点击支付，获取地址和所有的表格数据
    payBills() {
      let trolley = new Trolley(
        this.locationItems[this.selectedLocationIndex],
        this.tableData
      )
      console.log(trolley)
    }
  }
}
</script>

<style lang="scss" scoped>
.trolley {
  margin: 1% 15%;

  .bread-crumb {
    .bread-crumb-wrapper {
      display: flex;
      justify-content: flex-end;
      margin: 0 0 15px 0;
    }
  }

  .tip {
    text-align: center;
    margin: 4% 0;
    font-size: 50px;
  }

  .trolley-wrapper {
    .table {
      margin-bottom: 15px;
    }

    .step-button {
      display: flex;
      justify-content: flex-end;
    }

    .settlement {
      margin-bottom: 20px;

      .location {
        margin: 20px 0 0 0;
        display: flex;
        flex-direction: row;

        .li {
          margin-right: 20px;
        }

        .li:last-child {
          margin-right: 0;
        }
      }

      .settlement-footer {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px 0 20px 0;
      }
    }

    .identification {
      margin: 20px 0;

      .payway {
        margin: 20px 0;
      }
    }
  }
}
</style>
