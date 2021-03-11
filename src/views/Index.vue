<template>
  <div class="index">
    <div class="navbar">
      <ul class="ul">
        <li class="li" v-for="(item, index) in navbarItems" :key="index">
          <a class="a" v-bind:href="item.href" v-if="item.href !== ''">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
    <div class="slideshow">
      <el-carousel
        height="395px"
        direction="vertical"
        :autoplay="true"
        :loop="true"
      >
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <img style="width: 100%; height: 100%" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="notice">
      <div class="left">
        <div class="left-header">
          <div class="header-title"><i class="el-icon-bell">公告板</i></div>
          <div class="divider"></div>
        </div>
        <div class="left-text">
          <div>尊敬的传智书城用户：</div>
          <div style="margin-top: 10px">
            为了让大家有更高的购物体验，3月25日起，当日达业务关小黑屋回炉升级！<br />
            具体开放时间请留意公告，感谢大家的支持与理解，祝大家购物愉快！<br />
          </div>
          <div style="float: right; margin-top: 10px">
            3月23日<br />传智播客 传智书城系统管理部
          </div>
        </div>
      </div>
      <div class="right">
        <div class="hader-right">
          <img src="http://oss.norza.cn/imgs/javaweb/index/hottitle.jpg" />
        </div>
        <div class="right-text">
          <ul class="right-ul">
            <li class="right-li" v-for="(item, index) in hotBooks" :key="index">
              <a v-bind:href="item.href">
                <img v-bind:src="item.imgUrl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      carouselItems: [
        'http://oss.norza.cn/imgs/javaweb/index/index_ad02.jpg',
        'http://oss.norza.cn/imgs/javaweb/index/index_ad03.jpg',
        'http://oss.norza.cn/imgs/javaweb/index/index_ad04.jpg',
        'http://oss.norza.cn/imgs/javaweb/index/index_ad05.jpg',
        'http://oss.norza.cn/imgs/javaweb/index/index_ad06.jpg',
        'http://oss.norza.cn/imgs/javaweb/index/index_ad07.jpg'
      ],
      navbarItems: [
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
      hotBooks: [
        {
          imgUrl: require('../assets/img/105.jpg'),
          href: '#'
        },
        {
          imgUrl: require('../assets/img/dulala.jpg'),
          href: '#'
        },
        {
          imgUrl: require('../assets/img/106.jpg'),
          href: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  .slideshow {
    padding: 0 15%;
  }

  .navbar {
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

  .notice {
    padding: 20px 15%;
    display: flex;

    .left {
      padding: 0 10px 0 0;
      font-size: 15px;
      width: 50%;

      .left-header {
        width: 100%;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .header-title {
          width: 20%;
        }

        .divider {
          width: 100%;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px dashed black;
        }
      }

      .left-text {
        margin-top: 10px;
      }
    }

    .right {
      padding: 0 0 0 10px;
      width: 50%;

      .right-ul {
        display: flex;
        margin: 10px 0 0 0;
        height: 170px;
        flex-direction: row;
        justify-content: space-between;

        .right-li {
          list-style: none;

          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
