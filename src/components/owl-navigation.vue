<template>
    <div class="owl-navigation">
        <div class="menu-wrapper">
            <div class="left">
                <router-link to="/">
                    <img
                        src="https://owl-town.oss-cn-chengdu.aliyuncs.com/img/logo/logo.png"
                    />
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
                    <li
                        v-for="(item, index) in menuItems"
                        :key="index"
                        class="li"
                    >
                        <a v-bind:href="item.href">
                            <span class="span">
                                <i
                                    v-bind:class="item.style"
                                    v-if="item.style !== ''"
                                ></i>
                                {{ item.label }}
                            </span>
                        </a>
                    </li>
                    <li class="li" v-if="notlogin">
                        <router-link to="/signin">
                            <span class="span">
                                <i class="el-icon-s-custom"></i>登陆 \ 注册
                            </span>
                        </router-link>
                    </li>
                    <el-dropdown v-if="!notlogin">
                        <li class="li">
                            <router-link to="user">
                                <span class="span">
                                    <el-avatar
                                        :size="25"
                                        :src="avatar"
                                    ></el-avatar>
                                </span>
                            </router-link>
                        </li>
                        <el-dropdown-menu>
                            <template v-for="(item, index) in dropMenuItems">
                                <router-link :to="item.href" :key="index">
                                    <el-dropdown-item>
                                        <i :class="item.style"></i
                                        >{{ item.label }}
                                    </el-dropdown-item>
                                </router-link>
                            </template>
                        </el-dropdown-menu>
                    </el-dropdown>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'owl-navigation',
    data() {
        return {
            notlogin: false, // 用户登录状态
            searchValue: '',
            avatar:
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/img/head-img%20(3).jpeg', // 修改用户信息
            menuItems: [
                {
                    href: '/trolley',
                    label: '购物车',
                    style: 'el-icon-shopping-cart-1',
                    isHaveDropMenu: false
                },
                {
                    href: '/indents',
                    label: '我的订单',
                    style: 'el-icon-s-order'
                }
            ],
            dropMenuItems: [
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
                },
                {
                    href: '/logout',
                    label: '退出',
                    style: 'el-icon-caret-right'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-navigation {
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
}
</style>
