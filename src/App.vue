<template>
    <div id="app">
        <navigation />
        <router-view />
        <div
            class="footer"
            style="
                    margin-top: 15px;
                    background: rgb(249, 249, 249);
                    padding: 1% 15%;
                    height: 100%;
                "
        >
            <div class="footer-wrapper">
                <div class="footer-top">
                    <div
                        class="item"
                        v-for="(listItem, index) in bottomList"
                        :key="index"
                    >
                        <div class="title">{{ listItem.type }}</div>
                        <div class="label">
                            <div
                                class="label-item"
                                v-for="(item, i) in listItem.items"
                                :key="i"
                            >
                                <el-link class="router" v-bind:href="item.href">
                                    {{ item.label }}
                                </el-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <img
                        style="width: 100px; height: 30px"
                        src="@/assets/img/logo.png"
                    />
                    <div class="copyright">
                        Copyright © 2020-2021 郑人滏. 保留代码权利<br />
                        GitHub:
                        <el-link
                            type="info"
                            href="https://github.com/shiramashiro"
                            >https://github.com/shiramashiro</el-link
                        >
                        | 博客园:
                        <el-link
                            type="info"
                            href="https://www.cnblogs.com/shiramashiro/"
                            >https://www.cnblogs.com/shiramashiro</el-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navigation from '@/components/navigation.vue'

export default {
    components: { navigation },
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

<style lang="css" scoped>
/*每个页面公共css */
@import 'colorui/main.css';
@import 'colorui/icon.css';

.footer-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0 20px 0;
}

.footer-bottom {
    width: 100%;
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

.router {
    margin-right: 10px;
}

.label {
    display: flex;
}
</style>
