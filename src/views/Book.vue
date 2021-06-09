<template>
    <div class="book-details">
        <div class="content-wrapper">
            <div class="row-1">
                <div class="row-1-left">
                    <el-carousel>
                        <el-carousel-item
                            v-for="(item, index) in tempImgs"
                            :key="index"
                        >
                            <img style="height: 100%" :src="item" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="row-1-right">
                    <div class="basic-info">
                        <h1 class="title">
                            世界文明5000年：一幅包罗万象的世界文明索引图
                        </h1>
                        <h2 class="profile">
                            包罗全球历史，梳理文明脉络，用时间和空间串起世界文明5000年，以遥远的历史照见当下的世界。
                        </h2>
                    </div>
                    <div class="messbox">
                        <span class="item"
                            >作者:【英】艾玛·玛丽奥特(Emma Marriott)</span
                        >
                        <span class="item">出品出版社:中国友谊出版公司</span>
                        <span class="item">出版时间:2021年02月</span>
                    </div>
                    <div class="price">
                        <div class="col-1">
                            <div class="col-1-left">
                                <p class="discount">
                                    ¥21.00<span>（5折）</span>
                                </p>
                                <p class="origin-price">
                                    定价<span>¥42.00</span>
                                </p>
                            </div>
                            <div class="col-1-right">
                                <img
                                    src="https://img60.ddimg.cn/assets/pc_image/minaAttract-product-price.gif"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="tags flex">
                        <owl-tag class="tag" :height="'22'" :type="'red'"
                            >200减30</owl-tag
                        >
                        <owl-tag class="tag" :height="'22'" :type="'red'"
                            >99减10</owl-tag
                        >
                    </div>
                    <div class="operation">
                        <div class="oper-left">
                            配送至：
                        </div>
                        <div class="oper-right">
                            <div class="item">
                                <el-cascader
                                    size="mini"
                                    v-model="selectedAddress"
                                    :options="location"
                                    @change="handleChange"
                                ></el-cascader>
                            </div>
                        </div>
                    </div>
                    <div class="operation">
                        <div class="oper-left">
                            服务：
                        </div>
                        <div class="oper-right">
                            <div class="item text-gray">
                                由“传智书城”发货，并提供售后服务。
                                {{ formatDate('ch', 'hours') }}
                                前完成下单，预计
                                <span style="font-weight: bold">
                                    {{
                                        formatDate(
                                            'ch',
                                            'day',
                                            1000 * 60 * 60 * 24 * 2
                                        )
                                    }}
                                </span>
                                可送达
                            </div>
                        </div>
                    </div>
                    <div class="operation">
                        <div class="oper-left">
                            数量：
                        </div>
                        <div class="oper-right">
                            <div class="item text-gray">
                                <el-input-number
                                    size="mini"
                                    v-model="num"
                                    :min="1"
                                    :max="99"
                                    label="请选择"
                                ></el-input-number>
                            </div>
                        </div>
                    </div>
                    <el-button type="primary">加入购物车</el-button>
                </div>
            </div>
            <div class="row-2">
                <div class="shop-wrapper">
                    <div class="shop-title">
                        传智书城旗舰店
                    </div>
                    <div class="basic-info">
                        传智9年店
                    </div>
                    <div class="ems-desc">
                        <div class="title">
                            <div>描 述</div>
                            <div>服 务</div>
                            <div>物 流</div>
                        </div>
                        <div class="rate">
                            <div>4.8 -</div>
                            <div>4.8 ↑</div>
                            <div>4.8 ↑</div>
                        </div>
                        <div class="btns">
                            <el-button size="mini">进入店铺</el-button>
                            <el-button size="mini">收藏店铺</el-button>
                        </div>
                    </div>
                </div>
                <div class="comment-wrapper">
                    <ul>
                        <li class="li">全部</li>
                        <li class="li">好评</li>
                        <li class="li">中评</li>
                        <li class="li">差评</li>
                    </ul>
                    <owl-comments :data="comments"></owl-comments>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { utils } from '@/mixin/utils/index.js'

