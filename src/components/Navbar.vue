<template>
  <div class="navbar">
    <div class="left">
      <router-link to="/">
        <img src="@/assets/img/logo.png" />
      </router-link>
    </div>
    <div class="right">
      <ul class="ul">
        <li class="li">
          <span class="li-span">
            <el-input
              style="width: 170px; margin-right: 5px"
              size="mini"
              v-model="searchValue"
              placeholder="搜索图书"
            ></el-input>
            <el-button size="mini">搜索</el-button>
          </span>
        </li>
        <li v-for="(item, index) in navbarItems" :key="index" class="li">
          <a v-bind:href="item.href">
            <span class="li-inner-item">
              <i v-bind:class="item.style" v-if="item.style !== ''"></i>
              {{ item.label }}
            </span>
          </a>
        </li>
        <li class="li" v-if="notlogin">
          <router-link to="/signup">
            <span class="li-inner-item">
              <i class="el-icon-s-custom"></i>登陆 \ 注册
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notlogin: true,
      searchValue: '',
      navbarItems: [
        {
          href: '#',
          label: '购物车',
          style: 'el-icon-shopping-cart-1'
        },
        {
          href: '#',
          label: '帮助中心',
          style: 'el-icon-warning-outline'
        },
        {
          href: '#',
          label: '我的账户',
          style: 'el-icon-s-finance'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.navbar {
  margin: 1% 0;

  .left {
    float: left;
  }

  .right {
    float: right;
    .ul {
      list-style: none;
      display: flex;
      padding: 0;
      color: rgb(11, 162, 154);
      .li {
        transition: 0.3s;
        margin: 0 10px;
        a {
          color: rgb(11, 162, 154);
        }
        .li-inner-item {
          font-size: 17px;
        }
        .li-span {
          display: flex;
        }
      }
      .li:hover {
        cursor: pointer;
        transition: 0.3s;
        transform: translate(-1px, 0);
        font-weight: 600;
      }
    }
  }
}
</style>
