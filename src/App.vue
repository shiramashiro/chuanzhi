<template>
  <div id="app">
    <el-container>
      <!-- 头部区域，所有的页面都会有头部组件 -->
      <el-header style="padding: 0 10%; height: 100%">
        <navbar></navbar>
      </el-header>
      <!-- 身体区域，根据需要切换组件 -->
      <el-main class="main" style="padding: 0">
        <router-view />
      </el-main>
      <!-- 底部区域，所有的页面都会有底部组件 -->
      <el-footer
        class="footer"
        style="margin-top: 20px; background: rgb(249, 249, 249); padding: 1% 15%; height: 100%"
      >
        <div class="footer-container">
          <div class="wrapper">
            <div
              class="item"
              v-for="(listItem, index) in bottomList"
              :key="index"
            >
              <div class="title">{{ listItem.type }}</div>
              <div class="label-container">
                <div class="label" v-for="(item, i) in listItem.items" :key="i">
                  <a class="label-a" v-bind:href="item.href">
                    {{ item.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <img
              style="width: 100px; height: 30px"
              src="@/assets/img/logo.png"
            />
            <div class="copyright">
              Copyright © 2019-2021 郑人滏. 保留代码权利<br/>
              GitHub: <a style="color: #8a8484" href="https://github.com/kong-sa">https://github.com/kong-sa</a>
               | 博客园: <a style="color: #8a8484" href="https://www.cnblogs.com/kongsam/">https://www.cnblogs.com/kongsam/</a>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {
      bottomList: [
        {
          type: '创作',
          items: [
            {
              label: '关于我们',
              href: '#'
            },
            {
              label: '联系我们',
              href: '#'
            }
          ]
        },
        {
          type: '官方',
          items: [
            {
              label: '新浪微博',
              href: '#'
            },
            {
              label: '官方网店',
              href: '#'
            },
            {
              label: '微信公众号',
              href: '#'
            }
          ]
        },
        {
          type: '下载',
          items: [
            {
              label: '移动客户端',
              href: '#'
            },
            {
              label: '官方工具包',
              href: '#'
            }
          ]
        },
        {
          type: '反馈',
          items: [
            {
              label: '帮助中心',
              href: '#'
            },
            {
              label: '用户反馈',
              href: '#'
            },
            {
              label: '用户协议',
              href: '#'
            },
            {
              label: '隐私政策',
              href: '#'
            },
            {
              label: '侵权举报申诉',
              href: '#'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 20px 0;
}

.bottom {
  width: 100%;
  height: 100%;
  text-align: center;
}

.copyright {
  margin-top: 10px;
  font-size: 16px;
  color: #8a8484;
}

.title {
  color: #b5b5b5;
  margin-bottom: 10px;
}

.item {
  margin-right: 20px;
}

.item:last-child {
  margin-right: 0;
}

.label-a {
  margin-right: 10px;
  font-size: 13px;
  color: #333;
}

.label-container {
  display: flex;
}
</style>
