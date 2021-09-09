<template>
    <div class="owl-navigation">
        <div class="menu-wrapper">
            <div class="left">
                <router-link to="/">
                    <img
                        src="https://generic-data.oss-cn-chengdu.aliyuncs.com/owl/img/logo.png"
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
                        <router-link v-bind:to="item.href">
                            <span class="span">
                                <i
                                    v-bind:class="item.style"
                                    v-if="item.style !== ''"
                                ></i>
                                {{ item.label }}
                            </span>
                        </router-link>
                    </li>
                    <li class="li" v-if="userId === null">
                        <router-link to="/signin">
                            <span class="span">
                                <i class="el-icon-s-custom"></i>登陆 \ 注册
                            </span>
                        </router-link>
                    </li>
                    <el-dropdown v-if="userId !== null">
                        <li class="li">
                            <router-link to="/user">
                                <span class="span">
                                    <el-avatar
                                        :size="25"
                                        :src="userInfo.profilePhoto"
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
            userId: '',
            searchValue: '',
            userInfo: {},
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
                    label: '消息',
                    style: 'el-icon-chat-round'
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
    },
    mounted() {
        this.userId = sessionStorage.getItem('userId')
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
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