export default {
    name: 'book',
    mixins: [utils],
    data() {
        return {
            num: 1,
            bookId: 0,
            selectedAddress: '',
            location: require('@/static/json/location.json'),
            tempImgs: [
                'http://img3m2.ddimg.cn/26/25/29197502-1_u_7.jpg',
                'http://img3m2.ddimg.cn/26/25/29197502-2_u_8.jpg',
                'http://img3m2.ddimg.cn/26/25/29197502-3_u_8.jpg'
            ],
            comments: [
                {
                    id: 1,
                    user: {
                        username: 'shiramashiro',
                        avatar:
                            'https://owl-town.oss-cn-chengdu.aliyuncs.com/img/head-img%20(3).png',
                        level: 5
                    },
                    postDate: '2020-06-09 16:36:22',
                    content: '评论，评论，评论，评论，评论，评论。',
                    dianzan: 0,
                    cai: 0
                },
                {
                    id: 2,
                    user: {
                        username: 'shiramashiro',
                        avatar:
                            'https://owl-town.oss-cn-chengdu.aliyuncs.com/img/head-img%20(3).jpeg',
                        level: 5
                    },
                    postDate: '2020-06-09 16:36:22',
                    content:
                        '评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论。',
                    dianzan: 0,
                    cai: 0
                },
                {
                    id: 3,
                    user: {
                        username: 'shiramashiro',
                        avatar:
                            'https://owl-town.oss-cn-chengdu.aliyuncs.com/img/head-img%20(3).jpeg',
                        level: 5
                    },
                    postDate: '2020-06-09 16:36:22',
                    content:
                        '评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论，评论。',
                    dianzan: 0,
                    cai: 0
                }
            ]
        }
    },
    methods: {
        handleChange(value) {
            console.log(value)
        }
    },
    created() {
        this.bookId = this.$route.params.bookId
    }
}
</script>

<style lang="scss" scoped>
.book-details {
    margin: 2% 15%;

    .content-wrapper {
        .row-1 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .row-1-left {
                width: 25%;
                border-radius: 4px;
            }

            .row-1-right {
                width: 70%;

                .basic-info {
                    color: #323232;

                    .title {
                        font-size: 18px;
                    }

                    .profile {
                        font-size: 16px;
                        font-weight: normal;
                    }
                }

                .messbox {
                    color: #646464;
                    font-size: 13px;

                    .item {
                        margin-right: 15px;
                    }

                    .item:last-child {
                        margin-right: 0;
                    }
                }

                .price {
                    background-color: rgb(252, 250, 247);
                    margin: 15px 0;
                    height: 143px;

                    .col-1 {
                        display: flex;
                        height: 100%;
                        justify-content: space-between;

                        .col-1-left {
                            margin: 10px 0 10px 10px;

                            p {
                                margin: 5px 0;
                            }

                            .discount {
                                font-size: 26px;
                                color: #e52222;

                                span {
                                    font-size: 13px;
                                }
                            }

                            .origin-price {
                                color: #646464;
                                font-size: 12px;

                                span {
                                    text-decoration: line-through;
                                }
                            }
                        }

                        .col-1-right {
                            img {
                                height: 100%;
                                width: 270px;
                            }
                        }
                    }
                }

                .tags {
                    margin: 12px 0;

                    .tag:first-child {
                        margin-left: 0;
                    }

                    .tag {
                        margin-left: 5px;
                    }
                }

                .operation {
                    display: flex;
                    flex-direction: row;
                    align-content: center;
                    align-items: center;
                    margin-bottom: 20px;

                    .oper-left {
                        color: #969696;
                        font-size: 12px;
                        display: flex;
                    }

                    .oper-right {
                        display: flex;

                        .item {
                            font-size: 13px;
                        }
                    }
                }
            }
        }

        .row-2 {
            margin: 50px 0 0 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .shop-wrapper {
                height: 200px;
                border-radius: 3px;
                margin: 16px 10px 0 0;
                border: 1px solid #e6e6fa;
                width: 19%;

                .shop-title {
                    padding: 5px;
                    background-color: rgb(250, 250, 250);
                    color: #333333;
                    font-weight: 600;
                    font-size: 12px;
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                }

                .basic-info {
                    font-size: 13px;
                    color: #999999;
                    font-weight: 500;
                }

                .basic-info {
                    padding: 10px 35px;
                }

                .ems-desc {
                    font-size: 12px;
                    color: #999;

                    .title,
                    .rate {
                        padding: 10px 20px;
                    }

                    .title {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .rate {
                        color: #ff0036;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                    .btns {
                        margin: 10px 0 0 0;
                        text-align: center;
                        padding: 0 10px;
                    }
                }
            }

            .comment-wrapper {
                width: 81%;

                ul {
                    list-style: none;
                    padding-left: 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-content: center;

                    li {
                        margin-right: 20px;
                        width: 100%;
                        text-align: center;
                        padding: 7px 0;
                        border-radius: 3px;
                        transition: 0.3s;
                        border: 1px solid #e6e6fa;
                    }

                    .li:last-child {
                        margin-right: 0;
                    }

                    .li:hover {
                        background-color: rgb(11, 162, 154);
                        cursor: pointer;
                        transition: 0.3s;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
