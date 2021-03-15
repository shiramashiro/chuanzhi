<template>
  <div class="cart">
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
    <div class="notlogin-tip" v-if="notlogin">
      <span class="tip-message">您还没有登陆哟！</span><br />
      <span class="tip-link"><el-link href="/signin">点击登录</el-link></span>
    </div>
    <div class="cart-wrapper" v-else>
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
        <div class="address">
          <template v-for="(item, index) in addressItems">
            <shipping-address
              class="li"
              :key="index"
              @choose="choose($event)"
              :class="{ active: isActive }"
              v-bind:currentActiveIndex="index"
              v-bind:address="item"
            ></shipping-address>
          </template>
        </div>
      </div>
      <div v-else-if="nextSetpIndex === 3" class="identification">3</div>
      <div class="step-button">
        <el-button size="mini" @click="back()">上一步</el-button>
        <el-button size="mini" @click="next()">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ShippingAddress from '@/components/ShippingAddress.vue'

export default {
  components: { ShippingAddress },
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
      addressItems: [
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
      notlogin: false,
      nextSetpIndex: 1,
      beforeActiveIndex: 0,
      isActive: false,
      stepItems: ['购物车', '结算中心', '确认订单']
    }
  },
  methods: {
    next() {
      if (this.nextSetpIndex === 3) {
        this.$message({
          type: 'error',
          message: '已经是最后一步了！'
        })
      } else {
        this.nextSetpIndex += 1
      }
    },
    back() {
      if (this.nextSetpIndex === 1) {
        this.$message({
          type: 'error',
          message: '已经回退到第一步了！'
        })
      } else {
        this.nextSetpIndex -= 1
      }
    },
    choose(currentActiveIndex) {}
  }
}
</script>

<style lang="scss" scoped>
.cart {
  margin: 1% 15%;

  .bread-crumb {
    .bread-crumb-wrapper {
      display: flex;
      justify-content: flex-end;
      margin: 0 0 15px 0;
    }
  }

  .notlogin-tip {
    text-align: center;
    margin: 4% 0;

    .tip-message {
      font-size: 50px;
    }
  }

  .cart-wrapper {
    .table {
      margin-bottom: 15px;
    }

    .step-button {
      display: flex;
      justify-content: flex-end;
    }

    .settlement {
      .address {
        display: flex;
        flex-direction: row;

        .li {
          margin-right: 20px;
        }

        .li:last-child {
          margin-right: 0;
        }

        .active {
          border: 5px dashed rgb(11, 162, 154);
        }
      }
    }
  }
}
</style>
