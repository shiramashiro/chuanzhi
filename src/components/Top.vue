<template>
  <div class="top">
    <div class="menu-wrapper">
      <div class="left">
        <router-link to="/">
          <img src="@/assets/img/logo.png" />
        </router-link>
      </div>
      <div class="right">
        <ul class="ul">
          <li class="li">
            <span style="display: flex">
              <el-input
                style="width: 300px; margin-right: 5px"
                size="mini"
                v-model="searchValue"
                placeholder="搜索图书"
              ></el-input>
              <el-button size="mini">搜索</el-button>
            </span>
          </li>
          <li v-for="(item, index) in menuItems" :key="index" class="li">
            <a v-bind:href="item.href">
              <span class="span">
                <i v-bind:class="item.style" v-if="item.style !== ''"></i>
                {{ item.label }}
              </span>
            </a>
          </li>
          <!-- 如果未登录不渲染该块内容 -->
          <li class="li" v-if="notlogin">
            <router-link to="/signin">
              <span class="span">
                <i class="el-icon-s-custom"></i>登陆 \ 注册
              </span>
            </router-link>
          </li>
          <!-- 用户状态信息保存在vuex中 -->
          <el-dropdown v-if="!notlogin">
            <li class="li">
              <router-link to="user">
                <span class="span">
                  <el-avatar :size="25" :src="avatar"></el-avatar>
                </span>
              </router-link>
            </li>
            <el-dropdown-menu>
              <template v-for="(item, index) in dropMenuItems">
                <router-link
                  :to="item.href"
                  :key="index"
                >
                  <el-dropdown-item>
                    <i :class="item.style"></i>{{ item.label }}
                  </el-dropdown-item>
                </router-link>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </ul>
      </div>
    </div>
    <div class="navbar-wrapper">
      <ul class="ul">
        <li class="li" v-for="(item, index) in typeItems" :key="index">
          <a v-bind:href="item.href" v-if="item.href !== ''">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notlogin: false,
      searchValue: '',
      avatar: require('@/assets/img/avatar04.jpg'),
      menuItems: [
        {
          href: '/cart',
          label: '购物车',
          style: 'el-icon-shopping-cart-1',
          isHaveDropMenu: false
        },
        {
          href: '/help',
          label: '帮助中心',
          style: 'el-icon-warning-outline',
          isHaveDropMenu: false
        }
      ],
      typeItems: [
        {
          label: '文学',
          href: '#'
        },
        {
          label: '生活',
          href: '#'
        },
        {
          label: '计算机',
          href: '#'
        },
        {
          label: '外语',
          href: '#'
        },
        {
          label: '经营',
          href: '#'
        },
        {
          label: '励志',
          href: '#'
        },
        {
          label: '社科',
          href: '#'
        },
        {
          label: '学术',
          href: '#'
        },
        {
          label: '少儿',
          href: '#'
        },
        {
          label: '艺术',
          href: '#'
        },
        {
          label: '原版',
          href: '#'
        },
        {
          label: '科技',
          href: '#'
        },
        {
          label: '考试',
          href: '#'
        },
        {
          label: '生活百科',
          href: '#'
        },
        {
          label: '全部商品',
          href: '#'
        }
      ],
      dropMenuItems: [
        {
          href: '/order',
          label: '我的订单',
          style: 'el-icon-s-order'
        },
        {
          href: '/message',
          label: '我的消息',
          style: 'el-icon-chat-round'
        },
        {
          href: '/channel',
          label: '我的频道',
          style: 'el-icon-bell'
        },
        {
          href: '/account',
          label: '我的账户',
          style: 'el-icon-s-finance'
        },
        {
          href: '/vip',
          label: '会员中心',
          style: 'el-icon-s-custom'
        },
        {
          href: '/subscriptions',
          label: '订阅店铺',
          style: 'el-icon-thumb'
        },
        {
          href: '/collection',
          label: '收藏',
          style: 'el-icon-folder-checked'
        },
        {
          href: '/settings',
          label: '设置',
          style: 'el-icon-s-operation'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.top {
  .menu-wrapper {
    margin: 1% 0;
    padding: 0 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .right {
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

          .span {
            font-size: 17px;
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

  .navbar-wrapper {
    background: rgb(11, 162, 154);
    margin: 25px 0;
    padding: 10px 15%;

    .ul {
      margin: 0;
      list-style: none;
      display: flex;
      padding: 0;
      justify-content: space-between;

      .li {
        margin: 0 10px;

        a {
          color: white;
          font-size: 17px;
        }
      }

      .li:first-child {
        margin: 0 10px 0 0;
      }

      .li:last-child {
        margin: 0 0 0 10px;
      }
    }
  }
}
</style>
